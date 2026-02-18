import React from 'react';

const OurImpact = () => {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-2">

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our <span className="text-orange-500">Impact</span>
            </h2>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            At OAB Foundation, our impact is visible in the lives we touch and the 
            communities we uplift. We've planted thousands of trees, educated youth 
            on climate change, and empowered women with training and support.
          </p>

          <p className="text-gray-400 text-base leading-relaxed max-w-xl">
            Our health camps, clean-up drives, and awareness programs have reached 
            remote and underserved areas. With every project, we aim to create 
            lasting social and environmental change. Together with our partners 
            and volunteers, we are building a more just, sustainable, and hopeful future.
          </p>

          <div className="pt-4">
            <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-700 text-white px-8 rounded-md transition-all duration-300 uppercase tracking-widest font-bold">
              Read More
            </button>
          </div>
        </div>

        {/* Right Side: Image with DaisyUI styling */}
        <div className="lg:w-1/2 relative group">
          {/* Subtle Glow Backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative overflow-hidden rounded-xl shadow-2xl border border-white/10">
            <img 
              src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/630692925_834526892973573_8505018597074801380_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=roQIl8ZIlTAQ7kNvwEnH3vB&_nc_oc=AdmFmnsJTma2sDccbfvMbRe_qdvN_nEI1S-7KS7wNHbS8Xj4a5oQNDzmniNui93_PSE&_nc_zt=23&_nc_ht=scontent.fjsr8-1.fna&_nc_gid=GqQQZv5FHoWf7H8-OFQU6A&oh=00_AfsPCX7Tw3K9EFMPPbfqhzgNI_WszkpzNYgCox0_Nn1fZw&oe=699BA696" // Replace with your actual image path
              alt="OAB Foundation Team at Manifesto Talk" 
              className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurImpact;