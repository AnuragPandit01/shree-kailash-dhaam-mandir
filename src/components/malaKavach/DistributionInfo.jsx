import { Home, MapPin, Truck } from "lucide-react";
import malaKavachData from "../../data/malaKavach";

const distributionIcons = [Truck, Home, MapPin];

function DistributionInfo() {
  const { distribution } = malaKavachData;

  return (
    <section className="relative overflow-hidden bg-[#f8f0df] py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 rounded-br-full bg-[#7f1d1d]/5" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-tl-full bg-[#d6a23a]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6a23a]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d6a23a]" />
            <span className="h-px w-10 bg-[#d6a23a]" />
          </div>

          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#9b6b16]">
            सेवा प्राप्त करने के माध्यम
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#4a1111] sm:text-4xl lg:text-5xl">
            {distribution.title}
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6d5b4d] sm:text-lg">
            {distribution.description}
          </p>
        </div>

        {/* Distribution methods */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {distribution.methods.map((method, index) => {
            const Icon = distributionIcons[index] || MapPin;

            return (
              <div
                key={method}
                className="group relative overflow-hidden rounded-3xl border border-[#e4d3b4] bg-[#fffdf8] p-6 text-center shadow-[0_10px_30px_rgba(74,17,17,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6a23a]/50 hover:shadow-[0_16px_40px_rgba(74,17,17,0.10)] sm:p-7"
              >
                {/* Decorative circle */}
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full border border-[#d6a23a]/10 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7f1d1d]/10 text-[#7f1d1d] transition-all duration-300 group-hover:bg-[#7f1d1d] group-hover:text-[#fff4df]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-semibold text-[#4a1111]">
                    {method}
                  </h3>

                  <div className="mx-auto mt-4 h-px w-12 bg-[#d6a23a]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting information */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#d6a23a]/25 bg-[#fffaf0] px-5 py-5 sm:px-7">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#8f6518]" />

            <p className="text-sm leading-7 text-[#665346] sm:text-base">
              हम आपकी सुविधा के अनुसार उपलब्ध माध्यम से माला एवं कवच सेवा
              प्राप्त करने की व्यवस्था करते हैं। उपलब्धता एवं प्रक्रिया की
              जानकारी पंजीकरण के समय दी जाएगी।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DistributionInfo;