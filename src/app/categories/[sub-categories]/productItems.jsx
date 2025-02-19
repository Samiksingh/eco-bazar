import Image from "next/image";
import React from "react";
import Stars from "../../components/stars";

const ProductItems = (props) => {
  return (
    <div>
      <div
        className={`group border relative  border-grey-100 p-4 rounded-lg hover:shadow-lg transition-shadow ${" hover:border-success-dark"}`}
      >
        <Image src={(props.activeIcon, props.image)} alt="icon" />
        <div className="absolute top-5 right-5 flex flex-col opacity-0 group-hover:opacity-100 ">
          <button className="  h-12 w-12 mt-5 border rounded-full transition ease-in-out duration-300 bg-wishlistdefault bg-cover hover:bg-wishlisthover"></button>
          <button className="  h-12 w-12 mt-5 border rounded-full transition ease-in-out duration-300 bg-quickviewdefault bg-cover hover:bg-quickviewhover"></button>
        </div>
        <div className="flex justify-between">
          <div>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <Stars stars={props.rating} />
          </div>

          <div>
            <button className="h-12 w-12 mt-4 border rounded-full transition ease-in-out duration-300 bg-addToCartdefault bg-cover hover:bg-addToCartHover"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
