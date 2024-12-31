import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-gray-600">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">Overview</a></li>
              <li><a href="#" className="hover:text-gray-900">Features</a></li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Solutions <span className="text-xs text-white bg-green-500 rounded-full px-2 py-0.5 ml-1">New</span>
                </a>
              </li>
              <li><a href="#" className="hover:text-gray-900">Tutorials</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Releases</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">About us</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Press</a></li>
              <li><a href="#" className="hover:text-gray-900">News</a></li>
              <li><a href="#" className="hover:text-gray-900">Media kit</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Newsletter</a></li>
              <li><a href="#" className="hover:text-gray-900">Events</a></li>
              <li><a href="#" className="hover:text-gray-900">Help centre</a></li>
              <li><a href="#" className="hover:text-gray-900">Tutorials</a></li>
              <li><a href="#" className="hover:text-gray-900">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Use cases</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">Startups</a></li>
              <li><a href="#" className="hover:text-gray-900">Enterprise</a></li>
              <li><a href="#" className="hover:text-gray-900">Government</a></li>
              <li><a href="#" className="hover:text-gray-900">SaaS centre</a></li>
              <li><a href="#" className="hover:text-gray-900">Marketplaces</a></li>
              <li><a href="#" className="hover:text-gray-900">Ecommerce</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Social</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-900">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-900">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-900">GitHub</a></li>
              <li><a href="#" className="hover:text-gray-900">AngelList</a></li>
              <li><a href="#" className="hover:text-gray-900">Dribbble</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookies</a></li>
              <li><a href="#" className="hover:text-gray-900">Licenses</a></li>
              <li><a href="#" className="hover:text-gray-900">Settings</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-purple-600"></div>
            <p className="text-sm font-medium text-gray-800">Untitled UI</p>
          </div>
          <p className="text-sm text-gray-500">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
