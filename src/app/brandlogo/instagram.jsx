"use client";
import React, { useState } from "react";
import Image from "next/image";

const Instagram = () => {
  const [imageSrc, setImageSrc] = useState("/brandlogo/instagramHover.svg");

  return (
    <a className="mr-2" href="https://www.instagram.com/">
      <Image
        src={imageSrc}
        onMouseOver={() => setImageSrc("/brandlogo/instagramDefault.svg")}
        onMouseOut={() => setImageSrc("/brandlogo/instagramHover.svg")}
        alt="instagram"
        width={50}
        height={50}
      />
    </a>
  );
};

export default Instagram;
