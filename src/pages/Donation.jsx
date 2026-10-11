
import { useState } from "react";
import {
  Heart,
  HandHeart,
  Landmark,
  Flame,
  Sprout,
  Users,
  Wrench,
  CalendarDays,
  ShieldCheck,
  UserRound,
  Phone,
  MessageSquare,
  LockKeyhole,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  IndianRupee,
} from "lucide-react";

const donationCategories = [
  {
    id: "general",
    title: "सामान्य दान",
    description: "मंदिर के दैनिक कार्यों एवं रखरखाव हेतु",
    icon: Landmark,
  },
  {
    id: "rituals",
    title: "पूजा एवं अनुष्ठान दान",
    description: "पूजा, हवन एवं धार्मिक अनुष्ठानों हेतु",
    icon: Flame,
  },
  {
    id: "development",
    title: "मंदिर निर्माण एवं विकास",
    description: "मंदिर परिसर के विस्तार एवं विकास हेतु",
    icon: Landmark,
  },
  {
    id: "community",
    title: "धार्मिक एवं सामाजिक सेवा",
    description: "जनकल्याण एवं सामाजिक गतिविधियों हेतु",
    icon: Sprout,
  },
];

const donationPurposes = [
  {
    title: "मंदिर परिसर का रखरखाव",
    description: "मंदिर की स्वच्छता, सुरक्षा और नियमित रखरखाव",
    icon: Wrench,
  },
  {
    title: "धार्मिक कार्यक्रम",
    description: "पूजा, हवन एवं विशेष अनुष्ठानों का आयोजन",
    icon: Landmark,
  },
  {
    title: "सामाजिक सेवा",
    description: "जरूरतमंदों की सहायता एवं जनकल्याण गतिविधियाँ",
    icon: Users,
  },
  {
    title: "मंदिर विकास",
    description: "निर्माण, सुविधाओं के विस्तार और विकास कार्य",
    icon: Sparkles,
  },
];

const presetAmounts = [101, 501, 1001, 2101, 5101, 11001];

const initialDonor = {
  name: "",
  mobile: "",
  message: "",
};

const inputClass =
  "w-full min-w-0 rounded-xl border border-[#e6dccd] bg-white px-4 py-3 text-sm text-[#43231f] outline-none transition placeholder:text-[#a79a8e] focus:border-[#8a2630] focus:ring-2 focus:ring-[#8a2630]/10";

