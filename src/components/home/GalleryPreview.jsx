import { ArrowRight,Images } from "lucide-react";
import { Link } from "react-router-dom";

const galleryItems = [
  {
    id: 1,
    image: "/images/gallery/temple-deities.jpg",
  },
  {
    id: 2,
    image: "/images/gallery/temple-1.jpg",
  },
  {
    id: 3,
    image: "/images/gallery/temple-2.jpg",
  },
  {
    id: 4,
    image: "/images/gallery/shiva-darshan.jpg",
  },
  {
    id: 5,  
    image: "/images/gallery/temple-5.jpg",
  },
];

function GalleryPreview() {
  return (
    <section className="bg-[var(--color-cream)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-gold)]" />

              <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-saffron)]">
                दर्शन एवं गैलरी
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[var(--color-maroon)] sm:text-4xl lg:text-5xl">
              मंदिर की

              <span className="ml-2 text-[var(--color-gold-dark)]">
                झलकियाँ
              </span>
            </h2>
          </div>

          <Link
            to="/gallery"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[var(--color-maroon)] px-5 py-3 font-semibold text-[var(--color-maroon)] transition-all duration-300 hover:bg-[var(--color-maroon)] hover:!text-[var(--color-cream)] md:self-auto"
          >
            <Images size={17} />

            <span>सभी तस्वीरें देखें</span>

            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

          {/* Featured Image */}
          <Link
            to="/gallery"
            className="group col-span-2 row-span-2 overflow-hidden rounded-3xl bg-[var(--color-maroon)]"
          >
            <div className="relative h-full min-h-[420px]">
              <img
                src={galleryItems[0].image}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <p className="text-lg font-semibold text-white">
                  {galleryItems[0].title}
                </p>

                <p className="mt-1 text-sm text-white/70">
                  श्री कैलाश धाम मंदिर
                </p>
              </div>
            </div>
          </Link>

          {/* Remaining Images */}
          {galleryItems.slice(1).map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="group relative aspect-square overflow-hidden rounded-3xl bg-[var(--color-maroon)]"
            >
              <img
                src={item.image}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-semibold text-white sm:text-base">
                  {item.title}
                </p>
              </div>    
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;