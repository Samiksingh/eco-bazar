import React from "react";
import Image from "next/image";
import { eggplantIcon } from "../../../assets/categoryImages";

const topRatedItems = [
  {
    id: 1,
    name: "Big Potatoes",
    price: "$14.99",
    image: eggplantIcon,
  },
  {
    id: 2,
    name: "Corn",
    price: "$14.99",
    oldPrice: "$20.99",
    image: eggplantIcon,
  },
  {
    id: 3,
    name: "Fresh Cauliflower",
    price: "$14.99",
    image: eggplantIcon,
  },
];

const TopRatedItems = () => {
  return (
    <div>
      <div>
        <p>Top Rated</p>
      </div>
      <div className=" w-80 h-28 pt-6 pb-6">
        {topRatedItems.map((top) => (
          <div
            key={top.id}
            className={`group flex mb-4 border relative border-grey-100 p-4 rounded-lg hover:shadow-lg transition-shadow ${" hover:border-success-dark"}`}
          >
            <Image src={top.image} alt="deals" />
            <div className="absolute top-5 gap-4 right-5 flex flex-row opacity-0 group-hover:opacity-100 mt-5 ">
              <button className="h-12 w-12 mt-4 border rounded-full transition ease-in-out duration-300 bg-addToCartdefault bg-cover hover:bg-addToCartHover"></button>
              <button className="h-12 w-12 mt-5 border rounded-full transition ease-in-out duration-300 bg-wishlistdefault bg-cover hover:bg-wishlisthover"></button>
              <button className="h-12 w-12 mt-5 border rounded-full transition ease-in-out duration-300 bg-quickviewdefault bg-cover hover:bg-quickviewhover"></button>
            </div>
            <div className="justify-between ">
              <div>
                <h1 className="group-hover:text-success-dark">{top.name}</h1>
                <p className="group-hover:opacity-0">
                  {top.price}{" "}
                  <span className="text-grey-400">{top.oldPrice}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedItems;
