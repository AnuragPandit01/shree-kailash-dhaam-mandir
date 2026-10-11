
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  HandHeart,
  HeartHandshake,
  Info,
  LockKeyhole,
  Phone,
  UserRound,
  Users,
} from "lucide-react";

const initialForm = {
  name: "",
  mobile: "",
  email: "",
  address: "",
};

const fieldClass =
  "w-full rounded-xl border border-[#e6dccd] bg-white px-4 py-3 text-sm outline-none focus:border-[#8a2630] focus:ring-2 focus:ring-[#8a2630]/10";

export default function Membership() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: "" }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const next = {};

    if (form.name.trim().length < 2) {
      next.name = "कृपया अपना पूरा नाम दर्ज करें।";
    }

    if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
      next.mobile = "कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।";
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "कृपया सही ईमेल पता दर्ज करें।";
    }

    if (!form.address.trim()) {
      next.address = "कृपया अपना पता दर्ज करें।";
    }

    setErrors(next);

    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#43231f]">
      <section className="relative overflow-hidden bg-[#4b111d]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, #e8bd69, transparent 32%), radial-gradient(circle at 90% 80%, #a65b39, transparent 30%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#e8c77f]">
              <HeartHandshake size={19} /> सेवा • सहभागिता • समर्पण
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#fff5e4] sm:text-5xl">
              मंदिर सदस्यता
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#f2dfce]">
              श्री कैलाश धाम मंदिर से जुड़ने और मंदिर की गतिविधियों
              में सहभागिता के लिए सदस्यता हेतु आवेदन करें।
            </p>
            <p className="mt-4 text-sm leading-7 text-[#e8c77f]">
              सदस्यता शुल्क, पात्रता और लाभ मंदिर प्रशासन की स्वीकृत
              नीति के अनुसार निर्धारित होंगे।
            </p>
          </div>

          <div className="rounded-3xl border border-[#e8c77f]/30 bg-white/5 p-6 sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8bd69]/15 text-[#e8c77f]">
              <BadgeCheck size={30} />
            </div>
            <h2 className="mt-5 text-xl font-bold text-[#fff5e4]">
              सदस्य बनने की प्रक्रिया
            </h2>
            <div className="mt-5 space-y-4">
              {[
                "अपना आवेदन विवरण भरें।",
                "मंदिर प्रशासन आवेदन की समीक्षा करेगा।",
                "स्वीकृति और शुल्क संबंधी जानकारी की पुष्टि की जाएगी।",
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e8c77f]/40 text-sm font-bold text-[#e8c77f]">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-[#f2dfce]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#95612c] via-[#f0d18b] to-[#95612c]" />
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-[#e8ddca] bg-white p-5 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6ecd9] text-[#8c5b25]">
              <UserRound size={25} />
            </span>
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">
                सदस्यता आवेदन
              </h2>
              <p className="mt-1 text-sm text-[#806f62]">
                सभी आवश्यक विवरण भरें।
              </p>
            </div>
          </div>

          {submitted && (
            <div
              role="status"
              className="mb-6 rounded-xl border border-[#dfc58f] bg-[#fff8e8] p-4 text-sm leading-7 text-[#67431f]"
            >
              <CheckCircle2 size={19} className="mr-2 inline" />
              विवरण सही प्रारूप में है। यह केवल फ्रंटएंड नमूना है;
              आवेदन सर्वर पर जमा नहीं हुआ है और सदस्यता स्वीकृत नहीं हुई है।
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label htmlFor="member-name" className="mb-2 block text-sm font-semibold">
                पूरा नाम <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <UserRound size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#968475]" />
                <input
                  id="member-name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="अपना पूरा नाम दर्ज करें"
                  className={`${fieldClass} pl-10`}
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="member-mobile" className="mb-2 block text-sm font-semibold">
                मोबाइल नंबर <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <Phone size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#968475]" />
                <input
                  id="member-mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  value={form.mobile}
                  onChange={(e) => update("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10 अंकों का मोबाइल नंबर"
                  className={`${fieldClass} pl-10`}
                />
              </div>
              {errors.mobile && <p className="mt-1 text-xs text-red-700">{errors.mobile}</p>}
            </div>

            <div>
              <label htmlFor="member-email" className="mb-2 block text-sm font-semibold">
                ईमेल पता <span className="text-[#968475]">(वैकल्पिक)</span>
              </label>
              <input
                id="member-email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="name@example.com"
                className={fieldClass}
              />
              {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="member-address" className="mb-2 block text-sm font-semibold">
                पूरा पता <span className="text-red-600">*</span>
              </label>
              <textarea
                id="member-address"
                rows={3}
                autoComplete="street-address"
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                placeholder="ग्राम/शहर, जिला, राज्य और पिन कोड"
                className={`${fieldClass} resize-y`}
              />
              {errors.address && <p className="mt-1 text-xs text-red-700">{errors.address}</p>}
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-[#fbf7ef] p-4">
            <p className="flex items-start gap-2 text-xs leading-6 text-[#806f62]">
              <Info size={17} className="mt-0.5 shrink-0 text-[#9a642a]" />
              यह आवेदन प्रारंभिक रुचि दर्ज करने के लिए नमूना है। सदस्यता
              शुल्क, शर्तें और लाभ की पुष्टि मंदिर प्रशासन से की जाएगी।
            </p>
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#7b1b26] px-5 py-3.5 font-bold text-white transition hover:bg-[#5f111c]"
          >
            आवेदन विवरण जाँचें <ArrowRight size={18} />
          </button>
        </form>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-[#e8ddca] bg-white p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6ecd9] text-[#8c5b25]">
              <Users size={25} />
            </div>
            <h2 className="mt-4 text-xl font-bold">सदस्यता से जुड़ें</h2>
            <p className="mt-3 text-sm leading-7 text-[#806f62]">
              मंदिर की गतिविधियों से जुड़े रहने और सहभागिता के अवसरों
              की जानकारी प्राप्त करने के लिए आवेदन करें।
            </p>
          </div>

          <div className="rounded-2xl bg-[#4b111d] p-6 text-[#fff5e4]">
            <HandHeart size={28} className="text-[#e8c77f]" />
            <h2 className="mt-4 text-lg font-bold">सेवा और सहभागिता</h2>
            <p className="mt-3 text-sm leading-7 text-[#f2dfce]">
              सदस्यता की शर्तें, शुल्क और लाभ का विवरण प्रशासन द्वारा
              अनुमोदित होने के बाद इस पृष्ठ पर प्रकाशित किया जाएगा।
            </p>
          </div>

          <div className="rounded-2xl border border-[#ead9b7] bg-[#fff4dd] p-5">
            <p className="flex items-start gap-2 text-sm leading-7 text-[#765d47]">
              <LockKeyhole size={18} className="mt-1 shrink-0 text-[#8c5b25]" />
              वास्तविक आवेदन जमा करने और भुगतान लेने से पहले सुरक्षित
              बैकएंड, प्रशासनिक समीक्षा और भुगतान प्रक्रिया जोड़ी जाएगी।
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
