import React from "react";
import Image from "next/image";
import ProductItems from "../[sub-categories]/productItems";
import DealsItems from "../[sub-categories]/dealsItems";

import {
  cabbageIcon,
  lettuceIcon,
  eggplantIcon,
  cartIcon,
  colorcartIcon,
  wishlistIcon,
  viewIcon,
  summerSaleIcon,
  hotdealsIcon,
} from "../../../assets/categoryImages";
import { whitebuttonIcon } from "../../../assets/icons";

const productItems = [
  {
    id: 1,
    name: "Chanise Cabbage",
    price: "$14.99",
    icon: cabbageIcon,
    image: cartIcon,
    activeIcon: colorcartIcon,
  },
  {
    id: 2,
    name: "Green Lettuce",
    price: "$14.99",
    icon: lettuceIcon,
    image: cartIcon,
    activeIcon: colorcartIcon,
  },
  {
    id: 3,
    name: "Green Chili",
    price: "$14.99",
    icon: cabbageIcon,
    image: cartIcon,
    activeIcon: colorcartIcon,
  },
  {
    id: 4,
    name: "Corn",
    price: "$14.99",
    icon: lettuceIcon,
    image: cartIcon,
    activeIcon: colorcartIcon,
  },
];

const dealsItems = [
  {
    id: 1,
    name: "Green Apple",
    price: "$14.99",
    image: eggplantIcon,
  },
  {
    id: 2,
    name: "Indian Malta",
    price: "$14.99",
    image: eggplantIcon,
  },
  {
    id: 3,
    name: "Green Lettuce",
    price: "$14.99",
    image: eggplantIcon,
  },
];

const bestSellersItems = [
  {
    id: 1,
    name: "Eggplant",
    price: "$14.99",
    image: eggplantIcon,
  },
  {
    id: 2,
    name: "Red Capsicum",
    price: "$14.99",
    oldPrice: "$20.99",

    image: eggplantIcon,
  },
  {
    id: 3,
    name: "Red Tomatoes",
    price: "$14.99",
    image: eggplantIcon,
  },
];

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

const FeaturedProducts = () => {
  return (
    <>
      <div>
        <p className="text-center text-success">Products</p>
        <h1 className="text-center text-xl font-semibold mb-6">
          Our Featured Products
        </h1>
      </div>
      <div className="flex-wrap justify-between">
        <div className="grid grid-cols-5">
          <div className="md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {/* <div
            className={`md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8  border border-grey-100 rounded-lg hover:shadow-lg transition-shadow ${" hover:border-success"}`}
          > */}
            <div className="col-span-1 lg:col-span-2 bg-summersale p-4 rounded-lg flex flex-col justify-center items-center text-center h-80 w-60">
              <span className="mb-36">
                <p className="text-green-600 font-bold text-4xl">75% off</p>
                <p className="text-lg">Summer Sale</p>
                <div className="mt-5 flex justify-center">
                  <button className="cursor-pointer bg-white text-success px-4 py-3 rounded-full flex items-center">
                    Shop Now
                    <Image
                      src={whitebuttonIcon}
                      alt="button"
                      className="ml-4"
                    />
                  </button>
                </div>
              </span>
            </div>
          </div>

          {productItems.map((product) => (
            <ProductItems
              key={product.id}
              name={product.name}
              image={product.image}
              icon={product.icon}
              price={product.price}
              activeIcon={product.activeIcon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;

const DealsProduct = () => {
  return (
    <>
      <div>
        <p>Hot Deals</p>
      </div>
      <div>
        {dealsItems.map((deals) => (
          <DealsItems />
        ))}
      </div>
    </>
  );
};
