import SEO from "../components/common/SEO";
import AboutHero from "../components/temple/AboutHero";
import TempleIntro from "../components/temple/TempleIntro";
import TempleHistory from "../components/temple/TempleHistory";
import TemplePersonalities from "../components/temple/TemplePersonalities";
import MahantMessage from "../components/temple/MahantMessage";
import VedicEducation from "../components/temple/VedicEducation";
import TempleServices from "../components/temple/TempleServices";
import TempleInfo from "../components/temple/TempleInfo";
import AboutCTA from "../components/temple/AboutCTA";

function About() {
  return (
    <>
      <SEO
        title="मंदिर परिचय | श्री कैलाश धाम मंदिर"
        description="श्री कैलाश धाम मंदिर, दौना, जसरा के इतिहास, प्रमुख व्यक्तित्व, वैदिक शिक्षा, धार्मिक गतिविधियों और मंदिर से जुड़ी जानकारी प्राप्त करें।"
        canonical="/about"
      />

      <AboutHero />
      <TempleIntro />
      <TempleHistory />
      <TemplePersonalities />
      <MahantMessage />
      <VedicEducation />
      <TempleServices />
      <TempleInfo />
      <AboutCTA />
    </>
  );
}

export default About;