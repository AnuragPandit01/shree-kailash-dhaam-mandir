import {
  CalendarDays,
  Clock3,
  ClipboardCheck,
  PhoneCall,
  AlertCircle,
} from "lucide-react";

function RitualTimings() {
  const steps = [
    {
      number: "०१",
      icon: CalendarDays,
      title: "तिथि का अनुरोध",
      description:
        "अपनी पूजा, संस्कार या धार्मिक आयोजन के लिए इच्छित तिथि की जानकारी पंजीकरण के समय दर्ज करें।",
    },
    {
      number: "०२",
      icon: Clock3,
      title: "पूर्व सूचना",
      description:
        "मंदिर परिसर में पूजा या अनुष्ठान आयोजित करने के लिए निर्धारित व्यवस्था के अनुसार कम से कम 48 घंटे पहले सूचना देना आवश्यक है।",
    },
    {
      number: "०३",
      icon: ClipboardCheck,
      title: "पंजीकरण अनुरोध",
      description:
        "आवश्यक भक्त एवं आयोजन संबंधी जानकारी भरकर ऑनलाइन पंजीकरण अनुरोध प्रस्तुत करें।",
    },
    {
      number: "०४",
      icon: PhoneCall,
      title: "मंदिर प्रबंधन से संपर्क",
      description:
        "उपलब्धता, तिथि, समय एवं आयोजन संबंधी आवश्यक जानकारी के लिए मंदिर प्रबंधन द्वारा संपर्क किया जाएगा।",
    },
  ];

  return (
    <section className="bg-[#f5eee2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c99a3d]" />

            <span className="font-serif text-lg text-[#9a7425]">
              ॐ
            </span>

            <span className="h-px w-10 bg-[#c99a3d]" />
          </div>

          <p className="text-sm font-semibold tracking-[0.18em] text-[#7a2732]">
            तिथि एवं आयोजन
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-[#321b1e] sm:text-4xl lg:text-5xl">
            पूजा एवं संस्कार की
            <span className="block text-[#6b1f2a]">
              तिथि एवं समय व्यवस्था
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#675659] sm:text-lg">
            पूजा, संस्कार एवं धार्मिक आयोजनों के लिए तिथि एवं समय
            मंदिर की उपलब्धता तथा वर्तमान आयोजन व्यवस्था के अनुसार
            निर्धारित किए जाते हैं।
          </p>
        </div>

        {/* =====================================================
            PROCESS STEPS
        ====================================================== */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative border border-[#d9c7a4] bg-[#fffaf2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c99a3d] hover:shadow-[0_14px_35px_rgba(107,31,42,0.08)] sm:p-7"
              >
                {/* Step number + icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6b1f2a] text-[#e4bb5b] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={19} />
                  </div>

                  <span className="font-serif text-xl text-[#c99a3d]">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 font-serif text-xl text-[#321b1e]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#675659]">
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 h-px w-10 bg-[#c99a3d]/60 transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>

        {/* =====================================================
            48 HOUR NOTICE
        ====================================================== */}

        <div className="mx-auto mt-10 max-w-4xl border border-[#d9c7a4] bg-[#fffaf2] px-6 py-5 sm:mt-12 sm:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6b1f2a] text-[#e4bb5b]">
              <AlertCircle size={18} />
            </div>

            <div>
              <p className="font-semibold text-[#6b1f2a]">
                48 घंटे पूर्व सूचना
              </p>

              <p className="mt-1 text-sm leading-7 text-[#675659] sm:text-base">
                मंदिर परिसर में किसी भी छोटे या बड़े पूजा, अनुष्ठान या
                धार्मिक आयोजन के लिए मंदिर संस्था के कार्यालय को
                कम से कम 48 घंटे पहले सूचित करने का अनुरोध किया गया है।
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CONFIRMATION NOTE
        ====================================================== */}

        <div className="mx-auto mt-5 max-w-4xl border-l-2 border-[#c99a3d] bg-[#fffaf2] px-6 py-5 sm:px-8">
          <p className="text-sm leading-7 text-[#675659] sm:text-base">
            <span className="font-semibold text-[#6b1f2a]">
              ध्यान दें:
            </span>{" "}
            पंजीकरण अनुरोध प्राप्त होना आयोजन की अंतिम पुष्टि नहीं है।
            तिथि, समय एवं अन्य आवश्यक व्यवस्थाओं की पुष्टि मंदिर
            प्रबंधन द्वारा उपलब्धता के अनुसार की जाएगी।
          </p>
        </div>

      </div>
    </section>
  );
}

export default RitualTimings;