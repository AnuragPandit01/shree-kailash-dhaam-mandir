import { useRef, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Copy,
  Download,
  Flower2,
  Home,
  Printer,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import RegistrationReceipt from "./RegistrationReceipt";
import generateRegistrationPDF from "../../utils/generateRegistrationPDF";

const serviceLabels = {
  marriage: "विवाह संस्कार",
  mundan: "मुंडन संस्कार",
  "special-puja": "विशेष पूजा",
  other: "अन्य धार्मिक अनुष्ठान",
};

const timeLabels = {
  morning: "प्रातःकाल",
  afternoon: "दोपहर",
  evening: "सायंकाल",
};

function formatDate(date) {
  if (!date) return "—";

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("hi-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

function RegistrationSuccess({ registration }) {
  if (!registration) {
    return null;
  }

  const receiptRef = useRef(null);

  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [pdfError, setPdfError] = useState("");

  const serviceLabel =
    serviceLabels[registration.service] ||
    registration.service ||
    "—";

  const dateLabel = formatDate(
    registration.preferredDate
  );

  const timeLabel =
    timeLabels[registration.timeSlot] ||
    registration.timeSlot ||
    "—";

  const copyRegistrationNumber = async () => {
    try {
      await navigator.clipboard.writeText(
        registration.registrationNumber
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error(
        "Registration number copy failed:",
        error
      );

      setCopied(false);
    }
  };

  const handleDownload = async () => {
    setPdfError("");
    setDownloading(true);

    try {
      await generateRegistrationPDF(
        receiptRef.current,
        registration.registrationNumber
      );
    } catch (error) {
      console.error("PDF generation failed:", error);

      setPdfError(
        "PDF तैयार नहीं हो सका। कृपया दोबारा प्रयास करें।"
      );
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="bg-[var(--color-cream)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-[var(--color-gold)]/25 bg-white p-6 shadow-[var(--shadow-md)] sm:p-10 lg:p-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

            {/* Success Icon */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-700/20 bg-emerald-50 text-emerald-700">
              <CheckCircle2
                size={44}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            {/* Heading */}
            <p className="text-sm font-semibold tracking-wide text-[var(--color-saffron)]">
              पंजीकरण सफलतापूर्वक प्राप्त हुआ
            </p>

            <h1 className="heading-section mt-2 text-3xl text-[var(--color-maroon-dark)] sm:text-5xl">
              पंजीकरण पूर्ण
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-ink)]/70 sm:text-lg">
              आपका पंजीकरण हमारे पास सुरक्षित रूप से प्राप्त हो गया है।
              मंदिर प्रबंधन आपके आवेदन की समीक्षा करके आवश्यक जानकारी के
              लिए आपसे संपर्क करेगा।
            </p>

            {/* Registration Number */}
            <div className="mt-8 w-full rounded-2xl border border-[var(--color-gold)]/35 bg-[var(--color-cream)] p-6 sm:p-8">
              <p className="text-sm font-medium text-[var(--color-ink)]/65">
                आपकी पंजीकरण संख्या
              </p>

              <div className="mt-3 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <strong className="font-mono text-2xl tracking-wide text-[var(--color-maroon-dark)] sm:text-3xl">
                  {registration.registrationNumber}
                </strong>

                <button
                  type="button"
                  onClick={copyRegistrationNumber}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-gold)]/40 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-maroon-dark)] transition hover:border-[var(--color-gold)]"
                >
                  <Copy
                    size={16}
                    aria-hidden="true"
                  />

                  {copied
                    ? "कॉपी हो गया"
                    : "कॉपी करें"}
                </button>
              </div>
            </div>

            {/* Registration Summary */}
            <div className="mt-6 grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Info
                label="भक्त का नाम"
                value={registration.name}
                icon={UserRound}
              />

              <Info
                label="चयनित सेवा"
                value={serviceLabel}
                icon={Flower2}
              />

              <Info
                label="इच्छित तिथि"
                value={dateLabel}
                icon={CalendarDays}
              />

              <Info
                label="समय"
                value={timeLabel}
                icon={Clock3}
              />
            </div>

            {/* Status */}
            <div className="mt-6 w-full rounded-2xl border border-emerald-800/15 bg-emerald-50/70 p-5 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-emerald-700"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-sm font-semibold text-emerald-900">
                    स्थिति
                  </p>

                  <p className="mt-1 text-base font-bold text-emerald-950">
                    पंजीकरण पूर्ण
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm leading-7 text-emerald-950/75">
                आपका पंजीकरण मंदिर प्रबंधन को प्राप्त हो गया है।
                आवश्यक जानकारी एवं उपलब्धता के संबंध में मंदिर
                प्रबंधन द्वारा आपसे संपर्क किया जाएगा।
              </p>
            </div>

            {/* Important Information */}
            <div className="mt-4 w-full rounded-2xl border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/[0.06] p-5 text-left">
              <p className="text-sm font-semibold text-[var(--color-maroon)]">
                महत्वपूर्ण सूचना
              </p>

              <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]/70">
                कृपया अपनी पंजीकरण संख्या सुरक्षित रखें। यह आपके
                पंजीकरण की पहचान के लिए उपयोगी होगी। तिथि, समय एवं
                अनुष्ठान से संबंधित आवश्यक जानकारी के लिए मंदिर
                प्रबंधन आपसे संपर्क करेगा।
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--color-maroon-dark)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--color-maroon)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Download
                  size={19}
                  aria-hidden="true"
                />

                {downloading
                  ? "PDF तैयार हो रहा है..."
                  : "PDF डाउनलोड करें"}
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--color-gold)]/50 bg-white px-5 py-3 font-semibold text-[var(--color-maroon-dark)] transition hover:bg-[var(--color-cream)]"
              >
                <Printer
                  size={19}
                  aria-hidden="true"
                />

                प्रिंट करें
              </button>

              <Link
                to="/"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--color-maroon-dark)]/15 bg-white px-5 py-3 font-semibold text-[var(--color-maroon-dark)] transition hover:bg-[var(--color-cream)]"
              >
                <Home
                  size={19}
                  aria-hidden="true"
                />

                मुख्य पृष्ठ
              </Link>
            </div>

            {/* PDF Error */}
            {pdfError && (
              <p
                className="mt-4 text-sm font-medium text-red-700"
                role="alert"
              >
                {pdfError}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Hidden A4 receipt used for PDF generation */}
      <RegistrationReceipt
        registration={registration}
        receiptRef={receiptRef}
      />
    </section>
  );
}

function Info({ label, value, icon: Icon }) {
  return (
    <div className="rounded-xl border border-[var(--color-gold)]/15 bg-white p-4 text-left">
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon
            size={15}
            className="text-[var(--color-gold)]"
            aria-hidden="true"
          />
        )}

        <p className="text-xs font-medium text-[var(--color-ink)]/55">
          {label}
        </p>
      </div>

      <p className="mt-1 font-semibold text-[var(--color-maroon-dark)]">
        {value || "—"}
      </p>
    </div>
  );
}

export default RegistrationSuccess;