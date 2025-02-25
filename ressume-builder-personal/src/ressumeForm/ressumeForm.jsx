import React, { useState } from "react";
import "./ressumeForm.css";

const ResumeForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    gender: "",
    skills: [],
  });

  // Handling input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value] // Add skill if checked
          : prev.skills.filter((skill) => skill !== value), // Remove if unchecked
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="resume-form-container">
      <h2>Resume Form</h2>

      {/* Full Name */}
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="FIRST NAME"
        className="input-field"
        required
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="LAST NAME"
        className="input-field"
        required
      />

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="PHONE"
        className="input-field"
        required
      />

      {/* Summary */}
      <textarea
        name="summary"
        value={formData.summary}
        onChange={handleChange}
        placeholder="SUMMARY"
        className="input-field"
      />

      {/* Gender (Radio Buttons) */}
      <label>Gender:</label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />{" "}
        Female
      </label>

      {/* Skills (Checkboxes) */}
      <label>Skills:</label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="JavaScript"
          onChange={handleChange}
          checked={formData.skills.includes("JavaScript")}
        />{" "}
        JavaScript
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="React"
          onChange={handleChange}
          checked={formData.skills.includes("React")}
        />{" "}
        React
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="Node.js"
          onChange={handleChange}
          checked={formData.skills.includes("Node.js")}
        />{" "}
        Node.js
      </label>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResumeForm;
