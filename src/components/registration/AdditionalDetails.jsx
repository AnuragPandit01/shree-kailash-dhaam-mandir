import { MessageSquareText } from "lucide-react";

function AdditionalDetails({ value, onChange }) {
  return (
    <section className="rounded-2xl border border-[var(--color-gold)]/20 bg-white p-5 shadow-[var(--shadow-sm)] sm:p-7 lg:p-8">
      {/* Section Header */}
      <div className="mb-7 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-maroon)]/10 text-[var(--color-maroon)]">
          <MessageSquareText
            size={21}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-gold)]">
            चरण 06
          </p>

          <h2 className="heading-section mt-1 text-xl text-[var(--color-maroon)] sm:text-2xl">
            अतिरिक्त जानकारी
          </h2>

          <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
            यदि कोई विशेष अनुरोध या अतिरिक्त जानकारी साझा करना चाहते हैं,
            तो यहां लिख सकते हैं।
          </p>
        </div>
      </div>

      {/* Textarea */}
      <div>
        <label
          htmlFor="additional-details"
          className="mb-2 block text-sm font-bold text-[var(--color-ink)]"
        >
          विशेष अनुरोध / अन्य जानकारी
          <span className="ml-1 text-xs font-medium text-[var(--color-muted)]">
            (वैकल्पिक)
          </span>
        </label>

        <textarea
          id="additional-details"
          name="additionalDetails"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="अपनी अतिरिक्त जानकारी या विशेष अनुरोध यहां लिखें..."
          rows={5}
          maxLength={1000}
          className="w-full resize-none rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/40 px-4 py-3.5 text-sm leading-6 text-[var(--color-ink)] outline-none transition-all placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-maroon)] focus:bg-white focus:ring-2 focus:ring-[var(--color-maroon)]/10"
        />

        <div className="mt-2 flex justify-end">
          <span className="text-xs text-[var(--color-muted)]">
            {value.length}/1000
          </span>
        </div>
      </div>

      {/* Information Note */}
      <div className="mt-5 rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)]/50 p-4">
        <p className="text-xs leading-5 text-[var(--color-muted)]">
          कृपया केवल पंजीकरण से संबंधित आवश्यक जानकारी साझा करें।
        </p>
      </div>
    </section>
  );
}

export default AdditionalDetails;