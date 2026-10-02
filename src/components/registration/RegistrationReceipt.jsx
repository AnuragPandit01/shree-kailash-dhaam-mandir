import "./registration-receipt.css";

const serviceLabels = {
  marriage: "विवाह संस्कार",
  mundan: "मुंडन संस्कार",
  "special-puja": "विशेष पूजा",
  other: "अन्य धार्मिक अनुष्ठान",
};

const timeLabels = {
  morning: "प्रातःकाल",
  afternoon: "दोपहर",
  evening: "सायंकाल",
};

const detailLabels = {
  brideName: "वधू का नाम",
  groomName: "वर का नाम",
  childName: "बालक / बालिका का नाम",
  guardianName: "अभिभावक का नाम",
  pujaPurpose: "पूजा का उद्देश्य",
  ritualName: "अनुष्ठान का नाम",
};

function formatDate(value) {
  if (!value) return "—";

  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("hi-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatCreatedDate(value) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return new Intl.DateTimeFormat("hi-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function RegistrationReceipt({ registration, receiptRef }) {
  if (!registration) return null;

  const details = registration.serviceDetails || {};

  const detailEntries = Object.entries(details).filter(
    ([, value]) => value
  );

  return (
    <div
      ref={receiptRef}
      className="registration-receipt"
      aria-hidden="true"
    >
      <div className="receipt-page">
        {/* Decorative frame */}
        <div className="receipt-frame" />
        <div className="receipt-frame-inner" />

        {/* Logo watermark */}
        <img
          src="/images/logo/logo.png"
          alt=""
          className="receipt-watermark"
        />

        {/* All readable content */}
        <div className="receipt-content">
          {/* Header */}
          <header className="receipt-header">
            <div className="receipt-devotional-row">
              <span>॥ ॐ नमः शिवाय ॥</span>
              <span>॥ हर हर महादेव ॥</span>
            </div>

            <img
              src="/images/logo/logo.png"
              alt="श्री कैलाश धाम मंदिर"
              className="receipt-logo"
            />

            <h1>श्री कैलाश धाम मंदिर</h1>

            <p className="receipt-location">
              दौना, जसरा
            </p>

            <div className="receipt-heading-decoration">
              <span />
              <i />
              <span />
            </div>

            <h2>धार्मिक अनुष्ठान पंजीकरण</h2>

            <p className="receipt-subtitle">
              पंजीकरण प्राप्ति रसीद
            </p>
          </header>

          {/* Registration Meta */}
          <section className="receipt-meta">
            <div className="receipt-meta-number">
              <span>पंजीकरण संख्या</span>

              <strong>
                {registration.registrationNumber || "—"}
              </strong>
            </div>

            <div className="receipt-meta-date">
              <span>पंजीकरण दिनांक</span>

              <strong>
                {formatCreatedDate(registration.createdAt)}
              </strong>
            </div>
          </section>

          {/* Intro */}
          <div className="receipt-intro">
            <p>
              आपका पंजीकरण श्री कैलाश धाम मंदिर में
              सफलतापूर्वक प्राप्त हो गया है।
            </p>

            <p>
              मंदिर प्रबंधन आवश्यक जानकारी एवं उपलब्धता
              के संबंध में आपसे संपर्क करेगा।
            </p>
          </div>

          {/* Two-column information area */}
          <div className="receipt-columns">
            {/* Applicant */}
            <section className="receipt-card">
              <div className="receipt-card-heading">
                <span className="receipt-card-icon">ॐ</span>

                <h3>
                  भक्त / आवेदक की जानकारी
                </h3>
              </div>

              <div className="receipt-fields">
                <ReceiptField
                  label="नाम"
                  value={registration.name}
                />

                <ReceiptField
                  label="मोबाइल नंबर"
                  value={registration.mobile}
                />

                <ReceiptField
                  label="ईमेल"
                  value={registration.email}
                />

                <ReceiptField
                  label="पता"
                  value={registration.address}
                />
              </div>
            </section>

            {/* Service */}
            <section className="receipt-card">
              <div className="receipt-card-heading">
                <span className="receipt-card-icon">ॐ</span>

                <h3>
                  सेवा / अनुष्ठान का विवरण
                </h3>
              </div>

              <div className="receipt-fields">
                <ReceiptField
                  label="चयनित सेवा"
                  value={
                    serviceLabels[registration.service] ||
                    registration.service
                  }
                />

                {detailEntries.map(([key, value]) => (
                  <ReceiptField
                    key={key}
                    label={detailLabels[key] || key}
                    value={value}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Date and time */}
          <section className="receipt-card receipt-card-full">
            <div className="receipt-card-heading">
              <span className="receipt-card-icon">॥</span>

              <h3>दिन एवं समय</h3>
            </div>

            <div className="receipt-fields receipt-fields-two">
              <ReceiptField
                label="इच्छित तिथि"
                value={formatDate(registration.preferredDate)}
              />

              <ReceiptField
                label="पसंदीदा समय"
                value={
                  timeLabels[registration.timeSlot] ||
                  registration.timeSlot ||
                  "—"
                }
              />
            </div>
          </section>

          {/* Additional information */}
          <section className="receipt-card receipt-card-full">
            <div className="receipt-card-heading">
              <span className="receipt-card-icon">✦</span>

              <h3>अतिरिक्त जानकारी</h3>
            </div>

            <div className="receipt-additional">
              {registration.additionalDetails?.trim()
                ? registration.additionalDetails
                : "कोई अतिरिक्त जानकारी नहीं दी गई है।"}
            </div>
          </section>

          {/* Status */}
          <section className="receipt-status">
            <div className="receipt-status-icon">
              ✓
            </div>

            <div>
              <span>स्थिति</span>

              <strong>
                पंजीकरण पूर्ण
              </strong>
            </div>
          </section>

          {/* Management notice */}
          <section className="receipt-notice">
            <strong>महत्वपूर्ण सूचना</strong>

            <p>
              यह दस्तावेज़ आपके पंजीकरण की प्राप्ति का
              प्रमाण है। मंदिर प्रबंधन आपके आवेदन की
              समीक्षा करके आवश्यक जानकारी, उपलब्धता
              अथवा आगे की प्रक्रिया के संबंध में आपसे
              संपर्क करेगा।
            </p>
          </section>

          {/* Footer */}
          <footer className="receipt-footer">
            <div>
              <strong>
                श्री कैलाश धाम मंदिर
              </strong>

              <span>
                दौना, जसरा
              </span>
            </div>

            <div className="receipt-footer-mantra">
              <span>॥ ॐ नमः शिवाय ॥</span>
              <span>आस्था • सेवा • संस्कृति</span>
            </div>

            <div className="receipt-footer-right">
              <span>आपकी श्रद्धा हमारा सौभाग्य है।</span>
              <strong>हर हर महादेव ॥</strong>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

function ReceiptField({ label, value }) {
  return (
    <div className="receipt-field">
      <span>{label}</span>

      <strong>
        {value || "—"}
      </strong>
    </div>
  );
}

export default RegistrationReceipt;