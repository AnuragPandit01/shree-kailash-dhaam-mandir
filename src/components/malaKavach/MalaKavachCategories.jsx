import { Link } from "react-router-dom";
import { ArrowRight, Gem, GraduationCap, Home, Sparkles } from "lucide-react";
import malaKavachData from "../../data/malaKavach";
import MalaKavachCard from "./MalaKavachCard";

const categoryIcons = {
  married: Gem,
  "students-youth": GraduationCap,
  "home-business": Home,
};

function MalaKavachCategories() {
  const { categories } = malaKavachData;

  return (
    <section className="relative overflow-hidden bg-[#f8f0df] py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-br-full bg-[#7f1d1d]/5" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-tl-full bg-[#d6a23a]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6a23a]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d6a23a]" />
            <span className="h-px w-10 bg-[#d6a23a]" />
          </div>

          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#9b6b16]">
            माला एवं कवच
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#4a1111] sm:text-4xl lg:text-5xl">
            अपनी आवश्यकता के अनुसार सेवा चुनें
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6d5b4d] sm:text-lg">
            हम अलग-अलग आयु एवं उपयोग के अनुसार माला एवं कवच की सेवा उपलब्ध
            कराते हैं।
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id] || Sparkles;

            return (
              <article
                key={category.id}
                className="group relative overflow-hidden rounded-3xl border border-[#e5d4b4] bg-[#fffdf8] p-6 shadow-[0_12px_35px_rgba(74,17,17,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(74,17,17,0.11)] sm:p-7"
              >
                {/* Card decoration */}
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full border border-[#d6a23a]/10 transition-transform duration-500 group-hover:scale-125" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7f1d1d]/10 text-[#7f1d1d] transition-colors duration-300 group-hover:bg-[#7f1d1d] group-hover:text-[#fff4df]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full border border-[#d6a23a]/30 bg-[#d6a23a]/10 px-3 py-1 text-xs font-medium text-[#8a6215]">
                      {category.items.length} सेवाएँ
                    </span>
                  </div>

                  {/* Category heading */}
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-[#4a1111]">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#6d5b4d]">
                    {category.description}
                  </p>

                  {/* Services */}
                  <div className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <MalaKavachCard key={item.id} item={item} />
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-7 border-t border-[#ead9b9] pt-5">
                    <Link
                      to="/mala-kavach-seva/panjikaran"
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#7f1d1d] transition-colors hover:text-[#a87316]"
                    >
                      इस सेवा के लिए पंजीकरण करें
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Service-charge note */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#d6a23a]/25 bg-[#fffaf0] px-5 py-5 text-center shadow-sm sm:px-7">
          <p className="text-sm leading-7 text-[#665346] sm:text-base">
            <span className="font-semibold text-[#4a1111]">
              सेवा शुल्क:
            </span>{" "}
            हमारी माला एवं कवच सेवा के लिए निर्धारित सेवा शुल्क की जानकारी
            पंजीकरण प्रक्रिया के दौरान दी जाएगी।
          </p>
        </div>
      </div>
    </section>
  );
}

export default MalaKavachCategories;