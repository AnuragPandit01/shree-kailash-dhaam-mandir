import {
  ArrowRight,
  Heart,
  HandHeart,
  Landmark,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const donationPoints = [
  {
    icon: Landmark,
    title: "मंदिर सेवा",
    description: "मंदिर परिसर की सेवा एवं आवश्यक व्यवस्थाओं में सहयोग।",
  },
  {
    icon: Sparkles,
    title: "धार्मिक आयोजन",
    description: "पूजा, अनुष्ठान एवं धार्मिक कार्यक्रमों में सहयोग।",
  },
  {
    icon: HandHeart,
    title: "जनसेवा",
    description: "धार्मिक एवं सामाजिक सेवा कार्यों में योगदान।",
  },
];

function DonationCTA() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-gold)]/20 bg-[var(--color-cream)] shadow-[var(--shadow-md)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left Visual */}
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[var(--color-maroon)] p-8 sm:p-12">
              {/* Decorative circles */}
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[var(--color-gold)]/20" />
              <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full border border-[var(--color-gold)]/15" />

              <div className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10">
                  <Heart
                    size={36}
                    strokeWidth={1.5}
                    className="text-[var(--color-gold)]"
                  />
                </div>

                <div className="mx-auto mt-7 h-px w-16 bg-[var(--color-gold)]" />

                <p className="mt-6 text-sm font-medium tracking-[0.18em] text-[var(--color-gold)]">
                  सेवा • श्रद्धा • सहयोग
                </p>

                <h3 className="mt-4 text-2xl font-bold text-[var(--color-cream)] sm:text-3xl">
                  आपका सहयोग
                  <span className="block text-[var(--color-gold)]">
                    मंदिर सेवा में योगदान
                  </span>
                </h3>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/65">
                  श्रद्धा से किया गया सहयोग मंदिर की धार्मिक एवं सेवा
                  गतिविधियों को आगे बढ़ाने में सहायक होता है।
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-gold)]" />

                <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-saffron)]">
                  दान एवं सहयोग
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-maroon)] sm:text-4xl">
                मंदिर की सेवा में
                <span className="block text-[var(--color-gold-dark)]">
                  अपना योगदान दें
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--color-ink-light)]">
                दिव्य ज्योति लिंगेश्वर पंचतल महादेव मन्दिर की धार्मिक गतिविधियों, सेवा कार्यों
                और मंदिर व्यवस्था में सहयोग देने के लिए आप अपनी
                श्रद्धानुसार योगदान कर सकते हैं।
              </p>

              {/* Donation Points */}
              <div className="mt-8 space-y-4">
                {donationPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div
                      key={point.title}
                      className="flex gap-4 rounded-2xl border border-[var(--color-gold)]/15 bg-white p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-maroon)]/10">
                        <Icon
                          size={21}
                          className="text-[var(--color-maroon)]"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[var(--color-ink)]">
                          {point.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-[var(--color-ink-light)]">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  to="/donation"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-maroon)] px-7 py-4 font-semibold text-[var(--color-cream)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-maroon-dark)] hover:shadow-[var(--shadow-md)] sm:w-auto"
                >
                  <Heart
                    size={18}
                    className="text-[var(--color-cream)]"
                  />

                  <span className="text-[var(--color-cream)]">
                    श्रद्धानुसार दान करें
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-[var(--color-cream)]"
                  />
                </Link>
              </div>

              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationCTA;