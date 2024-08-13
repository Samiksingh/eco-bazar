import Image from "next/image";
import React from "react";

const CategoryItem = (props) => {
  return (
    <div
      className={`flex items-center px-5 py-4 ${
        props.active ? "bg-success" : ""
      }
      { ${props.showBorder && "border-t-grey-100 border"} }`}
    >
      <Image src={props.active ? props.activeIcon : props.icon} alt="Apple" />

      <span
        className={`text-body-small ml-3 ${
          props.active ? "text-white" : "text-grey-900"
        } `}
      >
        {props.title}
      </span>
    </div>
  );
};

export default CategoryItem;
