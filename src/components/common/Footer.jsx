import React from 'react';
import { Linkedin, Facebook, Youtube } from 'lucide-react';

// Custom X (Twitter) Icon since it's unique in your image
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const FooterSection = () => {
  return (
    <footer className="w-full font-sans">
      
      {/* Orange CTA Section */}
      <div className="bg-[#FF6B00] py-20 px-4 text-center text-white">
        <p className="uppercase tracking-widest text-xs mb-6 font-semibold">
          Give Us A Hand
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-10 max-w-4xl mx-auto leading-tight">
          Support us and change the course of a child's life today!
        </h2>
        <button className="bg-white text-[#FF6B00] px-10 py-3 font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors">
          Donate
        </button>
      </div>

      {/* Light Cream Footer Section */}
      <div className="bg-[#FFF5E9] py-16 px-6 md:px-20 text-[#FF6B00]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Newsletter Column */}
          <div>
            <h3 className="font-bold mb-4">Stay up to date</h3>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full p-3 bg-[#F8FAFC] border border-gray-200 focus:outline-none text-gray-700"
              />
              <button className="bg-white border border-gray-100 shadow-sm w-fit px-8 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                Submit
              </button>
            </div>
          </div>

          {/* Contact Column */}
          <div className="text-sm space-y-2">
            <h3 className="font-bold mb-4 text-base">Contact</h3>
            <p className="text-gray-800">Amin Garden, Amin Bhaban, 272/B, West</p>
            <p className="text-gray-800">Agargaon, Dhaka-1207, Bangladesh</p>
            <p className="pt-2">Phone: +880-1733225286</p>
            <p>Email: <span className="underline">valefoundationbd@gmail.com</span></p>
          </div>

          {/* Social Icons Column */}
          <div className="flex justify-start md:justify-end gap-6 text-[#1DA1F2]">
             {/* Using standard brand colors for icons as per the image hint */}
            <a href="#" className="hover:opacity-80 transition-opacity"><Linkedin size={24} fill="#0077B5" stroke="none" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity text-black"><XIcon /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><Facebook size={24} fill="#1877F2" stroke="none" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><Youtube size={24} fill="#CD201F" stroke="none" /></a>
          </div>
        </div>

        {/* Branding Bottom */}
        <div className="max-w-7xl mx-auto mt-12">
           <p className="uppercase tracking-widest text-xs font-bold">Give Us A Hand</p>
        </div>
            <div className="bg-orange-500 text-white py-10 text-center">
      <span>Copyright © 2026 OAB Foundation | Powered by OAB Foundation</span>
    </div>
      </div>
    </footer>
  );
};

export default FooterSection;