import Image from "next/image";
import React from "react";

import {
  carIcon,
  headphoneIcon,
  paymentIcon,
  moneybackIcon,
} from "../../assets/icons";

const featureItems = [
  {
    id: 1,
    icon: carIcon,
    title: "Free Shipping",
    description: "Free shipping with discount",
  },
  {
    id: 2,
    icon: headphoneIcon,
    title: "24/7 Customer Support",
    description: "Get instant help from our customer support team",
  },
  {
    id: 3,
    icon: paymentIcon,
    title: "100% Sucure Payment",
    description: "We ensure your money is save",
  },
  {
    id: 4,
    icon: moneybackIcon,
    title: "Money-Back Guarantee",
    description: "30 days money-back",
  },
];

const features = () => {
  return (
    <section className={`border-b-2 mb-4`}>
      <div className="flex justify-between items-center">
        {featureItems.map((features,index ) => (
          <div
            key={index}
            className={`flex flex-row items-center py-3 ${
              index === featureItems.length - 2
                ? "border-b-2 border-success"
                : ""
            }`}
          >
            <Image
              src={features.icon}
              alt="features-icon"
              width={"w-4.5"}
              height={"w-4.5"}
            />
            <span className="ml-4">
              <h2 className="text-body-medium text-grey-900 font-semi-bold">
                {features.title}
              </h2>
              <p className="text-body-small text-grey-400 font-regular">
                {features.description}
              </p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default features;

// function Feature() {
//   return (
//     <div className="grid grid-cols-4  border-bottom-grey-100 border-b-2 ">
//       <div className="flex flex-row">
//         <Image src={carIcon} alt="car" />
//         <span className="content-center pl-7">
//           <h3 className="text-body-large font-semi-bold">Free Shipping</h3>
//           <p className="text-body-small font-body-regular text-grey-400">Free shipping with discount</p>
//         </span>
//       </div>
//       <div className="flex flex-row">
//         <Image src={headphoneIcon} alt="headphone" />
//         <span className="content-center pl-7">
//           <h3 className="text-body-large font-semi-bold">Great Support 24/7 </h3>
//           <p className="text-body-small font-body-regular text-grey-400">Instant access to Contact</p>
//         </span>
//       </div>
//       <div className="flex flex-row border-b-2 border-success pb-2">
//         <Image src={paymentIcon} alt="headphone" />
//         <span className="content-center pl-7 ">
//           <h3 className="text-body-large font-semi-bold">100% Sucure Payment</h3>
//           <p className="text-body-small font-body-regular text-grey-400">We ensure your money is save</p>
//         </span>
//       </div>
//       <div className="flex flex-row">
//         <Image src={moneybackIcon} alt="headphone" />
//         <span className="content-center pl-7">
//           <h3 className="text-body-large font-semi-bold">Money-Back Guarantee</h3>
//           <p className="text-body-small font-body-regular text-grey-400">30 days money-back</p>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Feature;
