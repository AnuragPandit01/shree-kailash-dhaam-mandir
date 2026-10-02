export async function createRegistration(registrationData) {
  // Temporary simulated server delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const registrationNumber = "SKDM-2026-000001";

  return {
    registrationNumber,
    status: "completed",

    name: registrationData.devotee.name,
    mobile: registrationData.devotee.mobile,
    email: registrationData.devotee.email,
    address: registrationData.devotee.address,

    service: registrationData.service.type,
    serviceDetails: registrationData.service.details,

    preferredDate: registrationData.schedule.date,
    timeSlot: registrationData.schedule.timeSlot,

    additionalDetails: registrationData.additionalDetails,

    createdAt: new Date().toISOString(),
  };
}