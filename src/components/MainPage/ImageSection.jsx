import React from "react";

const ImageSection = ({ images }) => {
  return (
    <div className="relative w-full h-auto lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Vector Background */}
      <img
  src={images.vector}
  alt="Vector Background"
  className="absolute w-[65%] h-full right-0 top-0 -z-10 object-cover"
/>
      {/* Fruit Container */}
      <div className="relative w-full flex flex-col items-center justify-center z-2 space-y-4">
        
        {/* Banana Image - Positioned on Top */}
        <img
          src={images.banana}
          alt="Banana"
          className="absolute top-0 right-[20px] w-6/12 -translate-y-[430px]"
        />

        {/* Strawberry Image - Positioned Below Banana */}
        <img
          src={images.strawberry}
          alt="Strawberry"
          className="absolute bottom-[-280px] right-[20px] w-4/12"
        />
      </div>
    </div>
  );
};

export default ImageSection;
