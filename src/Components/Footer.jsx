import React from 'react';
import { assets, footer_data } from '../assets/assets';

const Footer = () => {
  return (
    <footer className=" py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        <div className="flex flex-col items-start space-y-4 max-w-xs">
          <img src={assets.logo} alt="Logo" className="w-32 object-contain" />
          <p className="text-gray-600">Short description about the company or website goes here.</p>
        </div>

        <div className="flex flex-wrap gap-10 flex-1 justify-between">
          {footer_data.map((section, index) => (
            <div key={index} className="min-w-[150px]">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx} className="text-gray-700 hover:text-[#7366ff] cursor-pointer transition">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} QuickBlogs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
