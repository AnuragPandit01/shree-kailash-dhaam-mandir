import { useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";

function Lightbox({ images = [], activeImage, onClose, onNext, onPrevious }) {
  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeImage, onClose, onNext, onPrevious]);

  if (!activeImage) {
    return null;
  }

  const activeIndex = images.findIndex(
    (image) => image.id === activeImage.id
  );

  const hasPrevious = activeIndex > 0;
  const hasNext =
    activeIndex !== -1 && activeIndex < images.length - 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1f1113]/95 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="गैलरी तस्वीर"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Top controls */}
      <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
        <div className="flex items-center gap-2 text-xs text-[#f1dfbd]/70 sm:text-sm">
          <Maximize2
            size={15}
            className="text-[#e4bb5b]"
            aria-hidden="true"
          />

          <span>
            {activeIndex + 1} / {images.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="गैलरी बंद करें"
          className="flex h-10 w-10 items-center justify-center border border-[#e4bb5b]/30 bg-[#321b1e]/80 text-[#fffaf2] transition-colors duration-300 hover:border-[#e4bb5b] hover:bg-[#e4bb5b] hover:text-[#321b1e]"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={!hasPrevious}
        aria-label="पिछली तस्वीर"
        className={`absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#e4bb5b]/30 bg-[#321b1e]/80 text-[#fffaf2] transition-all duration-300 sm:left-6 ${
          hasPrevious
            ? "hover:border-[#e4bb5b] hover:bg-[#e4bb5b] hover:text-[#321b1e]"
            : "cursor-not-allowed opacity-30"
        }`}
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>

      {/* Image */}
      <div className="flex max-h-[88vh] max-w-6xl flex-col items-center">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="max-h-[72vh] max-w-full object-contain shadow-2xl sm:max-h-[76vh]"
        />

        {/* Caption */}
        <div className="mt-4 max-w-2xl text-center">
          {activeImage.caption && (
            <h2 className="font-serif text-xl text-[#fffaf2] sm:text-2xl">
              {activeImage.caption}
            </h2>
          )}

          {activeImage.alt && (
            <p className="mt-2 text-xs leading-6 text-[#f1dfbd]/70 sm:text-sm">
              {activeImage.alt}
            </p>
          )}
        </div>
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={onNext}
        disabled={!hasNext}
        aria-label="अगली तस्वीर"
        className={`absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#e4bb5b]/30 bg-[#321b1e]/80 text-[#fffaf2] transition-all duration-300 sm:right-6 ${
          hasNext
            ? "hover:border-[#e4bb5b] hover:bg-[#e4bb5b] hover:text-[#321b1e]"
            : "cursor-not-allowed opacity-30"
        }`}
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>
    </div>
  );
}

export default Lightbox;