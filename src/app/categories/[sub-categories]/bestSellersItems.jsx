import React from 'react'
import Image from 'next/image'
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

const bestSellersItems = [
  {
    id: 1,
    name: "Eggplant",
    price: "$14.99",
    image: eggplantIcon,
  },
  {
    id: 2,
    name: "Red Capsicum",
    price: "$14.99",
    oldPrice: "$20.99",

    image: eggplantIcon,
  },
  {
    id: 3,
    name: "Red Tomatoes",
    price: "$14.99",
    image: eggplantIcon,
  },
];

 const BestSellersItems = () => {
  return (
    <div>BestSellersItems</div>
  )
}

export default BestSellersItems