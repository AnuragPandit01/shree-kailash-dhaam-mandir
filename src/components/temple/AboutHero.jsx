import { ChevronRight,ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function AboutHero() {
    const scrollToIntroduction = () => {
        document.getElementById("temple-introduction")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className="relative min-h-[520px] overflow-hidden bg-[#3d1119] text-[#fff8e9] sm:min-h-[560px] lg:min-h-[600px]">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/images/temple/about-hero-shiva.png"
                    alt="भगवान शिव और हिमालय का आध्यात्मिक दृश्य"
                    className="h-full w-full object-cover object-center"
                />

                {/* Left-side readability overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b0d16]/95 via-[#4c111b]/80 to-[#4c111b]/20" />

                {/* Bottom transition */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#3d1119] to-transparent" />

                {/* Subtle overall tone */}
                <div className="absolute inset-0 bg-[#3d1119]/10" />
            </div>

            {/* Decorative border */}
            <div className="pointer-events-none absolute inset-4 border border-[#d5a64a]/20 sm:inset-5 lg:inset-6" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col px-6 py-8 sm:min-h-[560px] sm:px-10 sm:py-10 lg:min-h-[600px] lg:px-12 lg:py-12">
                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm text-[#ead9b8]">
                    <Link
                        to="/"
                        className="transition-colors duration-200 hover:text-[#f1c967]"
                    >
                        मुख्य पृष्ठ
                    </Link>

                    <ChevronRight size={15} aria-hidden="true" />

                    <span className="text-[#f1c967]">मंदिर परिचय</span>
                </div>

                {/* Main content */}
                <div className="flex flex-1 items-center">
                    <div className="w-full max-w-3xl py-8 lg:max-w-[620px]">
                        {/* Om */}
                        <div className="mb-3">
                            <span className="font-serif text-3xl text-[#e5bd5d] sm:text-4xl">
                                ॐ
                            </span>
                        </div>

                        {/* Mantra */}
                        <div className="max-w-xl border-l border-[#d5a64a]/70 pl-4 sm:pl-5">
                            <p className="font-serif text-lg leading-[1.65] text-[#f4d99a] sm:text-xl lg:text-[22px]">
                                असतो मा सद्गमय ।
                                <br />
                                तमसो मा ज्योतिर्गमय ।
                                <br />
                                मृत्योर्मामृतं गमय ॥
                            </p>

                            <p className="mt-2 text-[11px] tracking-[0.1em] text-[#dfcda8] sm:text-xs">
                                — बृहदारण्यक उपनिषद् १.३.२८
                            </p>
                        </div>

                        {/* Decorative divider */}
                        <div className="my-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#d5a64a]" />
                            <span className="font-serif text-base text-[#d5a64a]">ॐ</span>
                            <span className="h-px w-10 bg-[#d5a64a]" />
                        </div>

                        {/* Page title */}
                        <p className="mb-2 text-xs font-medium tracking-[0.25em] text-[#e3bd5c] sm:text-sm">
                            मंदिर परिचय
                        </p>

                        <h1 className="font-serif text-3xl leading-[1.12] text-[#fff1c9] sm:text-4xl lg:text-5xl xl:text-6xl">
                            श्री कैलाश धाम मंदिर
                        </h1>

                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-[#f0ddba] sm:text-base">
                            <span>आस्था</span>
                            <span className="text-[#d5a64a]">•</span>
                            <span>भक्ति</span>
                            <span className="text-[#d5a64a]">•</span>
                            <span>सनातन परंपरा</span>
                        </div>

                        {/* Intro */}
                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#f3e7d0] sm:text-base">
                            श्री कैलाश धाम मंदिर के इतिहास, परंपरा, प्रमुख व्यक्तित्व,
                            वैदिक शिक्षा और धार्मिक गतिविधियों के बारे में जानें।
                        </p>

                        {/* Actions */}
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <button
                                type="button"
                                onClick={scrollToIntroduction}
                                className="group inline-flex w-fit items-center justify-center gap-3 rounded-sm bg-[#d5a64a] px-5 py-3 text-sm font-semibold text-[#3d1119] shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#e6bd62]"
                            >
                                मंदिर परिचय पढ़ें

                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                            <div className="flex items-center gap-2 text-sm text-[#ead9b8]">
                                <MapPin size={16} className="text-[#e1b957]" />
                                <span>दौना, जसरा</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Gold bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c99a3d]" />
        </section>
    );
}

export default AboutHero;