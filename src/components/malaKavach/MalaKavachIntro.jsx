import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import malaKavachData from "../../data/malaKavach";

function MalaKavachIntro() {
  const { intro } = malaKavachData;

  return (
    <section
      id="mala-kavach-seva"
      className="relative overflow-hidden bg-[#fffaf0] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full border border-[#d6a23a]/10" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full border border-[#7f1d1d]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6a23a]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d6a23a]" />
            <span className="h-px w-10 bg-[#d6a23a]" />
          </div>

          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#9b6b16]">
            हमारी धार्मिक सेवा
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#4a1111] sm:text-4xl lg:text-5xl">
            {intro.title}
          </h2>
        </div>

        {/* Main content */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          {/* Intro text */}
          <div className="rounded-3xl border border-[#ead9b9] bg-white p-7 shadow-[0_15px_45px_rgba(74,17,17,0.07)] sm:p-9">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7f1d1d]/10 text-[#7f1d1d]">
              <HeartHandshake className="h-6 w-6" />
            </div>

            <p className="text-base leading-8 text-[#5f5146] sm:text-lg sm:leading-9">
              {intro.description}
            </p>

            <div className="mt-7 border-t border-[#ead9b9] pt-6">
              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6a23a]/15 text-[#9b6b16]">
                  <Sparkles className="h-5 w-5" />
                </div>

                <p className="text-sm leading-7 text-[#6d5b4d] sm:text-base">
                  {intro.note}
                </p>
              </div>
            </div>
          </div>

          {/* Service highlights */}
          <div className="relative overflow-hidden rounded-3xl bg-[#4a1111] p-7 text-[#fff4df] shadow-[0_15px_45px_rgba(74,17,17,0.15)] sm:p-9">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#d6a23a]/20" />
            <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full border border-[#d6a23a]/10" />

            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6a23a]/15 text-[#e7bd63]">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#fff8ea]">
                हमारी सेवा का स्वरूप
              </h3>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#e7bd63]" />
                  <p className="text-sm leading-7 text-[#ead8b9] sm:text-base">
                    हम माला एवं कवच को धार्मिक एवं आध्यात्मिक सेवा के रूप में
                    उपलब्ध कराते हैं।
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#e7bd63]" />
                  <p className="text-sm leading-7 text-[#ead8b9] sm:text-base">
                    हमारी सेवा विभिन्न आवश्यकताओं के अनुसार अलग-अलग माला एवं
                    कवच के विकल्पों के साथ उपलब्ध है।
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#e7bd63]" />
                  <p className="text-sm leading-7 text-[#ead8b9] sm:text-base">
                    सेवा प्राप्त करने के लिए हम पंजीकरण की सुविधा उपलब्ध
                    कराते हैं।
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-[#d6a23a]/20 pt-6">
                <p className="text-xs leading-6 text-[#d9c6a5] sm:text-sm">
                  हमारी माला एवं कवच सेवा से संबंधित धार्मिक मान्यताओं एवं
                  निर्देशों को इसी सेवा के संदर्भ में समझें।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MalaKavachIntro;