function formatAmount(amount) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Donation() {
  const [category, setCategory] = useState("general");
  const [selectedAmount, setSelectedAmount] = useState(501);
  const [customAmount, setCustomAmount] = useState("");
  const [donor, setDonor] = useState(initialDonor);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");

  const amount =
    customAmount.trim() !== ""
      ? Number(customAmount)
      : selectedAmount;

  const updateDonor = (field, value) => {
    setDonor((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
      form: "",
    }));

    setNotice("");
  };

  const selectPreset = (value) => {
    setSelectedAmount(value);
    setCustomAmount("");
    setErrors({});
    setNotice("");
  };

  const updateCustomAmount = (value) => {
    setCustomAmount(value);
    setSelectedAmount(null);
    setErrors({});
    setNotice("");
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!donor.name.trim()) {
      nextErrors.name = "कृपया अपना नाम दर्ज करें।";
    } else if (donor.name.trim().length < 2) {
      nextErrors.name = "कृपया सही नाम दर्ज करें।";
    }

    if (!/^[6-9]\d{9}$/.test(donor.mobile.trim())) {
      nextErrors.mobile = "कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।";
    }

    if (!Number.isFinite(amount) || amount < 1) {
      nextErrors.amount = "कृपया ₹1 या उससे अधिक की राशि दर्ज करें।";
    } else if (amount > 10000000) {
      nextErrors.amount = "कृपया मान्य दान राशि दर्ज करें।";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice("");

    if (!validateForm()) {
      document
        .getElementById("donation-form")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Payment integration is intentionally not simulated.
    setNotice(
      "आपका विवरण मान्य है। ऑनलाइन भुगतान शुरू करने के लिए भुगतान गेटवे का एकीकरण आवश्यक है। अभी कोई भुगतान नहीं हुआ है।"
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7ef] text-[#43231f]">
      {/* Hero banner */}
      <section className="relative isolate overflow-hidden bg-[#4b111d]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 12% 40%, #d9a54e 0%, transparent 35%), radial-gradient(ellipse at 88% 60%, #a35a38 0%, transparent 35%)",
          }}
        />

        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#e8c77f]/15 sm:h-96 sm:w-96" />
        <div className="absolute -right-8 -top-12 h-52 w-52 rounded-full border border-[#e8c77f]/10 sm:h-72 sm:w-72" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#e9c87d]">
              <Sparkles size={16} />
              <span>ॐ नमः शिवाय</span>
              <Sparkles size={16} />
            </div>

            <h1 className="text-3xl font-bold leading-tight text-[#fff5e4] sm:text-5xl">
              दान एवं सहयोग
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#f2dfce] sm:text-base lg:mx-0">
              आपका सहयोग मंदिर के विकास, धार्मिक आयोजनों और
              जनकल्याण के कार्यों में महत्वपूर्ण योगदान देता है।
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-[#f0d99f] lg:justify-start">
              <span className="flex items-center gap-2">
                <HandHeart size={19} />
                धर्म सेवा
              </span>
              <span className="flex items-center gap-2">
                <Landmark size={19} />
                मंदिर विकास
              </span>
              <span className="flex items-center gap-2">
                <Users size={19} />
                जनकल्याण
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-3xl border border-[#e8c77f]/20" />
            <div className="relative overflow-hidden rounded-2xl border border-[#e8c77f]/30 bg-[#64212a] p-7 text-center shadow-2xl sm:p-9">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#e8c77f]/50 bg-[#e8c77f]/10 text-[#edcf8a]">
                <HandHeart size={34} strokeWidth={1.5} />
              </div>

              <p className="mt-5 text-lg font-semibold text-[#fff4df]">
                सेवा ही श्रद्धा का स्वरूप है
              </p>

              <div className="mx-auto my-5 flex items-center justify-center gap-3 text-[#d8b36b]">
                <span className="h-px w-10 bg-current" />
                <Sparkles size={15} />
                <span className="h-px w-10 bg-current" />
              </div>

              <p className="text-sm leading-7 text-[#f0dccc]">
                अपनी श्रद्धा और सामर्थ्य के अनुसार सहयोग करें।
                आपका योगदान मंदिर की सेवा और विकास कार्यों में
                सहायक हो सकता है।
              </p>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#95612c] via-[#f0d18b] to-[#95612c]" />
      </section>

      {/* Main donation content */}
      <section className="mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.85fr)]">
          <form
            id="donation-form"
            onSubmit={handleSubmit}
            noValidate
            className="min-w-0 space-y-8"
          >
            {/* Donation category */}
            <section>
              <div className="mb-4 flex items-start gap-3">
                <Heart className="mt-1 shrink-0 text-[#9a642a]" size={25} />
                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">
                    दान की श्रेणियाँ
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#806f62]">
                    आप अपनी श्रद्धा और सामर्थ्य के अनुसार दान कर सकते हैं।
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {donationCategories.map((item) => {
                  const Icon = item.icon;
                  const active = category === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        setCategory(item.id);
                        setNotice("");
                      }}
                      className={`group flex min-h-40 flex-col items-center rounded-2xl border p-4 text-center transition ${
                        active
                          ? "border-[#86212b] bg-[#fffaf2] shadow-[0_8px_25px_-18px_rgba(74,16,28,0.65)] ring-1 ring-[#86212b]/10"
                          : "border-[#eee4d6] bg-white hover:border-[#c9a56a]"
                      }`}
                    >
                      <span
                        className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full ${
                          active
                            ? "bg-[#f4e6ce] text-[#7d1d28]"
                            : "bg-[#fbf4e7] text-[#a8752c]"
                        }`}
                      >
                        <Icon size={23} />
                      </span>

                      <span className="text-sm font-bold leading-6">
                        {item.title}
                      </span>

                      <span className="mt-1 text-xs leading-5 text-[#857366]">
                        {item.description}
                      </span>

                      <span
                        className={`mt-3 flex h-5 w-5 items-center justify-center rounded-full border ${
                          active
                            ? "border-[#86212b] bg-[#86212b] text-white"
                            : "border-[#b9a99a] text-transparent"
                        }`}
                      >
                        {active && <CheckCircle2 size={15} />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Amount selection */}
            <section>
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#a87327] text-white">
                  <IndianRupee size={19} />
                </span>
                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">
                    दान राशि चुनें
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#806f62]">
                    नीचे दी गई राशि चुनें या अपनी इच्छानुसार राशि दर्ज करें।
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {presetAmounts.map((value) => {
                  const active =
                    customAmount === "" && selectedAmount === value;

                  return (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={active}
                      onClick={() => selectPreset(value)}
                      className={`rounded-xl border px-3 py-3 text-sm font-bold transition sm:text-base ${
                        active
                          ? "border-[#7c1b27] bg-[#7c1b27] text-white shadow-md"
                          : "border-[#e8ddcf] bg-white text-[#70202a] hover:border-[#9a642a] hover:bg-[#fffaf2]"
                      }`}
                    >
                      ₹ {formatAmount(value)}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 flex overflow-hidden rounded-xl border border-[#e6dccd] bg-white focus-within:border-[#8a2630] focus-within:ring-2 focus-within:ring-[#8a2630]/10">
                <span className="flex items-center border-r border-[#e6dccd] bg-[#f6eee0] px-4 text-sm font-bold text-[#7c1b27]">
                  ₹
                </span>
                <input
                  aria-label="अपनी इच्छानुसार दान राशि"
                  type="number"
                  min="1"
                  max="10000000"
                  step="1"
                  inputMode="numeric"
                  value={customAmount}
                  onChange={(event) =>
                    updateCustomAmount(event.target.value)
                  }
                  placeholder="अपनी इच्छानुसार राशि दर्ज करें"
                  className="w-full min-w-0 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#a79a8e]"
                />
              </div>

              {errors.amount && (
                <p className="mt-2 flex items-center gap-2 text-sm text-red-700">
                  <AlertCircle size={16} />
                  {errors.amount}
                </p>
              )}

              <div className="mt-4 flex items-center justify-between rounded-xl bg-[#f5ecdc] px-4 py-3">
                <span className="text-sm font-medium text-[#806f62]">
                  आपकी चयनित राशि
                </span>
                <span className="text-xl font-bold text-[#7c1b27]">
                  ₹ {Number.isFinite(amount) && amount > 0
                    ? formatAmount(amount)
                    : "0"}
                </span>
              </div>
            </section>

            {/* Donor information */}
            <section>
              <div className="mb-4 flex items-start gap-3">
                <UserRound className="mt-1 shrink-0 text-[#a87327]" size={24} />
                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">
                    दाता की जानकारी
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-[#806f62]">
                    भुगतान प्रक्रिया के लिए अपना विवरण भरें।
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="donor-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    पूरा नाम <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <UserRound
                      size={17}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#968475]"
                    />
                    <input
                      id="donor-name"
                      autoComplete="name"
                      value={donor.name}
                      onChange={(event) =>
                        updateDonor("name", event.target.value)
                      }
                      placeholder="अपना नाम दर्ज करें"
                      className={`${inputClass} pl-10`}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-700">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="donor-mobile"
                    className="mb-2 block text-sm font-semibold"
                  >
                    मोबाइल नंबर <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      size={17}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#968475]"
                    />
                    <input
                      id="donor-mobile"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      maxLength={10}
                      value={donor.mobile}
                      onChange={(event) =>
                        updateDonor(
                          "mobile",
                          event.target.value.replace(/\D/g, "").slice(0, 10)
                        )
                      }
                      placeholder="10 अंकों का मोबाइल नंबर"
                      className={`${inputClass} pl-10`}
                      aria-invalid={Boolean(errors.mobile)}
                      aria-describedby={
                        errors.mobile ? "mobile-error" : undefined
                      }
                    />
                  </div>
                  {errors.mobile && (
                    <p
                      id="mobile-error"
                      className="mt-1 text-xs text-red-700"
                    >
                      {errors.mobile}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="donor-message"
                  className="mb-2 block text-sm font-semibold"
                >
                  विशेष संकल्प / संदेश{" "}
                  <span className="font-normal text-[#968475]">(वैकल्पिक)</span>
                </label>
                <div className="relative">
                  <MessageSquare
                    size={17}
                    className="pointer-events-none absolute left-3 top-4 text-[#968475]"
                  />
                  <textarea
                    id="donor-message"
                    rows={3}
                    maxLength={500}
                    value={donor.message}
                    onChange={(event) =>
                      updateDonor("message", event.target.value)
                    }
                    placeholder="यदि कोई विशेष संकल्प या संदेश हो तो लिखें"
                    className={`${inputClass} resize-y pl-10`}
                  />
                </div>
              </div>
            </section>

            {/* Submission notice */}
            {notice && (
              <div
                role="status"
                className="flex items-start gap-3 rounded-xl border border-[#dfc58f] bg-[#fff8e8] p-4 text-sm leading-6 text-[#67431f]"
              >
                <AlertCircle className="mt-0.5 shrink-0" size={19} />
                <p>{notice}</p>
              </div>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#7b1b26] px-5 py-4 text-base font-bold text-white shadow-[0_10px_25px_-15px_rgba(74,16,28,0.8)] transition hover:bg-[#5f111c] focus:outline-none focus:ring-4 focus:ring-[#7b1b26]/20"
            >
              <LockKeyhole size={19} />
              भुगतान हेतु विवरण सत्यापित करें
              <span aria-hidden="true">→</span>
            </button>

            <p className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-[#89796a]">
              <ShieldCheck size={15} className="mt-0.5 shrink-0" />
              भुगतान गेटवे एकीकृत होने तक यह फॉर्म कोई भुगतान या
              लेन-देन नहीं करेगा।
            </p>
          </form>

          {/* Right sidebar */}
          <aside className="space-y-5">
            <div className="overflow-hidden rounded-2xl bg-[#4b111d] text-[#fff4e2] shadow-sm">
              <div className="border-b border-[#e8c77f]/20 bg-[#61202a] px-5 py-4">
                <div className="flex items-center gap-3">
                  <HandHeart size={22} className="text-[#e8c77f]" />
                  <h2 className="font-bold">आपके सहयोग का महत्व</h2>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-sm leading-7 text-[#f1dfcf]">
                  आपके सहयोग का उपयोग मंदिर के रखरखाव, धार्मिक
                  कार्यक्रमों, विकास कार्यों और सामाजिक सेवा के लिए
                  किया जा सकता है।
                </p>

                <div className="my-5 h-px bg-[#e8c77f]/25" />

                <p className="text-center text-base font-semibold leading-7 text-[#f0d18b]">
                  “श्रद्धा से किया गया सहयोग सेवा का माध्यम है।”
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e8ddca] bg-white p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <Sprout size={23} className="text-[#9a642a]" />
                <h2 className="text-lg font-bold">
                  आपके दान से किए जाने वाले कार्य
                </h2>
              </div>

              <div className="space-y-5">
                {donationPurposes.map((purpose) => {
                  const Icon = purpose.icon;

                  return (
                    <div key={purpose.title} className="flex gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f8efdf] text-[#98652b]">
                        <Icon size={21} />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold">
                          {purpose.title}
                        </h3>
                        <p className="mt-1 text-xs leading-6 text-[#857366]">
                          {purpose.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-[#ead9b7] bg-gradient-to-br from-[#fff4dd] to-[#f2e4c8] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="text-3xl" aria-hidden="true">
                  🙏
                </span>
                <div>
                  <h2 className="font-bold text-[#67202a]">
                    दान का महत्व
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#765d47]">
                    दान सेवा, सहयोग और सामुदायिक सहभागिता का माध्यम
                    है। अपने सामर्थ्य के अनुसार योगदान करें।
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e8ddca] bg-white p-5">
              <div className="flex items-start gap-3">
                <CalendarDays
                  size={21}
                  className="mt-0.5 shrink-0 text-[#9a642a]"
                />
                <div>
                  <h2 className="font-bold">दान संबंधी सहायता</h2>
                  <p className="mt-2 text-sm leading-6 text-[#857366]">
                    दान, रसीद या भुगतान संबंधी सहायता के लिए मंदिर
                    प्रशासन से संपर्क विवरण प्राप्त करें।
                  </p>
                </div>
              </div>
              <p className="mt-3 rounded-lg bg-[#fbf7ef] p-3 text-xs leading-5 text-[#857366]">
                आधिकारिक संपर्क विवरण उपलब्ध होने पर यहाँ जोड़ा जा सकता है।
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom section */}
      <section className="border-t border-[#e8ddca] bg-[#f4ead8]">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-14">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a56a] text-[#8b612c]">
            <Heart size={22} />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-[#4b111d]">
            श्रद्धा से सेवा, सेवा से सहयोग
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#806f62]">
            श्री कैलाश धाम मंदिर के धार्मिक एवं विकास कार्यों में
            सहभागिता के लिए धन्यवाद।
          </p>
        </div>
      </section>
    </main>
  );
}
