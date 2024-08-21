import React from "react";
import Image from "next/image";

import {
  eggplantIcon,
  cartIcon,
  colorcartIcon,
  wishlistIcon,
  viewIcon,
  summerSaleIcon,
  hotdealsIcon,
} from "../../../assets/categoryImages";

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

const DealsItems = () => {
  return (
    <>
      <div>
        <p>Hot Deals</p>
      </div>
      <div>
        {dealsItems.map((deals) => (
          <div key={deals.id} className="flex">
            <Image src={deals.image} alt="deals" />
            <div>
              <h1>{deals.name}</h1>
              <p>{deals.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DealsItems;
