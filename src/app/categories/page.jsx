import React from "react";
import Image from "next/image";

import Link from "next/link";
import CountdownTimer from "../components/timer";
import { cabbageIcon, lettuceIcon } from "@/assets/categoryImages";
import { buttonIcon } from "@/assets/icons";

const PrdouctItems = [
  {
    id: 1,
    name: "Red Chili",
    price: "$14.99",
    image: cabbageIcon,
  },
  {
    id: 2,
    name: "Big Potatos",
    price: "$14.99",
    image: lettuceIcon,
  },
  {
    id: 3,
    name: "Chanise Cabbage",
    price: "$14.99",
    image: cabbageIcon,
  },
  {
    id: 4,
    name: "Ladies Finger",
    price: "$14.99",
    image: lettuceIcon,
  },
  {
    id: 5,
    name: "Red Tomato",
    price: "$14.99",
    image: cabbageIcon,
  },
  {
    id: 6,
    name: "Eggplant",
    price: "$14.99",
    image: lettuceIcon,
  },
  {
    id: 7,
    name: "Fresh Cauliflower",
    price: "$14.99",
    image: cabbageIcon,
  },
  {
    id: 8,
    name: "Green Apple",
    price: "$14.99",
    image: lettuceIcon,
  },
  {
    id: 9,
    name: "Fresh Mango",
    price: "$14.99",
    image: cabbageIcon,
  },
  {
    id: 10,
    name: "Green Capsicum",
    price: "$14.99",
    image: lettuceIcon,
  },
  {
    id: 11,
    name: "Green Chili",
    price: "$14.99",
    image: cabbageIcon,
  },
  {
    id: 12,
    name: "Green Cucumber",
    price: "$14.99",
    image: lettuceIcon,
  },
  {
    id: 13,
    name: "Green Littuce",
    price: "$14.99",
    image: cabbageIcon,
  },
  {
    id: 14,
    name: "Green Lettuce",
    price: "$14.99",
    image: lettuceIcon,
  },
  {
    id: 15,
    name: "Ladies Finger",
    price: "$14.99",
    image: cabbageIcon,
  },
  {
    id: 16,
    name: "Green Capsicum",
    price: "$14.99",
    image: lettuceIcon,
  },
];

const Product = () => {
  return (
    <>
      <Link href="/shop" />

      <section>
        <div className="bg-discount bg-cover px-20 py-20">
          <CountdownTimer days={1} hours={2} minutes={60} seconds={30} />
          <button className="bg-success text-white px-4 py-3 rounded-full flex items-center ">
            Shop Now
            <Image src={buttonIcon} alt="button" className=" ml-4 " />
          </button>
          <div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
