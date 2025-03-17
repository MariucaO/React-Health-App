import React from "react";
import FormSection from "../MainPage/FormSection";
import ImageSection from "../MainPage/ImageSection";

import Banana from "../../assets/images/Banana.svg";
import Strawberry from "../../assets/images/Strawberry.svg";
import Vector from "../../assets/vectors/vector3.svg";
import Leaves from "../../assets/images/Leaves.svg";

const MainPage = () => {
  const fields = [
    { name: "height", label: "Height", type: "number" },
    { name: "age", label: "Age", type: "number" },
    { name: "current weight", label: "Current weight", type: "number" },
    { name: "desired weight", label: "Desired Weight", type: "number" },
    {
      name: "blood type",
      label: "Blood type",
      type: "radio",
      options: ["1", "2", "3", "4"],
    },
  ];

  const handleSubmit = (formData) => {
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Leaves Background - Positioned correctly */}
      <div className="absolute top-[-50px] left-[40%] w-1/2 h-full z-20">
        <img
          src={Leaves}
          alt="Leaves"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100 rotate-[-90deg]"
        />
      </div>

      {/* Left Side: Form Section */}
      <FormSection fields={fields} onSubmit={handleSubmit} />

      {/* Right Side: Image Section */}
      <ImageSection
        images={{
          banana: Banana,
          strawberry: Strawberry,
          vector: Vector,
        }}
      />
    </div>
  );
};

export default MainPage;
