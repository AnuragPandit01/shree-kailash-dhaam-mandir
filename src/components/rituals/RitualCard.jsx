import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function RitualCard({
  icon: Icon,
  number,
  title,
  description,
  image,
  slug,
}) {
  return (
    <article className="group overflow-hidden border border-[#d9c7a4] bg-[#fffaf2] transition-all duration-300 hover:-translate-y-1 hover:border-[#c99a3d] hover:shadow-[0_18px_40px_rgba(61,31,25,0.08)]">
      {/* =====================================================
          IMAGE
      ===================================================== */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#e8dfd0]">
        {image ? (
          <img
            src={image}
            alt={`${title} — श्री कैलाश धाम मंदिर`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-[#6b1f2a]"
            aria-hidden="true"
          >
            <Icon
              size={48}
              strokeWidth={1.3}
              className="text-[#e4bb5b]"
            />
          </div>
        )}

        {/* Image overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#321b1e]/75 via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Number */}
        <span
          className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#e4bb5b]/60 bg-[#321b1e]/75 font-serif text-sm text-[#e4bb5b] backdrop-blur-sm"
          aria-label={`क्रमांक ${number}`}
        >
          {number}
        </span>

        {/* Icon */}
        <div
          className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#e4bb5b]/60 bg-[#321b1e]/80 text-[#e4bb5b] backdrop-blur-sm"
          aria-hidden="true"
        >
          <Icon size={18} />
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="p-6 sm:p-7">
        <h3 className="font-serif text-2xl leading-snug text-[#6b1f2a]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#675659]">
          {description}
        </p>

        {/* Details link */}
        {slug && (
          <Link
            to={`/rituals/${slug}`}
            className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7a2732] transition-colors hover:text-[#9a7425]"
            aria-label={`${title} के बारे में अधिक जानकारी`}
          >
            अधिक जानकारी

            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </Link>
        )}
      </div>
    </article>
  );
}

export default RitualCard;