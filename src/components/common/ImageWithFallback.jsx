"use client"; 

import { useState } from "react";
import Image from "next/image";

const ImageWithFallback = ({ src, alt, className, width, height }) => {
  const fallback = "https://i.ibb.co.com/p6Ds2H8S/IMG-20241121-WA0048.jpg";

  const isValidUrl = (url) => {
    if (!url || typeof url !== "string") return false;
    return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/");
  };

  const [imgSrc, setImgSrc] = useState(() => {
    return isValidUrl(src) ? src : fallback;
  });

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImgSrc(fallback)} 
    />
  );
};

export default ImageWithFallback;