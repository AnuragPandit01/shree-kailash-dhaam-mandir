import {
  ArrowRight,
  CalendarDays,
  Flower2,
  Heart,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Flower2,
    title: "विशेष पूजा",
    description:
      "ईश्वर की आराधना और विशेष अवसरों के लिए पूजा एवं धार्मिक अनुष्ठान।",
    action: "पूजा देखें",
  },
  {
    icon: Sparkles,
    title: "विशेष अनुष्ठान",
    description:
      "श्रद्धा और परंपरा के अनुरूप विभिन्न धार्मिक एवं आध्यात्मिक अनुष्ठान।",
    action: "अनुष्ठान देखें",
  },
  {
    icon: CalendarDays,
    title: "विवाह संस्कार",
    description:
      "पवित्र वातावरण में विवाह एवं संबंधित धार्मिक संस्कारों के लिए पंजीकरण।",
    action: "पंजीकरण करें",
  },
  {
    icon: Heart,
    title: "मुंडन संस्कार",
    description:
      "बाल संस्कार एवं अन्य पारंपरिक धार्मिक विधियों के लिए सुविधा।",
    action: "विवरण देखें",
  },
];

function ServicesPreview() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--color-gold)]" />

            <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-saffron)]">
              पूजा एवं अनुष्ठान
            </span>

            <span className="h-px w-10 bg-[var(--color-gold)]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[var(--color-maroon)] sm:text-4xl lg:text-5xl">
            श्रद्धा के साथ
            <span className="mt-2 block text-[var(--color-gold-dark)]">
              धार्मिक सेवाएं
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--color-ink-light)] sm:text-lg">
            दिव्य ज्योति लिंगेश्वर पंचतल महादेव मन्दिर में उपलब्ध विभिन्न पूजा, संस्कार और
            धार्मिक अनुष्ठानों की जानकारी प्राप्त करें तथा आवश्यक सेवा
            के लिए पंजीकरण करें।
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/40 hover:shadow-[var(--shadow-md)]"
              >
                {/* Decorative corner */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--color-saffron)]/5 transition-transform duration-500 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-maroon)] text-[var(--color-cream)] shadow-[var(--shadow-sm)]">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-[var(--color-maroon)]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[88px] text-sm leading-7 text-[var(--color-ink-light)]">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  to={
                    service.title === "विवाह संस्कार"
                      ? "/registration"
                      : "/rituals"
                  }
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-maroon)] transition-colors duration-300 group-hover:text-[var(--color-saffron)]"
                >
                  <span>{service.action}</span>

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/rituals"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-maroon)] px-6 py-3.5 font-semibold !text-[var(--color-maroon)] transition-all duration-300 hover:bg-[var(--color-maroon)] hover:!text-[var(--color-cream)]"
          >
            <span>सभी पूजा एवं अनुष्ठान देखें</span>

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;