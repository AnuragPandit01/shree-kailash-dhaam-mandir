import {
  ArrowRight,
  Play,
  Radio,
} from "lucide-react";
import {
  
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function LiveDarshan() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[var(--color-ink)] shadow-[var(--shadow-lg)]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* Live Video Area */}
            <div className="relative min-h-[340px] overflow-hidden bg-[var(--color-maroon)] sm:min-h-[420px]">

              {/* Decorative Background */}
              <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-gold)]/10" />

                <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-gold)]/15" />
              </div>

              {/* Live Badge */}
              <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full bg-black/35 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm sm:left-7 sm:top-7">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-400" />
                <span>लाइव दर्शन</span>
              </div>

              {/* Play Button */}
              <div className="relative flex h-full min-h-[340px] items-center justify-center sm:min-h-[420px]">
                <div className="text-center">

                  <button
                    type="button"
                    aria-label="लाइव दर्शन शुरू करें"
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold)] text-[var(--color-maroon)] shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:bg-[var(--color-cream)]"
                  >
                    <Play
                      size={30}
                      fill="currentColor"
                      className="ml-1"
                    />
                  </button>

                  <p className="mt-6 text-lg font-semibold text-[var(--color-cream)]">
                    मंदिर के लाइव दर्शन
                  </p>

                  <p className="mt-2 text-sm text-white/60">
                    शीघ्र ही लाइव स्ट्रीम उपलब्ध होगी
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-gold)]" />

                <span className="text-sm font-semibold tracking-[0.18em] text-[var(--color-gold)]">
                  ऑनलाइन दर्शन
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[var(--color-cream)] sm:text-4xl">
                घर बैठे
                <span className="block text-[var(--color-gold)]">
                  मंदिर के दर्शन करें
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-white/65">
                मंदिर में होने वाले दर्शन और धार्मिक गतिविधियों से
                ऑनलाइन जुड़ने की सुविधा। वास्तविक लाइव स्ट्रीम उपलब्ध
                होने पर यहां से सीधे दर्शन किए जा सकेंगे।
              </p>

              {/* Status */}
              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-gold)]/10">
                    <Radio
                      size={20}
                      className="text-[var(--color-gold)]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--color-cream)]">
                      लाइव दर्शन सेवा
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      लाइव प्रसारण लिंक शीघ्र जोड़ा जाएगा
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/live"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3.5 font-semibold text-[var(--color-maroon)] transition-all duration-300 hover:bg-[var(--color-cream)]"
                >
                  <Play size={17} fill="currentColor" />
                  <span>लाइव दर्शन देखें</span>
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="#"
                  onClick={(event) => event.preventDefault()}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold !text-[var(--color-cream)] transition-all duration-300 hover:border-[var(--color-gold)]"
                >
                  <FaYoutube size={17} />
                  <span>यूट्यूब चैनल</span>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveDarshan;