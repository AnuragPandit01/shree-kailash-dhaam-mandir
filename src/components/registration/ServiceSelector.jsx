import {
  CalendarHeart,
  Flower2,
  Scissors,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: "marriage",
    label: "विवाह संस्कार",
    description: "विवाह से संबंधित धार्मिक संस्कार एवं अनुष्ठान",
    icon: CalendarHeart,
  },
  {
    id: "mundan",
    label: "मुंडन संस्कार",
    description: "बालक के मुंडन संस्कार के लिए पंजीकरण",
    icon: Scissors,
  },
  {
    id: "special-puja",
    label: "विशेष पूजा",
    description: "विशेष अवसर एवं संकल्प के लिए पूजा",
    icon: Flower2,
  },
  {
    id: "other",
    label: "अन्य धार्मिक अनुष्ठान",
    description: "अन्य धार्मिक सेवा या अनुष्ठान के लिए",
    icon: Sparkles,
  },
];

function ServiceSelector({ value, onChange }) {
  return (
    <section className="rounded-2xl border border-[var(--color-gold)]/20 bg-white p-5 shadow-[var(--shadow-sm)] sm:p-7 lg:p-8">
      {/* Section Header */}
      <div className="mb-7 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-maroon)]/10 text-[var(--color-maroon)]">
          <Flower2
            size={21}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-gold)]">
            चरण 02
          </p>

          <h2 className="heading-section mt-1 text-xl text-[var(--color-maroon)] sm:text-2xl">
            सेवा / अनुष्ठान चुनें
          </h2>

          <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
            जिस धार्मिक सेवा के लिए पंजीकरण करना चाहते हैं, उसका चयन करें।
          </p>
        </div>
      </div>

      {/* Service Options */}
      <fieldset>
        <legend className="sr-only">
          धार्मिक सेवा का चयन करें
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            const isSelected = value === service.id;

            return (
              <label
                key={service.id}
                className={[
                  "group relative cursor-pointer rounded-2xl border p-5 transition-all duration-300",
                  isSelected
                    ? "border-[var(--color-maroon)] bg-[var(--color-maroon)]/[0.04] shadow-[var(--shadow-sm)]"
                    : "border-[var(--color-gold)]/20 bg-[var(--color-cream)]/30 hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-cream)]/60",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="service"
                  value={service.id}
                  checked={isSelected}
                  onChange={() => onChange(service.id)}
                  className="sr-only"
                />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={[
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                      isSelected
                        ? "bg-[var(--color-maroon)] text-white"
                        : "bg-[var(--color-gold)]/10 text-[var(--color-maroon)] group-hover:bg-[var(--color-gold)]/20",
                    ].join(" ")}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className={[
                        "text-base font-bold transition-colors",
                        isSelected
                          ? "text-[var(--color-maroon)]"
                          : "text-[var(--color-ink)]",
                      ].join(" ")}
                    >
                      {service.label}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
                      {service.description}
                    </p>
                  </div>

                  {/* Selection Indicator */}
                  <span
                    className={[
                      "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                      isSelected
                        ? "border-[var(--color-maroon)] bg-[var(--color-maroon)]"
                        : "border-[var(--color-gold)]/40 bg-white",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {isSelected && (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Required Note */}
      <p className="mt-5 text-xs text-[var(--color-muted)]">
        <span className="mr-1 text-red-600">*</span>
        कृपया एक सेवा का चयन करें।
      </p>
    </section>
  );
}

export default ServiceSelector;