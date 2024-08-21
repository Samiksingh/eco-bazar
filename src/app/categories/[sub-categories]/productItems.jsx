import Image from "next/image";
import React from "react";

const ProductItems = (props) => {
  return (
    <div>
      <div
        className={`ml-5 border border-grey-100 p-4 rounded-lg hover:shadow-lg transition-shadow ${" hover:border-success"}`}
      >
        <Image src={(props.activeIcon, props.icon)} alt="icon" />
        <div className="flex justify-between">
          <div>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
          </div>
          <button className=" h-12 w-12 mt-4 border rounded-full bg-grey-100 transition ease-in-out duration-300  hover:bg-success">
            {props.image && (
              <Image src={props.image} alt="cart" className="m-auto" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
