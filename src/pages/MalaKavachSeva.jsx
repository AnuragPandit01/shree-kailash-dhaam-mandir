import MalaKavachHero from "../components/malaKavach/MalaKavachHero";
import MalaKavachIntro from "../components/malaKavach/MalaKavachIntro";
import MalaKavachCategories from "../components/malaKavach/MalaKavachCategories";
import ServiceChargeInfo from "../components/malaKavach/ServiceChargeInfo";
import DistributionInfo from "../components/malaKavach/DistributionInfo";
import SpiritualGuidance from "../components/malaKavach/SpiritualGuidance";
import SpiritualBelief from "../components/malaKavach/SpiritualBelief";
import UsageInfo from "../components/malaKavach/UsageInfo";
import ReturnRefundInfo from "../components/malaKavach/ReturnRefundInfo";
import ServiceProcess from "../components/malaKavach/ServiceProcess";
import MalaKavachCTA from "../components/malaKavach/MalaKavachCTA";

function MalaKavachSeva() {
  return (
    <div className="min-h-screen bg-[#fffaf0]">
      <MalaKavachHero />

      <main>
        <MalaKavachIntro />

        <MalaKavachCategories />

        <ServiceChargeInfo />

        <DistributionInfo />

        <SpiritualGuidance />

        <SpiritualBelief />

        <UsageInfo />

        <ReturnRefundInfo />

        <ServiceProcess />

        <MalaKavachCTA />
      </main>
    </div>
  );
}

export default MalaKavachSeva;