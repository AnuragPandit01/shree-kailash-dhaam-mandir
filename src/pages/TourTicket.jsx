
import { useState } from "react";
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
} from "lucide-react";

const initialForm = {
  date: "",
  visitors: "1",
  name: "",
  mobile: "",
  email: "",
};

const fieldClass =
  "w-full rounded-xl border border-[#e6dccd] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a2630] focus:ring-2 focus:ring-[#8a2630]/10";

export default function TourTicket() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    setForm((old) => ({ ...old, [field]: value }));
    setErrors((old) => ({ ...old, [field]: "" }));
    setSubmitted(false);
  };

  const submit = (event) => {
    event.preventDefault();

    const next = {};
    if (!form.date) next.date = "कृपया भ्रमण की तारीख चुनें।";
    if (!form.name.trim()) next.name = "कृपया अपना नाम दर्ज करें।";
    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      next.mobile = "कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "कृपया सही ईमेल पता दर्ज करें।";
    }

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  const minDate = new Date().toLocaleDateString("en-CA");

  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#43231f]">
      <section className="bg-[#4b111d]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <Link
            to="/tourism"
            className="inline-flex items-center gap-2 text-sm text-[#e8c77f] hover:text-white"
          >
            <ArrowLeft size={17} /> पर्यटन पृष्ठ पर वापस जाएँ
          </Link>
          <p className="mt-6 text-sm font-semibold text-[#e8c77f]">
            मंदिर पर्यटन
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#fff5e4] sm:text-4xl">
            मंदिर भ्रमण टिकट
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#f2dfce] sm:text-base">
            भूमि तल और चारों ऊपरी तल के भ्रमण के लिए एक ही टूर टिकट
            का अनुरोध करें।
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
        <form
          onSubmit={submit}
          noValidate
          className="space-y-6 rounded-2xl border border-[#e8ddca] bg-white p-5 sm:p-7"
        >
          <div className="flex items-center gap-3">
            <Ticket size={25} className="text-[#9a642a]" />
            <div>
              <h2 className="text-xl font-bold">टिकट अनुरोध विवरण</h2>
              <p className="mt-1 text-sm text-[#806f62]">
                सभी आवश्यक जानकारी भरें।
              </p>
            </div>
          </div>

          {submitted && (
            <div role="status" className="rounded-xl border border-[#dfc58f] bg-[#fff8e8] p-4 text-sm leading-7 text-[#67431f]">
              <CheckCircle2 size={20} className="mb-2 inline" />{" "}
              आपका विवरण जाँच के लिए तैयार है। यह केवल स्थानीय नमूना है;
              अनुरोध सर्वर पर जमा नहीं हुआ है और टिकट की पुष्टि नहीं हुई है।
            </div>
          )}

          <div>
            <label htmlFor="tour-date" className="mb-2 block text-sm font-semibold">
              भ्रमण की पसंदीदा तारीख <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <CalendarDays size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#968475]" />
              <input
                id="tour-date"
                type="date"
                min={minDate}
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className={`${fieldClass} pl-10`}
              />
            </div>
            {errors.date && <p className="mt-1 text-xs text-red-700">{errors.date}</p>}
          </div>

          <div>
            <label htmlFor="tour-visitors" className="mb-2 block text-sm font-semibold">
              कुल आगंतुक <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Users size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#968475]" />
              <select
                id="tour-visitors"
                value={form.visitors}
                onChange={(e) => update("visitors", e.target.value)}
                className={`${fieldClass} pl-10`}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "आगंतुक" : "आगंतुक"}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="tour-name" className="mb-2 block text-sm font-semibold">
              संपर्क व्यक्ति का नाम <span className="text-red-600">*</span>
            </label>
            <input
              id="tour-name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="पूरा नाम"
              className={fieldClass}
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
              onChange={(e) => update("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="10 अंकों का मोबाइल नंबर"
              className={fieldClass}
            />
            {errors.mobile && <p className="mt-1 text-xs text-red-700">{errors.mobile}</p>}
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
              onChange={(e) => update("email", e.target.value)}
              placeholder="name@example.com"
              className={fieldClass}
            />
            {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7b1b26] px-5 py-3.5 font-bold text-white transition hover:bg-[#5f111c]"
          >
            विवरण जाँचें <ArrowRight size={18} />
          </button>
          <p className="text-xs leading-6 text-[#89796a]">
            वास्तविक बुकिंग, टिकट शुल्क, उपलब्धता, भुगतान और पुष्टि
            के लिए सर्वर एवं प्रशासनिक प्रणाली का एकीकरण आवश्यक है।
          </p>
        </form>

        <aside className="space-y-5">
          <div className="rounded-2xl bg-[#4b111d] p-6 text-[#fff5e4]">
            <Ticket size={28} className="text-[#e8c77f]" />
            <h2 className="mt-4 text-xl font-bold">एक टिकट, पाँच स्तर</h2>
            <p className="mt-3 text-sm leading-7 text-[#f2dfce]">
              प्रस्तावित टूर में भूमि तल तथा प्रथम, द्वितीय, तृतीय और
              चतुर्थ तल शामिल हैं।
            </p>
            <div className="mt-5 border-t border-white/15 pt-4">
              <p className="text-sm text-[#e8c77f]">टिकट शुल्क</p>
              <p className="mt-1 text-sm leading-6">
                मंदिर प्रशासन द्वारा निर्धारित किया जाना है।
              </p>
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
                टिकट अनुरोध भेजना प्रवेश की गारंटी नहीं है।
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0 text-[#9a642a]" />
                खटंगिया, दौना रोड, जसरा, प्रयागराज, उत्तर प्रदेश।
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
