import { ArrowDown, Images, Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function GalleryHero() {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");

    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#321b1e]">
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <div className="absolute inset-0">
        <img
          src="/images/gallery/gallery-hero.png"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />

        {/* Dark devotional overlay */}
        <div className="absolute inset-0 bg-[#321b1e]/65" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#321b1e] via-[#321b1e]/45 to-[#321b1e]/30" />

        {/* Warm devotional glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c99a3d]/10 blur-3xl"
          aria-hidden="true"
        />
      </div>

      {/* =====================================================
          DECORATIVE ELEMENTS
      ===================================================== */}
      <div
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#e4bb5b]/15"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#e4bb5b]/10"
        aria-hidden="true"
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-medium text-[#f1dfbd]/75 sm:text-sm">
          <Link
            to="/"
            className="transition-colors duration-200 hover:text-[#e4bb5b]"
          >
            मुख्य पृष्ठ
          </Link>

          <ChevronRight size={15} aria-hidden="true" />
          <span
            className="text-[#e4bb5b]"
            aria-current="page"
          >
            दर्शन एवं गैलरी
          </span>
        </div>

        {/* Main content */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span
              className="h-px w-10 bg-[#e4bb5b]"
              aria-hidden="true"
            />

            <span className="text-xs font-semibold tracking-[0.2em] text-[#e4bb5b] sm:text-sm">
              पावन दर्शन
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl leading-[1.1] text-[#fffaf2] sm:text-5xl lg:text-6xl xl:text-7xl">
            मंदिर की
            <span className="block text-[#e4bb5b]">
              पावन झलकियाँ
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#f1dfbd]/85 sm:text-lg">
            श्री कैलाश धाम मंदिर के पावन वातावरण, मंदिर परिसर और
            धार्मिक गतिविधियों से जुड़ी तस्वीरों के माध्यम से
            मंदिर के दर्शन एवं झलकियों का अनुभव करें।
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={scrollToGallery}
              className="group inline-flex items-center justify-center gap-2 bg-[#e4bb5b] px-7 py-3.5 text-sm font-bold text-[#321b1e] transition-all duration-300 hover:bg-[#f0cf7a]"
            >
              <Images
                size={18} 
                aria-hidden="true"
              />

              गैलरी देखें

              <ArrowDown
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* =================================================
            BOTTOM HIGHLIGHTS
        ================================================= */}
        <div className="mt-16 grid max-w-3xl gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 border border-[#e4bb5b]/20 bg-[#321b1e]/40 px-4 py-4 backdrop-blur-sm">
            <Images
              size={19}
              className="shrink-0 text-[#e4bb5b]"
              aria-hidden="true"
            />

            <div>
              <p className="text-sm font-semibold text-[#fffaf2]">
                मंदिर की झलक
              </p>

              <p className="mt-0.5 text-xs text-[#f1dfbd]/60">
                पावन परिसर
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border border-[#e4bb5b]/20 bg-[#321b1e]/40 px-4 py-4 backdrop-blur-sm">
            <Sparkles
              size={19}
              className="shrink-0 text-[#e4bb5b]"
              aria-hidden="true"
            />

            <div>
              <p className="text-sm font-semibold text-[#fffaf2]">
                धार्मिक झलकियाँ
              </p>

              <p className="mt-0.5 text-xs text-[#f1dfbd]/60">
                श्रद्धा एवं परंपरा
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border border-[#e4bb5b]/20 bg-[#321b1e]/40 px-4 py-4 backdrop-blur-sm">
            <span
              className="font-serif text-xl text-[#e4bb5b]"
              aria-hidden="true"
            >
              ॐ
            </span>

            <div>
              <p className="text-sm font-semibold text-[#fffaf2]">
                दर्शन एवं आस्था
              </p>

              <p className="mt-0.5 text-xs text-[#f1dfbd]/60">
                हर हर महादेव
              </p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-8 flex items-center gap-3 text-xs text-[#f1dfbd]/60 sm:text-sm">
          <span
            className="h-px w-8 bg-[#e4bb5b]/50"
            aria-hidden="true"
          />

          <span>
            श्री कैलाश धाम मंदिर • दौना, जसरा
          </span>
        </div>
      </div>

      {/* =====================================================
          DECORATIVE BOTTOM EDGE
      ===================================================== */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#e4bb5b]/40"
        aria-hidden="true"
      />
    </section>
  );
}

export default GalleryHero; 