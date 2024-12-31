import React from "react";

const Trial = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Start your free trial
        </h2>
        <p className="text-gray-500 mt-4">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="mt-6 flex flex-col items-center sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="w-40 px-4 py-2 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-100">
            Learn more
          </button>
          <button className="w-40 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
