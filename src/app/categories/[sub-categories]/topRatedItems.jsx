import React from 'react'
import Image from 'next/image';
import {
  cabbageIcon,
  lettuceIcon,
  eggplantIcon,
  cartIcon,
  colorcartIcon,
  wishlistIcon,
  viewIcon,
  summerSaleIcon,
  hotdealsIcon,
} from "../../../assets/categoryImages";

const topRatedItems = [
  {
    id: 1,
    name: "Big Potatoes",
    price: "$14.99",
    image: eggplantIcon,
  },
  {
    id: 2,
    name: "Corn",
    price: "$14.99",
    oldPrice: "$20.99",
    image: eggplantIcon,
  },
  {
    id: 3,
    name: "Fresh Cauliflower",
    price: "$14.99",
    image: eggplantIcon,
  },
];

 const TopRatedItems = () => {
  return (
    <div>TopRatedItems</div>
  )
}
export default TopRatedItems;