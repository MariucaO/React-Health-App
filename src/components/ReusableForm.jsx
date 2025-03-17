import React from "react";

const ReusableForm = ({ fields, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    onSubmit(formObject);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label htmlFor={field.name} className="text-lg mb-2">
            {field.label}
          </label>
          {field.type === "number" && (
            <input
              id={field.name}
              name={field.name}
              type="number"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          {field.type === "radio" && (
            <div className="flex space-x-4">
              {field.options.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={field.name}
                    value={option}
                    className="focus:ring-2 focus:ring-blue-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </form>
  );
};

export default ReusableForm;
