// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold text-purple-600">Untitled UI</h1>
        <nav className="flex space-x-6">
          <a href="#home" className="hover:text-purple-500">Home</a>
          <a href="#products" className="hover:text-purple-500">Products</a>
          <a href="#resources" className="hover:text-purple-500">Resources</a>
          <a href="#pricing" className="hover:text-purple-500">Pricing</a>
        </nav>
        <img
          src="https://via.placeholder.com/40" 
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
