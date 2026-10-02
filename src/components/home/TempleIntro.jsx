import { ArrowRight, Landmark, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function TempleIntro() {
  return (
    <section className="bg-[var(--color-cream)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image / Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-maroon)] p-3 shadow-[var(--shadow-lg)]">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#6f1d1b]">
                <img
                  src="/images/temple/temple-main.jpg"
                  alt="श्री कैलाश धाम मंदिर"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Location Badge */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[var(--shadow-md)] sm:left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-saffron)]/10">
                <MapPin
                  size={20}
                  className="text-[var(--color-saffron)]"
                />
              </div>

              <div>
                <p className="text-xs font-medium text-[var(--color-ink-light)]">
                  पावन स्थान
                </p>
                <p className="font-semibold text-[var(--color-maroon)]">
                  खटंगिया, दौना रोड जसरा प्रयागराज उ० प्र०
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-gold)]" />

              <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-saffron)]">
                मंदिर परिचय
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-[var(--color-maroon)] sm:text-4xl lg:text-5xl">
              आस्था और भक्ति का
              <span className="mt-2 block text-[var(--color-gold-dark)]">
                पावन धाम
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--color-ink-light)] sm:text-lg">
              दिव्य ज्योति लिंगेश्वर पंचतल महादेव मन्दिर श्रद्धा, भक्ति और सनातन परंपरा से जुड़ा
              एक पावन धार्मिक स्थल है। यहां श्रद्धालु पूजा-अर्चना, दर्शन
              और विभिन्न धार्मिक अनुष्ठानों के माध्यम से आध्यात्मिक
              शांति और ईश्वर का आशीर्वाद प्राप्त करने आते हैं।
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {/* Feature */}
              <div className="rounded-2xl border border-[var(--color-gold)]/20 bg-white p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-maroon)]/10">
                  <Landmark
                    size={22}
                    className="text-[var(--color-maroon)]"
                  />
                </div>

                <h3 className="font-semibold text-[var(--color-ink)]">
                  पवित्र मंदिर परिसर
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--color-ink-light)]">
                  श्रद्धा और आध्यात्मिक वातावरण से जुड़ा पावन परिसर।
                </p>
              </div>

              {/* Feature */}
              <div className="rounded-2xl border border-[var(--color-gold)]/20 bg-white p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-saffron)]/10">
                  <span className="text-xl text-[var(--color-saffron)]">
                    ॐ
                  </span>
                </div>

                <h3 className="font-semibold text-[var(--color-ink)]">
                  धार्मिक अनुष्ठान
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--color-ink-light)]">
                  विभिन्न पूजा एवं धार्मिक सेवाओं की सुविधा।
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-maroon)] px-6 py-3.5 font-semibold !text-[var(--color-cream)] shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-maroon-dark)] hover:shadow-[var(--shadow-md)]"
            >
              <span>मंदिर के बारे में जानें</span>

              <ArrowRight
                size={18}
                className="!text-[var(--color-cream)]"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TempleIntro;