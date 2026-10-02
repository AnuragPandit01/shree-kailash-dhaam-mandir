import {
  BookOpen,
  GraduationCap,
  ScrollText,
  Sparkles,
} from "lucide-react";

function VedicEducation() {
  const learningAreas = [
    {
      icon: BookOpen,
      title: "वेद एवं मंत्र अध्ययन",
      description:
        "वेद मंत्रों, संस्कृत उच्चारण और वैदिक पाठ से संबंधित शिक्षा यहां प्रस्तुत की जाएगी।",
    },
    {
      icon: ScrollText,
      title: "कर्मकांड प्रशिक्षण",
      description:
        "पूजा, अनुष्ठान एवं पारंपरिक धार्मिक विधियों के प्रशिक्षण से संबंधित जानकारी यहां जोड़ी जाएगी।",
    },
    {
      icon: GraduationCap,
      title: "धार्मिक संस्कार",
      description:
        "विभिन्न संस्कारों एवं उनसे संबंधित धार्मिक परंपराओं के अध्ययन की जानकारी यहां प्रस्तुत की जाएगी।",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fffaf2] py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full border border-[#c99a3d]/10" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-64 w-64 rounded-full border border-[#c99a3d]/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6b1f2a] text-[#e4bb5b]">
                <GraduationCap size={19} />
              </span>

              <span className="text-sm font-semibold tracking-[0.2em] text-[#7a2732]">
                वैदिक शिक्षा
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-[1.15] text-[#321b1e] sm:text-4xl lg:text-5xl">
              ज्ञान से संस्कार तक,
              <span className="block text-[#6b1f2a]">
                परंपरा से पीढ़ी तक
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-base leading-8 text-[#675659] sm:text-lg">
              मंदिर में संचालित वैदिक शिक्षा एवं कर्मकांड प्रशिक्षण से
              संबंधित आधिकारिक जानकारी यहां प्रस्तुत की जाएगी। इसका
              उद्देश्य आने वाली पीढ़ियों तक वैदिक ज्ञान और धार्मिक
              परंपराओं को पहुंचाने की जानकारी साझा करना है।
            </p>
          </div>
        </div>

        {/* Sanskrit statement */}
        <div className="mx-auto mt-12 max-w-4xl border-y border-[#d9c7a4] px-5 py-8 text-center sm:mt-16 sm:px-10">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#c99a3d]" />
            <Sparkles size={15} className="text-[#9a7425]" />
            <span className="h-px w-8 bg-[#c99a3d]" />
          </div>

          <p className="font-serif text-xl leading-relaxed text-[#6b1f2a] sm:text-2xl lg:text-3xl">
            विद्या ददाति विनयं ॥
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#756366]">
            विद्या मनुष्य को विनम्रता प्रदान करती है।
          </p>
        </div>

        {/* Main educational feature */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:mt-16 lg:gap-12">
          {/* Image / visual panel */}
          <div className="relative min-h-[360px] overflow-hidden border border-[#d9c7a4] bg-[#e8dfd0] sm:min-h-[460px]">
            <img
              src="/images/temple/vedic-education.webp"
              alt="वैदिक शिक्षा एवं कर्मकांड प्रशिक्षण"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#321b1e]/85 via-[#321b1e]/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#e3bd5c]">
                ज्ञान • संस्कार • परंपरा
              </p>

              <h3 className="mt-2 font-serif text-2xl text-[#fff4d8] sm:text-3xl">
                वैदिक अध्ययन एवं प्रशिक्षण
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#f0dfc1]">
                कक्षाओं, प्रशिक्षण पद्धति और अध्ययन विषयों से संबंधित
                वास्तविक जानकारी मंदिर प्रबंधन द्वारा उपलब्ध कराए जाने
                के बाद यहां प्रदर्शित की जाएगी।
              </p>
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#9a7425]">
              शिक्षा के प्रमुख क्षेत्र
            </p>

            <h3 className="mt-3 font-serif text-2xl text-[#321b1e] sm:text-3xl">
              वैदिक परंपरा का अध्ययन
            </h3>

            <div className="mt-6 space-y-4">
              {learningAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group flex gap-4 border border-[#d9c7a4] bg-[#f8f0e3] p-5 transition-all duration-300 hover:border-[#c99a3d]/70 hover:shadow-[0_12px_30px_rgba(61,31,25,0.06)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c99a3d]/50 bg-[#fffaf2] text-[#6b1f2a]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h4 className="font-serif text-xl text-[#6b1f2a]">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-[#675659]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
}

export default VedicEducation;