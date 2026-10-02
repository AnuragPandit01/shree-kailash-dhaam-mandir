import {
  MapPin,
  Clock3,
  Navigation,
  Flame,
  Flower2,
  Landmark,
  ArrowRight,
} from "lucide-react";

function TempleInfo() {
  const dailySchedule = [
    {
      name: "मंगला आरती",
      time: "प्रातः 5:00 बजे",
      icon: Flame,
    },
    {
      name: "श्रृंगार पूजा",
      time: "प्रातः 8:00 बजे",
      icon: Flower2,
    },
    {
      name: "मध्याह्न पूजा",
      time: "दोपहर 12:00 बजे",
      icon: Landmark,
    },
    {
      name: "संध्या आरती",
      time: "संध्या 7:00 बजे",
      icon: Flame,
    },
    {
      name: "शयन आरती",
      time: "रात्रि 9:00 बजे",
      icon: Clock3,
    },
  ];

  return (
    <section className="bg-[#f5eee2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            DAILY PUJA / AARTI
            ===================================================== */}
        <div className="overflow-hidden border border-[#d9c7a4] bg-[#fffaf2]">

          {/* Heading */}
          <div className="border-b border-[#e0d1b7] px-6 py-7 sm:px-8 lg:px-10">
            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6b1f2a] text-[#e4bb5b]">
                <Flame size={21} />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#9a7425]">
                  दैनिक धार्मिक क्रम
                </p>

                <h2 className="mt-1 font-serif text-2xl text-[#321b1e] sm:text-3xl">
                  पूजा एवं आरती के समय
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#675659]">
                  मंदिर में होने वाली दैनिक पूजा एवं आरती का निर्धारित
                  क्रम श्रद्धालुओं के लिए नीचे प्रस्तुत है।
                </p>
              </div>

            </div>
          </div>

          {/* Schedule */}
          <div className="p-5 sm:p-7 lg:p-10">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">

              {dailySchedule.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="border border-[#e0d1b7] bg-[#f9f2e6] p-5 transition duration-300 hover:border-[#c99a3d] hover:bg-[#fffaf2]"
                  >
                    <div className="flex items-center justify-between gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6b1f2a] text-[#e4bb5b]">
                        <Icon size={17} />
                      </div>

                      <span className="font-serif text-lg text-[#c99a3d]">
                        ॥ ॐ ॥
                      </span>

                    </div>

                    <h3 className="mt-5 font-serif text-lg text-[#321b1e]">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#7a2732]">
                      {item.time}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Schedule Note */}
          <div className="border-t border-[#e0d1b7] px-6 py-5 sm:px-8 lg:px-10">
            <p className="text-sm leading-7 text-[#756366]">
              <span className="font-semibold text-[#6b1f2a]">
                धार्मिक अनुशासन:
              </span>{" "}
              श्रद्धालु पूजा एवं आरती के समय मंदिर की धार्मिक मर्यादाओं
              एवं व्यवस्था का सम्मान करते हुए दर्शन करें।
            </p>
          </div>

        </div>

        {/* =====================================================
            ADDRESS + MAP
            ===================================================== */}
        <div className="mt-12 overflow-hidden border border-[#d9c7a4] bg-[#fffaf2] sm:mt-16">

          {/* Address Header */}
          <div className="border-b border-[#e0d1b7] px-6 py-7 sm:px-8 lg:px-10">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6b1f2a] text-[#e4bb5b]">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#9a7425]">
                    स्थान एवं पता
                  </p>

                  <h2 className="mt-1 font-serif text-2xl leading-tight text-[#321b1e] sm:text-3xl">
                    श्री कैलाश धाम मंदिर
                  </h2>
                </div>

              </div>

              <div className="max-w-lg text-sm leading-7 text-[#675659] lg:text-right">
                <p>
                  <span className="font-semibold text-[#321b1e]">
                    पता:
                  </span>{" "}
                  7QQ9+6X7, Pachakhara,
                  Uttar Pradesh — 212107, India
                </p>

                <p className="mt-1">
                  <span className="font-semibold text-[#321b1e]">
                    क्षेत्र:
                  </span>{" "}
                  Pachakhara, Jasra, Prayagraj
                </p>
              </div>

            </div>

          </div>

          {/* Google Map */}
          <div className="bg-[#e8dfd0] p-2 sm:p-3 lg:p-4">
            <div className="relative h-[360px] overflow-hidden border border-[#c99a3d]/50 sm:h-[460px] lg:h-[560px]">

              <iframe
                title="श्री कैलाश धाम मंदिर का Google Maps स्थान"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=Shri%20Kailash%20Dham%20Mandir%207QQ9%2B6X7%2C%20Pachakhara%2C%20Uttar%20Pradesh%20212107%2C%20India&maptype=roadmap&zoom=14"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </div>

          {/* Map Footer */}
          <div className="border-t border-[#e0d1b7] px-6 py-6 sm:px-8 lg:px-10">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-start gap-3">

                <Navigation
                  size={19}
                  className="mt-1 shrink-0 text-[#7a2732]"
                />

                <div>
                  <p className="font-semibold text-[#321b1e]">
                    मंदिर तक पहुंचें
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#675659]">
                    Google Maps पर मंदिर का स्थान देखें और
                    अपने वर्तमान स्थान से मार्ग प्राप्त करें।
                  </p>
                </div>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shri%20Kailash%20Dham%20Mandir%207QQ9%2B6X7%2C%20Pachakhara%2C%20Uttar%20Pradesh%20212107%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 border border-[#7a2732] bg-[#6b1f2a] px-5 py-3 text-sm font-semibold !text-[#fff8e8] transition duration-300 hover:bg-[#541720]"
              >
                Google Maps में मार्ग देखें

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TempleInfo;