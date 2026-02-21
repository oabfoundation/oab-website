import React from 'react';
import { Linkedin, Facebook, Youtube } from 'lucide-react';
import Newsletter from '../mainLayout/pages/NewsLetter';
import Contact from '@/app/(mainLayout)/contact/page';

// Custom X (Twitter) Icon since it's unique in your image
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const FooterSection = () => {
  return (
    <footer className="font-sans">

<Newsletter></Newsletter>
      {/* Light Cream Footer Section */}
      <div className="bg-[#FFF5E9] pt-16 text-[#FF6B00]">
       
<Contact></Contact>
        {/* Branding Bottom */}
        <div className="ml-2 mt-12">
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