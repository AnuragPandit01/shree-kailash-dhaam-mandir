import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Registration from "../pages/Registration";
import About from "../pages/About";
import Rituals from "../pages/Rituals";
import Gallery from "../pages/Gallery";
import Admin from "../pages/Admin";

/* =========================================================
   Temporary page
   ---------------------------------------------------------
   Used only until the actual page/component is created.
   Replace these with real page components later.
   ========================================================= */

function ComingSoonPage({ title, description }) {
  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-[var(--color-cream)] px-5 py-20">
      <div className="max-w-2xl text-center">

        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-white text-[var(--color-maroon)] shadow-sm"
          aria-hidden="true"
        >
          ॐ
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold-dark)]">
          श्री कैलाश धाम मंदिर
        </p>

        <h1 className="mt-3 text-3xl font-bold text-[var(--color-maroon)] sm:text-4xl">
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--color-ink-light)] sm:text-base">
          {description}
        </p>

        <div className="mx-auto mt-7 h-px w-24 bg-[var(--color-gold)]/60" />
      </div>
    </section>
  );
}

/* =========================================================
   404 Page
   ========================================================= */

function NotFoundPage() {
  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-[var(--color-cream)] px-5 py-20">
      <div className="max-w-xl text-center">

        <p className="text-sm font-semibold tracking-widest text-[var(--color-gold-dark)]">
          404
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[var(--color-maroon)] sm:text-5xl">
          पृष्ठ नहीं मिला
        </h1>

        <p className="mt-4 text-sm leading-7 text-[var(--color-ink-light)] sm:text-base">
          आपके द्वारा खोजा गया पृष्ठ उपलब्ध नहीं है।
        </p>

        <a
          href="/"
          className="mt-7 inline-flex items-center rounded-full bg-[var(--color-maroon)] px-5 py-3 text-sm font-bold !text-white transition-colors hover:bg-[var(--color-saffron)]"
        >
          मुख्य पृष्ठ पर जाएँ
        </a>

      </div>
    </section>
  );
}

/* =========================================================
   App Routes
   ========================================================= */

