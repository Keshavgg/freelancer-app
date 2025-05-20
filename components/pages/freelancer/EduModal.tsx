import React, { useState } from "react";

function EduModal({
  education,
  onClose,
  onApply,
}: {
  education: any;
  onClose: any;
  onApply: any;
}) {
  const [editEducation, setEditEducation] = useState(education);
  const [errors, setErrors] = useState({
    collegeName: "",
    graduationFrom: "",
    graduationTo: "",
    cgpa: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // @ts-ignore
    setEditEducation((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {
      collegeName: "",
      graduationFrom: "",
      graduationTo: "",
      cgpa: "",
    };
    if (!editEducation.collegeName)
      newErrors.collegeName = "College/University is required.";
    if (!editEducation.graduationFrom)
      newErrors.graduationFrom = "Graduation From date is required.";
    if (!editEducation.graduationTo)
      newErrors.graduationTo = "Graduation To date is required.";

    if (!editEducation.cgpa) newErrors.cgpa = "CGPA is required.";
    return newErrors;
  };

  const applyChanges = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onApply(editEducation);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#403D39] bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-[#252422] p-6 m-4 rounded-xl shadow-lg w-full md:max-w-[120vh] md:h-[90vh] relative">
        <button
          className="absolute top-2 right-2 text-red-600 text-3xl"
          onClick={onClose}
        >
          ×
        </button>
        <h3 className="text-xl text-white font-semibold mb-4">
          Education Information
        </h3>
        <div className="mb-4">
          <label
            className="block font-semibold mb-1 text-[#F3EFE4]"
            htmlFor="collegeName"
          >
            College/University
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={editEducation.collegeName}
            onChange={handleChange}
            className={`w-full p-2  rounded-xl bg-[#454442] text-white ${
              errors.collegeName ? "border-red-500" : ""
            }`}
          />

          {errors.collegeName && (
            <p className="text-red-500 text-xs mt-1">{errors.collegeName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-[#F3EFE4]">
            Graduation Year
          </label>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label
                className="block font-semibold mb-1 text-[#CCC5B9]"
                htmlFor="graduationFrom"
              >
                From
              </label>
              <input
                type="date"
                id="graduationFrom"
                name="graduationFrom"
                value={editEducation.graduationFrom}
                onChange={handleChange}
                className={`w-full p-2  rounded-xl bg-[#454442]  text-white ${
                  errors.graduationFrom ? "border-red-500" : ""
                }`}
              />
              {errors.graduationFrom && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.graduationFrom}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label
                className="block font-semibold mb-1 text-[#CCC5B9]"
                htmlFor="graduationTo"
              >
                To
              </label>
              <input
                type="date"
                id="graduationTo"
                name="graduationTo"
                value={editEducation.graduationTo}
                onChange={handleChange}
                className={`w-full p-2  rounded-xl bg-[#454442] text-white ${
                  errors.graduationTo ? "border-red-500" : ""
                }`}
              />
              {errors.graduationTo && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.graduationTo}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block font-semibold mb-1 text-[#F3EFE4]"
            htmlFor="cgpa"
          >
            CGPA
          </label>
          <input
            type="text"
            id="cgpa"
            name="cgpa"
            value={editEducation.cgpa}
            onChange={handleChange}
            className={`w-full p-2 rounded-xl bg-[#454442] text-white ${
              errors.cgpa ? "border-red-500" : ""
            }`}
          />
          {errors.cgpa && (
            <p className="text-red-500 text-xs mt-1">{errors.cgpa}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block font-semibold mb-1 text-[#F3EFE4]"
            htmlFor="additionalInfo"
          >
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={editEducation.additionalInfo}
            onChange={handleChange}
            className="w-full p-2 rounded-xl bg-[#454442] text-white"
            rows={4}
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-[#EB5E28] hover:bg-[#f38357] rounded-xl hover:scale-105 px-4 py-2 text-white font-semibold"
            onClick={applyChanges}
          >
            Apply
          </button>
          <button
            className="bg-black  px-4 py-2 rounded-xl hover:scale-105 text-white font-semibold hover:bg-[#403D39]"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EduModal;
