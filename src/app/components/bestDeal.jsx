import React from "react";
import Image from "next/image";
import { whitebuttonIcon } from "../../assets/icons";
import CountdownTimer from "./timer";

function Deals() {
  return (
    <section>
      <div className="grid grid-cols-3 justify-between text-center h-[40rem] ">
        <div className="relative bg-cover m-2 bg-center text-white text-center p-12 rounded-lg bg-sale ">
          <p className="font-medium">Best Deals</p>
          <h2 className="text-h2 font-bold  text-white">Sale of the Month</h2>
          <CountdownTimer days={1} hours={2} minutes={60} seconds={30} />
          <div className="mt-5 flex justify-center">
            <button className="cursor-pointer bg-white text-success px-4 py-3 rounded-full flex items-center">
              Shop Now
              <Image src={whitebuttonIcon} alt="button" className="ml-4" />
            </button>
          </div>
        </div>
        <div className="bg-lowfatmeal relative bg-cover bg-center text-white text-center m-2 p-12 rounded-lg">
          <p className="text-white">85% Fat Free</p>
          <h2 className="text-h2 font-bold text-white">Low-Fat Meat</h2>
          <p className=" text-white">
            Started at
            <span className="text-warning"> $79.99 </span>
          </p>
          <div className="mt-5 flex justify-center">
            <button className="cursor-pointer bg-white text-success px-4 py-3 rounded-full flex items-center">
              Shop Now
              <Image src={whitebuttonIcon} alt="button" className="ml-4" />
            </button>
          </div>
        </div>
        <div className="bg-freshfruit relative bg-cover bg-center m-2 text-white text-center p-12 rounded-lg">
          <p>Summer Sale</p>
          <h2 className="text-h2 font-bold  text-black">100% Fresh Fruit</h2>
          <p className="text-sm  text-black">
            Up to
            <span className=" text-yellow-400 bg-black  px-2 py-1 rounded-md ">
              64% OFF
            </span>
          </p>
          <div className="mt-5 flex justify-center">
            <button className="cursor-pointer bg-white text-success px-4 py-3 rounded-full flex items-center">
              Shop Now
              <Image src={whitebuttonIcon} alt="button" className="ml-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deals;

// const dealItems = [
//     {
//         id: 1,
//         icon: saleIcon,
//         title: "50% Off on All Items",
//         description: "Buy 1, Get 1 Free",
//     },
//     {
//         id: 2,
//         icon: meatIcon,
//         title: "10% Off on Meat",
//         description: "Buy 2, Get 1 Free",
//     },
//     {
//         id: 3,
//         icon: freshfruitIcon,
//         title: "100% Fresh Fruit",
//         description: "Buy 3, Get 1 Free",
//     },
// ];

// const Deal = () => {
//     return(
//         <div className="flex ">
//             {dealItems.map(item => (
//                 <div key={item.id}>
//                     <Image src={item.icon} alt={item.title} width={32} height={32} />
//                     <div>
//                         <h3 className="text-sm font-bold">{item.title}</h3>
//                         <p className="text-sm">{item.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Deal;
