import React from "react";
import CategoryItem from "./categoryItem";
import {
  appleIcon,
  saladActiveIcon,
  chickenIcon,
  cupcakeIcon,
  cupIcon,
  fishIcon,
  foodIcon,
  icecreamIcon,
  pieIcon,
  plusIcon,
} from "../../assets/icons";
import Slider from "./slider";
import Feature from "./feature";
import Deal from "./bestDeal";
import Category from "../categories/[sub-categories]/page";

const categoryItems = [
  {
    id: 1,
    icon: appleIcon,
    activeIcon: saladActiveIcon,
    title: "Fruit Items",
  },
  {
    id: 2,
    icon: saladActiveIcon,
    activeIcon: saladActiveIcon,
    title: "Vegetables",
  },
  {
    id: 3,
    icon: fishIcon,
    activeIcon: saladActiveIcon,
    title: "River Fish",
  },
  {
    id: 5,
    icon: chickenIcon,
    activeIcon: saladActiveIcon,
    title: "Chicken & Meat",
  },
  {
    id: 6,
    icon: cupIcon,
    activeIcon: saladActiveIcon,
    title: "Drink & Water",
  },
  {
    id: 7,
    icon: icecreamIcon,
    activeIcon: saladActiveIcon,
    title: "Yogurt & Ice Cream",
  },
  {
    id: 8,
    icon: cupcakeIcon,
    activeIcon: saladActiveIcon,
    title: "Cake & Bread",
  },
  {
    id: 7,
    icon: pieIcon,
    activeIcon: saladActiveIcon,
    title: "Butter & Cream",
  },
  {
    id: 9,
    icon: foodIcon,
    activeIcon: saladActiveIcon,
    title: "Cooking",
  },
  {
    id: 10,
    icon: plusIcon,
    activeIcon: saladActiveIcon,
    title: "View all Category",
  },
];

const Banner = () => {
  return (
    <section className="mx-10 grid grid-cols-12 mt-6 gap-6">
      <div className="col-span-12 lg:col-span-3 border border-grey-400">
        {categoryItems.map((category, index) => (
          <CategoryItem
            title={category.title}
            key={category.id}
            icon={category.icon}
            active={category.id === 2}
            activeIcon={category.activeIcon}
            showBorder={categoryItems.length - 1 === index}
          />
        ))}
      </div>
      <div className="col-span-12 lg:col-span-9">
        <Slider />
      </div>
      <div className="col-span-full">
        <Feature />
      </div>
      <div className="col-span-full">
        <Deal />
      </div>
      <div className="col-span-full ">
        <Category />
      </div>
    </section>
  );
};

export default Banner;
