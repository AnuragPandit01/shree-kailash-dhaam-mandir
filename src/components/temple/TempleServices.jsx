import {
  CalendarDays,
  HeartHandshake,
  Landmark,
  Sparkles,
} from "lucide-react";

function TempleServices() {
  const services = [
    {
      icon: Sparkles,
      number: "०१",
      title: "पूजा एवं अनुष्ठान",
      description:
        "मंदिर में भगवान शिव की आराधना से जुड़े विभिन्न पूजा-पाठ एवं धार्मिक अनुष्ठान आयोजित किए जाते हैं। इनमें रुद्राभिषेक, श्री सत्यनारायण कथा, विशेष पूजा तथा अन्य धार्मिक अनुष्ठान शामिल हैं।",
      items: [
        "रुद्राभिषेक",
        "श्री सत्यनारायण कथा",
        "विशेष पूजा",
        "अन्य धार्मिक अनुष्ठान",
      ],
    },
    {
      icon: HeartHandshake,
      number: "०२",
      title: "धार्मिक संस्कार",
      description:
        "मंदिर श्रद्धालुओं के जीवन से जुड़े विभिन्न धार्मिक संस्कारों के आयोजन में भी सेवा प्रदान करता है। उपलब्ध जानकारी के अनुसार विवाह एवं मुंडन संस्कार प्रमुख सेवाओं में शामिल हैं।",
      items: [
        "विवाह संस्कार",
        "मुंडन संस्कार",
        "धार्मिक संस्कार",
        "अनुष्ठान संबंधी सेवा",
      ],
    },
    {
      icon: CalendarDays,
      number: "०३",
      title: "धार्मिक कार्यक्रम",
      description:
        "धार्मिक उत्सवों और सामूहिक आयोजनों के माध्यम से श्रद्धालुओं को मंदिर की आध्यात्मिक एवं सांस्कृतिक गतिविधियों से जोड़ा जाता है। भजन, संकीर्तन, देवी जागरण, भंडारा और प्रसाद वितरण जैसे आयोजन इनमें शामिल हैं।",
      items: [
        "भजन एवं संकीर्तन",
        "देवी जागरण",
        "भंडारा",
        "प्रसाद वितरण",
      ],
    },
    {
      icon: Landmark,
      number: "०४",
      title: "सेवा एवं जनकल्याण",
      description:
        "मंदिर की सेवा भावना धार्मिक गतिविधियों के साथ जनकल्याणकारी सहयोग से भी जुड़ी है। उपलब्ध जानकारी में अन्नदान, वस्त्रदान, शिक्षादान, प्रसाद सेवा और धार्मिक सेवा जैसी गतिविधियों का उल्लेख मिलता है।",
      items: [
        "अन्नदान",
        "वस्त्रदान",
        "शिक्षादान",
        "जनकल्याणकारी सहयोग",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#3d1119] py-16 text-[#fff8e9] sm:py-20 lg:py-24">
      {/* =====================================================
          DECORATIVE ELEMENTS
          ===================================================== */}
      <div
        className="pointer-events-none absolute -right-32 top-16 h-72 w-72 rounded-full border border-[#d5a64a]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full border border-[#d5a64a]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[10%] top-[35%] font-serif text-[140px] text-[#d5a64a]/[0.025]"
        aria-hidden="true"
      >
        ॐ
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADING
            ===================================================== */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-px w-10 bg-[#d5a64a]"
                aria-hidden="true"
              />

              <span className="text-sm font-semibold tracking-[0.2em] text-[#e3bd5c]">
                धार्मिक गतिविधियां
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-[1.15] text-[#fff1c9] sm:text-4xl lg:text-5xl">
              सेवा, साधना और
              <span className="block text-[#e3bd5c]">
                धार्मिक परंपरा
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-base leading-8 text-[#ead9b8] sm:text-lg">
              श्री कैलाश धाम मंदिर की धार्मिक गतिविधियों में पूजा,
              अनुष्ठान, संस्कार, धार्मिक आयोजन और सेवा-भाव से जुड़ी
              विभिन्न गतिविधियाँ शामिल हैं। इन सेवाओं के माध्यम से
              श्रद्धालु मंदिर की धार्मिक परंपराओं और सामूहिक आध्यात्मिक
              जीवन से जुड़े रहते हैं।
            </p>
          </div>
        </div>

        {/* =====================================================
            SANSKRIT DIVIDER
            ===================================================== */}
        <div className="mx-auto mt-12 max-w-4xl border-y border-[#d5a64a]/30 px-5 py-7 text-center sm:mt-16 sm:px-10">
          <p className="font-serif text-xl leading-relaxed text-[#f1c967] sm:text-2xl lg:text-3xl">
            लोकाः समस्ताः सुखिनो भवन्तु ॥
          </p>

          <p className="mt-2 text-sm leading-6 text-[#d9c7a4]">
            समस्त लोक सुखी और मंगलमय हों।
          </p>
        </div>

        {/* =====================================================
            SERVICES
            ===================================================== */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex h-full flex-col border border-[#d5a64a]/25 bg-[#4c1620] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d5a64a]/60 hover:bg-[#541923] sm:p-7"
              >
                {/* Number + icon */}
                <div className="flex items-start justify-between gap-4">
                  <span className="font-serif text-4xl leading-none text-[#d5a64a]/35">
                    {service.number}
                  </span>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d5a64a]/40 text-[#e3bd5c]">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                </div>

                <div className="my-6 h-px w-10 bg-[#d5a64a]" />

                {/* Title */}
                <h3 className="font-serif text-xl text-[#fff1c9] sm:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-[#dbcdb5]">
                  {service.description}
                </p>

                {/* Service list */}
                <div className="mt-6 border-t border-[#d5a64a]/15 pt-5">
                  <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-[#e3bd5c]">
                    प्रमुख सेवाएँ
                  </p>

                  <ul className="space-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#eadcc5]"
                      >
                        <span
                          className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d5a64a]"
                          aria-hidden="true"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            ADDITIONAL RELIGIOUS ACTIVITIES
            ===================================================== */}
        <div className="mx-auto mt-12 max-w-5xl border border-[#d5a64a]/25 bg-[#45141d] px-6 py-7 sm:px-8 sm:py-8">
          <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#e3bd5c]">
                अन्य धार्मिक आयोजन
              </p>

              <h3 className="mt-2 font-serif text-2xl text-[#fff1c9] sm:text-3xl">
                भक्ति और सामूहिक सहभागिता
              </h3>
            </div>

            <div>
              <p className="text-sm leading-7 text-[#dbcdb5] sm:text-base">
                उपलब्ध मंदिर जानकारी में निशान चढ़ाना, जन्मदिन एवं अन्य
                धार्मिक आयोजन जैसी गतिविधियों का भी उल्लेख है। इन आयोजनों
                का स्वरूप अवसर और मंदिर की व्यवस्था के अनुसार अलग हो सकता
                है।
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "निशान चढ़ाना",
                  "जन्मदिन के धार्मिक आयोजन",
                  "भजन",
                  "संकीर्तन",
                  "भंडारा",
                  "प्रसाद सेवा",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-[#d5a64a]/25 bg-[#531923] px-3 py-1.5 text-xs text-[#ead9b8]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING NOTE
            ===================================================== */}
        <div className="mt-10 border-l-2 border-[#d5a64a] pl-5 sm:mt-12">
          <p className="text-sm leading-7 text-[#ddceb1] sm:text-base">
            पूजा, संस्कार और अन्य धार्मिक सेवाओं की उपलब्धता, तिथि,
            समय तथा आवश्यक व्यवस्थाएँ मंदिर की वर्तमान व्यवस्था और
            संबंधित आयोजन के अनुसार निर्धारित की जाएंगी।
          </p>
        </div>
      </div>
    </section>
  );
}

export default TempleServices;