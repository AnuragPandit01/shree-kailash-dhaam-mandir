import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#321016] py-16 text-[#fff8e9] sm:py-20 lg:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-[#d5a64a]/10" />
      <div className="pointer-events-none absolute -left-40 bottom-[-120px] h-80 w-80 rounded-full border border-[#d5a64a]/10" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Om */}
        <div className="mb-5 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#d5a64a]" />

          <span className="font-serif text-2xl text-[#e3bd5c]">
            ॐ
          </span>

          <span className="h-px w-12 bg-[#d5a64a]" />
        </div>

        {/* Label */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#e3bd5c] sm:text-sm">
          मंदिर से जुड़ें
        </p>

        {/* Heading */}
        <h2 className="mt-4 font-serif text-3xl leading-tight text-[#fff1c9] sm:text-4xl lg:text-5xl">
          श्रद्धा से जुड़ें,
          <span className="block text-[#e3bd5c]">
            सेवा का हिस्सा बनें
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#ddceb1] sm:text-lg">
          पूजा एवं अनुष्ठान, धार्मिक पंजीकरण और मंदिर की गतिविधियों
          से जुड़ी अधिक जानकारी के लिए संबंधित अनुभाग देखें।
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/rituals"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-[#d5a64a] px-6 py-3.5 text-sm font-semibold text-[#321016] transition-all duration-300 hover:bg-[#e6bd62] sm:w-auto"
          >
            पूजा एवं अनुष्ठान देखें
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/registration"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#d5a64a]/60 px-6 py-3.5 text-sm font-semibold text-[#f4dfb1] transition-all duration-300 hover:border-[#d5a64a] hover:bg-[#4a1720] sm:w-auto"
          >
            <Sparkles size={16} />
            पंजीकरण करें
          </Link>

          <Link
            to="/donation"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-[#d5a64a]/60 px-6 py-3.5 text-sm font-semibold text-[#f4dfb1] transition-all duration-300 hover:border-[#d5a64a] hover:bg-[#4a1720] sm:w-auto"
          >
            <HeartHandshake size={16} />
            सहयोग करें
          </Link>
        </div>

        {/* Sanskrit closing */}
        <div className="mx-auto mt-12 max-w-xl border-t border-[#d5a64a]/25 pt-7">
          <p className="font-serif text-lg text-[#f1c967] sm:text-xl">
            सर्वे भवन्तु सुखिनः ॥
          </p>

          <p className="mt-2 text-xs text-[#bfae91]">
            सभी सुखी और मंगलमय हों।
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;