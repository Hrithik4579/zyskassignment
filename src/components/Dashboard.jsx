import React, {useState} from "react";
const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <div>
      <header className="bg-white shadow-md py-4">
  <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-8">
    <div className="flex items-center space-x-2 mr-8">
      <div className="w-6 h-6 rounded-full bg-purple-600"></div>
      <h1 className="text-xl font-bold text-purple-600">Untitled UI</h1>
    </div>

    <div className="hidden sm:flex flex-1 space-x-6">
      <a href="#home" className="hover:text-purple-500">Home</a>

      <div
        className="relative"
        onMouseEnter={() => setIsProductsOpen(true)}
        onMouseLeave={() => setIsProductsOpen(false)}
      >
        <button className="flex items-center hover:text-purple-500">
          Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
              isProductsOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isProductsOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
            <a href="#product1" className="block px-4 py-2 hover:bg-gray-100">Product 1</a>
            <a href="#product2" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
            <a href="#product3" className="block px-4 py-2 hover:bg-gray-100">Product 3</a>
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsResourcesOpen(true)}
        onMouseLeave={() => setIsResourcesOpen(false)}
      >
        <button className="flex items-center hover:text-purple-500">
          Resources
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
              isResourcesOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isResourcesOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
            <a href="#resource1" className="block px-4 py-2 hover:bg-gray-100">Resource 1</a>
            <a href="#resource2" className="block px-4 py-2 hover:bg-gray-100">Resource 2</a>
            <a href="#resource3" className="block px-4 py-2 hover:bg-gray-100">Resource 3</a>
          </div>
        )}
      </div>

      <a href="#pricing" className="hover:text-purple-500">Pricing</a>
    </div>

    <img
      src={require("./i1.png")}
      alt="User Avatar"
      className="w-10 h-10 rounded-full ml-auto"
    />

    <button
      className="sm:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </div>

  {isMenuOpen && (
    <div className="sm:hidden bg-white shadow-md">
      <nav className="flex flex-col items-start space-y-4 px-6 py-4">
        <a href="#home" className="hover:text-purple-500">Home</a>

        <div>
          <button
            onClick={() => setIsProductsOpen(!isProductsOpen)}
            className="flex items-center hover:text-purple-500"
          >
            Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                isProductsOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isProductsOpen && (
            <div className="ml-4 mt-2">
              <a href="#product1" className="block px-4 py-2 hover:bg-gray-100">Product 1</a>
              <a href="#product2" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
              <a href="#product3" className="block px-4 py-2 hover:bg-gray-100">Product 3</a>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className="flex items-center hover:text-purple-500"
          >
            Resources
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                isResourcesOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isResourcesOpen && (
            <div className="ml-4 mt-2">
              <a href="#resource1" className="block px-4 py-2 hover:bg-gray-100">Resource 1</a>
              <a href="#resource2" className="block px-4 py-2 hover:bg-gray-100">Resource 2</a>
              <a href="#resource3" className="block px-4 py-2 hover:bg-gray-100">Resource 3</a>
            </div>
          )}
        </div>

        <a href="#pricing" className="hover:text-purple-500">Pricing</a>
      </nav>
    </div>
  )}
</header>



      <div className="bg-white-50 py-16 text-center">
        <div className="container mx-auto px-6">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm mb-6">
            New Feature <span className="underline">Check out the team dashboard →</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Powerful, self-serve product and growth analytics to help you convert, engage,<br/> 
            and retain more users. Trusted by over 4,000 startups.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
              Demo
            </button>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
      <div className="sm:hidden">
  <img
    src={require("./screen.png")}
    alt="Analytics Dashboard (Mobile)"
    className="w-full max-w-md shadow-lg border-t-8 border-l-8 border-r-8 border-b-8 border-black rounded-lg"
  />
</div>
<div className="hidden sm:block">
  <img
    src={require("./half.png")}
    alt="Analytics Dashboard (Desktop)"
    className="w-full max-w-md sm:max-w-5xl shadow-lg border-t-8 border-l-8 border-r-8 border-black rounded-lg"
  />
</div>
</div>
    </div>
  );
};

export default Dashboard;



