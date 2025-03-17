import React from "react";
import ReusableForm from "../ReusableForm";
import CustomButton from "../CustomButton";

const FormSection = ({ fields, onSubmit }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 md:px-12">
      <h1 className="text-2xl md:text-3xl font-bold text-left w-full mb-6">
        Calculate your daily calorie intake right now
      </h1>
      {/* Flex container for Form */}

      <div className="w-full flex flex-col sm:flex-row gap-4">
        {/* left column  */}
        <div className="w-full sm:w-1/2">
          <ReusableForm
            fields={[
              { name: "height", label: "Height", type: "number" },
              { name: "age", label: "Age", type: "number" },
              {
                name: "current weight",
                label: "Current Weight",
                type: "number",
              },
            ]}
            onSubmit={onSubmit}
          />
        </div>

        {/* right column for Form */}
        <div className="w-full sm:w-1/2">
          <ReusableForm
            fields={[
              {
                name: "desired weight",
                label: "Desired Weight",
                type: "number",
              },
              {
                name: "blood type",
                label: "Blood Type",
                type: "radio",
                options: ["1", "2", "3", "4"],
              },
            ]}
            onSubmit={onSubmit}
          />
        </div>
      </div>

{/* Button positioning */}

      <div className="w-full flex justify-start sm:justify-start md:jusify-end mt-4">
        <CustomButton type="primary" size="small" onClick={onSubmit}>
          Start losing weight
        </CustomButton>
      </div>
    </div>
  );
};

export default FormSection;
