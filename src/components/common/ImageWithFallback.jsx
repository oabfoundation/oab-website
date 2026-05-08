"use client"; 

import { useState } from "react";
import Image from "next/image";

const ImageWithFallback = ({ src, alt, className, width, height }) => {
  const fallback = "https://i.ibb.co.com/p6Ds2H8S/IMG-20241121-WA0048.jpg";

  const [imgSrc, setImgSrc] = useState(src);

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