import { AlertCircle, RotateCcw, ShieldCheck } from "lucide-react";
import malaKavachData from "../../data/malaKavach";

function ReturnRefundInfo() {
  const { returnPolicy } = malaKavachData;

  return (
    <section className="relative overflow-hidden bg-[#fffaf0] py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full border border-[#7f1d1d]/10" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full border border-[#d6a23a]/10" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6a23a]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d6a23a]" />
            <span className="h-px w-10 bg-[#d6a23a]" />
          </div>

          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#9b6b16]">
            सेवा नियम
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#4a1111] sm:text-4xl lg:text-5xl">
            {returnPolicy.title}
          </h2>
        </div>

        {/* Main card */}
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-[#e5d4b4] bg-white shadow-[0_15px_45px_rgba(74,17,17,0.08)]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left visual panel */}
            <div className="relative overflow-hidden bg-[#4a1111] p-8 text-center sm:p-10 lg:p-12">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#d6a23a]/20" />
              <div className="absolute -bottom-20 -left-12 h-44 w-44 rounded-full border border-[#d6a23a]/10" />

              <div className="relative flex h-full flex-col items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d6a23a]/30 bg-[#d6a23a]/10 text-[#e7bd63]">
                  <RotateCcw className="h-9 w-9" />
                </div>

                <div className="mt-6">
                  <p className="text-5xl font-semibold text-[#e7bd63] sm:text-6xl">
                    90
                  </p>

                  <p className="mt-1 text-lg font-medium text-[#fff4df]">
                    दिन
                  </p>
                </div>

                <p className="mt-5 max-w-xs text-sm leading-7 text-[#d9c6a5]">
                  माला एवं कवच सेवा से संबंधित वापसी एवं शुल्क वापसी का
                  प्रावधान।
                </p>
              </div>
            </div>

            {/* Right information panel */}
            <div className="p-7 sm:p-9 lg:p-12">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7f1d1d]/10 text-[#7f1d1d]">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#4a1111]">
                    90 दिनों की सेवा व्यवस्था
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#665346] sm:text-base">
                    {returnPolicy.description}
                  </p>
                </div>
              </div>

              {/* Conditions */}
              <div className="mt-7 rounded-2xl border border-[#d6a23a]/25 bg-[#fffaf0] p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-[#9b6b16]" />

                  <div>
                    <h4 className="font-semibold text-[#4a1111]">
                      नियम एवं शर्तें
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-[#6d5b4d]">
                      {returnPolicy.note}
                    </p>
                  </div>
                </div>
              </div>

              {/* Important note */}
              <p className="mt-6 text-xs leading-6 text-[#806f60]">
                वापसी एवं सेवा शुल्क वापसी की प्रक्रिया के लिए संस्था द्वारा
                निर्धारित नियमों एवं प्रक्रिया का पालन करना आवश्यक होगा।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReturnRefundInfo;