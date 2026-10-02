import { Maximize2 } from "lucide-react";

function GalleryCard({ image, featured = false, onOpen }) {
  const handleOpen = () => {
    if (onOpen) {
      onOpen(image);
    }
  };

  return (
    <article
      className={`group relative overflow-hidden border border-[#e5d5bb] bg-[#321b1e] ${
        featured
          ? "sm:col-span-2 sm:row-span-2"
          : "lg:col-span-1"
      }`}
    >
      {/* Image Container */}
      <div className="relative flex h-full w-full items-center justify-center">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-contain transition-opacity duration-500 group-hover:opacity-95"
        />

        {/* Overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#321b1e]/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90"
          aria-hidden="true"
        />

        {/* Gold inner border */}
        <div
          className="pointer-events-none absolute inset-2 border border-[#e4bb5b]/0 transition-all duration-500 group-hover:inset-3 group-hover:border-[#e4bb5b]/50"
          aria-hidden="true"
        />

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <div className="flex items-end justify-between gap-4">

            {/* Open Lightbox */}
            {onOpen && (
              <button
                type="button"
                onClick={handleOpen}
                aria-label={`${image.caption || "तस्वीर"} को बड़ा देखें`}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e4bb5b]/50 bg-[#321b1e]/70 text-[#e4bb5b] backdrop-blur-sm transition-all duration-300 hover:border-[#e4bb5b] hover:bg-[#e4bb5b] hover:text-[#321b1e]"
              >
                <Maximize2
                  size={17}
                  aria-hidden="true"
                />
              </button>
            )}
          </div>
        </div>

        {/* Hover indicator */}
        <div
          className="absolute left-4 top-4 h-1 w-8 origin-left scale-x-0 bg-[#e4bb5b] transition-transform duration-500 group-hover:scale-x-100"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

export default GalleryCard;