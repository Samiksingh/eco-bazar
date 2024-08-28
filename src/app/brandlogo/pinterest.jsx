"use client";
import React, { useState } from "react";
import Image from "next/image";

const Pinterest = () => {
  const [imageSrc, setImageSrc] = useState("/brandlogo/pinterestHover.svg");

  return (
    <button className="mr-2">
      <Image
        src={imageSrc}
        onMouseOver={() => setImageSrc("/brandlogo/pinterestDefault.svg")}
        onMouseOut={() => setImageSrc("/brandlogo/pinterestHover.svg")}
        alt="pinterest"
        width={50}
        height={50}
      />
    </button>
  );
};

export default Pinterest;
