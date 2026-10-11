import { Flame, Droplets, Heart, Sparkles } from "lucide-react";
import malaKavachData from "../../data/malaKavach";

function SpiritualBelief() {
  const { spiritualBelief } = malaKavachData;

  return (
    <section className="relative overflow-hidden bg-[#fffaf0] py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full border border-[#d6a23a]/10" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full border border-[#7f1d1d]/10" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6a23a]" />

            <span className="h-1.5 w-1.5 rotate-45 bg-[#d6a23a]" />

            <span className="h-px w-10 bg-[#d6a23a]" />
          </div>

          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#9b6b16]">
            हमारी धार्मिक मान्यता
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#4a1111] sm:text-4xl lg:text-5xl">
            {spiritualBelief.title}
          </h2>
        </div>

        {/* Main content */}
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-[#e5d4b4] bg-white shadow-[0_18px_50px_rgba(74,17,17,0.08)]">
          {/* Top visual strip */}
          <div className="relative overflow-hidden bg-[#4a1111] px-6 py-10 sm:px-10">
            <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full border border-[#d6a23a]/15" />

            <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full border border-[#d6a23a]/10" />

            <div className="relative flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {/* Sacred setting */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d6a23a]/30 bg-[#d6a23a]/10 text-[#e7bd63]">
                  <Droplets className="h-6 w-6" />
                </div>

                <span className="mt-3 text-sm text-[#ead8b9]">
                  माँ गंगा त्रिवेणी
                </span>
              </div>

              <div className="hidden h-px w-12 bg-[#d6a23a]/30 sm:block" />

              {/* Vedic rituals */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d6a23a]/30 bg-[#d6a23a]/10 text-[#e7bd63]">
                  <Flame className="h-6 w-6" />
                </div>

                <span className="mt-3 text-sm text-[#ead8b9]">
                  वैदिक मंत्र एवं हवन
                </span>
              </div>

              <div className="hidden h-px w-12 bg-[#d6a23a]/30 sm:block" />

              {/* Devotional purpose */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d6a23a]/30 bg-[#d6a23a]/10 text-[#e7bd63]">
                  <Heart className="h-6 w-6" />
                </div>

                <span className="mt-3 text-sm text-[#ead8b9]">
                  परिवार की सुख-समृद्धि
                </span>
              </div>
            </div>
          </div>

          {/* Belief content */}
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7f1d1d]/10 text-[#7f1d1d]">
                <Sparkles className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-[#4a1111] sm:text-2xl">
                  हमारी मान्यता
                </h3>

                <p className="mt-4 text-sm leading-8 text-[#5f5146] sm:text-base sm:leading-9">
                  {spiritualBelief.description}
                </p>
              </div>
            </div>

            {/* Belief statement */}
            <div className="mt-8 rounded-2xl border border-[#d6a23a]/25 bg-[#fffaf0] p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6a23a]/15 text-[#9b6b16]">
                  <Heart className="h-5 w-5" />
                </div>

                <p className="text-sm leading-8 text-[#665346] sm:text-base sm:leading-8">
                  {spiritualBelief.belief}
                </p>
              </div>
            </div>

            {/* Closing note */}
            <div className="mt-7 border-t border-[#ead9b9] pt-6">
              <p className="text-center text-xs leading-6 text-[#806f60] sm:text-sm">
                हम इस सेवा से संबंधित जानकारी को अपनी धार्मिक एवं आध्यात्मिक
                मान्यताओं के संदर्भ में प्रस्तुत करते हैं।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpiritualBelief;