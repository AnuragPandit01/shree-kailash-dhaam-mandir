import {
  BookOpen,
  CircleDot,
  MoveDownRight,
  Sparkles,
} from "lucide-react";

function TempleHistory() {
  const historyPoints = [
    {
      number: "०१",
      year: "२००० ई.",
      title: "स्थापना एवं आरंभिक चरण",
      description:
        "श्री कैलाश धाम मंदिर की स्थापना वर्ष २००० ई. में हुई। मंदिर की पहचान भगवान शिव की आराधना और धार्मिक परंपराओं से जुड़ी रही है। स्थापना के साथ यह स्थान पूजा, दर्शन और विभिन्न धार्मिक संस्कारों के लिए श्रद्धालुओं के बीच एक आध्यात्मिक केंद्र के रूप में विकसित हुआ।",
    },
    {
      number: "०२",
      year: "परंपरा एवं विकास",
      title: "पूजा, संस्कार और धार्मिक सेवा",
      description:
        "समय के साथ मंदिर की धार्मिक गतिविधियों का विस्तार हुआ। विवाह संस्कार, मुंडन संस्कार, रुद्राभिषेक, श्री सत्यनारायण कथा, भजन एवं संकीर्तन, देवी जागरण, भंडारा, प्रसाद वितरण तथा अन्य विशेष पूजा-अनुष्ठान मंदिर की धार्मिक गतिविधियों का हिस्सा बने।",
    },
    {
      number: "०३",
      year: "२०२५ — २५ वर्ष",
      title: "परंपरा से वर्तमान तक",
      description:
        "वर्ष २०२५ में मंदिर ने अपनी स्थापना के २५ वर्ष पूरे किए। यह पड़ाव मंदिर की अब तक की धार्मिक यात्रा और उससे जुड़े सेवा-भाव की निरंतरता को स्मरण करने का अवसर रहा। आज मंदिर पूजा, संस्कार, धार्मिक आयोजन और जनसेवा से जुड़े कार्यों के माध्यम से श्रद्धालुओं से जुड़ा हुआ है।",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5eee2] py-16 sm:py-20 lg:py-24">
      {/* =====================================================
          DECORATIVE BACKGROUND
          ===================================================== */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full border border-[#c99a3d]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-10 h-64 w-64 rounded-full border border-[#c99a3d]/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[12%] top-[28%] text-[120px] font-serif text-[#6b1f2a]/[0.025]"
        aria-hidden="true"
      >
        ॐ
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADING
            ===================================================== */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c99a3d]/50 text-[#8e6925]">
                <BookOpen size={18} aria-hidden="true" />
              </span>

              <span className="text-sm font-semibold tracking-[0.2em] text-[#7a2732]">
                इतिहास एवं विरासत
              </span>
            </div>

            <h2 className="font-serif text-3xl leading-[1.15] text-[#321b1e] sm:text-4xl lg:text-5xl">
              एक परंपरा,
              <span className="block text-[#6b1f2a]">
                जो पीढ़ियों से आगे बढ़ती है
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-base leading-8 text-[#675659] sm:text-lg">
              वर्ष २००० ई. में स्थापित श्री कैलाश धाम मंदिर की पहचान
              पूजा, धार्मिक संस्कार, अनुष्ठान और सेवा-भाव से जुड़ी रही
              है। समय के साथ मंदिर धार्मिक गतिविधियों और श्रद्धालु
              सेवाओं के एक महत्वपूर्ण केंद्र के रूप में विकसित हुआ।
            </p>
          </div>
        </div>

        {/* =====================================================
            SANSKRIT STATEMENT
            ===================================================== */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          <div className="relative border-y border-[#d9c7a4] px-6 py-8 text-center sm:px-12">
            <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-[#c99a3d]/50 bg-[#f5eee2] text-[#9a7425]">
              ॐ
            </span>

            <p className="font-serif text-xl leading-relaxed text-[#6b1f2a] sm:text-2xl lg:text-3xl">
              न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ॥
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#756366]">
              इस संसार में ज्ञान के समान पवित्र कुछ भी नहीं है।
            </p>

            <p className="mt-2 text-xs tracking-wide text-[#9a7425]">
              — श्रीमद्भगवद्गीता ४.३८
            </p>
          </div>
        </div>

        {/* =====================================================
            HISTORY TIMELINE
            ===================================================== */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Central timeline */}
          <div
            className="absolute bottom-10 left-5 top-10 w-px bg-[#c99a3d]/40 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 lg:space-y-16">
            {historyPoints.map((point, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={point.number}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-20"
                >
                  {/* =================================================
                      TIMELINE MARKER
                      ================================================= */}
                  <div
                    className="absolute left-5 top-7 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-[#c99a3d] bg-[#f5eee2] lg:left-1/2"
                    aria-hidden="true"
                  >
                    <CircleDot size={9} className="text-[#7a2732]" />
                  </div>

                  {/* =================================================
                      LARGE DEvanagari NUMBER
                      ================================================= */}
                  <div
                    className={`hidden lg:block ${
                      isEven
                        ? "col-start-1 pr-10 text-right"
                        : "col-start-2 row-start-1 pl-10"
                    }`}
                  >
                    <span
                      className="font-serif text-[120px] font-medium leading-none text-[#6b1f2a]/[0.07]"
                      aria-hidden="true"
                    >
                      {point.number}
                    </span>
                  </div>

                  {/* =================================================
                      CONTENT CARD
                      ================================================= */}
                  <div
                    className={`pl-10 lg:pl-0 ${
                      isEven
                        ? "lg:col-start-2 lg:row-start-1"
                        : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    <div
                      className={`relative border border-[#d9c7a4] bg-[#fffaf2] p-6 shadow-[0_10px_35px_rgba(61,31,25,0.05)] transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(61,31,25,0.09)] sm:p-8 lg:p-9 ${
                        isEven ? "" : "lg:ml-auto"
                      }`}
                    >
                      {/* Year */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#9a7425]">
                          <Sparkles
                            size={14}
                            aria-hidden="true"
                          />
                          {point.year}
                        </span>

                        <MoveDownRight
                          size={18}
                          className="shrink-0 text-[#c99a3d]"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Number */}
                      <div className="mt-3">
                        <span className="font-serif text-4xl text-[#6b1f2a]/20">
                          {point.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-2 font-serif text-2xl text-[#6b1f2a] sm:text-3xl">
                        {point.title}
                      </h3>

                      <div className="my-5 h-px w-14 bg-[#c99a3d]" />

                      {/* Description */}
                      <p className="max-w-xl text-sm leading-7 text-[#665558] sm:text-base">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            HERITAGE HIGHLIGHT
            ===================================================== */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid overflow-hidden border border-[#d9c7a4] bg-[#fffaf2] md:grid-cols-[0.7fr_1.3fr]">
            {/* Highlight */}
            <div className="flex min-h-[220px] flex-col justify-center bg-[#6b1f2a] px-6 py-8 text-center sm:px-10 md:text-left">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#e4bb5b]">
                एक महत्वपूर्ण पड़ाव
              </p>

              <p className="mt-3 font-serif text-6xl leading-none text-[#fffaf2] sm:text-7xl">
                २५
              </p>

              <p className="mt-3 font-serif text-xl text-[#fffaf2]">
                वर्ष की धार्मिक यात्रा
              </p>

              <p className="mt-1 text-sm text-[#fffaf2]/70">
                २००० — २०२५
              </p>
            </div>

            {/* Explanation */}
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-[#c99a3d]" />

                <span className="text-xs font-semibold tracking-[0.16em] text-[#9a7425]">
                  विरासत
                </span>
              </div>

              <h3 className="mt-4 font-serif text-2xl text-[#321b1e] sm:text-3xl">
                परंपरा का अर्थ केवल अतीत नहीं
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#675659] sm:text-base">
                मंदिर की विरासत उसकी धार्मिक परंपराओं, पूजा-पद्धतियों,
                संस्कारों और सेवा-भाव की निरंतरता में दिखाई देती है।
                यही निरंतरता मंदिर को वर्तमान पीढ़ी के श्रद्धालुओं से
                जोड़ती है और आने वाली पीढ़ियों तक धार्मिक संस्कारों को
                पहुंचाने का माध्यम बनती है।
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            PRESENT ROLE
            ===================================================== */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative overflow-hidden border border-[#d9c7a4] bg-[#fffaf2] px-6 py-7 sm:px-8 sm:py-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-[#c99a3d]" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
              <div className="shrink-0">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#9a7425]">
                  वर्तमान भूमिका
                </span>
              </div>

              <div>
                <p className="text-sm leading-7 text-[#675659] sm:text-base">
                  आज श्री कैलाश धाम मंदिर में पूजा एवं आराधना के साथ
                  विवाह, मुंडन, रुद्राभिषेक, कथा, भजन-संकीर्तन, भंडारा,
                  प्रसाद वितरण और अन्य धार्मिक अनुष्ठानों जैसी गतिविधियाँ
                  श्रद्धालुओं को धार्मिक जीवन से जोड़ती हैं।
                </p>

                <p className="mt-4 text-sm leading-7 text-[#675659] sm:text-base">
                  मंदिर की वर्तमान डिजिटल व्यवस्था का उद्देश्य भी इसी
                  जुड़ाव को सरल बनाना है—श्रद्धालु मंदिर की जानकारी,
                  धार्मिक सेवाएँ, कार्यक्रम, दर्शन, पंजीकरण और अन्य
                  सुविधाओं से एक ही स्थान पर जुड़ सकें।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING DEVOTIONAL LINE
            ===================================================== */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#c99a3d]" />

            <span className="font-serif text-lg text-[#9a7425]">
              ॐ नमः शिवाय
            </span>

            <span className="h-px w-16 bg-[#c99a3d]" />
          </div>

          <p className="mt-5 font-serif text-xl leading-relaxed text-[#6b1f2a] sm:text-2xl">
            आस्था की परंपरा, सेवा का संकल्प और संस्कारों की निरंतरता
          </p>

          <p className="mt-3 text-sm text-[#756366]">
            श्री कैलाश धाम मंदिर
          </p>
        </div>
      </div>
    </section>
  );
}

export default TempleHistory;