import { Home, MapPin, ShieldCheck, UserRound } from "lucide-react";
import malaKavachData from "../../data/malaKavach";

const usageIcons = [UserRound, Home, MapPin];

function UsageInfo() {
  const { usage } = malaKavachData;

  return (
    <section className="relative overflow-hidden bg-[#f8f0df] py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border border-[#7f1d1d]/10" />

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full border border-[#d6a23a]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6a23a]" />

            <span className="h-1.5 w-1.5 rotate-45 bg-[#d6a23a]" />

            <span className="h-px w-10 bg-[#d6a23a]" />
          </div>

          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#9b6b16]">
            हमारी सेवा का उपयोग
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#4a1111] sm:text-4xl lg:text-5xl">
            {usage.title}
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6d5b4d] sm:text-lg">
            {usage.description}
          </p>
        </div>

        {/* Usage cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {usage.places.map((place, index) => {
            const Icon = usageIcons[index] || ShieldCheck;

            return (
              <div
                key={place}
                className="group relative overflow-hidden rounded-3xl border border-[#e4d3b4] bg-[#fffdf8] p-6 text-center shadow-[0_10px_30px_rgba(74,17,17,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6a23a]/50 hover:shadow-[0_16px_40px_rgba(74,17,17,0.10)]"
              >
                {/* Decorative circle */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full border border-[#d6a23a]/10 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7f1d1d]/10 text-[#7f1d1d] transition-all duration-300 group-hover:bg-[#7f1d1d] group-hover:text-[#fff4df]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-semibold leading-7 text-[#4a1111]">
                    {place}
                  </h3>

                  <div className="mx-auto mt-4 h-px w-10 bg-[#d6a23a]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Important information */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#d6a23a]/25 bg-[#fffaf0] p-6 sm:p-8">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#7f1d1d]/10 text-[#7f1d1d]">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-[#4a1111]">
                धार्मिक निर्देशों का पालन
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#665346] sm:text-base">
                हम आपसे अनुरोध करते हैं कि माला एवं कवच का उपयोग करते समय
                हमारे द्वारा दिए गए धार्मिक एवं पूजा संबंधी निर्देशों का
                पालन करें।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsageInfo;