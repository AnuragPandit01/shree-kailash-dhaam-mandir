import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Flower2,
  LoaderCircle,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

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

function RegistrationSummary({
  devotee,
  service,
  serviceDetails,
  registrationDate,
  timeSlot,
  additionalDetails,
  onSubmit,
  isSubmitting = false,
  submitError = "",
}) {
  return (
    <form onSubmit={onSubmit}>
      <section className="rounded-2xl border border-[var(--color-gold)]/25 bg-white p-5 shadow-[var(--shadow-sm)] sm:p-7 lg:p-8">
        {/* Section Header */}
        <div className="mb-7 flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-maroon)]/10 text-[var(--color-maroon)]">
            <CheckCircle2
              size={21}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-gold)]">
              चरण 07
            </p>

            <h2 className="heading-section mt-1 text-xl text-[var(--color-maroon)] sm:text-2xl">
              पंजीकरण का विवरण
            </h2>

            <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
              पंजीकरण जमा करने से पहले अपनी दी गई जानकारी की समीक्षा करें।
            </p>
          </div>
        </div>

        {/* Devotee Information */}
        <div className="overflow-hidden rounded-2xl border border-[var(--color-gold)]/20">
          <div className="flex items-center gap-2 border-b border-[var(--color-gold)]/15 bg-[var(--color-cream)]/60 px-4 py-3.5">
            <UserRound
              size={17}
              className="text-[var(--color-maroon)]"
              aria-hidden="true"
            />

            <h3 className="text-sm font-bold text-[var(--color-maroon)]">
              भक्त / आवेदक की जानकारी
            </h3>
          </div>

          <div className="grid gap-x-6 gap-y-4 p-4 sm:grid-cols-2">
            <SummaryItem
              label="नाम"
              value={devotee?.name}
              icon={UserRound}
            />

            <SummaryItem
              label="मोबाइल नंबर"
              value={devotee?.mobile}
              icon={Phone}
            />

            {devotee?.email && (
              <SummaryItem
                label="ईमेल"
                value={devotee.email}
              />
            )}

            {devotee?.address && (
              <SummaryItem
                label="पता"
                value={devotee.address}
                icon={MapPin}
              />
            )}
          </div>
        </div>

        {/* Service Information */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--color-gold)]/20">
          <div className="flex items-center gap-2 border-b border-[var(--color-gold)]/15 bg-[var(--color-cream)]/60 px-4 py-3.5">
            <Flower2
              size={17}
              className="text-[var(--color-maroon)]"
              aria-hidden="true"
            />

            <h3 className="text-sm font-bold text-[var(--color-maroon)]">
              सेवा / अनुष्ठान
            </h3>
          </div>

          <div className="grid gap-x-6 gap-y-4 p-4 sm:grid-cols-2">
            <SummaryItem
              label="चयनित सेवा"
              value={serviceLabels[service] || "—"}
              icon={Flower2}
            />

            {serviceDetails?.preferredDate && (
              <SummaryItem
                label="सेवा की इच्छित तिथि"
                value={formatDate(serviceDetails.preferredDate)}
                icon={CalendarDays}
              />
            )}

            {serviceDetails &&
              Object.entries(serviceDetails)
                .filter(
                  ([key, value]) =>
                    key !== "preferredDate" && value
                )
                .map(([key, value]) => (
                  <SummaryItem
                    key={key}
                    label={getServiceDetailLabel(key)}
                    value={value}
                    icon={FileText}
                  />
                ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--color-gold)]/20">
          <div className="flex items-center gap-2 border-b border-[var(--color-gold)]/15 bg-[var(--color-cream)]/60 px-4 py-3.5">
            <CalendarDays
              size={17}
              className="text-[var(--color-maroon)]"
              aria-hidden="true"
            />

            <h3 className="text-sm font-bold text-[var(--color-maroon)]">
              दिन एवं समय
            </h3>
          </div>

          <div className="grid gap-x-6 gap-y-4 p-4 sm:grid-cols-2">
            <SummaryItem
              label="इच्छित तिथि"
              value={formatDate(registrationDate)}
              icon={CalendarDays}
            />

            <SummaryItem
              label="पसंदीदा समय"
              value={timeLabels[timeSlot] || "—"}
              icon={Clock3}
            />
          </div>
        </div>

        {/* Additional Details */}
        {additionalDetails && (
          <div className="mt-5 overflow-hidden rounded-2xl border border-[var(--color-gold)]/20">
            <div className="flex items-center gap-2 border-b border-[var(--color-gold)]/15 bg-[var(--color-cream)]/60 px-4 py-3.5">
              <FileText
                size={17}
                className="text-[var(--color-maroon)]"
                aria-hidden="true"
              />

              <h3 className="text-sm font-bold text-[var(--color-maroon)]">
                अतिरिक्त जानकारी
              </h3>
            </div>

            <p className="whitespace-pre-wrap p-4 text-sm leading-7 text-[var(--color-ink-light)]">
              {additionalDetails}
            </p>
          </div>
        )}

        {/* Confirmation Note */}
        <div className="mt-6 rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-gold)]/[0.06] p-4">
          <p className="text-sm leading-6 text-[var(--color-ink-light)]">
            कृपया ऊपर दी गई सभी जानकारी ध्यानपूर्वक जांच लें। पंजीकरण
            जमा करने के बाद आपका पंजीकरण मंदिर प्रबंधन को प्राप्त होगा।
            आवश्यक जानकारी एवं उपलब्धता के संबंध में मंदिर प्रबंधन
            द्वारा आपसे संपर्क किया जाएगा।
          </p>
        </div>

        {/* Submit Error */}
        {submitError && (
          <div
            role="alert"
            className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4"
          >
            <p className="text-sm font-semibold leading-6 text-red-700">
              {submitError}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-7 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-maroon)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(107,31,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-maroon-dark)] hover:shadow-[0_12px_25px_rgba(107,31,42,0.24)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-[0_8px_20px_rgba(107,31,42,0.18)] sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                  aria-hidden="true"
                />
                पंजीकरण जमा हो रहा है...
              </>
            ) : (
              <>
                <CheckCircle2
                  size={18}
                  aria-hidden="true"
                />
                पंजीकरण जमा करें
              </>
            )}
          </button>
        </div>
      </section>
    </form>
  );
}

function SummaryItem({
  label,
  value,
  icon: Icon,
}) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold text-[var(--color-muted)]">
        {label}
      </p>

      <div className="mt-1 flex items-start gap-2">
        {Icon && (
          <Icon
            size={15}
            className="mt-1 shrink-0 text-[var(--color-gold)]"
            aria-hidden="true"
          />
        )}

        <p className="break-words text-sm font-semibold leading-6 text-[var(--color-ink)]">
          {value || "—"}
        </p>
      </div>
    </div>
  );
}

function getServiceDetailLabel(key) {
  const labels = {
    brideName: "वधू का नाम",
    groomName: "वर का नाम",
    childName: "बालक / बालिका का नाम",
    guardianName: "अभिभावक का नाम",
    pujaPurpose: "पूजा का उद्देश्य",
    ritualName: "अनुष्ठान का नाम",
  };

  return labels[key] || key;
}

export default RegistrationSummary;