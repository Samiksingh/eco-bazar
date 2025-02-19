import React from "react";
import Image from "next/image";
import ProductItems from "../[sub-categories]/productItems";
import DealsItems from "../[sub-categories]/dealsItems";
import TopRatedItems from "../[sub-categories]/topRatedItems";
import BestSellersItems from "../[sub-categories]/bestSellersItems";
import VideoItems from "../../video/video";
import TeamSection from "../../team/team";
import TestimonialDetails from "../../testimonial/testimonial";
import Brandlogo from "../../brandlogo/brandlogo";


import { cabbageIcon, lettuceIcon } from "../../../assets/categoryImages";
import { whitebuttonIcon } from "../../../assets/icons";

const productItems = [
  {
    id: 1,
    name: "Chanise Cabbage",
    price: "$14.99",
    image: cabbageIcon,
    rating: 4,
  },
  {
    id: 2,
    name: "Green Lettuce",
    price: "$14.99",
    image: lettuceIcon,
    rating: 4,
  },
  {
    id: 3,
    name: "Green Chili",
    price: "$14.99",
    image: cabbageIcon,
    rating: 4,
  },
  {
    id: 4,
    name: "Corn",
    price: "$14.99",
    image: lettuceIcon,
    rating: 4,
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
        <div className="grid grid-cols-5 gap-4">
          <div className="md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            <div className="col-span-1 lg:col-span-2 bg-summersale p-4 rounded-lg flex flex-col justify-center items-center   text-center h-80 w-60">
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
              price={product.price}
              rating={product.rating}
            />
            
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-24">
        <div>
          <DealsItems />
        </div>
        <div>
          <BestSellersItems />
        </div>
        <div>
          <TopRatedItems />
        </div>

        <div>
          <div className="bg-freshfruit bg-cover p-4 rounded-lg flex  justify-center items-center text-center ">
            <span className="mb-36">
              <p className="text-grey-900 text-body-tiny font-medium">
                Hot Sale
              </p>
              <p className="text-grey-900 text-h5">
                <span className="font-bold text-4xl">Save 37%</span>
                <span className="font-normal">on Every Order</span>
              </p>

              <div className="mt-5 flex justify-center">
                <button className="cursor-pointer text-success bg-white text-body-small flex items-center px-4 py-2 rounded-full font-semi-bold">
                  Shop Now
                  <Image src={whitebuttonIcon} alt="button" className="ml-4" />
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-56">
        <VideoItems />
      </div>
      <div className="mt-10 col-span-full">
        <TeamSection />
      </div>
      <div className="col-span-full mt-10">
        <TestimonialDetails />
      </div>
      <div className="mt-10 col-span-full">
        <Brandlogo />
      </div>
    </>
  );
};

export default FeaturedProducts;
