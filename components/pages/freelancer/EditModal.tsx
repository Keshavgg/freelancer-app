import React, { useState, useEffect } from "react";

function EditModal({
  experience,
  onClose,
  onApply,
}: {
  experience: any;
  onClose: any;
  onApply: any;
}) {
  const [formData, setFormData] = useState(experience);
  const [errors, setErrors] = useState({
    title: "",
    company: "",
    duration: "",
    description: "",
  });
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    setFormData(experience);
  }, [experience]);

  useEffect(() => {
    const { title, company, duration, description } = formData;
    const newErrors = {
      title: "",
      company: "",
      duration: "",
      description: "",
    };

    if (!title) newErrors.title = "Job title is required.";
    if (!company) newErrors.company = "Company name is required.";
    if (!duration) newErrors.duration = "Duration is required.";
    if (!description) newErrors.description = "Description is required.";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // @ts-ignore
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    if (isFormValid) {
      onApply(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#403D39] bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-[#252422] p-6 m-4 rounded-xl shadow-lg w-full md:max-w-[120vh] md:h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 text-3xl hover:border   "
        >
          &times;
        </button>
        <h2 className="text-2xl text-white font-semibold mb-4">
          Edit Experience
        </h2>

        <div className="mb-4">
          <label
            className="block mb-1 font-semibold text-[#F3EFE4]"
            htmlFor="title"
          >
            Post/Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-2  ${
              errors.title ? "border-red-500" : ""
            } bg-[#454442] text-white rounded-md`}
            placeholder="Enter job title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block mb-1 font-semibold text-[#F3EFE4]"
            htmlFor="company"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full p-2  ${
              errors.company ? "border-red-500" : ""
            } text-white bg-[#454442] rounded-md`}
            placeholder="Enter company name"
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block mb-1 font-semibold text-[#F3EFE4]"
            htmlFor="duration"
          >
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className={`w-full p-2  ${
              errors.duration ? "border-red-500" : ""
            } text-white bg-[#454442] rounded-md`}
            placeholder="Enter duration"
          />
          {errors.duration && (
            <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block mb-1 font-semibold text-[#F3EFE4]"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full p-2 ${
              errors.description ? "border-red-500" : ""
            } text-white bg-[#454442] rounded-md`}
            rows={4}
            placeholder="Enter description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleApply}
            className={`px-4 py-2 rounded-md ${
              isFormValid
                ? "bg-[#EB5E28] hover:bg-[#f38357] rounded-xl hover:scale-105 text-white font-semibold "
                : "bg-[#ff9870] cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Apply
          </button>
          <button
            onClick={onClose}
            className="bg-black  px-4 py-2 rounded-xl hover:scale-105 text-white font-semibold hover:bg-[#403D39]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
