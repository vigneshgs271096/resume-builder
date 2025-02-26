import React, { useState } from "react";
import "./ressumeForm.css";

const ResumeForm = ({ onFormSubmit }) => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedinURL: "",
    gitHubURL: "",
    portfolioURL: "",
    customFields: {}, // State to store custom fields
  });

  // Handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("custom_")) {
      const key = name.split("custom_")[1];
      setFormData((prev) => ({
        ...prev,
        customFields: {
          ...prev.customFields,
          [key]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    console.log("Form Submitted:", formData);
  };

  // Adding a new custom field
  const addCustomField = () => {
    const key = prompt("Enter the key for the custom field:");
    if (key) {
      setFormData((prev) => ({
        ...prev,
        customFields: {
          ...prev.customFields,
          [key]: "",
        },
      }));
    }
  };

  return (
    <>
      <h2>Personal details</h2>
      <form onSubmit={handleSubmit} className="resume-form-container">
        {/* Full Name */}
        <input
          type="text"
          name="name"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="NAME"
          className="input-field"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="EMAIL"
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

        {/* Phone */}
        <input
          type="url"
          name="linkedinURL"
          value={formData.linkedinURL}
          onChange={handleChange}
          placeholder="LinkedIn"
          className="input-field"
          required
        />

        {/* github */}
        <input
          type="url"
          name="gitHubURL"
          value={formData.gitHubURL}
          onChange={handleChange}
          placeholder="Github"
          className="input-field"
        />

        {/* github */}
        <input
          type="url"
          name="portfolioURL"
          value={formData.portfolioURL}
          onChange={handleChange}
          placeholder="Portfolio"
          className="input-field"
        />

        {/* Custom Fields */}
        {Object.keys(formData.customFields).map((key) => (
          <input
            key={key}
            type="url"
            name={`custom_${key}`}
            value={formData.customFields[key]}
            onChange={handleChange}
            placeholder={key}
            className="input-field"
          />
        ))}
        <div>
          <button type="button" onClick={addCustomField}>
            Add Custom Field
          </button>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </div>
        {/* Add Custom Field Button */}
      </form>
    </>
  );
};

export default ResumeForm;
