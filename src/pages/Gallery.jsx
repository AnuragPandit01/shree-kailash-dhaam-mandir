import GalleryHero from "../components/gallery/GalleryHero";
import GalleryIntro from "../components/gallery/GalleryIntro";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryCTA from "../components/gallery/GalleryCTA";

function Gallery() {
  return (
    <main>
      <GalleryHero />

      <GalleryIntro />

      <GalleryGrid />

      <GalleryCTA />
    </main>
  );
}

export default Gallery; 