import React from "react";
import image4 from "./i4.png";
import image5 from "./i5.png";
import image6 from "./i6.png";
import image1 from "./i1.png";
import image2 from "./i2.png";
import image3 from "./i3.png";
const Blog = () => {
  const posts = [
    {
      category: "Design",
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: image4,
      avatar: image1
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: image5, 
      avatar: image2
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: image6,
      avatar: image3
    },
  ];

  return (
    <div className="bg-white p-6 sm:p-12 mt-[-1rem]">
    <div className="max-w-6xl mx-auto">
      <div className="text-left mb-1">
        <h4 className="font-bold text-purple-800">Our Blog</h4>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Latest blog posts
        </h2>
        <p className="text-gray-500 mt-2">
          Tools and strategies modern teams need to help their companies grow.
        </p>
      </div>
  
      <div className="hidden sm:flex justify-end mb-6">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
          View all posts
        </button>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-md"/>
            <div className="mt-4">
              <p className="text-purple-600 text-sm font-semibold uppercase">
                {post.category}
              </p>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <div className="flex items-center mt-4">
                <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full"/>
                <div className="ml-3 text-sm">
                  <p className="text-gray-800 font-medium">{post.author}</p>
                  <p className="text-gray-500">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      <div className="flex sm:hidden justify-center mt-6">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 w-40">
          View all posts
        </button>
      </div>
    </div>
  </div>
    );
};

export default Blog;
