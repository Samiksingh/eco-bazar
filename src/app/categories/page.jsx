import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "../components/timer";
import { cabbageIcon, lettuceIcon } from "@/assets/categoryImages";
import { buttonIcon } from "@/assets/icons";
import { dropdownIcon } from "@/assets/icons";

const ProductItems = [
  { id: 1, name: "Red Chili", price: "$14.99", image: cabbageIcon },
  { id: 2, name: "Big Potatoes", price: "$14.99", image: lettuceIcon },
  { id: 3, name: "Chinese Cabbage", price: "$14.99", image: cabbageIcon },
  { id: 4, name: "Ladies Finger", price: "$14.99", image: lettuceIcon },
  { id: 5, name: "Red Tomato", price: "$14.99", image: cabbageIcon },
  { id: 6, name: "Eggplant", price: "$14.99", image: lettuceIcon },
  { id: 7, name: "Fresh Cauliflower", price: "$14.99", image: cabbageIcon },
  { id: 8, name: "Green Apple", price: "$14.99", image: lettuceIcon },
  { id: 9, name: "Fresh Mango", price: "$14.99", image: cabbageIcon },
  { id: 10, name: "Green Capsicum", price: "$14.99", image: lettuceIcon },
  { id: 11, name: "Green Chili", price: "$14.99", image: cabbageIcon },
  { id: 12, name: "Green Cucumber", price: "$14.99", image: lettuceIcon },
  { id: 13, name: "Green Lettuce", price: "$14.99", image: cabbageIcon },
  { id: 14, name: "Green Lettuce", price: "$14.99", image: lettuceIcon },
  { id: 15, name: "Ladies Finger", price: "$14.99", image: cabbageIcon },
  { id: 16, name: "Green Capsicum", price: "$14.99", image: lettuceIcon },
];

const ProductCard = (product) => (
  <div>
    <div
      className={`group border relative  border-grey-100 p-4 rounded-lg hover:shadow-lg transition-shadow ${" hover:border-success-dark"}`}
    >
      <Image src={product.image} alt="icon" />
      <div className="absolute top-5 right-5 flex flex-col opacity-0 group-hover:opacity-100 ">
        <button className="  h-12 w-12 mt-5 border rounded-full transition ease-in-out duration-300 bg-wishlistdefault bg-cover hover:bg-wishlisthover"></button>
        <button className="  h-12 w-12 mt-5 border rounded-full transition ease-in-out duration-300 bg-quickviewdefault bg-cover hover:bg-quickviewhover"></button>
      </div>
      <div className="flex justify-between">
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>

        <div>
          <button className="h-12 w-12 mt-4 border rounded-full transition ease-in-out duration-300 bg-addToCartdefault bg-cover hover:bg-addToCartHover"></button>
        </div>
      </div>
    </div>
  </div>
);

const Product = () => {
  return (
    <>
      <Link href="/shop" />
      <section>
        <div className="bg-discount bg-cover px-20 py-20">
          <div className="mt-28">
            <CountdownTimer days={1} hours={2} minutes={0} seconds={30} />
          </div>
          <button className="bg-success text-white px-4 py-3 rounded-full flex items-center">
            Shop Now
            <Image src={buttonIcon} alt="button" className="ml-4" />
          </button>
        </div>
      </section>

      {/* <section>
        <div className="mt-10 flex justify-center ">
          <div >
            <button>
              Select Category
              <Image src={dropdownIcon} alt="dropdown" />
            </button>
            <button>
              Select Price
              <Image src={dropdownIcon} alt="dropdown" />
            </button>
            <button>
              Select Rating
              <Image src={dropdownIcon} alt="dropdown" />
            </button>
          </div>
          <div >
            <button>
              Sort by:
              <Image src={dropdownIcon} alt="dropdown" />
            </button>
            <button>
              Show:
              <Image src={dropdownIcon} alt="dropdown" />
            </button>
          </div>
        </div>
        </section> */}
      <div>
        {filterItems.map((filter) => (
          <FilterComponent
            key={filter.id}
            name={filter.name}
            image={filter.image}
          />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
        {ProductItems.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Product;

const filterItems = [
  { name: "Select Category", image: dropdownIcon },
  { name: "Select Price", image: dropdownIcon },
  { name: "Select Rating", image: dropdownIcon },
];

const FilterComponent = () => {
  return (
    <>
      {filterItems.map((item, index) => (
        <button key={index}>
          {item.name}
          <Image src={item.image} alt="dropdown" />
        </button>
      ))}
    </>
  );
};
