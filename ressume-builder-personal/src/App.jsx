import { useState } from "react";
import { jsPDF } from "jspdf";
import ResumeForm from "./ressumeForm/ressumeForm";
import Preview from "./preview/preview";
import html2canvas from "html2canvas";

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const generatePDF = () => {
    const content = document.getElementById("preview-content");
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    html2canvas(content, {
      scale: 2,
      width: pdfWidth * 2,
      height: pdfHeight * 2,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <>
      <div className="flex-container">
        <ResumeForm onFormSubmit={handleFormSubmit} />
        <div>
          <h1>Preview</h1>
          <br />
          {formData && <Preview formData={formData} />}
          <button onClick={generatePDF}>Download PDF</button>
        </div>
      </div>
    </>
  );
}

export default App;
