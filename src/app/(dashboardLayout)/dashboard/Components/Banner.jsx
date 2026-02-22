"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import oabBanner1 from "../../../../../public/oab dashboard 1.png";
import oabBanner2 from "../../../../../public/oab dashboard 2.png";

const Banner = () => {
  const images = [oabBanner1, oabBanner2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div>
        <Image
          src={images[currentIndex]}
          alt="OAB Dashboard Banner"
          width={1200}
          height={500}
          priority
        />
      </div>
    </section>
  );
};

export default Banner;