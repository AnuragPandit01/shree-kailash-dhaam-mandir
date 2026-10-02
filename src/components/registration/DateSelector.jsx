import { CalendarDays } from "lucide-react";

function DateSelector({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <section className="rounded-2xl border border-[var(--color-gold)]/20 bg-white p-5 shadow-[var(--shadow-sm)] sm:p-7 lg:p-8">
      {/* Section Header */}
      <div className="mb-7 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-maroon)]/10 text-[var(--color-maroon)]">
          <CalendarDays
            size={21}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-gold)]">
            चरण 04
          </p>

          <h2 className="heading-section mt-1 text-xl text-[var(--color-maroon)] sm:text-2xl">
            तिथि चुनें
          </h2>

          <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
            जिस तिथि को आप अनुष्ठान के लिए पंजीकरण करना चाहते हैं,
            उसका चयन करें।
          </p>
        </div>
      </div>

      {/* Date Field */}
      <div className="max-w-md">
        <label
          htmlFor="registration-date"
          className="mb-2 block text-sm font-bold text-[var(--color-ink)]"
        >
          इच्छित तिथि
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        </label>

        <div className="relative">
          <CalendarDays
            size={18}
            strokeWidth={1.7}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            aria-hidden="true"
          />

          <input
            id="registration-date"
            name="registrationDate"
            type="date"
            value={value}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
            className="w-full cursor-pointer rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/40 py-3.5 pl-11 pr-4 text-sm text-[var(--color-ink)] outline-none transition-all focus:border-[var(--color-maroon)] focus:bg-white focus:ring-2 focus:ring-[var(--color-maroon)]/10"
          />
        </div>
      </div>

      {/* Information Note */}
      <div className="mt-6 rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)]/50 p-4">
        <p className="text-xs leading-5 text-[var(--color-muted)]">
          चयनित तिथि उपलब्धता के आधार पर मंदिर प्रबंधन द्वारा
          पुष्टि की जाएगी।
        </p>
      </div>
    </section>
  );
}

export default DateSelector;