import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardPenLine,
} from "lucide-react";
import { Link } from "react-router-dom";

const registrationServices = [
  "विवाह संस्कार",
  "मुंडन संस्कार",
  "विशेष पूजा",
  "अन्य धार्मिक अनुष्ठान",
];

function RegistrationCTA() {
  return (
    <section className="bg-[var(--color-cream)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-maroon)] px-6 py-12 shadow-[var(--shadow-lg)] sm:px-10 lg:px-16 lg:py-14">

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[var(--color-gold)]/20" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[var(--color-gold)]/10" />

          <div className="pointer-events-none absolute right-20 top-10 h-2 w-2 rounded-full bg-[var(--color-gold)]" />

          <div className="pointer-events-none absolute bottom-14 left-1/3 h-2 w-2 rounded-full bg-[var(--color-saffron)]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Content */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-gold)]" />

                <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-gold)]">
                  पंजीकरण सेवा
                </span>
              </div>

              <h2 className="max-w-2xl text-3xl font-bold leading-tight text-[var(--color-cream)] sm:text-4xl lg:text-5xl">
                अपने धार्मिक आयोजन के लिए
                <span className="mt-2 block text-[var(--color-gold)]">
                  आज ही पंजीकरण करें
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                विवाह, मुंडन, विशेष पूजा या अन्य धार्मिक अनुष्ठान के लिए
                आवश्यक जानकारी भरकर पंजीकरण प्रक्रिया शुरू करें।
              </p>

              {/* Services */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {registrationServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[var(--color-gold)]"
                    />

                    <span className="text-sm text-white/85">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/registration"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3.5 font-semibold text-[var(--color-maroon)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-cream)] hover:shadow-[var(--shadow-md)]"
                >
                  <ClipboardPenLine size={18} />

                  <span>पंजीकरण करें</span>

                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/rituals"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold !text-[var(--color-cream)] transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-white/5"
                >
                  <span>सेवाओं की जानकारी</span>

                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Registration Card */}
            <div className="relative">
              <div className="rounded-3xl border border-[var(--color-gold)]/25 bg-white/8 p-6 backdrop-blur-sm sm:p-7">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-gold)] text-[var(--color-maroon)]">
                  <CalendarDays size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[var(--color-cream)]">
                  सरल पंजीकरण प्रक्रिया
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  अपनी सेवा चुनें, आवश्यक विवरण भरें और मंदिर में
                  आयोजित होने वाले धार्मिक कार्यक्रम के लिए अनुरोध
                  भेजें।
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] text-sm font-bold text-[var(--color-maroon)]">
                      १
                    </span>

                    <span className="text-sm text-white/80">
                      सेवा एवं अनुष्ठान चुनें
                    </span>
                  </div>

                  <div className="ml-4 h-5 w-px bg-[var(--color-gold)]/25" />

                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] text-sm font-bold text-[var(--color-maroon)]">
                      २
                    </span>

                    <span className="text-sm text-white/80">
                      अपनी जानकारी भरें
                    </span>
                  </div>

                  <div className="ml-4 h-5 w-px bg-[var(--color-gold)]/25" />

                  <div className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] text-sm font-bold text-[var(--color-maroon)]">
                      ३
                    </span>

                    <span className="text-sm text-white/80">
                      पंजीकरण अनुरोध भेजें
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationCTA;