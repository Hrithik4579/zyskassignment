import React from "react";

const Companies = () => {
  return (
    <div className="flex flex-col items-center space-y-8 mt-[6rem]">
      <p className="text-gray-500 text-sm text-center">
        Join 4,000+ companies already growing
      </p>

      <div className="grid grid-cols-2 sm:flex sm:space-x-8 gap-6">
        <div className="flex items-center space-x-2">
          <img
            src={require("./image.png")}
            alt="Boltshift"
            className="w-8 h-8"
          />
          <span className="text-2xl font-semibold">Boltshift</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={require("./images1.jpeg")}
            alt="Lightbox"
            className="w-8 h-8"
          />
          <span className="text-2xl font-semibold">Lightbox</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={require("./images123.jpeg")}
            alt="FeatherDev"
            className="w-8 h-8"
          />
          <span className="text-2xl font-semibold">FeatherDev</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={require("./original.png")}
            alt="Spherule"
            className="w-8 h-8"
          />
          <span className="text-2xl font-semibold">Spherule</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={require("./image.png")}
            alt="GlobalBank"
            className="w-8 h-8"
          />
          <span className="text-2xl font-semibold">GlobalBank</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={require("./image.png")}
            alt="Nietzsche"
            className="w-8 h-8"
          />
          <span className="text-2xl font-semibold">Nietzsche</span>
        </div>
      </div>

      <div className="w-full border-t border-gray-300 mt-4"></div>
    </div>
  );
};

export default Companies;
