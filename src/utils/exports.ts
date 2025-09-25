import _html2pdf from "html2pdf.js";

// Define the shape of the html2pdf chain
interface Html2PdfInstance {
	from: (element: HTMLElement) => Html2PdfInstance;
	set: (opt: Record<string, unknown>) => Html2PdfInstance;
	save: () => void;
}

// Cast the imported function to a callable that returns the correct chain
const html2pdf = _html2pdf as unknown as () => Html2PdfInstance;

export default function exportReportAsPDF(elementId: string, filename = "Monthly-Report") {
	const element = document.getElementById(elementId);
	if (!element) return;

	const opt = {
		margin: 0.5,
		filename: `${filename}.pdf`,
		image: { type: "jpeg", quality: 0.98 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
	};

	html2pdf().from(element).set(opt).save();
}
