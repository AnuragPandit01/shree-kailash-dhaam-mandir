import { Flower2, HeartHandshake, Sparkles } from "lucide-react";

function RitualIntro() {
  const highlights = [
    {
      icon: Flower2,
      title: "पूजा एवं आराधना",
      description:
        "भगवान शिव की आराधना तथा विभिन्न धार्मिक पूजा एवं अनुष्ठानों की परंपरा।",
    },
    {
      icon: Sparkles,
      title: "धार्मिक संस्कार",
      description:
        "विवाह, मुंडन तथा अन्य धार्मिक संस्कारों से जुड़े आयोजन एवं अनुष्ठान।",
    },
    {
      icon: HeartHandshake,
      title: "श्रद्धा एवं सेवा",
      description:
        "धार्मिक आयोजनों, सामूहिक कार्यक्रमों और सेवा-भाव से जुड़े कार्यों में सहभागिता।",
    },
  ];

  return (
    <section className="bg-[#f5eee2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            INTRO
        ===================================================== */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          {/* Left — Content */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c99a3d]" />

              <span className="text-sm font-semibold tracking-[0.18em] text-[#7a2732]">
                धार्मिक परंपरा
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-tight text-[#321b1e] sm:text-4xl lg:text-5xl">
              श्रद्धा से जुड़े
              <span className="block text-[#6b1f2a]">
                पूजा एवं संस्कार
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#675659] sm:text-lg">
              श्री कैलाश धाम मंदिर में पूजा, धार्मिक संस्कार एवं विभिन्न
              अनुष्ठान श्रद्धा और धार्मिक परंपराओं के अनुरूप आयोजित किए जाते
              हैं। मंदिर से जुड़े धार्मिक आयोजनों में विवाह संस्कार, मुंडन,
              रुद्राभिषेक, कथा तथा अन्य मांगलिक एवं धार्मिक कार्यक्रम शामिल
              हैं।
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#756366] sm:text-base">
              धार्मिक आयोजन की तिथि, समय और आवश्यक व्यवस्था मंदिर की उपलब्धता
              तथा वर्तमान आयोजन व्यवस्था के अनुसार निर्धारित की जाती है।
              आवश्यक होने पर आयोजन से पूर्व पंजीकरण एवं मंदिर प्रबंधन से
              संपर्क किया जाता है।
            </p>
          </div>

          {/* Right — Sanskrit Quote */}
          <div className="relative overflow-hidden border border-[#d9c7a4] bg-[#fffaf2] p-7 sm:p-9 lg:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#c99a3d]/15"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full border border-[#c99a3d]/10"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#c99a3d]" />

                <span className="font-serif text-lg text-[#9a7425]">
                  ॐ
                </span>

                <span className="h-px w-8 bg-[#c99a3d]" />
              </div>

              <p className="mt-7 font-serif text-2xl leading-relaxed text-[#6b1f2a] sm:text-3xl">
                यज्ञदानतपःकर्म
                <br />
                न त्याज्यं कार्यमेव तत् ॥
              </p>

              <p className="mt-5 text-sm leading-7 text-[#675659]">
                यज्ञ, दान और तप जैसे धार्मिक कर्मों का त्याग नहीं करना
                चाहिए; उनका उचित रूप से पालन करना चाहिए।
              </p>

              <p className="mt-3 text-xs font-medium text-[#9a7425]">
                — श्रीमद्भगवद्गीता १८.५
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            HIGHLIGHTS
        ===================================================== */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16 lg:gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="border border-[#d9c7a4] bg-[#fffaf2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c99a3d]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6b1f2a] text-[#e4bb5b]">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 font-serif text-xl text-[#321b1e]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#675659]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RitualIntro;