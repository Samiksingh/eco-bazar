"use client";
import React, { useState } from "react";
import Image from "next/image";

const Facebook = () => {
  const [imageSrc, setImageSrc] = useState("/brandlogo/facebookHover.svg");

  return (
    <button className="mr-2">
      <Image
        src={imageSrc}
        onMouseOver={() => setImageSrc("/brandlogo/facebookDefault.svg")}
        onMouseOut={() => setImageSrc("/brandlogo/facebookHover.svg")}
        alt="Facebook"
        width={50}
        height={50}
      />
    </button>
  );
};

export default Facebook;
