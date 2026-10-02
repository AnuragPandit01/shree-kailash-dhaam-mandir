import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Flower2,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

function RitualsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#4f1720] text-[#fffaf2]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/rituals/rituals-hero.png"
          alt="श्री कैलाश धाम मंदिर में भगवान शिव की आराधना"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Overall dark overlay */}
      <div className="absolute inset-0 -z-10 bg-[#3f1219]/0" />

      {/* Strong left-side readability overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#4f1720] via-[#5b1b25]/90 to-[#5b1b25]/25" />

      {/* Bottom image fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#4f1720] to-transparent" />

      {/* Decorative Mandala */}    
      <div
        className="pointer-events-none absolute -left-28 top-10 -z-10 h-80 w-80 rounded-full border border-[#e4bb5b]/15"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-16 top-24 -z-10 h-52 w-52 rounded-full border border-[#e4bb5b]/10"
        aria-hidden="true"
      />

      {/* Decorative right circle */}
      <div
        className="pointer-events-none absolute -right-32 top-16 -z-10 h-80 w-80 rounded-full border border-[#e4bb5b]/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#f1dfbd]">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-[#e4bb5b]"
          >
            <Home size={15} />
            <span>मुख्य पृष्ठ</span>
          </Link>

          <ChevronRight
            size={15}
            className="text-[#e4bb5b]/70"
            aria-hidden="true"
          />

          <span className="text-[#fff8e8]">पूजा एवं अनुष्ठान</span>
        </div>

        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e4bb5b]" />

            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#e4bb5b] sm:text-sm">
              <Flower2 size={15} />
              धार्मिक सेवा
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl font-medium leading-[1.12] text-[#fffaf2] sm:text-5xl lg:text-6xl xl:text-7xl">
            पूजा एवं
            <span className="block text-[#e4bb5b]">अनुष्ठान</span>
          </h1>

          {/* Decorative divider */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-14 bg-[#e4bb5b]/80" />

            <span className="text-xs text-[#e4bb5b]">✦</span>

            <span className="h-px w-8 bg-[#e4bb5b]/50" />
          </div>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#f5e6ca] sm:text-base sm:leading-8 lg:text-lg">
            श्री कैलाश धाम मंदिर में आयोजित प्रमुख पूजा, धार्मिक संस्कार
            एवं अनुष्ठानों की जानकारी प्राप्त करें। अपनी आवश्यकतानुसार
            सेवा का चयन करें और पंजीकरण अनुरोध प्रस्तुत करें।
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/registration"
              className="group inline-flex items-center justify-center gap-2 bg-[#e4bb5b] px-6 py-3.5 text-sm font-semibold text-[#321b1e] shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0cf7a]"
            >
              <CalendarDays size={18} />

              पंजीकरण करें

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#rituals"
              className="group inline-flex items-center justify-center gap-2 border border-[#e4bb5b]/70 bg-[#4f1720]/20 px-6 py-3.5 text-sm font-semibold text-[#fff8e8] backdrop-blur-sm transition-all duration-300 hover:border-[#e4bb5b] hover:bg-[#fffaf2]/10"
            >
              अनुष्ठान देखें

              <ArrowDown
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>  
      </div>
    </section>
  );
}

export default RitualsHero;