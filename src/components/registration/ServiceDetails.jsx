import {
  CalendarDays,
  FileText,
  UserRound,
} from "lucide-react";

function ServiceDetails({ service, data, onChange }) {
  if (!service) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({
      ...data,
      [name]: value,
    });
  };

  const serviceConfig = {
    marriage: {
      title: "विवाह संस्कार की जानकारी",
      description:
        "विवाह संस्कार से संबंधित आवश्यक जानकारी दर्ज करें।",
      fields: [
        {
          name: "brideName",
          label: "वधू का नाम",
          placeholder: "वधू का पूरा नाम",
          icon: UserRound,
        },
        {
          name: "groomName",
          label: "वर का नाम",
          placeholder: "वर का पूरा नाम",
          icon: UserRound,
        },
      ],
    },

    mundan: {
      title: "मुंडन संस्कार की जानकारी",
      description:
        "मुंडन संस्कार से संबंधित आवश्यक जानकारी दर्ज करें।",
      fields: [
        {
          name: "childName",
          label: "बालक / बालिका का नाम",
          placeholder: "पूरा नाम",
          icon: UserRound,
        },
        {
          name: "guardianName",
          label: "अभिभावक का नाम",
          placeholder: "अभिभावक का पूरा नाम",
          icon: UserRound,
        },
      ],
    },

    "special-puja": {
      title: "विशेष पूजा की जानकारी",
      description:
        "विशेष पूजा से संबंधित जानकारी दर्ज करें।",
      fields: [
        {
          name: "pujaPurpose",
          label: "पूजा का उद्देश्य",
          placeholder: "पूजा का उद्देश्य लिखें",
          icon: FileText,
        },
      ],
    },

    other: {
      title: "अन्य धार्मिक अनुष्ठान की जानकारी",
      description:
        "जिस धार्मिक अनुष्ठान के लिए पंजीकरण करना चाहते हैं, उसकी जानकारी दें।",
      fields: [
        {
          name: "ritualName",
          label: "अनुष्ठान का नाम",
          placeholder: "अनुष्ठान का नाम",
          icon: FileText,
        },
      ],
    },
  };

  const config = serviceConfig[service];

  if (!config) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-[var(--color-gold)]/20 bg-white p-5 shadow-[var(--shadow-sm)] sm:p-7 lg:p-8">
      {/* Section Header */}
      <div className="mb-7 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-maroon)]/10 text-[var(--color-maroon)]">
          <FileText
            size={21}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-gold)]">
            चरण 03
          </p>

          <h2 className="heading-section mt-1 text-xl text-[var(--color-maroon)] sm:text-2xl">
            {config.title}
          </h2>

          <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
            {config.description}
          </p>
        </div>
      </div>

      {/* Dynamic Fields */}
      <div className="grid gap-5 sm:grid-cols-2">
        {config.fields.map((field) => {
          const Icon = field.icon;

          return (
            <div
              key={field.name}
              className="sm:last:col-span-2"
            >
              <label
                htmlFor={`service-${field.name}`}
                className="mb-2 block text-sm font-bold text-[var(--color-ink)]"
              >
                {field.label}
              </label>

              <div className="relative">
                <Icon
                  size={18}
                  strokeWidth={1.7}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
                  aria-hidden="true"
                />

                <input
                  id={`service-${field.name}`}
                  name={field.name}
                  type="text"
                  value={data[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/40 py-3.5 pl-11 pr-4 text-sm text-[var(--color-ink)] outline-none transition-all placeholder:text-[var(--color-muted)]/70 focus:border-[var(--color-maroon)] focus:bg-white focus:ring-2 focus:ring-[var(--color-maroon)]/10"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Preferred Date */}
      <div className="mt-5">
        <label
          htmlFor="service-preferred-date"
          className="mb-2 block text-sm font-bold text-[var(--color-ink)]"
        >
          इच्छित तिथि
          <span className="ml-1 text-xs font-medium text-[var(--color-muted)]">
            (वैकल्पिक)
          </span>
        </label>

        <div className="relative max-w-md">
          <CalendarDays
            size={18}
            strokeWidth={1.7}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            aria-hidden="true"
          />

          <input
            id="service-preferred-date"
            name="preferredDate"
            type="date"
            value={data.preferredDate || ""}
            onChange={handleChange}
            className="w-full rounded-xl border border-[var(--color-gold)]/25 bg-[var(--color-cream)]/40 py-3.5 pl-11 pr-4 text-sm text-[var(--color-ink)] outline-none transition-all focus:border-[var(--color-maroon)] focus:bg-white focus:ring-2 focus:ring-[var(--color-maroon)]/10"
          />
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-cream)]/50 p-4">
        <p className="text-xs leading-5 text-[var(--color-muted)]">
          सेवा से संबंधित अंतिम जानकारी और आवश्यक विवरण मंदिर
          प्रबंधन द्वारा निर्धारित किए जाएंगे।
        </p>
      </div>
    </section>
  );
}

export default ServiceDetails;