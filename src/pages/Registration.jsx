import { useState } from "react";

import SEO from "../components/common/SEO";
import RegistrationHero from "../components/registration/RegistrationHero";
import DevoteeDetails from "../components/registration/DevoteeDetails";
import ServiceSelector from "../components/registration/ServiceSelector";
import ServiceDetails from "../components/registration/ServiceDetails";
import DateSelector from "../components/registration/DateSelector";
import TimeSlotSelector from "../components/registration/TimeSlotSelector";
import AdditionalDetails from "../components/registration/AdditionalDetails";
import RegistrationSummary from "../components/registration/RegistrationSummary";
import RegistrationSuccess from "../components/registration/RegistrationSuccess";

import { createRegistration } from "../services/registrationService";

function Registration() {
  const [devotee, setDevotee] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const [service, setService] = useState("");
  const [serviceDetails, setServiceDetails] = useState({});
  const [registrationDate, setRegistrationDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [registrationResult, setRegistrationResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitError("");

    // --------------------------------
    // Frontend validation
    // --------------------------------

    if (!devotee.name.trim()) {
      setSubmitError("कृपया अपना नाम दर्ज करें।");
      return;
    }

    if (!/^\d{10}$/.test(devotee.mobile.trim())) {
      setSubmitError("कृपया 10 अंकों का मोबाइल नंबर दर्ज करें।");
      return;
    }

    if (!service) {
      setSubmitError("कृपया सेवा / अनुष्ठान का चयन करें।");
      return;
    }

    if (!registrationDate) {
      setSubmitError("कृपया पसंदीदा तिथि चुनें।");
      return;
    }

    if (!timeSlot) {
      setSubmitError("कृपया समय चुनें।");
      return;
    }

    // --------------------------------
    // Data sent to backend
    // --------------------------------

    const registrationData = {
      devotee: {
        name: devotee.name.trim(),
        mobile: devotee.mobile.trim(),
        email: devotee.email.trim(),
        address: devotee.address.trim(),
      },

      service: {
        type: service,
        details: serviceDetails,
      },

      schedule: {
        date: registrationDate,
        timeSlot,
      },

      additionalDetails: additionalDetails.trim(),
    };

    try {
      setIsSubmitting(true);

      const registration =
        await createRegistration(registrationData);

      setRegistrationResult(registration);
    } catch (error) {
      setSubmitError(
        error?.message ||
          "पंजीकरण जमा नहीं हो सका। कृपया पुनः प्रयास करें।"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // --------------------------------
  // Registration successful
  // --------------------------------

  if (registrationResult) {
    return (
      <>
        <SEO
          title="पंजीकरण सफल | श्री कैलाश धाम मंदिर"
          description="श्री कैलाश धाम मंदिर में आपका पंजीकरण सफलतापूर्वक प्राप्त हो गया है।"
        />

        <RegistrationSuccess
          registration={registrationResult}
        />
      </>
    );
  }

  // --------------------------------
  // Registration form
  // --------------------------------

  return (
    <>
      <SEO
        title="धार्मिक अनुष्ठान पंजीकरण | श्री कैलाश धाम मंदिर"
        description="श्री कैलाश धाम मंदिर में विवाह संस्कार, मुंडन संस्कार, विशेष पूजा एवं अन्य धार्मिक अनुष्ठानों के लिए पंजीकरण करें।"
        canonical="/registration"
      />

      <RegistrationHero />

      <section className="bg-[var(--color-cream)] py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <DevoteeDetails
              data={devotee}
              onChange={setDevotee}
            />

            <ServiceSelector
              value={service}
              onChange={setService}
            />

            <ServiceDetails
              service={service}
              data={serviceDetails}
              onChange={setServiceDetails}
            />

            <DateSelector
              value={registrationDate}
              onChange={setRegistrationDate}
            />

            <TimeSlotSelector
              value={timeSlot}
              onChange={setTimeSlot}
            />

            <AdditionalDetails
              value={additionalDetails}
              onChange={setAdditionalDetails}
            />

            <RegistrationSummary
              devotee={devotee}
              service={service}
              serviceDetails={serviceDetails}
              registrationDate={registrationDate}
              timeSlot={timeSlot}
              additionalDetails={additionalDetails}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              submitError={submitError}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;  