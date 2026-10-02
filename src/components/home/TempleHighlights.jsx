import {
  CalendarCheck,
  HeartHandshake,
  Landmark,
  Radio,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Landmark,
    number: "०१",
    title: "पावन मंदिर",
    description:
      "श्री कैलाश धाम मंदिर आस्था, भक्ति और सनातन परंपरा से जुड़ा एक पावन धार्मिक स्थल है।",
  },
  {
    icon: Sparkles,
    number: "०२",
    title: "पूजा एवं अनुष्ठान",
    description:
      "विवाह, मुंडन, विशेष पूजा एवं विभिन्न धार्मिक संस्कारों के लिए सुविधाजनक पंजीकरण।",
  },
  {
    icon: CalendarCheck,
    number: "०३",
    title: "सरल पंजीकरण",
    description:
      "अपनी धार्मिक सेवा का चयन करें, उपलब्ध समय चुनें और आसानी से पंजीकरण पूरा करें।",
  },
  {
    icon: Radio,
    number: "०४",
    title: "लाइव दर्शन",
    description:
      "मंदिर से जुड़े रहें और उपलब्ध होने पर घर बैठे लाइव दर्शन का अनुभव प्राप्त करें।",
  },
];

function TempleHighlights() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* सजावटी पृष्ठभूमि */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--color-gold)]/5 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[var(--color-saffron)]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[var(--container-width)] px-4 sm:px-6 lg:px-8">
        {/* =================================================
            सेक्शन परिचय
            ================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-saffron)]">
            <span
              className="h-px w-8 bg-[var(--color-gold)]"
              aria-hidden="true"
            />

            <span>दिव्य ज्योति लिंगेश्वर पंचतल महादेव मन्दिर  </span>

            <span
              className="h-px w-8 bg-[var(--color-gold)]"
              aria-hidden="true"
            />
          </div>

          <h2 className="heading-section mt-4 text-3xl text-[var(--color-maroon)] sm:text-4xl lg:text-5xl">
            आस्था से जुड़ने का पावन अवसर
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--color-ink-light)] sm:text-lg">
            मंदिर की धार्मिक सेवाओं, पूजा-अनुष्ठानों और आध्यात्मिक
            गतिविधियों से सरलता से जुड़ें।
          </p>
        </div>

        {/* =================================================
            मुख्य परिचय
            ================================================= */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          {/* बायाँ परिचय */}
          <div>
            <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-maroon)] p-8 shadow-[var(--shadow-md)] sm:p-10">
              {/* सजावट */}
              <div
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[var(--color-gold-light)]/20"
                aria-hidden="true"
              />

              <div
                className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full border border-[var(--color-gold-light)]/10"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold-light)]/50 bg-white/10">
                  <HeartHandshake
                    size={23}
                    className="text-[var(--color-gold-light)]"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="heading-section mt-7 text-2xl text-[var(--color-cream)] sm:text-3xl">
                  भक्ति, सेवा और संस्कार
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
                  दिव्य ज्योति लिंगेश्वर पंचतल महादेव मन्दिर  में श्रद्धालुओं को पूजा,
                  धार्मिक अनुष्ठान और विभिन्न संस्कारों से जुड़ने
                  का अवसर प्रदान किया जाता है।
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-12 bg-[var(--color-gold)]" />

                  <span className="text-sm font-semibold text-[var(--color-gold-light)]">
                    हर हर महादेव
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* दायाँ Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/60 hover:bg-white hover:shadow-[var(--shadow-md)]"
                >
                  {/* क्रमांक */}
                  <div className="absolute right-5 top-5 text-xs font-bold tracking-widest text-[var(--color-gold)]/60">
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--color-maroon)] shadow-[var(--shadow-sm)] transition-colors duration-300 group-hover:bg-[var(--color-maroon)] group-hover:text-[var(--color-cream)]">
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="heading-section mt-5 text-xl text-[var(--color-maroon)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-light)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* नीचे सजावटी विभाजक */}
      <div className="mx-auto mt-16 flex max-w-[var(--container-width)] items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="h-px flex-1 bg-[var(--color-border)]" />

        <div className="mx-5 flex h-8 w-8 rotate-45 items-center justify-center border border-[var(--color-gold)]">
          <div className="h-2.5 w-2.5 border border-[var(--color-saffron)]" />
        </div>

        <div className="h-px flex-1 bg-[var(--color-border)]" />
      </div>
    </section>
  );
}

export default TempleHighlights;