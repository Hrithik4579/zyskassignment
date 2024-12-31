import React from 'react';

const Features = () => {
  return (
    <div className="flex flex-col items-center space-y-12 px-6 md:px-12 py-16">
      <div className="text-center max-w-3xl">
        <p className="text-purple-600 text-sm font-semibold uppercase">Features</p>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">
          Analytics that feels like it’s from the future
        </h1>
        <p className="text-gray-500 mt-4">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto">
            <img src={require("./img12.png")} alt="Share Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">Share team inboxes</h3>
          <p className="text-gray-500">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same
            page and in the loop.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto">
            <img src={require("./img123.png")} alt="Lightning Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">Deliver instant answers</h3>
          <p className="text-gray-500">
            An all-in-one customer service platform that helps you balance everything your
            customers need to be happy.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto">
            <img src={require("./img1234.png")} alt="Report Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">Manage your team with reports</h3>
          <p className="text-gray-500">
            Measure what matters with easy-to-use reports. You can filter, export, and drill down on
            the data in a couple of clicks.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto">
            <img src={require("./img1.jpg")} alt="Chat Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">Connect with customers</h3>
          <p className="text-gray-500">
            Solve a problem or close a sale in real-time with chat. If no one is available,
            customers are routed to email without confusion.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto">
            <img src={require("./img2.png")} alt="Integration Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">Connect the tools you already use</h3>
          <p className="text-gray-500">
            Explore 100+ integrations that make your day-to-day workflow more efficient and
            familiar. Plus, extensive developer tools.
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto">
            <img src={require("./img3.png")} alt="People Icon" className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">Our people make the difference</h3>
          <p className="text-gray-500">
            We’re an extension of your customer service team, and all of our resources are free.
            Chat to our friendly team 24/7 when you need help.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Features;
