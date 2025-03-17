import React from "react";

const CustomButton = ({ children, onClick, type, size }) => {
  const buttonSize = (size = "small" ? "px-4 py-2" : "px-6 py-3");
  const buttonColor =
    type === "primary"
      ? "bg-orange-500 text-white"
      : "bg-white text-orange-500 border-orange-500";

  return (
    <button
      onClick={onClick}
      className={`rounded-lg ${buttonSize} ${buttonColor} hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
