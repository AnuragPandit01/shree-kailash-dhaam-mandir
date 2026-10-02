import { Clock3 } from "lucide-react";

const timeSlots = [
  {
    id: "morning",
    label: "प्रातःकाल",
    time: "प्रातः समय",
  },
  {
    id: "afternoon",
    label: "दोपहर",
    time: "दोपहर का समय",
  },
  {
    id: "evening",
    label: "सायंकाल",
    time: "सायंकाल का समय",
  },
];

function TimeSlotSelector({ value, onChange }) {
  return (
    <section className="rounded-2xl border border-[var(--color-gold)]/20 bg-white p-5 shadow-[var(--shadow-sm)] sm:p-7 lg:p-8">
      {/* Section Header */}
      <div className="mb-7 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-maroon)]/10 text-[var(--color-maroon)]">
          <Clock3
            size={21}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-gold)]">
            चरण 05
          </p>

          <h2 className="heading-section mt-1 text-xl text-[var(--color-maroon)] sm:text-2xl">
            समय चुनें
          </h2>

          <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
            अपनी सुविधानुसार अनुष्ठान के लिए पसंदीदा समय चुनें।
          </p>
        </div>
      </div>

      {/* Time Slots */}
      <fieldset>
        <legend className="mb-4 text-sm font-bold text-[var(--color-ink)]">
          पसंदीदा समय
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        </legend>

        <div className="grid gap-4 sm:grid-cols-3">
          {timeSlots.map((slot) => {
            const isSelected = value === slot.id;

            return (
              <label
                key={slot.id}
                className={[
                  "group relative cursor-pointer rounded-2xl border p-5 transition-all duration-300",
                  isSelected
                    ? "border-[var(--color-maroon)] bg-[var(--color-maroon)]/[0.04] shadow-[var(--shadow-sm)]"
                    : "border-[var(--color-gold)]/20 bg-[var(--color-cream)]/30 hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-cream)]/60",
                ].join(" ")}
              >
                <input
                  type="radio"
                  name="timeSlot"
                  value={slot.id}
                  checked={isSelected}
                  onChange={() => onChange(slot.id)}
                  className="sr-only"
                />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={[
                        "text-base font-bold transition-colors",
                        isSelected
                          ? "text-[var(--color-maroon)]"
                          : "text-[var(--color-ink)]",
                      ].join(" ")}
                    >
                      {slot.label}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {slot.time}
                    </p>
                  </div>

                  <span
                    className={[
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
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

      {/* Availability Note */}
      <div className="mt-6 rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)]/50 p-4">
        <p className="text-xs leading-5 text-[var(--color-muted)]">
          चयनित समय मंदिर की उपलब्धता एवं प्रबंधन की पुष्टि के
          अधीन रहेगा।
        </p>
      </div>
    </section>
  );
}

export default TimeSlotSelector;