import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import malaKavachData from "../../data/malaKavach";

function MalaKavachCTA() {
  const { cta } = malaKavachData;

  return (
    <section className="relative overflow-hidden bg-[#4a1111] py-16 text-[#fff4df] sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d6a23a]/10" />

        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full border border-[#d6a23a]/10" />

        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full border border-[#d6a23a]/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,162,58,0.10),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
        {/* Decorative heading */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#d6a23a]" />
          <Sparkles className="h-4 w-4 text-[#e7bd63]" />
          <span className="h-px w-12 bg-[#d6a23a]" />
        </div>

        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6a23a]/30 bg-[#d6a23a]/10 text-[#e7bd63]">
          <HeartHandshake className="h-8 w-8" />
        </div>

        {/* Content */}
        <h2 className="mt-7 font-serif text-3xl font-semibold leading-tight text-[#fff8ea] sm:text-4xl lg:text-5xl">
          {cta.title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#e5d3b4] sm:text-lg sm:leading-9">
          {cta.description}
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to={cta.buttonLink}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a23a] px-7 py-3.5 text-sm font-semibold text-[#3b0d0d] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#e7bd63] hover:shadow-xl"
          >
            {cta.buttonText}

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-[#e7bd63]/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-[#fff4df] transition-all duration-300 hover:border-[#e7bd63] hover:bg-white/10"
          >
            मुख्य पृष्ठ पर जाएँ
          </Link>
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 border-t border-[#d6a23a]/15 pt-6 text-xs leading-6 text-[#cdbb9d] sm:text-sm">
          <Sparkles className="mt-1 h-3.5 w-3.5 shrink-0 text-[#d6a23a]" />

          <p>
            माला एवं कवच सेवा से संबंधित नियम, प्रक्रिया एवं उपलब्धता की
            जानकारी पंजीकरण के दौरान प्राप्त की जा सकती है।
          </p>
        </div>
      </div>
    </section>
  );
}

export default MalaKavachCTA;