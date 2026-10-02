import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "यूट्यूब",
    label: "YouTube",
    description: "लाइव दर्शन एवं धार्मिक वीडियो",
    icon: FaYoutube,
    href: "https://youtube.com/channel/UCrmOWmLYDjGkTdIeuAZq5QA?si=z9TJUM7jOwzvranm",
  },
  {
    name: "फेसबुक",
    label: "Facebook",
    description: "मंदिर के नवीनतम अपडेट",
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/1MGRhYKjoU/",
  },
  {
    name: "इंस्टाग्राम",
    label: "Instagram",
    description: "मंदिर की तस्वीरें एवं झलकियां",
    icon: FaInstagram,
    href: "https://www.instagram.com/shreekailashdham.panchtal?stkn=cHZ6djJhdTQzbGt6",
  },
];
function SocialMedia() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--color-gold)]" />

            <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-saffron)]">
              हमसे जुड़े रहें
            </span>

            <span className="h-px w-10 bg-[var(--color-gold)]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[var(--color-maroon)] sm:text-4xl">
            मंदिर की गतिविधियों से
            <span className="mt-2 block text-[var(--color-gold-dark)]">
              जुड़े रहें
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--color-ink-light)] sm:text-lg">
            पूजा, धार्मिक आयोजन, लाइव दर्शन और मंदिर से जुड़े नवीनतम
            अपडेट हमारे सोशल मीडिया माध्यमों पर प्राप्त करें।
          </p>
        </div>

        {/* Social Cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
  {socialLinks.map((social) => {
    const Icon = social.icon;

    return (
      <a
        key={social.label}
        href={social.href}
        onClick={(event) => {
          if (social.href === "#") {
            event.preventDefault();
          }
        }}
        target={social.href !== "#" ? "_blank" : undefined}
        rel={social.href !== "#" ? "noreferrer" : undefined}
        className="group rounded-3xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/40 hover:shadow-[var(--shadow-md)]"
      >
        <div className="flex items-start justify-between">

          {/* Social Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-maroon)] text-[var(--color-cream)] transition-transform duration-300 group-hover:scale-105">
            <Icon size={22} />
          </div>

          {/* External Link */}
          <ArrowUpRight
            size={19}
            className="text-[var(--color-ink-light)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-maroon)]"
          />
        </div>

        <h3 className="mt-6 text-lg font-bold text-[var(--color-maroon)]">
          {social.name}
        </h3>

        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--color-saffron)]">
          {social.label}
        </p>

        <p className="mt-3 text-sm leading-6 text-[var(--color-ink-light)]">
          {social.description}
        </p>
      </a>
    );
  })}
</div>
        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-maroon)] transition-colors duration-300 hover:text-[var(--color-saffron)]"
          >
            <span>मंदिर की और झलकियां देखें</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default SocialMedia;