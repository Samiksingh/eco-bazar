"use client";
import React, { useState } from "react";
import Image from "next/image";


const Facebook = () => {
  const [imageSrc, setImageSrc] = useState("/brandlogo/facebookHover.svg");

  return (
    <a className="mr-2" href="https://www.facebook.com">
      <Image
        src={imageSrc}
        onMouseOver={() => setImageSrc("/brandlogo/facebookDefault.svg")}
        onMouseOut={() => setImageSrc("/brandlogo/facebookHover.svg")}
        alt="Facebook"
        width={50}
        height={50}
      />
    </a>
  );
};

export default Facebook;


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// const Facebook = () => {
//   const [imageSrc, setImageSrc] = useState("/brandlogo/facebookHover.svg");

//   return (
//     <a className="mr-2" href="https://www.facebook.com">
//       <Image
//         src={imageSrc}
//         onMouseEnter={() => setImageSrc("/brandlogo/facebookDefault.svg")}
//         onMouseLeave={() => setImageSrc("/brandlogo/facebookHover.svg")}
//         alt="Facebook"
//         width={50}
//         height={50}
//       />
//     </a>
//   );
// };

// export default Facebook;
