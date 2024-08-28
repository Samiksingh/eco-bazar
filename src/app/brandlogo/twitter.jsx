"use client";
import React, { useState } from "react";
import Image from "next/image";

const Twitter = () => {
  const [imageSrc, setImageSrc] = useState("/brandlogo/twitterHover.svg");

  return (
    <button className="mr-2">
      <Image
        src={imageSrc}
        onMouseOver={() => setImageSrc("/brandlogo/twitterDefault.svg")}
        onMouseOut={() => setImageSrc("/brandlogo/twitterHover.svg")}
        alt="twitter"
        width={50}
        height={50}
      />
    </button>
  );
};

export default Twitter;
