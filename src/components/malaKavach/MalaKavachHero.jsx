import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

function MalaKavachHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#3b0d0d] text-[#fff4df]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(214,158,55,0.20),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(255,196,91,0.12),transparent_30%)]" />

        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full border border-[#d6a23a]/20 sm:h-96 sm:w-96" />

        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full border border-[#d6a23a]/10 sm:h-96 sm:w-96" />

        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,13,13,0.96),rgba(82,20,16,0.88),rgba(59,13,13,0.97))]" />
      </div>

      {/* Decorative pattern */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d6a23a] to-transparent" />

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[590px] lg:px-10 lg:py-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d6a23a]/40 bg-[#d6a23a]/10 px-4 py-2 text-sm font-medium text-[#f4d58c] backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>श्री कैलाश धाम मंदिर सेवाश्रम</span>
          </div>

          {/* Decorative heading line */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d6a23a]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d6a23a]" />
            <span className="h-px w-16 bg-[#d6a23a]/50" />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-[#fff8ea] sm:text-5xl md:text-6xl lg:text-7xl">
            माला एवं
            <span className="block text-[#e7bd63]">कवच सेवा</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#f3dfbd] sm:text-lg sm:leading-9">
            हमारे द्वारा परिवार, विद्या, विवाह एवं जीवन से जुड़े धार्मिक एवं
            आध्यात्मिक उद्देश्यों के लिए माला एवं कवच सेवा उपलब्ध कराई जाती है।
          </p>

          {/* Trust / service indicator */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#ead5ad]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#e7bd63]" />
              <span>धार्मिक एवं आध्यात्मिक सेवा</span>
            </div>

            <div className="hidden h-4 w-px bg-[#d6a23a]/40 sm:block" />

            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#e7bd63]" />
              <span>माला एवं कवच पंजीकरण</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/mala-kavach-seva/panjikaran"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a23a] px-6 py-3.5 text-sm font-semibold text-[#3b0d0d] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#e7bd63] hover:shadow-xl"
            >
              माला एवं कवच सेवा पंजीकरण
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="#mala-kavach-seva"
              className="inline-flex items-center justify-center rounded-full border border-[#e7bd63]/50 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#fff4df] backdrop-blur-sm transition-all duration-300 hover:border-[#e7bd63] hover:bg-[#d6a23a]/10"
            >
              सेवा की जानकारी देखें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MalaKavachHero;