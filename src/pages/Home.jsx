import SEO from "../components/common/SEO";

import Hero from "../components/home/Hero";
import TempleHighlights from "../components/home/TempleHighlights";
import TempleIntro from "../components/home/TempleIntro";
import ServicesPreview from "../components/home/ServicesPreview";
import RegistrationCTA from "../components/home/RegistrationCTA";
import DonationCTA from "../components/home/DonationCTA";
import EventsPreview from "../components/home/EventsPreview";
import LiveDarshan from "../components/home/LiveDarshan";
import GalleryPreview from "../components/home/GalleryPreview";
import SocialMedia from "../components/home/SocialMedia";

function Home() {
  return (
    <>
      <SEO
        title="श्री कैलाश धाम मंदिर | दौना, जसरा"
        description="श्री कैलाश धाम मंदिर, दौना, जसरा की वेबसाइट। मंदिर परिचय, पूजा एवं अनुष्ठान, धार्मिक पंजीकरण, दर्शन, गैलरी और मंदिर से जुड़े कार्यक्रमों की जानकारी प्राप्त करें।"
        canonical="/"
      />

      <Hero />
      <TempleHighlights />
      <TempleIntro />
      <ServicesPreview />
      <RegistrationCTA />
      <DonationCTA />
      <EventsPreview />
      <LiveDarshan />
      <GalleryPreview />
      <SocialMedia />
    </>
  );
}

export default Home;