import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Info,
  MapPin,
  Ticket,
  Users,
  Download,
  LoaderCircle,
} from "lucide-react";
import generateTourTicketPDF from "../utils/generateTourTicketPDF";

const TICKET_PRICE = 50;
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

const initialForm = {
  date: "",
  visitors: "1",
  name: "",
  mobile: "",
  email: "",
};

const fieldClass =
  "w-full rounded-xl border border-[#e6dccd] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a2630] focus:ring-2 focus:ring-[#8a2630]/10";

function getTodayLocalDate() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function formatDate(dateString) {
  if (!dateString) return "—";
  return new Date(`${dateString}T00:00:00`).toLocaleDateString("hi-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function TourTicket() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [booking, setBooking] = useState(null);
  const [paymentState, setPaymentState] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const ticketRef = useRef(null);

  const visitorCount = Number(form.visitors);
  const totalAmount = visitorCount * TICKET_PRICE;
  const minDate = useMemo(() => getTodayLocalDate(), []);

  const update = (field, value) => {
    setForm((old) => ({ ...old, [field]: value }));
    setErrors((old) => ({ ...old, [field]: "" }));
    if (paymentState !== "success") {
      setStatusMessage("");
      setPaymentState("idle");
    }
  };

  const validate = () => {
    const next = {};

    if (!form.date) {
      next.date = "कृपया भ्रमण की तारीख चुनें।";
    } else if (form.date < minDate) {
      next.date = "कृपया आज या उसके बाद की तारीख चुनें।";
    }

    if (!form.name.trim()) {
      next.name = "कृपया अपना नाम दर्ज करें।";
    }

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      next.mobile = "कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।";
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "कृपया सही ईमेल पता दर्ज करें।";
    }

    if (!Number.isInteger(visitorCount) || visitorCount < 1 || visitorCount > 20) {
      next.visitors = "कृपया 1 से 20 तक आगंतुकों की संख्या चुनें।";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const beginPayment = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setPaymentState("creating-order");
    setStatusMessage("बुकिंग विवरण सुरक्षित किए जा रहे हैं…");

    try {
      // The server must calculate the price and create a pending booking/order.
      const orderResponse = await fetch(`${API_BASE_URL}/api/tourism/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitDate: form.date,
          visitorCount,
          contactName: form.name.trim(),
          mobile: form.mobile,
          email: form.email.trim() || undefined,
        }),
      });

      const orderData = await orderResponse.json().catch(() => ({}));
      if (!orderResponse.ok) {
        throw new Error(orderData.message || "बुकिंग ऑर्डर नहीं बनाया जा सका।");
      }

      if (!orderData.orderId || !orderData.keyId || !orderData.bookingId) {
        throw new Error("सर्वर से भुगतान ऑर्डर का सही विवरण नहीं मिला।");
      }

      const loaded = await loadRazorpay();
      if (!loaded) {
        throw new Error("Razorpay भुगतान विंडो लोड नहीं हो सकी। कृपया पुनः प्रयास करें।");
      }

      setPaymentState("payment-open");
      setStatusMessage("भुगतान विंडो खुल रही है…");

      const razorpay = new window.Razorpay({
        key: orderData.keyId,
        order_id: orderData.orderId,
        amount: orderData.amount ?? totalAmount * 100,
        currency: orderData.currency || "INR",
        name: "Shree Kailash Dhaam Mandir",
        description: `मंदिर भ्रमण टिकट — ${visitorCount} आगंतुक`,
        prefill: {
          name: form.name.trim(),
          contact: form.mobile,
          email: form.email.trim(),
        },
        notes: {
          bookingId: orderData.bookingId,
          visitDate: form.date,
          visitorCount: String(visitorCount),
        },
        theme: { color: "#7b1b26" },
        modal: {
          ondismiss: () => {
            setPaymentState("idle");
            setStatusMessage("भुगतान पूरा नहीं हुआ। आप चाहें तो पुनः प्रयास कर सकते हैं।");
          },
        },
        handler: async (response) => {
          setPaymentState("verifying");
          setStatusMessage("भुगतान की पुष्टि की जा रही है…");

          try {
            // Do not mark the booking paid in the browser. The backend must verify
            // the Razorpay signature and payment/order status before issuing a ticket.
            const verifyResponse = await fetch(
              `${API_BASE_URL}/api/tourism/verify-payment`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  bookingId: orderData.bookingId,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              }
            );

            const verifyData = await verifyResponse.json().catch(() => ({}));
            if (!verifyResponse.ok || verifyData.verified !== true || !verifyData.ticketNumber) {
              throw new Error(
                verifyData.message ||
                  "भुगतान की पुष्टि अभी नहीं हो सकी। कृपया भुगतान संदर्भ के साथ मंदिर प्रशासन से संपर्क करें।"
              );
            }

            setBooking({
              bookingId: verifyData.bookingId || orderData.bookingId,
              ticketNumber: verifyData.ticketNumber,
              paymentId: verifyData.paymentId || response.razorpay_payment_id,
              visitDate: verifyData.visitDate || form.date,
              visitorCount: Number(verifyData.visitorCount ?? visitorCount),
              contactName: verifyData.contactName || form.name.trim(),
              mobile: verifyData.mobile || form.mobile,
              email: verifyData.email ?? form.email.trim(),
              amount: Number(verifyData.amount ?? totalAmount),
              currency: verifyData.currency || "INR",
              paymentStatus: "सफल",
            });
            setPaymentState("success");
            setStatusMessage("भुगतान सफल और टिकट की पुष्टि हो गई है। नीचे से टिकट डाउनलोड करें।");
          } catch (error) {
            setPaymentState("verification-error");
            setStatusMessage(
              error.message ||
                "भुगतान की पुष्टि नहीं हो सकी। दोबारा भुगतान करने से पहले कृपया प्रशासन से संपर्क करें।"
            );
          }
        },
      });

      razorpay.on("payment.failed", (response) => {
        setPaymentState("idle");
        setStatusMessage(
          response?.error?.description ||
            "भुगतान असफल रहा। कृपया पुनः प्रयास करें।"
        );
      });

      razorpay.open();
    } catch (error) {
      setPaymentState("error");
      setStatusMessage(
        error.message ||
          "बुकिंग शुरू नहीं हो सकी। कृपया सर्वर कनेक्शन जाँचकर पुनः प्रयास करें।"
      );
    }
  };

  const downloadTicket = async () => {
    if (!booking || paymentState !== "success" || !ticketRef.current) return;

    setIsDownloading(true);
    try {
      await generateTourTicketPDF(ticketRef.current, booking.ticketNumber);
    } catch (error) {
      setStatusMessage(
        error.message || "टिकट PDF तैयार नहीं हो सकी। कृपया पुनः प्रयास करें।"
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const isBusy = [
    "creating-order",
    "payment-open",
    "verifying",
  ].includes(paymentState);

  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#43231f]">
      <section className="bg-[#4b111d]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Link
            to="/tourism"
            className="inline-flex items-center gap-2 text-sm text-[#e8c77f] hover:text-white"
          >
            <ArrowLeft size={17} />
            पर्यटन पृष्ठ पर वापस जाएँ
          </Link>

          <p className="mt-6 text-sm font-semibold text-[#e8c77f]">मंदिर पर्यटन</p>
          <h1 className="mt-2 text-3xl font-bold text-[#fff5e4] sm:text-4xl">
            मंदिर भ्रमण टिकट
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#f2dfce] sm:text-base">
            भूमि तल और चारों ऊपरी तल के भ्रमण के लिए एक ही टूर टिकट।
            टिकट शुल्क ₹50 प्रति व्यक्ति है।
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
        <form
          onSubmit={beginPayment}
          noValidate
          className="space-y-6 rounded-2xl border border-[#e8ddca] bg-white p-5 sm:p-7"
        >
          <div className="flex items-center gap-3">
            <Ticket size={25} className="text-[#9a642a]" />
            <div>
              <h2 className="text-xl font-bold">टिकट बुकिंग विवरण</h2>
              <p className="mt-1 text-sm text-[#806f62]">
                जानकारी भरें और सुरक्षित भुगतान करें।
              </p>
            </div>
          </div>

          {statusMessage && (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-xl border p-4 text-sm leading-7 ${
                paymentState === "success"
                  ? "border-green-200 bg-green-50 text-green-900"
                  : paymentState === "error" ||
                    paymentState === "verification-error"
                  ? "border-red-200 bg-red-50 text-red-800"
                  : "border-[#dfc58f] bg-[#fff8e8] text-[#67431f]"
              }`}
            >
              {paymentState === "success" ? (
                <CheckCircle2 size={20} className="mb-2 inline" />
              ) : isBusy ? (
                <LoaderCircle size={18} className="mr-2 inline animate-spin" />
              ) : (
                <Info size={18} className="mr-2 inline" />
              )}{" "}
              {statusMessage}
            </div>
          )}

          <div>
            <label htmlFor="tour-date" className="mb-2 block text-sm font-semibold">
              भ्रमण की पसंदीदा तारीख <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <CalendarDays
                size={17}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#968475]"
              />
              <input
                id="tour-date"
                type="date"
                min={minDate}
                required
                value={form.date}
                disabled={isBusy || paymentState === "success"}
                onChange={(e) => update("date", e.target.value)}
                className={`${fieldClass} pl-10 disabled:bg-gray-100`}
              />
            </div>
            {errors.date && <p className="mt-1 text-xs text-red-700">{errors.date}</p>}
          </div>

          <div>
            <label htmlFor="tour-visitors" className="mb-2 block text-sm font-semibold">
              कुल आगंतुक <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Users
                size={17}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#968475]"
              />
              <select
                id="tour-visitors"
                value={form.visitors}
                disabled={isBusy || paymentState === "success"}
                onChange={(e) => update("visitors", e.target.value)}
                className={`${fieldClass} pl-10 disabled:bg-gray-100`}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "आगंतुक" : "आगंतुक"}
                  </option>
                ))}
              </select>
            </div>
            {errors.visitors && (
              <p className="mt-1 text-xs text-red-700">{errors.visitors}</p>
            )}
            <p className="mt-2 text-xs leading-6 text-[#806f62]">
              प्रत्येक आगंतुक के लिए एक टिकट आवश्यक है।
            </p>
          </div>

          <div>
            <label htmlFor="tour-name" className="mb-2 block text-sm font-semibold">
              संपर्क व्यक्ति का नाम <span className="text-red-600">*</span>
            </label>
            <input
              id="tour-name"
              autoComplete="name"
              value={form.name}
              disabled={isBusy || paymentState === "success"}
              onChange={(e) => update("name", e.target.value)}
              placeholder="पूरा नाम"
              className={`${fieldClass} disabled:bg-gray-100`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="tour-mobile" className="mb-2 block text-sm font-semibold">
              मोबाइल नंबर <span className="text-red-600">*</span>
            </label>
            <input
              id="tour-mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              value={form.mobile}
              disabled={isBusy || paymentState === "success"}
              onChange={(e) =>
                update("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              placeholder="10 अंकों का मोबाइल नंबर"
              className={`${fieldClass} disabled:bg-gray-100`}
            />
            {errors.mobile && (
              <p className="mt-1 text-xs text-red-700">{errors.mobile}</p>
            )}
          </div>

          <div>
            <label htmlFor="tour-email" className="mb-2 block text-sm font-semibold">
              ईमेल पता <span className="text-[#968475]">(वैकल्पिक)</span>
            </label>
            <input
              id="tour-email"
              type="email"
              autoComplete="email"
              value={form.email}
              disabled={isBusy || paymentState === "success"}
              onChange={(e) => update("email", e.target.value)}
              placeholder="name@example.com"
              className={`${fieldClass} disabled:bg-gray-100`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-700">{errors.email}</p>
            )}
          </div>

          <div className="rounded-xl border border-[#e8ddca] bg-[#fbf7ef] p-5">
            <h3 className="font-bold">टिकट शुल्क विवरण</h3>
            <div className="mt-4 flex items-center justify-between gap-4 text-sm">
              <span className="text-[#806f62]">प्रति व्यक्ति शुल्क</span>
              <span className="font-semibold">₹50</span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 text-sm">
              <span className="text-[#806f62]">कुल आगंतुक</span>
              <span className="font-semibold">{visitorCount}</span>
            </div>
            <div className="my-4 h-px bg-[#e8ddca]" />
            <div className="flex items-center justify-between gap-4">
              <span className="font-bold">कुल टिकट शुल्क</span>
              <span className="text-2xl font-bold text-[#7b1b26]">₹{totalAmount}</span>
            </div>
          </div>

          {paymentState === "success" && booking ? (
            <button
              type="button"
              onClick={downloadTicket}
              disabled={isDownloading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7b1b26] px-5 py-3.5 font-bold text-white transition hover:bg-[#5f111c] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isDownloading ? (
                <LoaderCircle size={18} className="animate-spin" />
              ) : (
                <Download size={18} />
              )}
              {isDownloading ? "टिकट तैयार हो रहा है…" : "टिकट डाउनलोड करें"}
            </button>
          ) : (
            <button
              type="submit"
              disabled={isBusy}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7b1b26] px-5 py-3.5 font-bold text-white transition hover:bg-[#5f111c] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isBusy ? (
                <>
                  <LoaderCircle size={18} className="animate-spin" />
                  कृपया प्रतीक्षा करें…
                </>
              ) : (
                <>
                  भुगतान करें — ₹{totalAmount}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          )}

          <p className="text-xs leading-6 text-[#89796a]">
            टिकट केवल सर्वर द्वारा भुगतान की पुष्टि के बाद जारी होगा। भुगतान विंडो बंद
            होने या नेटवर्क समस्या आने पर दोबारा भुगतान करने से पहले भुगतान की स्थिति
            जाँचें।
          </p>
        </form>

        <aside className="space-y-5">
          <div className="rounded-2xl bg-[#4b111d] p-6 text-[#fff5e4]">
            <Ticket size={28} className="text-[#e8c77f]" />
            <h2 className="mt-4 text-xl font-bold">एक टिकट, पाँच स्तर</h2>
            <p className="mt-3 text-sm leading-7 text-[#f2dfce]">
              प्रस्तावित टूर में भूमि तल तथा प्रथम, द्वितीय, तृतीय और चतुर्थ तल शामिल हैं।
            </p>
            <div className="mt-5 border-t border-white/15 pt-4">
              <p className="text-sm text-[#e8c77f]">टिकट शुल्क</p>
              <p className="mt-1 text-3xl font-bold">₹50</p>
              <p className="mt-1 text-sm text-[#f2dfce]">प्रति व्यक्ति</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e8ddca] bg-white p-5">
            <h3 className="font-bold">महत्वपूर्ण जानकारी</h3>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[#806f62]">
              <p className="flex items-start gap-2">
                <Clock3 size={18} className="mt-1 shrink-0 text-[#9a642a]" />
                भ्रमण समय एवं उपलब्धता की पुष्टि आवश्यक है।
              </p>
              <p className="flex items-start gap-2">
                <Info size={18} className="mt-1 shrink-0 text-[#9a642a]" />
                टिकट जारी होने के बाद ही बुकिंग की पुष्टि मानी जाएगी।
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0 text-[#9a642a]" />
                खटंगिया, दौना रोड, जसरा, प्रयागराज, उत्तर प्रदेश।
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* Keep this ticket in the DOM but outside the visible viewport for PDF capture. */}
      {booking && paymentState === "success" && (
        <div className="pointer-events-none fixed left-[-10000px] top-0 z-[-1]">
          <article
            ref={ticketRef}
            className="relative box-border h-[1123px] w-[794px] overflow-hidden bg-[#fffdf8] p-[54px] text-[#43231f]"
            style={{ fontFamily: "Arial, Noto Sans Devanagari, sans-serif" }}
          >
            <div className="absolute inset-[22px] border-2 border-[#9a642a]" />
            <div className="relative flex h-full flex-col border border-[#e6d4b2] p-8">
              <div className="text-center">
                <p className="text-[17px] font-bold tracking-wide text-[#9a642a]">
                  श्री कैलाश धाम मंदिर
                </p>
                <h2 className="mt-4 text-[34px] font-bold text-[#7b1b26]">
                  मंदिर भ्रमण टिकट
                </h2>
                <p className="mt-3 text-[16px] text-[#806f62]">
                  खटंगिया, दौना रोड, जसरा, प्रयागराज, उत्तर प्रदेश
                </p>
              </div>

              <div className="my-8 border-t-2 border-dashed border-[#d8c29c]" />

              <div className="rounded-xl bg-[#f7efe0] p-6">
                <p className="text-[14px] font-semibold text-[#806f62]">टिकट नंबर</p>
                <p className="mt-2 break-words text-[28px] font-bold text-[#7b1b26]">
                  {booking.ticketNumber}
                </p>
                <p className="mt-2 text-[14px] text-[#806f62]">
                  भुगतान स्थिति: {booking.paymentStatus}
                </p>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-7 text-[17px]">
                <div>
                  <p className="text-[13px] text-[#806f62]">भ्रमण की तारीख</p>
                  <p className="mt-2 font-bold">{formatDate(booking.visitDate)}</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#806f62]">कुल आगंतुक</p>
                  <p className="mt-2 font-bold">{booking.visitorCount}</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#806f62]">संपर्क व्यक्ति</p>
                  <p className="mt-2 font-bold">{booking.contactName}</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#806f62]">मोबाइल नंबर</p>
                  <p className="mt-2 font-bold">{booking.mobile}</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#806f62]">प्रति व्यक्ति शुल्क</p>
                  <p className="mt-2 font-bold">₹50</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#806f62]">कुल भुगतान</p>
                  <p className="mt-2 text-[24px] font-bold text-[#7b1b26]">
                    ₹{booking.amount}
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-xl border border-[#e6d4b2] p-5">
                <p className="text-[14px] text-[#806f62]">भुगतान संदर्भ</p>
                <p className="mt-2 break-all text-[15px] font-semibold">
                  {booking.paymentId}
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-[19px] font-bold text-[#7b1b26]">
                  इस टिकट में शामिल
                </h3>
                <p className="mt-3 text-[16px] leading-8">
                  यह टिकट भूमि तल, प्रथम तल, द्वितीय तल, तृतीय तल और चतुर्थ तल सहित
                  मंदिर के सभी पाँच स्तरों के भ्रमण के लिए है।
                </p>
              </div>

              <div className="mt-auto border-t border-[#e6d4b2] pt-5 text-center">
                <p className="text-[14px] font-semibold text-[#7b1b26]">
                  श्री कैलाश धाम मंदिर
                </p>
                <p className="mt-2 text-[12px] leading-6 text-[#806f62]">
                  कृपया भ्रमण के समय यह टिकट साथ रखें। प्रवेश एवं भ्रमण संबंधी
                  निर्देशों के लिए मंदिर प्रशासन के नियम लागू होंगे।
                </p>
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}