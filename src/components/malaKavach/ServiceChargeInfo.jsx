import { HandCoins, HeartHandshake, Sparkles } from "lucide-react";
import malaKavachData from "../../data/malaKavach";

function ServiceChargeInfo() {
  const { serviceCharge } = malaKavachData;

  return (
    <section className="relative overflow-hidden bg-[#fffaf0] py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border border-[#d6a23a]/10" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full border border-[#7f1d1d]/10" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6a23a]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d6a23a]" />
            <span className="h-px w-10 bg-[#d6a23a]" />
          </div>

          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#9b6b16]">
            सेवा से संबंधित जानकारी
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#4a1111] sm:text-4xl lg:text-5xl">
            {serviceCharge.title}
          </h2>
        </div>

        {/* Main information card */}
        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-[#d6a23a]/25 bg-[#4a1111] shadow-[0_20px_55px_rgba(74,17,17,0.14)]">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full border border-[#d6a23a]/15" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full border border-[#d6a23a]/10" />

          <div className="relative p-7 sm:p-10 lg:p-12">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6a23a]/30 bg-[#d6a23a]/10 text-[#e7bd63]">
                <HandCoins className="h-8 w-8" />
              </div>
            </div>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-3xl text-center text-base leading-8 text-[#f2dfbf] sm:text-lg sm:leading-9">
              {serviceCharge.description}
            </p>

            {/* Service principle */}
            <div className="mx-auto mt-9 max-w-2xl rounded-2xl border border-[#d6a23a]/20 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6a23a]/10 text-[#e7bd63]">
                  <HeartHandshake className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#fff4df]">
                    सेवा एवं समर्पण
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#d9c6a5]">
                    हमारे लिए यह सेवा धार्मिक कार्यों, पूजा, अनुष्ठान एवं
                    जनकल्याण से जुड़ी सेवा का माध्यम है।
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-7 flex items-start justify-center gap-2 text-center text-xs leading-6 text-[#cdbb9d] sm:text-sm">
              <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#d6a23a]" />
              <p>
                सेवा शुल्क से संबंधित विस्तृत जानकारी सेवा प्राप्त करने की
                प्रक्रिया के दौरान उपलब्ध कराई जाएगी।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceChargeInfo;