import { ArrowRight, CheckCircle2, ClipboardList, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";
import malaKavachData from "../../data/malaKavach";

const stepIcons = [ClipboardList, CheckCircle2, PackageCheck];

function ServiceProcess() {
  const { serviceProcess } = malaKavachData;

  return (
    <section className="relative overflow-hidden bg-[#fffaf0] py-16 sm:py-20 lg:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full border border-[#d6a23a]/10" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full border border-[#7f1d1d]/10" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6a23a]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#d6a23a]" />
            <span className="h-px w-10 bg-[#d6a23a]" />
          </div>

          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#9b6b16]">
            हमारी सेवा प्रक्रिया
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#4a1111] sm:text-4xl lg:text-5xl">
            {serviceProcess.title}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mx-auto mt-12 max-w-5xl">
          {/* Desktop connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-9 hidden h-px bg-[#d6a23a]/30 lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">
            {serviceProcess.steps.map((step, index) => {
              const Icon = stepIcons[index] || CheckCircle2;

              return (
                <article
                  key={step.id}
                  className="relative rounded-3xl border border-[#e5d4b4] bg-white p-6 text-center shadow-[0_12px_35px_rgba(74,17,17,0.06)] sm:p-7"
                >
                  {/* Number + icon */}
                  <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#d6a23a]/40 bg-[#fffaf0]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7f1d1d] text-[#fff4df]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#d6a23a] text-xs font-bold text-[#3b0d0d]">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-[#4a1111]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#6d5b4d]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Registration CTA */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-[#4a1111] p-7 text-center shadow-[0_16px_40px_rgba(74,17,17,0.12)] sm:p-9">
          <h3 className="font-serif text-2xl font-semibold text-[#fff8ea]">
            हमारी माला एवं कवच सेवा प्राप्त करें
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#dfceb0] sm:text-base">
            सेवा प्राप्त करने के लिए अपना पंजीकरण पूरा करें। आगे की प्रक्रिया
            एवं उपलब्ध माध्यम की जानकारी हम आपको प्रदान करेंगे।
          </p>

          <Link
            to="/mala-kavach-seva/panjikaran"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#d6a23a] px-6 py-3.5 text-sm font-semibold text-[#3b0d0d] transition-all duration-300 hover:bg-[#e7bd63]"
          >
            माला एवं कवच सेवा पंजीकरण
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceProcess;