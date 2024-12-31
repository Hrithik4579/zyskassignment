import React from "react";

const Comment = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6 bg-gray-50">
      <div className="flex items-center space-x-2 bg-grey">
        <img src={require("./img34.png")} alt="Sisyphus Logo"
          className="w-6 h-6"
        />
        <p className="text-lg font-medium text-gray-800">Sisyphus</p>
      </div>

      <blockquote className="mt-6 text-xl md:text-2xl font-semibold text-gray-900 max-w-3xl">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </blockquote>

      <div className="flex flex-col items-center mt-6">
        <img
          src={require("./img2003.jpeg")}
          alt="Candice Wu"
          className="w-12 h-12 rounded-full"
        />
        <div className="mt-2">
          <p className="font-medium text-gray-900">Hrithik Gopal Bhagat</p>
          <p className="text-sm text-gray-500">Product Manager, Sisyphus</p>
        </div>
      </div>

    </div>
  );
};

export default Comment;
