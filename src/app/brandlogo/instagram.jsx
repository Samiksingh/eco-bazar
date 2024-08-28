"use client";
import React, { useState } from "react";
import Image from "next/image";

const Instagram = () => {
  const [imageSrc, setImageSrc] = useState("/brandlogo/instagramHover.svg");

  return (
    <button className="mr-2">
      <Image
        src={imageSrc}
        onMouseOver={() => setImageSrc("/brandlogo/instagramDefault.svg")}
        onMouseOut={() => setImageSrc("/brandlogo/instagramHover.svg")}
        alt="instagram"
        width={50}
        height={50}
      />
    </button>
  );
};

export default Instagram;
