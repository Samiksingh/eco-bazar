"use client";
import React, { useState } from "react";
import Image from "next/image";

const Twitter = () => {
  const [imageSrc, setImageSrc] = useState("/brandlogo/twitterHover.svg");

  return (
    <a className="mr-2" href="https://x.com/">
      <Image
        src={imageSrc}
        onMouseOver={() => setImageSrc("/brandlogo/twitterDefault.svg")}
        onMouseOut={() => setImageSrc("/brandlogo/twitterHover.svg")}
        alt="twitter"
        width={50}
        height={50}
      />
    </a>
  );
};

export default Twitter;
