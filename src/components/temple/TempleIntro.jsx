import {
  Flower2,
  Landmark,
  Sparkles,
} from "lucide-react";


function TempleIntro() {
  const templeServices = [
    "विवाह संस्कार",
    "मुंडन संस्कार",
    "रुद्राभिषेक",
    "श्री सत्यनारायण कथा",
    "भजन एवं संकीर्तन",
    "विशेष पूजा एवं धार्मिक अनुष्ठान",
  ];

  return (
    <section
      id="temple-introduction"
      className="relative overflow-hidden bg-[var(--color-cream)] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle decorative background */}
      <div
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#c99a3d]/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#6b1f2a]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* =====================================================
              IMAGE
              ===================================================== */}
          <div className="relative min-w-0">
            <div className="relative overflow-hidden border border-[#c99a3d]/50 bg-[#dfceb2] p-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/temple/temple-main.jpg"
                  alt="श्री कैलाश धाम मंदिर"
                  className="block h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                />

                {/* Image overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-[#e4bb5b]">
                        पावन धाम
                      </p>

                      <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                        श्री कैलाश धाम मंदिर
                      </p>
                    </div>

                    <div
                      className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e4bb5b]/60 bg-black/20 text-[#e4bb5b] sm:flex"
                      aria-hidden="true"
                    >
                      <span className="text-lg">ॐ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small heritage label */}
            <div className="absolute -bottom-9 left-3 border border-[#c99a3d]/40 bg-[#fffaf1] px-5 py-3 shadow-[0_10px_30px_rgba(50,27,30,0.08)] sm:left-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#9a7425]">
                मंदिर की पहचान
              </p>

              <p className="mt-1 font-serif text-sm text-[#6b1f2a] sm:text-base">
                आस्था • सेवा • संस्कार
              </p>
            </div>
          </div>

          {/* =====================================================
              CONTENT
              ===================================================== */}
          <div className="min-w-0">
            {/* Section label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6b1f2a] text-[#e4bb5b]">
                <Landmark size={19} aria-hidden="true" />
              </span>

              <span className="text-sm font-semibold tracking-[0.18em] text-[#7a2732]">
                मंदिर परिचय
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl leading-[1.2] text-[#321b1e] sm:text-4xl lg:text-5xl">
              श्रद्धा, परंपरा और
              <span className="block text-[#6b1f2a]">
                आध्यात्मिक संस्कार
              </span>
            </h2>

            {/* Sanskrit divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px w-12 bg-[#c99a3d]" />

              <span className="font-serif text-lg text-[#9a7425]">
                ॥ श्रीः ॥
              </span>

              <div className="h-px flex-1 bg-[#d9c7a4]" />
            </div>

            {/* Main introduction */}
            <p className="text-base leading-8 text-[#5d4a4d] sm:text-lg">
              श्री कैलाश धाम मंदिर भगवान शिव की आराधना, धार्मिक
              अनुष्ठानों और सनातन परंपराओं से जुड़ा एक पावन धार्मिक
              स्थल है। मंदिर का उद्देश्य श्रद्धालुओं को पूजा, संस्कार,
              धार्मिक आयोजन और सेवा के माध्यम से आध्यात्मिक अनुभव से
              जोड़ना है।
            </p>

            <p className="mt-5 text-base leading-8 text-[#5d4a4d]">
              उपलब्ध मंदिर जानकारी के अनुसार यहां विवाह संस्कार, मुंडन
              संस्कार, रुद्राभिषेक, श्री सत्यनारायण कथा, भजन-संकीर्तन,
              भंडारा, प्रसाद वितरण तथा अन्य विशेष पूजा एवं धार्मिक
              अनुष्ठान आयोजित किए जाते हैं।
            </p>

            {/* =====================================================
                TEMPLE IDENTITY / ESTABLISHMENT
                ===================================================== */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-[#d9c7a4] bg-[#fffaf1] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6b1f2a]/10 text-[#6b1f2a]">
                    <Landmark size={17} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-[#9a7425]">
                      स्थापना
                    </p>

                    <p className="mt-1 font-serif text-xl text-[#321b1e]">
                      २००० ई.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[#d9c7a4] bg-[#fffaf1] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6b1f2a]/10 text-[#6b1f2a]">
                    <Flower2 size={17} aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-[#9a7425]">
                      धार्मिक गतिविधियाँ
                    </p>

                    <p className="mt-1 font-serif text-xl text-[#321b1e]">
                      पूजा • संस्कार • सेवा
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                SERVICES
                ===================================================== */}
            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <Sparkles
                  size={17}
                  className="text-[#c99a3d]"
                  aria-hidden="true"
                />

                <h3 className="font-serif text-xl text-[#321b1e] sm:text-2xl">
                  धार्मिक सेवाएँ एवं अनुष्ठान
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {templeServices.map((service) => (
                  <span
                    key={service}
                    className="border border-[#d9c7a4] bg-[#fffaf1] px-3.5 py-2 text-sm text-[#5d4a4d]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* =====================================================
                SANSKRIT QUOTE
                ===================================================== */}
            <div className="mt-9 border-l-2 border-[#c99a3d] pl-5">
              <p className="font-serif text-xl leading-relaxed text-[#6b1f2a] sm:text-2xl">
                आ नो भद्राः क्रतवो यन्तु विश्वतः ॥
              </p>

              <p className="mt-2 max-w-xl text-sm leading-7 text-[#756366]">
                हमारे पास सभी दिशाओं से कल्याणकारी विचार आते रहें।
              </p>

              <p className="mt-2 text-xs tracking-wide text-[#9a7425]">
                — ऋग्वेद १.८९.१
              </p>
            </div>

            
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default TempleIntro;