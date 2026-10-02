import { ArrowRight, CalendarDays, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";

function RitualCTA() {
  return (
    <section className="bg-[#fffaf2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden border border-[#c99a3d]/50 bg-[#6b1f2a] px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-16">
          {/* Decorative circles */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#e4bb5b]/15"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full border border-[#e4bb5b]/10"
            aria-hidden="true"
          />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#e4bb5b]/50 bg-[#fffaf2]/10 text-[#e4bb5b]">
              <Flower2 size={21} />
            </div>

            {/* Eyebrow */}
            <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-[#e4bb5b]">
              धार्मिक सेवा
            </p>

            {/* Heading */}
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#fffaf2] sm:text-4xl lg:text-5xl">
              अपने पूजा एवं संस्कार के लिए
              <span className="block text-[#e4bb5b]">
                पंजीकरण करें
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#f1dfbd] sm:text-base">
              अपनी आवश्यक जानकारी के साथ पंजीकरण अनुरोध प्रस्तुत करें।
              आयोजन की तिथि एवं समय की उपलब्धता के संबंध में मंदिर
              प्रबंधन द्वारा आगे संपर्क किया जाएगा।
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/registration"
                className="group inline-flex items-center justify-center gap-2 bg-[#e4bb5b] px-7 py-3.5 text-sm font-bold text-[#321b1e] transition-all duration-300 hover:bg-[#f0cf7a] sm:px-8"
              >
                <CalendarDays size={18} />

                पंजीकरण करें

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Confirmation note */}
            <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-[#e8d4ad]">
              पंजीकरण अनुरोध प्राप्त होना आयोजन की अंतिम पुष्टि नहीं माना जाएगा।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RitualCTA;