function AppRoutes() {
  return (
    <Routes>

      {/* =====================================================
          मुख्य पृष्ठ
      ===================================================== */}

      <Route
        path="/"
        element={<Home />}
      />

      {/* =====================================================
          मंदिर परिचय
      ===================================================== */}

      <Route
        path="/about"
        element={<About />}
      />

      {/* =====================================================
          पूजा एवं अनुष्ठान
      ===================================================== */}

      <Route
        path="/rituals"
        element={<Rituals />}
      />

      {/* =====================================================
          धार्मिक कार्यक्रम / सेवा पंजीकरण
      ===================================================== */}

      <Route
        path="/registration"
        element={<Registration />}
      />

      {/* =====================================================
          गैलरी
      ===================================================== */}

      <Route
        path="/gallery"
        element={<Gallery />}
      />

      {/* =====================================================
          सेवाएँ एवं योजनाएँ
      ===================================================== */}

      {/* रोज़गार प्रशिक्षण */}
      <Route
        path="/rojgaar-prashikshan"
        element={
          <ComingSoonPage
            title="रोज़गार प्रशिक्षण"
            description="रोज़गार प्रशिक्षण से संबंधित जानकारी, प्रशिक्षण कार्यक्रम और सेवा विवरण जल्द उपलब्ध होंगे।"
          />
        }
      />

      {/* खेल भारती स्कूल गेम परियोजना */}
      <Route
        path="/khel-bhaarti-school-game-pariyojna"
        element={
          <ComingSoonPage
            title="खेल भारती स्कूल गेम परियोजना"
            description="योग, वॉलीबॉल, कबड्डी और क्रिकेट से संबंधित परियोजना की विस्तृत जानकारी जल्द उपलब्ध होगी।"
          />
        }
      />

      {/* प्रॉपर्टी डीलरशिप */}
      <Route
        path="/property-dealership"
        element={
          <ComingSoonPage
            title="प्रॉपर्टी डीलरशिप"
            description="प्रॉपर्टी डीलरशिप से संबंधित सेवाओं और प्रक्रिया की विस्तृत जानकारी जल्द उपलब्ध होगी।"
          />
        }
      />

      {/* माला एवं कवच सेवा */}
      <Route
        path="/mala-kavach-seva"
        element={
          <ComingSoonPage
            title="माला एवं कवच सेवा"
            description="माला एवं कवच सेवा से संबंधित जानकारी और सेवा अनुरोध की सुविधा जल्द उपलब्ध होगी।"
          />
        }
      />

      {/* सदस्यता */}
      <Route
        path="/membership"
        element={
          <ComingSoonPage
            title="सदस्यता"
            description="मंदिर की सदस्यता, सदस्यता के लाभ और सदस्यता प्रक्रिया की जानकारी जल्द उपलब्ध होगी।"
          />
        }
      />

      {/* =====================================================
          अलग-अलग पंजीकरण
      ===================================================== */}

      {/* धार्मिक कार्यक्रम पंजीकरण */}
      <Route
        path="/registration"
        element={<Registration />}
      />

      {/* रोज़गार प्रशिक्षण पंजीकरण */}
      <Route
        path="/rojgaar-prashikshan/panjikaran"
        element={
          <ComingSoonPage
            title="रोज़गार प्रशिक्षण पंजीकरण"
            description="रोज़गार प्रशिक्षण हेतु पंजीकरण फॉर्म जल्द उपलब्ध होगा।"
          />
        }
      />

      {/* खेल भारती पंजीकरण */}
      <Route
        path="/khel-bhaarti-school-game-pariyojna/panjikaran"
        element={
          <ComingSoonPage
            title="खेल भारती पंजीकरण"
            description="योग, वॉलीबॉल, कबड्डी और क्रिकेट के लिए पंजीकरण फॉर्म जल्द उपलब्ध होगा।"
          />
        }
      />

      {/* प्रॉपर्टी डीलरशिप पंजीकरण */}
      <Route
        path="/property-dealership/panjikaran"
        element={
          <ComingSoonPage
            title="प्रॉपर्टी डीलरशिप पंजीकरण"
            description="प्रॉपर्टी डीलरशिप से संबंधित आवेदन फॉर्म जल्द उपलब्ध होगा।"
          />
        }
      />

      {/* माला एवं कवच सेवा पंजीकरण */}
      <Route
        path="/mala-kavach-seva/panjikaran"
        element={
          <ComingSoonPage
            title="माला एवं कवच सेवा पंजीकरण"
            description="माला एवं कवच सेवा हेतु सेवा अनुरोध फॉर्म जल्द उपलब्ध होगा।"
          />
        }
      />

      {/* सदस्यता पंजीकरण */}
      <Route
        path="/membership/panjikaran"
        element={
          <ComingSoonPage
            title="सदस्यता पंजीकरण"
            description="मंदिर की सदस्यता हेतु पंजीकरण फॉर्म जल्द उपलब्ध होगा।"
          />
        }
      />

      {/* =====================================================
          दान
      ===================================================== */}

      <Route
        path="/donation"
        element={
          <ComingSoonPage
            title="दान एवं सहयोग"
            description="अन्नदान, द्रव्यदान, वस्त्रदान और शिक्षा दान से संबंधित सेवा एवं दान सुविधा जल्द उपलब्ध होगी।"
          />
        }
      />

      {/* =====================================================
          लाइव दर्शन
      ===================================================== */}

      <Route
        path="/live"
        element={
          <ComingSoonPage
            title="लाइव दर्शन"
            description="मंदिर के लाइव दर्शन के लिए यह पृष्ठ जल्द उपलब्ध होगा।"
          />
        }
      />

      {/* =====================================================
          Privacy Policy
      ===================================================== */}

      <Route
        path="/privacy"
        element={
          <ComingSoonPage
            title="गोपनीयता नीति"
            description="गोपनीयता नीति का विस्तृत पृष्ठ जल्द उपलब्ध होगा।"
          />
        }
      />

      {/* =====================================================
          Terms & Conditions
      ===================================================== */}

      <Route
        path="/terms"
        element={
          <ComingSoonPage
            title="नियम एवं शर्तें"
            description="नियम एवं शर्तों का विस्तृत पृष्ठ जल्द उपलब्ध होगा।"
          />
        }
      />

      {/* =====================================================
          व्यवस्थापक
      ===================================================== */}

      <Route
        path="/admin"
        element={<Admin />}
      />

      {/* =====================================================
          /index.html → /
      ===================================================== */}

      <Route
        path="/index.html"
        element={<Navigate to="/" replace />}
      />

      {/* =====================================================
          Unknown URL
      ===================================================== */}

      <Route
        path="*"
        element={<NotFoundPage />}
      />

    </Routes>
  );
}

export default AppRoutes;