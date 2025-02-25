import { useState } from "react";
import { jsPDF } from "jspdf";
import ResumeForm from "./ressumeForm/ressumeForm";

function App() {
  const [text, setText] = useState("");

  const generatePDF = () => {
    console.log(text);
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("resume.pdf");
  };

  return (
    <>
      <div className="flex-container">
        <ResumeForm />
        <div>
          <h1>Simple Resume Builder</h1>
          <textarea
            rows="5"
            cols="50"
            placeholder="Enter your resume details..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button onClick={generatePDF}>Download PDF</button>
        </div>
      </div>
    </>
  );
}

export default App;
