import { Camera, Heart, Landmark } from "lucide-react";

function GalleryIntro() {
  const highlights = [
    {
      icon: Landmark,
      title: "पावन मंदिर परिसर",
      description: "श्री कैलाश धाम मंदिर के परिसर और पवित्र वातावरण की झलक।",
    },
    {
      icon: Camera,
      title: "दर्शन की झलकियाँ",
      description: "मंदिर में स्थापित देवी-देवताओं और धार्मिक स्थलों के दर्शन।",
    },
    {
      icon: Heart,
      title: "श्रद्धा एवं आस्था",
      description: "मंदिर से जुड़े आध्यात्मिक वातावरण और भक्तिभाव की झलक।",
    },
  ];

  return (
    <section className="bg-[#fffaf2] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span
              className="h-px w-10 bg-[#c99a3d]"
              aria-hidden="true"
            />

            <span className="text-xs font-semibold tracking-[0.18em] text-[#8b2635] sm:text-sm">
              दर्शन एवं स्मृतियाँ
            </span>

            <span
              className="h-px w-10 bg-[#c99a3d]"
              aria-hidden="true"
            />
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#4a1720] sm:text-4xl lg:text-5xl">
            तस्वीरों में
            <span className="block text-[#8b2635]">
              श्री कैलाश धाम मंदिर
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-[#5f4a45] sm:text-base sm:leading-8">
            इस गैलरी के माध्यम से श्री कैलाश धाम मंदिर के पावन परिसर,
            मंदिर में स्थापित देवी-देवताओं और धार्मिक वातावरण की विभिन्न
            झलकियों का दर्शन करें।
          </p>

          <p className="mt-4 text-sm leading-7 text-[#6f5b55] sm:text-base">
            प्रत्येक तस्वीर मंदिर की आस्था, परंपरा और आध्यात्मिक वातावरण
            से जुड़ी एक झलक प्रस्तुत करती है।
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group border border-[#eadcc5] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c99a3d]/30 bg-[#fff8e8]">
                  <Icon
                    size={21}
                    className="text-[#8b2635]"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 font-serif text-xl text-[#4a1720]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6f5b55]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Decorative separator */}
        <div className="mt-14 flex items-center justify-center gap-3 lg:mt-16">
          <span
            className="h-px w-16 bg-[#c99a3d]/50"
            aria-hidden="true"
          />

          <span
            className="font-serif text-lg text-[#c99a3d]"
            aria-hidden="true"
          >
            ॐ
          </span>

          <span
            className="h-px w-16 bg-[#c99a3d]/50"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

export default GalleryIntro;