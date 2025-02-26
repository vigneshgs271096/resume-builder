import React from "react";

const Preview = ({ formData }) => {
  return (
    <div id="preview-content">
      <h2>Resume Preview</h2>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Phone:</strong> {formData.phone}
      </p>
      <p>
        <strong>LinkedIn:</strong> {formData.linkedinURL}
      </p>
      <p>
        <strong>GitHub:</strong> {formData.gitHubURL}
      </p>
      <p>
        <strong>Portfolio:</strong> {formData.portfolioURL}
      </p>
      {Object.keys(formData.customFields).map((key) => (
        <p key={key}>
          <strong>{key}:</strong> {formData.customFields[key]}
        </p>
      ))}
    </div>
  );
};

export default Preview;
