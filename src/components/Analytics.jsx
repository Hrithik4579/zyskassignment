import React from "react";

const Analytics = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        <h2 className="text-purple-600 text-sm font-semibold uppercase">Features</h2>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Cutting-edge features for advanced analytics
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </p>
       
<div className="relative mt-16">
  <img src={require("./screen.png")} alt="Desktop Dashboard" className="hidden sm:block relative z-10 mx-auto max-w-4xl border-2 border-black"/>

  <img src={require("./mobile.png")} alt="Mobile Dashboard" className="relative z-20 top-[-1rem] sm:top-[-33rem] mb-20 sm:mb-20 left-40 transform -translate-x-1/2 w-60 sm:w-48 lg:w-64 h-72 sm:h-auto border-x-8 border-t-8 sm:border-8 border-black"/>
</div>


        
      </div>
    </section>
  );
};

export default Analytics;
