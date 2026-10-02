import SEO from "../components/common/SEO";

import RitualsHero from "../components/rituals/RitualsHero";
import RitualIntro from "../components/rituals/RitualIntro";
import RitualGrid from "../components/rituals/RitualGrid";
import RitualTimings from "../components/rituals/RitualTimings";
import RitualCTA from "../components/rituals/RitualCTA";

function Rituals() {
  return (
    <>
      <SEO
        title="पूजा एवं अनुष्ठान | श्री कैलाश धाम मंदिर"
        description="श्री कैलाश धाम मंदिर में पूजा, धार्मिक संस्कार एवं मांगलिक अनुष्ठानों की जानकारी प्राप्त करें। विवाह संस्कार, मुंडन, रुद्राभिषेक, श्री सत्यनारायण कथा, विशेष पूजा, जन्मदिन, शादी की सालगिरह, सगाई, निशान चढ़ाना तथा भंडारा एवं प्रसाद वितरण जैसी सेवाओं के लिए जानकारी एवं पंजीकरण।"
        canonical="/rituals"
      />

      <RitualsHero />

      <RitualIntro />

      <RitualGrid />

      <RitualTimings />

      <RitualCTA />
    </>
  );
}

export default Rituals;