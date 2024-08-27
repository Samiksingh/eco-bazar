import React from "react";
import Image from "next/image";
import {
  foodIcon,
  foodnetworkIcon,
  gseriesIcon,
  bookoffIcon,
  mangoIcon,
  stepsIcon,
} from "../../assets/brandlogoImages";

const Brandlogo = () => {
  return (
    <>
      <div className="flex justify-between border p-14">
        <Image src={stepsIcon} alt="food"/>

        <Image src={mangoIcon} alt="food" />
        <Image src={foodnetworkIcon} alt="food" />
        <Image src={foodIcon} alt="food" />
        <Image src={bookoffIcon} alt="food" />
        <Image src={gseriesIcon} alt="food" />
      </div>
    </>
  );
};
export default Brandlogo;
