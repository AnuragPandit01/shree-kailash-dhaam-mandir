import {
  Baby,
  BookOpen,
  CalendarHeart,
  CakeSlice,
  Flame,
  Flower2,
  Heart,
  Flag,
  HandHeart,
  Sparkles,
  Utensils,
} from "lucide-react";

import RitualCard from "./RitualCard";

function RitualGrid() {
  const rituals = [
    {
      number: "०१",
      title: "विवाह संस्कार",
      description:
        "शादी-विवाह से जुड़े धार्मिक अनुष्ठानों, पूजा एवं मंदिर परिसर में उपलब्ध धार्मिक व्यवस्था के लिए सेवा।",
      icon: CalendarHeart,
      image: "/images/rituals/vivah.png",
    },
    {
      number: "०२",
      title: "मुंडन संस्कार",
      description:
        "मुंडन संस्कार से संबंधित धार्मिक परंपरा, पूजा एवं संस्कार संबंधी व्यवस्था।",
      icon: Baby,
      image: "/images/rituals/mundan.webp",
    },
    {
      number: "०३",
      title: "रुद्राभिषेक",
      description:
        "भगवान शिव की आराधना एवं रुद्राभिषेक से संबंधित प्रमुख धार्मिक अनुष्ठान।",
      icon: Flame,
      image: "/images/rituals/rudrabhishek.webp",
    },
    {
      number: "०४",
      title: "श्री सत्यनारायण कथा",
      description:
        "श्री सत्यनारायण भगवान की पूजा एवं कथा से संबंधित धार्मिक आयोजन।",
      icon: BookOpen,
      image: "/images/rituals/satyanarayan-katha.webp",
    },
    {
      number: "०५",
      title: "विशेष पूजा",
      description:
        "विशेष अवसरों एवं धार्मिक आवश्यकताओं के अनुसार उपलब्ध व्यवस्था के अंतर्गत आयोजित पूजा।",
      icon: Flower2,
      image: "/images/rituals/special-puja.webp",
    },
    {
      number: "०६",
      title: "अन्य धार्मिक अनुष्ठान",
      description:
        "अन्य धार्मिक संस्कार एवं अनुष्ठान मंदिर की वर्तमान व्यवस्था एवं उपलब्धता के अनुसार आयोजित किए जा सकते हैं।",
      icon: Sparkles,
      image: "/images/rituals/other-rituals.webp",
    },
  ];

  const additionalServices = [
    {
      icon: CakeSlice,
      title: "जन्मदिन के धार्मिक आयोजन",
      description:
        "जन्मदिन के अवसर पर पूजा एवं अन्य धार्मिक आयोजन की व्यवस्था।",
    },
    {
      icon: Heart,
      title: "शादी की सालगिरह",
      description:
        "विवाह वर्षगांठ के अवसर पर धार्मिक पूजा एवं आयोजन।",
    },
    {
      icon: CalendarHeart,
      title: "शादी की सगाई",
      description:
        "सगाई से जुड़े धार्मिक आयोजन एवं पूजा संबंधी व्यवस्था।",
    },
    {
      icon: Flag,
      title: "निशान चढ़ाना",
      description:
        "धार्मिक परंपरा के अनुसार निशान चढ़ाने से संबंधित सेवा।",
    },
    {
      icon: Utensils,
      title: "भंडारा एवं प्रसाद वितरण",
      description:
        "धार्मिक अवसरों पर भंडारा एवं प्रसाद वितरण से संबंधित सेवा।",
    },
    {
      icon: BookOpen,
      title: "रामचरितमानस पाठ कथा",
      description:
        "सामूहिक श्री रामचरितमानस पाठ एवं कथा से संबंधित धार्मिक आयोजन।",
    },
    {
      icon: Sparkles,
      title: "देवी जागरण एवं संकीर्तन",
      description:
        "श्री देवी जागरण तथा श्री राम-कृष्ण संकीर्तन जैसे सामूहिक धार्मिक कार्यक्रम।",
    },
    {
      icon: HandHeart,
      title: "सामूहिक धार्मिक कार्यक्रम",
      description:
        "भजन, संकीर्तन एवं अन्य जनकल्याणकारी धार्मिक कार्यक्रमों में सहभागिता।",
    },
  ];

  return (
    <section
      id="rituals"
      className="bg-[#fffaf2] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c99a3d]" />

            <span className="text-sm font-semibold tracking-[0.18em] text-[#7a2732]">
              पूजा एवं संस्कार
            </span>
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#321b1e] sm:text-4xl lg:text-5xl">
            प्रमुख धार्मिक
            <span className="block text-[#6b1f2a]">
              पूजा एवं अनुष्ठान
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#675659] sm:text-lg">
            श्री कैलाश धाम मंदिर में उपलब्ध प्रमुख पूजा, धार्मिक संस्कार
            एवं अनुष्ठानों की जानकारी प्राप्त करें। आयोजन की तिथि, समय
            एवं व्यवस्था मंदिर की उपलब्धता एवं वर्तमान व्यवस्था के अनुसार
            निर्धारित की जाएगी।
          </p>
        </div>

        {/* =====================================================
            PRIMARY RITUAL CARDS
        ===================================================== */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {rituals.map((ritual) => (
            <RitualCard
              key={ritual.title}
              number={ritual.number}
              title={ritual.title}
              description={ritual.description}
              icon={ritual.icon}
              image={ritual.image}
            />
          ))}
        </div>

        {/* =====================================================
            ADDITIONAL RELIGIOUS & AUSPICIOUS SERVICES
        ===================================================== */}
        <div className="mt-16 border-t border-[#d9c7a4] pt-12 sm:mt-20 sm:pt-16">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c99a3d]" />

              <span className="text-xs font-semibold tracking-[0.16em] text-[#9a7425] sm:text-sm">
                अन्य धार्मिक आयोजन
              </span>
            </div>

            <h3 className="font-serif text-2xl text-[#321b1e] sm:text-3xl">
              धार्मिक एवं मांगलिक सेवाएँ
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#675659] sm:text-base">
              मंदिर से जुड़े विभिन्न धार्मिक, मांगलिक एवं सामूहिक
              कार्यक्रमों की जानकारी नीचे दी गई है। आयोजन एवं व्यवस्था
              वर्तमान मंदिर प्रबंधन तथा उपलब्धता के अनुसार निर्धारित की जाएगी।
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group border border-[#d9c7a4] bg-[#fdf7ed] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c99a3d] hover:shadow-[0_12px_30px_rgba(107,31,42,0.08)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center border border-[#d9c7a4] bg-[#fffaf2] text-[#7a2732] transition-colors duration-300 group-hover:border-[#c99a3d] group-hover:text-[#9a7425]">
                    <Icon size={18} />
                  </div>

                  <h4 className="mt-4 font-serif text-base leading-6 text-[#6b1f2a]">
                    {service.title}
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-[#756366]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            AVAILABILITY NOTE
        ===================================================== */}
        <div className="mt-10 border border-[#d9c7a4] bg-[#f8f0e3] px-6 py-5 sm:mt-12 sm:px-8">
          <div className="flex gap-3">
            <div
              className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#c99a3d]"
              aria-hidden="true"
            />

            <p className="text-sm leading-7 text-[#675659]">
              <span className="font-semibold text-[#6b1f2a]">
                महत्वपूर्ण:
              </span>{" "}
              किसी भी पूजा, संस्कार या धार्मिक आयोजन की तिथि, समय तथा
              आवश्यक व्यवस्था मंदिर की उपलब्धता एवं वर्तमान व्यवस्था
              के अनुसार निर्धारित की जाएगी। पंजीकरण अनुरोध प्राप्त होना
              आयोजन की अंतिम पुष्टि नहीं माना जाएगा।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RitualGrid;