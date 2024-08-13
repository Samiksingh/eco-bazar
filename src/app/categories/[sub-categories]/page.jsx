import React from "react";
import Image from "next/image";
import {
  freshFruitIcon,
  freshVegetablesIcon,
} from "../../../assets/categoryImages";

const categoryItems = [
  {
    id: 1,

    icon: freshFruitIcon,
    title: "Fresh Fruit",
  },
  {
    id: 2,
    icon: freshVegetablesIcon,
    title: "Fresh Vegetables",
  },
  {
    id: 3,
    icon: freshFruitIcon,
    title: "Meat & Fish",
  },
  {
    id: 4,
    icon: freshVegetablesIcon,
    title: "Snacks",
  },
  {
    id: 5,
    icon: freshFruitIcon,
    title: "Beverages",
  },
  {
    id: 6,
    icon: freshVegetablesIcon,
    title: "Beauty & Health",
  },
  {
    id: 7,
    icon: freshFruitIcon,
    title: "Bread & Bakery",
  },
  {
    id: 8,
    icon: freshVegetablesIcon,
    title: "Baking Needs",
  },
  {
    id: 9,
    icon: freshFruitIcon,
    title: "Cooking",
  },
  {
    id: 10,
    icon: freshVegetablesIcon,
    title: "Diabetic Food",
  },
  {
    id: 11,
    icon: freshFruitIcon,
    title: "Dish Detergents",
  },
  {
    id: 12,
    icon: freshVegetablesIcon,
    title: "Oil",
  },
];

const Category = () => {
  return (
    <div className="py-8">
      <p className="text-center text-success text-body-small">CATEGORY</p>
      <h2 className="text-center text-2xl font-semibold mb-6">
        Shop by Top Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categoryItems.map((category) => (
          <div
            key={category.id}
            className={`flex flex-col items-center border border-grey-100 p-4 rounded-lg hover:shadow-lg transition-shadow ${" hover:border-success"}`}
          >
            <Image
              src={category.icon}
              alt="category-icon"
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-medium">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
