import { dropdownIcon } from "../../assets/icons";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const NavLink = (props) => {
  return (
        <Link className="flex items-center ml-8 my-3 lg:my-0" href={props.href || "/"}>
          <span className={props.active ? "text-white" : "text-grey-500"}>
            {props.title}
          </span>
          {!props.hideIcon && (
            <Image src={dropdownIcon} alt="down-icon" className="w-5 h-5 ml-1" />
          )}
        </Link>
      );
    };


export default NavLink;
