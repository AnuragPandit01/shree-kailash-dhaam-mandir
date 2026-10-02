import { useCallback, useState } from "react";
import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/temple-deities.jpg",
  },
  {
    id: 2,
    src: "/images/gallery/temple-1.jpg",
  },
  {
    id: 3,
    src: "/images/gallery/temple-2.jpg",
  },
  {
    id: 4,
    src: "/images/gallery/shiva-darshan.jpg",
  },
  {
    id: 5,
    src: "/images/gallery/temple-5.jpg",
  },
  {
    id: 6,
    src: "/images/gallery/temple-6.jpg",
  },
  {
    id: 7,
    src: "/images/gallery/temple-3.jpg",
  },
  
  {
    id: 8,
    src: "/images/gallery/temple-4.jpg",
  },
  
  {
    id: 9,
    src: "/images/gallery/temple-5.jpg",
  },
  {
    id: 10,
    src: "/images/gallery/temple-6.jpg",
  },
  {
    id: 11,
    src: "/images/gallery/temple-7.jpg",
  },
  {
    id: 12,
    src: "/images/gallery/temple-8.jpg",
  },
  {
    id: 13,
    src: "/images/gallery/temple-9.jpg",
  },
  {
    id: 14,
    src: "/images/gallery/temple-10.jpg",
  },
  {
    id: 15,
    src: "/images/gallery/temple-11.jpg",
  },
  {
    id: 16,
    src: "/images/gallery/temple-12.jpg",
  },
  {
    id: 17,
    src: "/images/gallery/temple-13.jpg",
  },
  {
    id: 18,
    src: "/images/gallery/temple-14.jpg",
  },
  {
    id: 19,
    src: "/images/gallery/temple-15.jpg",
  },
  {
    id: 20,
    src: "/images/gallery/temple-16.jpg",
  },  
];

function GalleryGrid() {
  const [activeImage, setActiveImage] = useState(null);

  const handleOpen = useCallback((image) => {
    setActiveImage(image);
  }, []);

  const handleClose = useCallback(() => {
    setActiveImage(null);
  }, []);

  const handleNext = useCallback(() => {
    setActiveImage((currentImage) => {
      if (!currentImage) return null;

      const currentIndex = galleryImages.findIndex(
        (image) => image.id === currentImage.id
      );

      if (currentIndex === -1) {
        return currentImage;
      }

      const nextIndex =
        (currentIndex + 1) % galleryImages.length;

      return galleryImages[nextIndex];
    });
  }, []);

  const handlePrevious = useCallback(() => {
    setActiveImage((currentImage) => {
      if (!currentImage) return null;

      const currentIndex = galleryImages.findIndex(
        (image) => image.id === currentImage.id
      );

      if (currentIndex === -1) {
        return currentImage;
      }

      const previousIndex =
        (currentIndex - 1 + galleryImages.length) %
        galleryImages.length;

      return galleryImages[previousIndex];
    });
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="scroll-mt-24 bg-[#f8f1e5] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="h-px w-8 bg-[#c99a3d]"
                  aria-hidden="true"
                />

                <span className="text-xs font-semibold tracking-[0.18em] text-[#8b2635] sm:text-sm">
                  गैलरी
                </span>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-[#4a1720] sm:text-4xl lg:text-5xl">
                पावन झलकियाँ
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6f5b55] sm:text-right">
              मंदिर परिसर, दर्शन और धार्मिक वातावरण से जुड़ी
              विभिन्न तस्वीरों का संकलन।
            </p>
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 xl:columns-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="mb-4 break-inside-avoid sm:mb-5"
              >
                <GalleryCard
                  image={image}
                  onOpen={handleOpen}
                />
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-10 flex items-center justify-center gap-3 text-center">
            <span
              className="h-px w-10 bg-[#c99a3d]/50"
              aria-hidden="true"
            />

            <span className="font-serif text-sm text-[#8b2635] sm:text-base">
              हर हर महादेव
            </span>

            <span
              className="h-px w-10 bg-[#c99a3d]/50"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        activeImage={activeImage}
        onClose={handleClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  );
}

export default GalleryGrid;