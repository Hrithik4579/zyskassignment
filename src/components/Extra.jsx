import React from 'react'

export default function Extra() {
  return (
    <div>
        <div className="mt-[-5rem] sm:mt-[-35rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex justify-center items-center w-12 h-12 mx-auto bg-purple-100 rounded-full">
            <img
                src={require("./img12.png")}
                alt="Share Inboxes"
                className="w-6 h-6 text-purple-600"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Share team inboxes
            </h3>
            <p className="mt-2 text-gray-600">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same
              page and in the loop.
            </p>
            <a href="#" className="mt-4 inline-flex items-center text-purple-600 font-medium">
              Learn more →
            </a>
          </div>

          <div>
            <div className="flex justify-center items-center w-12 h-12 mx-auto bg-purple-100 rounded-full">
            <img
                src={require("./img123.png")}
                alt="Share Inboxes"
                className="w-6 h-6 text-purple-600"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Deliver instant answers
            </h3>
            <p className="mt-2 text-gray-600">
              An all-in-one customer service platform that helps you balance everything your
              customers need to be happy.
            </p>
            <a href="#" className="mt-4 inline-flex items-center text-purple-600 font-medium">
              Learn more →
            </a>
          </div>

          <div>
            <div className="flex justify-center items-center w-12 h-12 mx-auto bg-purple-100 rounded-full">
            <img src={require("./img1234.png")} alt="Share Inboxes"
                className="w-6 h-6 text-purple-600"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Manage your team with reports
            </h3>
            <p className="mt-2 text-gray-600">
              Measure what matters with Untitled's easy-to-use reports. You can filter, export, and
              drill down on the data in a couple clicks.
            </p>
            <a href="#" className="mt-4 inline-flex items-center text-purple-600 font-medium">
              Learn more →
            </a>
          </div>
        </div>
        <div className="w-full border-t border-gray-300 mt-8"></div>
    </div>
  )
}
