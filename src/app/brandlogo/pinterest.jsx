"use client";
import React, { useState } from "react";
import Image from "next/image";

const Pinterest = () => {
  const [imageSrc, setImageSrc] = useState("/brandlogo/pinterestHover.svg");

  return (
    <a className="mr-2" href="https://www.pinterest.com/">
      <Image
        src={imageSrc}
        onMouseOver={() => setImageSrc("/brandlogo/pinterestDefault.svg")}
        onMouseOut={() => setImageSrc("/brandlogo/pinterestHover.svg")}
        alt="pinterest"
        width={50}
        height={50}
      />
    </a>
  );
};

export default Pinterest;
