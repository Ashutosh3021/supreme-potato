'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <footer className="border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 cinzel-decorative-regular">
              Built with <span className="text-[#00d9ff]">Next.js</span>, <span className="text-[#00d9ff]">Tailwind CSS</span>, <span className="text-[#00d9ff]">Framer Motion</span>, and <span className="text-[#00d9ff]">TypeScript</span>
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Last updated: {formattedDate}
            </p>
            <p className="text-gray-500 italic">
              Crafted with code and caffeine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;