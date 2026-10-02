import { ClipboardPenLine, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function RegistrationHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-maroon-dark)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.14),transparent_38%)]" />

      <div className="relative mx-auto max-w-[var(--container-width)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <nav
          aria-label="पृष्ठ मार्ग"
          className="mb-8 flex items-center gap-2 text-sm text-white/65"
        >
          <Link
            to="/"
            className="transition-colors hover:text-[var(--color-gold-light)]"
          >
            मुख्य पृष्ठ
          </Link>

          <ChevronRight size={15} aria-hidden="true" />

          <span className="text-white">
            पंजीकरण
          </span>
        </nav>

        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/30 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--color-gold-light)]">
            <ClipboardPenLine
              size={17}
              aria-hidden="true"
            />

            धार्मिक अनुष्ठान पंजीकरण
          </div>

          <h1 className="heading-section text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            मंदिर में अपने धार्मिक अनुष्ठान के लिए
            <span className="block text-[var(--color-gold-light)]">
              पंजीकरण करें
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            विवाह संस्कार, मुंडन संस्कार, विशेष पूजा या अन्य धार्मिक
            अनुष्ठान के लिए आवश्यक जानकारी भरकर पंजीकरण प्रक्रिया
            प्रारंभ करें।
          </p>
        </div>
      </div>

      <div
        className="relative h-[3px] bg-[var(--color-gold)]/40"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center border border-[var(--color-gold)] bg-[var(--color-maroon-dark)]">
          <div className="h-2 w-2 border border-[var(--color-saffron)]" />
        </div>
      </div>
    </section>
  );
}

export default RegistrationHero;