import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    date: "15",
    month: "अक्टूबर",
    title: "विशेष शिव पूजा",
    description:
      "श्रद्धालुओं के लिए विशेष पूजा एवं सामूहिक आराधना का आयोजन।",
    time: "प्रातः 7:00 बजे",
  },
  {
    date: "21",
    month: "अक्टूबर",
    title: "धार्मिक अनुष्ठान",
    description:
      "मंदिर परिसर में विशेष धार्मिक अनुष्ठान एवं भजन-कीर्तन।",
    time: "प्रातः 9:00 बजे",
  },
  {
    date: "02",
    month: "नवंबर",
    title: "विशेष भजन संध्या",
    description:
      "भक्ति संगीत एवं सामूहिक भजन के साथ आध्यात्मिक संध्या।",
    time: "सायं 6:00 बजे",
  },
];

function EventsPreview() {
  return (
    <section className="bg-[var(--color-cream)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-gold)]" />

              <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-saffron)]">
                आगामी कार्यक्रम
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[var(--color-maroon)] sm:text-4xl lg:text-5xl">
              मंदिर के
              <span className="ml-2 text-[var(--color-gold-dark)]">
                आगामी आयोजन
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--color-ink-light)] sm:text-lg">
              मंदिर में आयोजित होने वाले आगामी धार्मिक कार्यक्रमों,
              पूजा एवं विशेष आयोजनों की जानकारी प्राप्त करें।
            </p>
          </div>

          <Link
            to="/events"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[var(--color-maroon)] px-5 py-3 font-semibold text-[var(--color-maroon)] transition-all duration-300 hover:bg-[var(--color-maroon)] hover:!text-[var(--color-cream)] md:self-auto"
          >
            <span>सभी कार्यक्रम देखें</span>
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Events */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={`${event.date}-${event.title}`}
              className="group overflow-hidden rounded-3xl border border-[var(--color-gold)]/20 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/40 hover:shadow-[var(--shadow-md)]"
            >
              <div className="flex">

                {/* Date */}
                <div className="flex w-24 shrink-0 flex-col items-center justify-center bg-[var(--color-maroon)] px-3 py-6 text-center">
                  <span className="text-3xl font-bold text-[var(--color-gold)]">
                    {event.date}
                  </span>

                  <span className="mt-1 text-xs font-medium text-[var(--color-cream)]">
                    {event.month}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-5">
                  <h3 className="text-lg font-bold text-[var(--color-maroon)]">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--color-ink-light)]">
                    {event.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--color-ink-light)]">
                    <span className="flex items-center gap-1.5">
                      <Clock3
                        size={14}
                        className="text-[var(--color-saffron)]"
                      />
                      {event.time}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <MapPin
                        size={14}
                        className="text-[var(--color-saffron)]"
                      />
                      मंदिर परिसर
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[var(--color-gold)]/10 px-5 py-3">
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-maroon)] transition-colors duration-300 group-hover:text-[var(--color-saffron)]"
                >
                  <CalendarDays size={16} />
                  <span>कार्यक्रम विवरण</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default EventsPreview;