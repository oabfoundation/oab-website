"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MissionVision() {
  const missionImages = [
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/602408357_797415006684762_7418176467317950438_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OoeaknLaHM0Q7kNvwFv5SBM&_nc_oc=AdnrxT4PeWx0e4D7Dl5rt7tEsND54merj_5zykwW1cpN06pn3QlZLqEcl1r-V-DVCkg&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=QWE-co-_5w3cLrMAsyauPw&oh=00_AftePP3xak-PyHF-eVCPuA1UQoyhymC0Fl-HHNzdE64BJw&oe=699203E2", // main large image
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/605073752_797183896707873_3761312783909929917_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kYPG2zT_O0MQ7kNvwEqcf5P&_nc_oc=AdkNI8JbrsWM3gA6U0SHitFEXlQxsmkF7dYzVBD8wxIdSj5K_YZmUCTJaN7Z9AllKO0&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=hC3tEEmcNgE-p0oBgkM1vA&oh=00_AfvBYp--l5owWlpMHYYZlk_xbF5GP150YveTtAyTrSPjPA&oe=6991FC0C", // small image 1
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/594965189_785650794527850_8910101435499570693_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ueUhpdBSFUoQ7kNvwGGEmi3&_nc_oc=AdkKJGCHFSrRKMMFsbulnAeS791ZDtpJE_NFMznFmpdk39ULb4s0xiN6zTF1IOigi78&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=fZKAJ3PPhzvIgWI24zB8rg&oh=00_AfuAYTchjqvksQxdt05sBNPnLyBJWuXuhZ7RleLsL9VuTg&oe=69922431", // small image 2
  ];

  const visionImages = [
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/592966919_781289701630626_4872641929490034598_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5V7S7R5P1JsQ7kNvwG8Y4uv&_nc_oc=AdkI2H9D4SITIY3Oq8MNP0w3YZytaVrTfggQrF0GisPCwavM2T5GNqRvisuSH5ZaBac&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=IsoWtL2uad3KnhtN2qZ61A&oh=00_AfsWnrB3MsZF0NtiW9278fL4Oi2-Do91BgJQlC2wI7DTqA&oe=69920E7D",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/591365787_778579648568298_3651940910440091631_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ce2RT-Jfiv8Q7kNvwEgCtrW&_nc_oc=AdmMQgmjvzcXrCyM_OKHnd5rkFe51gHuZd_d353RMWVM7N41gsDsKY9ZRSda5QNVFZY&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=x14FsdnSK0ENJ8mLvkUDgg&oh=00_AfsqQiJfaQETi0p94GHoUX8FOIYvuH2LDGT9CYdb7azOgA&oe=6991F95A",
    "https://scontent.fdac152-1.fna.fbcdn.net/v/t39.30808-6/586530342_776288105464119_8786189767403244542_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rLPzmpkxKisQ7kNvwFgTqFT&_nc_oc=AdklH0swyhqt2r6wCNHjZnflTE0dCpT8NPU1xfjUFjO0-QvjFV_La9Zmq7pAqEgHpQk&_nc_zt=23&_nc_ht=scontent.fdac152-1.fna&_nc_gid=zARZ1aPiG9TRaHfAr1Mljw&oh=00_AfsRvxL91zf0dyBP9INT6Lg1KTtc-OqJDAzkgIxyMeQBWA&oe=699214FC",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* Our Mission */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Text */}
        < div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-bold text-orange-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To create skilled citizens by empowering disadvantaged children, youth and women’s communities
            and raising awareness among people to ensure effective workforce and leadership, real education
            and the elimination of social inequality, climate change and injustice.
          </p>
        </ div>

        {/* Images */}
        < div
          className="md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Large Image */}
          <img
            src={missionImages[0]}
            alt="Mission Main"
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
          />

          {/* Bottom 2 Small Images */}
          <div className="flex gap-4">
            <img
              src={missionImages[1]}
              alt="Mission Small 1"
              className="w-1/2 h-32 md:h-40 object-cover rounded-xl shadow-md"
            />
            <img
              src={missionImages[2]}
              alt="Mission Small 2"
              className="w-1/2 h-32 md:h-40 object-cover rounded-xl shadow-md"
            />
          </div>
        </ div>
      </div>

      {/* Our Vision */}
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row-reverse">
        {/* Text */}
        < div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-bold text-orange-600 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We want a sustainable, non-discriminatory society where everyone
            is able to fulfill their highest potential and a green world full
            of vibrant people.
          </p>
        </ div>

        {/* Images */}
        < div
          className="md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Large Image */}
          <img
            src={visionImages[0]}
            alt="Vision Main"
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
          />

          {/* Bottom 2 Small Images */}
          <div className="flex gap-4">
            <img
              src={visionImages[1]}
              alt="Vision Small 1"
              className="w-1/2 h-32 md:h-40 object-cover rounded-xl shadow-md"
            />
            <img
              src={visionImages[2]}
              alt="Vision Small 2"
              className="w-1/2 h-32 md:h-40 object-cover rounded-xl shadow-md"
            />
          </div>
        </ div>
      </div>

    </section>
  );
}
