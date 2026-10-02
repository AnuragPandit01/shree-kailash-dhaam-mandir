import { ArrowRight, Images } from "lucide-react";
import { Link } from "react-router-dom";

function GalleryCTA() {
  return (
    <section className="relative overflow-hidden bg-[#4a1720] py-16 sm:py-20 lg:py-24">
      {/* Decorative elements */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#e4bb5b]/15"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-[#e4bb5b]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e4bb5b]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#e4bb5b]/30 bg-[#321b1e]/60">
          <Images
            size={24}
            className="text-[#e4bb5b]"
            aria-hidden="true"
          />
        </div>

        {/* Eyebrow */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span
            className="h-px w-8 bg-[#e4bb5b]/60"
            aria-hidden="true"
          />

          <span className="text-xs font-semibold tracking-[0.18em] text-[#e4bb5b] sm:text-sm">
            पावन दर्शन
          </span>

          <span
            className="h-px w-8 bg-[#e4bb5b]/60"
            aria-hidden="true"
          />
        </div>

        {/* Heading */}
        <h2 className="mt-5 font-serif text-3xl leading-tight text-[#fffaf2] sm:text-4xl lg:text-5xl">
          श्रद्धा के इस पावन अनुभव से
          <span className="block text-[#e4bb5b]">
            जुड़े रहें
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#f1dfbd]/80 sm:text-base sm:leading-8">
          श्री कैलाश धाम मंदिर में पूजा, अनुष्ठान और धार्मिक सेवाओं
          से जुड़ी जानकारी प्राप्त करें तथा अपने धार्मिक आयोजन के लिए
          पंजीकरण करें।
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/registration"
            className="group inline-flex items-center justify-center gap-2 bg-[#e4bb5b] px-7 py-3.5 text-sm font-bold text-[#321b1e] transition-all duration-300 hover:bg-[#f0cf7a]"
          >
            पंजीकरण करें

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <Link
            to="/rituals"
            className="inline-flex items-center justify-center gap-2 border border-[#e4bb5b]/40 px-7 py-3.5 text-sm font-semibold !text-[#fffaf2] transition-all duration-300 hover:border-[#e4bb5b] hover:bg-[#321b1e]"
          >
            पूजा एवं अनुष्ठान देखें
          </Link>
        </div>

        {/* Mantra */}
        <div className="mt-10 flex items-center justify-center gap-3 text-xs text-[#f1dfbd]/55 sm:text-sm">
          <span
            className="h-px w-8 bg-[#e4bb5b]/30"
            aria-hidden="true"
          />

          <span className="font-serif">
            हर हर महादेव
          </span>

          <span
            className="h-px w-8 bg-[#e4bb5b]/30"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

export default GalleryCTA;