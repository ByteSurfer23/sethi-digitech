import React, { useState } from "react";

const JobForm = () => {
  const [formData, setFormData] = useState({
    job_heading: "",
    about_text: "",
    action: "", // Will hold either "add" or "edit"
    imagePosition: "1", // Default image position
  });

  const [newExperience, setNewExperience] = useState({
    year: "",
    title: "",
    duration: "",
    details: "",
    position: "",
  });

  const [imageData, setImageData] = useState({
    title: "",
    description: "",
    file: null,
  });

  // Handle main form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle experience input changes
  const handleExperienceChange = (e) => {
    setNewExperience({ ...newExperience, [e.target.name]: e.target.value });
  };

  // Handle image input changes
  const handleImageChange = (e) => {
    if (e.target.name === "file") {
      setImageData({ ...imageData, file: e.target.files[0] });
    } else {
      setImageData({ ...imageData, [e.target.name]: e.target.value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("job_heading", formData.job_heading);
    formDataToSend.append("about_text", formData.about_text);
    formDataToSend.append("action", formData.action);
    formDataToSend.append("imagePosition", formData.imagePosition); // Send image position
    formDataToSend.append("imageTitle", imageData.title);
    formDataToSend.append("imageDescription", imageData.description);
    if (imageData.file) {
      formDataToSend.append("image", imageData.file);
    }

    // Append experiences object (without stringifying)
    Object.keys(newExperience).forEach((key) => {
      formDataToSend.append(`experiences[${key}]`, newExperience[key]);
    });

    // console.log("Form Data to Send:", Object.fromEntries(formDataToSend));

    // Send data to backend
    fetch("http://localhost:3000/admin/change", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => console.log("Response from backend:", data))
      .catch((error) => console.error("Error sending form data:", error));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="text"
            name="job_heading"
            value={formData.job_heading}
            onChange={handleChange}
            placeholder="Job Heading"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="about_text"
            value={formData.about_text}
            onChange={handleChange}
            placeholder="About Text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Experience Details</h3>
        <div className="space-y-2">
          <input type="text" name="year" value={newExperience.year} onChange={handleExperienceChange} placeholder="Year" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="text" name="title" value={newExperience.title} onChange={handleExperienceChange} placeholder="Title" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="text" name="duration" value={newExperience.duration} onChange={handleExperienceChange} placeholder="Duration" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="text" name="details" value={newExperience.details} onChange={handleExperienceChange} placeholder="Details" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="text" name="position" value={newExperience.position} onChange={handleExperienceChange} placeholder="Position" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div className="flex gap-4 mt-4">
          <label>
            <input type="radio" name="action" value="add" checked={formData.action === "add"} onChange={handleChange} className="mr-2" />
            Add Experience
          </label>
          <label>
            <input type="radio" name="action" value="edit" checked={formData.action === "edit"} onChange={handleChange} className="mr-2" />
            Edit Experience
          </label>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Upload Image</h3>
        <div className="space-y-2">
          <input type="text" name="title" value={imageData.title} onChange={handleImageChange} placeholder="Image Title" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="text" name="description" value={imageData.description} onChange={handleImageChange} placeholder="Image Description" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="file" name="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Select Image Position</h3>
        <div className="flex gap-4">
          <label>
            <input type="radio" name="imagePosition" value="1" checked={formData.imagePosition === "1"} onChange={handleChange} className="mr-2" />
            1
          </label>
          <label>
            <input type="radio" name="imagePosition" value="2" checked={formData.imagePosition === "2"} onChange={handleChange} className="mr-2" />
            2
          </label>
          <label>
            <input type="radio" name="imagePosition" value="3" checked={formData.imagePosition === "3"} onChange={handleChange} className="mr-2" />
            3
          </label>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobForm;
