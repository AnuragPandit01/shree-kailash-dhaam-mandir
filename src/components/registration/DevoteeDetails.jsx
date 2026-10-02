import { UserRound, Phone, Mail, MapPin } from "lucide-react";

function DevoteeDetails({ data, onChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({
      ...data,
      [name]: value,
    });
  };

  return (
    <section className="rounded-2xl border border-[var(--color-gold)]/20 bg-white p-5 shadow-[var(--shadow-sm)] sm:p-7 lg:p-8">
      {/* Section Header */}
      <div className="mb-7 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-maroon)]/10 text-[var(--color-maroon)]">
          <UserRound
            size={21}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-gold)]">
            चरण 01
          </p>

          <h2 className="heading-section mt-1 text-xl text-[var(--color-maroon)] sm:text-2xl">
            भक्त / आवेदक की जानकारी
          </h2>

          <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
            पंजीकरण के लिए अपनी मूल जानकारी दर्ज करें।
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <div className="md:col-span-2">
          <label
            htmlFor="devotee-name"
            className="mb-2 block text-sm font-bold text-[var(--color-ink)]"
          >
            भक्त / आवेदक का नाम
            <span className="ml-1 text-red-600" aria-hidden="true">
              *
            </span>
          </label>

          <div className="relative">
            <UserRound
              size={18}
              strokeWidth={1.7}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
              aria-hidden="true"
            />

            <input
              id="devotee-name"
              name="name"
              type="text"
              value={data.name}
              onChange={handleChange}
              placeholder="अपना पूरा नाम लिखें"
              autoComplete="name"
              required
              className="w-full rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/40 py-3.5 pl-11 pr-4 text-sm text-[var(--color-ink)] outline-none transition-all placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-maroon)] focus:bg-white focus:ring-2 focus:ring-[var(--color-maroon)]/10"
            />
          </div>
        </div>

        {/* Mobile */}
        <div>
          <label
            htmlFor="devotee-mobile"
            className="mb-2 block text-sm font-bold text-[var(--color-ink)]"
          >
            मोबाइल नंबर
            <span className="ml-1 text-red-600" aria-hidden="true">
              *
            </span>
          </label>

          <div className="relative">
            <Phone
              size={18}
              strokeWidth={1.7}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
              aria-hidden="true"
            />

            <input
              id="devotee-mobile"
              name="mobile"
              type="tel"
              value={data.mobile}
              onChange={handleChange}
              placeholder="10 अंकों का मोबाइल नंबर"
              autoComplete="tel"
              inputMode="numeric"
              maxLength={10}
              required
              className="w-full rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/40 py-3.5 pl-11 pr-4 text-sm text-[var(--color-ink)] outline-none transition-all placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-maroon)] focus:bg-white focus:ring-2 focus:ring-[var(--color-maroon)]/10"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="devotee-email"
            className="mb-2 block text-sm font-bold text-[var(--color-ink)]"
          >
            ईमेल पता
            <span className="ml-1 text-xs font-medium text-[var(--color-muted)]">
              (वैकल्पिक)
            </span>
          </label>

          <div className="relative">
            <Mail
              size={18}
              strokeWidth={1.7}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
              aria-hidden="true"
            />

            <input
              id="devotee-email"
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
              placeholder="example@email.com"
              autoComplete="email"
              className="w-full rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/40 py-3.5 pl-11 pr-4 text-sm text-[var(--color-ink)] outline-none transition-all placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-maroon)] focus:bg-white focus:ring-2 focus:ring-[var(--color-maroon)]/10"
            />
          </div>
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label
            htmlFor="devotee-address"
            className="mb-2 block text-sm font-bold text-[var(--color-ink)]"
          >
            पता
            <span className="ml-1 text-xs font-medium text-[var(--color-muted)]">
              (वैकल्पिक)
            </span>
          </label>

          <div className="relative">
            <MapPin
              size={18}
              strokeWidth={1.7}
              className="pointer-events-none absolute left-4 top-4 text-[var(--color-muted)]"
              aria-hidden="true"
            />

            <textarea
              id="devotee-address"
              name="address"
              value={data.address}
              onChange={handleChange}
              placeholder="अपना पता लिखें"
              autoComplete="street-address"
              rows={3}
              className="w-full resize-none rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/40 py-3.5 pl-11 pr-4 text-sm leading-6 text-[var(--color-ink)] outline-none transition-all placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-maroon)] focus:bg-white focus:ring-2 focus:ring-[var(--color-maroon)]/10"
            />
          </div>
        </div>
      </div>

      {/* Required Fields Note */}
      <p className="mt-5 text-xs text-[var(--color-muted)]">
        <span className="mr-1 text-red-600">*</span>
        चिह्नित जानकारी आवश्यक है।
      </p>
    </section>
  );
}

export default DevoteeDetails;