import html2canvas from "html2canvas";
import jsPDF from "jspdf";

async function generateTourTicketPDF(element, ticketNumber) {
  if (!element) {
    throw new Error("Tour ticket element is not available.");
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

  const image = canvas.toDataURL("image/png", 1);
  const pageWidth = 210;
  const pageHeight = 297;
  const imageHeight = (canvas.height * pageWidth) / canvas.width;

  // The ticket element is styled to A4 proportions, so it should fit on one page.
  const renderHeight = Math.min(imageHeight, pageHeight);
  pdf.addImage(image, "PNG", 0, 0, pageWidth, renderHeight, undefined, "FAST");
  pdf.save(`${ticketNumber || "tour-ticket"}.pdf`);
}

export default generateTourTicketPDF;