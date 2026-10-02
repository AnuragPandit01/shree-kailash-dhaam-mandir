import {
  ArrowUp,
  Heart,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop Floating Actions */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">

        {/* Live Darshan */}
        <Link
          to="/live"
          aria-label="लाइव दर्शन"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-maroon)] !text-[var(--color-cream)] shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-maroon-dark)]"
        >
          <Play
            size={19}
            fill="currentColor"
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-[var(--color-ink)] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            लाइव दर्शन
          </span>
        </Link>

        {/* Donation */}
        <Link
          to="/donation"
          aria-label="दान करें"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-gold)] !text-[var(--color-cream)] shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-maroon)]"
        >
          <Heart
            size={19}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-[var(--color-ink)] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            दान करें
          </span>
        </Link>

        {/* Back To Top */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="ऊपर जाएं"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-maroon)]/20 bg-white text-[var(--color-maroon)] shadow-[var(--shadow-md)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-maroon)] hover:text-[var(--color-cream)]"
          >
            <ArrowUp size={19} />

            <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-[var(--color-ink)] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
              ऊपर जाएं
            </span>
          </button>
        )}
      </div>

      {/* Mobile Floating Actions */}
      <div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[var(--color-gold)]/20 bg-white/95 p-2 shadow-[var(--shadow-lg)] backdrop-blur-md md:hidden">

        <Link
          to="/live"
          aria-label="लाइव दर्शन"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-maroon)] text-[var(--color-cream)]"
        >
          <Play size={17} fill="currentColor" />
        </Link>

        <Link
          to="/donation"
          aria-label="दान करें"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-maroon)]"
        >
          <Heart size={17} />
        </Link>

        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="ऊपर जाएं"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-maroon)]/15 bg-[var(--color-cream)] text-[var(--color-maroon)]"
          >
            <ArrowUp size={17} />
          </button>
        )}
      </div>
    </>
  );
}

export default FloatingActions;