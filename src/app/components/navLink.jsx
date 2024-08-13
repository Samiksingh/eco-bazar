import { dropdownIcon } from "../../assets/icons";
import Image from "next/image";
import React from "react";

const NavLink = (props) => {
  return (
    <div className="flex items-center ml-8 my-3 lg:my-0">
      <span className={props.active ? "text-white" : "text-grey-500"}>
        {props.title}
      </span>
      {!props.hideIcon && (
        <Image src={dropdownIcon} alt="down-icon" className="w-5 h-5 ml-1" />
      )}
    </div>
  );
};

export default NavLink;
