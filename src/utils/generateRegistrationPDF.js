import html2canvas from "html2canvas";
import jsPDF from "jspdf";

async function generateRegistrationPDF(
  element,
  registrationNumber
) {
  if (!element) {
    throw new Error(
      "Registration receipt element is not available."
    );
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: "#fffdf8",
    logging: false,
    imageTimeout: 15000,
  });

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  const pageWidth = 210;
  const pageHeight = 297;

  const image = canvas.toDataURL(
    "image/png",
    1
  );

  const imageWidth = pageWidth;
  const imageHeight =
    (canvas.height * imageWidth) /
    canvas.width;

  /*
   * The receipt itself is already designed
   * to A4 dimensions, so keep it edge-to-edge.
   */
  pdf.addImage(
    image,
    "PNG",
    0,
    0,
    imageWidth,
    imageHeight,
    undefined,
    "FAST"
  );

  pdf.save(
    `${registrationNumber || "registration"}.pdf`
  );
}

export default generateRegistrationPDF; 