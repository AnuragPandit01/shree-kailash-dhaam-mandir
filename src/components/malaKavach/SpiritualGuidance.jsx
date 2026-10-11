import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Moon,
  Sparkles,
} from "lucide-react";
import malaKavachData from "../../data/malaKavach";

function SpiritualGuidance() {
  const { spiritualGuidance } = malaKavachData;

  return (
    <section className="relative overflow-hidden bg-[#f8f0df] py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border border-[#7f1d1d]/10" />

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full border border-[#d6a23a]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6a23a]" />

            <span className="h-1.5 w-1.5 rotate-45 bg-[#d6a23a]" />

            <span className="h-px w-10 bg-[#d6a23a]" />
          </div>

          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#9b6b16]">
            धार्मिक मार्गदर्शन
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#4a1111] sm:text-4xl lg:text-5xl">
            {spiritualGuidance.title}
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6d5b4d] sm:text-lg">
            {spiritualGuidance.description}
          </p>
        </div>

        {/* Main content */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-7 lg:grid-cols-[1fr_1.1fr]">
          {/* Guidance card */}
          <div className="relative overflow-hidden rounded-3xl bg-[#4a1111] p-7 text-[#fff4df] shadow-[0_18px_45px_rgba(74,17,17,0.13)] sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full border border-[#d6a23a]/15" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6a23a]/10 text-[#e7bd63]">
                <BookOpen className="h-7 w-7" />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-semibold text-[#fff8ea]">
                पाठ एवं पूजा-पद्धति
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#e5d3b4] sm:text-base">
                {spiritualGuidance.guidance}
              </p>

              {/* Timing */}
              <div className="mt-7 flex items-start gap-4 rounded-2xl border border-[#d6a23a]/20 bg-white/5 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6a23a]/10 text-[#e7bd63]">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#fff4df]">
                    पाठ का समय
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-[#d9c6a5]">
                    24 घंटे में दो बार पाठ करने का निर्देश दिया गया है।
                  </p>
                </div>
              </div>

              {/* Religious note */}
              <div className="mt-6 flex items-start gap-3 border-t border-[#d6a23a]/15 pt-6">
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#e7bd63]" />

                <p className="text-xs leading-6 text-[#cdbb9d] sm:text-sm">
                  हम इस जानकारी को धार्मिक एवं आध्यात्मिक सेवा के संदर्भ में
                  प्रस्तुत करते हैं।
                </p>
              </div>
            </div>
          </div>

          {/* Places / occasions */}
          <div className="rounded-3xl border border-[#e5d4b4] bg-[#fffdf8] p-7 shadow-[0_12px_35px_rgba(74,17,17,0.06)] sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7f1d1d]/10 text-[#7f1d1d]">
              <Moon className="h-7 w-7" />
            </div>

            <h3 className="mt-6 font-serif text-2xl font-semibold text-[#4a1111]">
              पाठ के लिए बताए गए स्थान एवं अवसर
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {spiritualGuidance.places.map((place) => (
                <div
                  key={place}
                  className="flex items-start gap-3 rounded-2xl border border-[#eadfc9] bg-[#fffaf0] px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#9b6b16]" />

                  <span className="text-sm leading-6 text-[#5f5146]">
                    {place}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-[#d6a23a]/25 bg-[#f8f0df] p-5">
              <p className="text-sm leading-7 text-[#665346]">
                हमारी सेवा सामग्री में दिए गए धार्मिक निर्देशों का पालन करते
                हुए पाठ एवं पूजा-पद्धति को अपनाने का अनुरोध किया जाता है।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpiritualGuidance;