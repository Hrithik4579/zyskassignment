import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 text-center">
      <div className="container mx-auto px-6">
        <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-6">
          New feature <span className="underline">Check out the team dashboard →</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Beautiful analytics to grow smarter</h1>
        <p className="text-lg text-gray-600 mb-8">
          Powerful, self-serve product and growth analytics to help you convert, engage, 
          and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
            Demo
          </button>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
