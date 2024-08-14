import React from "react";
import Image from "next/image";
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
} from "../../../assets/images";
import { whitebuttonIcon } from "../../../assets/icons";

const productItems = [
  {
    name: "Chanise Cabbage",
    price: "$14.99",
    image: cabbageIcon,
    isLocked: true,
    rating: 4,
  },
  {
    name: "Green Lettuce",
    price: "$14.99",
    image: lettuceIcon,
    isLocked: true,
    rating: 4,
  },
  {
    name: "Green Chili",
    price: "$14.99",
    image: cabbageIcon,
    isLocked: false,
    rating: 4,
  },
  {
    name: "Corn",
    price: "$14.99",
    image: lettuceIcon,
    isLocked: true,
    rating: 3,
  },
];

const dealsItems = [
  { name: "Green Apple", price: "$14.99", rating: 4, image: eggplantIcon },
  { name: "Indian Malta", price: "$14.99", rating: 4, image: eggplantIcon },
  { name: "Green Lettuce", price: "$14.99", rating: 4, image: eggplantIcon },
];

const bestSellersItems = [
  { name: "Eggplant", price: "$14.99", rating: 4, image: eggplantIcon },
  {
    name: "Red Capsicum",
    price: "$14.99",
    oldPrice: "$20.99",
    rating: 4,
    image: eggplantIcon,
  },
  { name: "Red Tomatoes", price: "$14.99", rating: 4, image: eggplantIcon },
];

const topRatedItems = [
  { name: "Big Potatoes", price: "$14.99", rating: 4, image: eggplantIcon },
  {
    name: "Corn",
    price: "$14.99",
    oldPrice: "$20.99",
    rating: 4,
    image: eggplantIcon,
  },
  {
    name: "Fresh Cauliflower",
    price: "$14.99",
    rating: 4,
    image: eggplantIcon,
  },
];

// const FeaturedProducts = () => {
//   return (
//     <div className="py-8">
//       <h2 className="text-center text-2xl font-semibold mb-6">Our Featured Products</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
//         <div className="col-span-1 lg:col-span-2 bg-green-100 p-4 rounded-lg flex flex-col justify-center items-center text-center">
//           <p className="text-green-600 font-bold text-4xl">75% off</p>
//           <p className="text-lg">Summer Sale</p>
//           <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-full">Shop Now</button>
//         </div>
//         {productItems.map((product, index) => (
//           <div
//             key={index}
//             className={`border p-4 rounded-lg flex flex-col items-center ${product.isLocked ? 'border-red-400' : 'border-green-400'}`}
//           >
//             <img src = {summerSaleIcon} alt="product.name" className="w-full h-32 object-contain mb-4" />
//             <h3 className="text-lg font-medium">{product.name}</h3>
//             <p className="text-green-600 font-bold">{product.price}</p>
//             {product.isLocked ? (
//               <span className="text-gray-400"></span>
//             ) : (
//               <span className="text-green-400"></span>
//             )}
//             <div className="mt-2 text-yellow-500">{'★'.repeat(product.rating)}</div>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold mb-4">Hot Deals</h3>
//           {dealsItems.map((deal, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <img src={deal.image} alt={deal.name} className="w-16 h-16 object-contain mr-4" />
//               <div>
//                 <h4 className="font-medium">{deal.name}</h4>
//                 <p className="text-green-600 font-bold">{deal.price}</p>
//                 <div className="text-yellow-500">{'★'.repeat(deal.rating)}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold mb-4">Best Seller</h3>
//           {bestSellersItems.map((bestSeller, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <img src={bestSeller.image} alt={bestSeller.name} className="w-16 h-16 object-contain mr-4" />
//               <div>
//                 <h4 className="font-medium">{bestSeller.name}</h4>
//                 {bestSeller.oldPrice && <p className="text-gray-400 line-through">{bestSeller.oldPrice}</p>}
//                 <p className="text-green-600 font-bold">{bestSeller.price}</p>
//                 <div className="text-yellow-500">{'★'.repeat(bestSeller.rating)}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold mb-4">Top Rated</h3>
//           {topRatedItems.map((topRate, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <img src={topRate.image} alt={topRate.name} className="w-16 h-16 object-contain mr-4" />
//               <div>
//                 <h4 className="font-medium">{topRate.name}</h4>
//                 {topRate.oldPrice && <p className="text-gray-400 line-through">{topRate.oldPrice}</p>}
//                 <p className="text-green-600 font-bold">{topRate.price}</p>
//                 <div className="text-yellow-500">{'★'.repeat(topRate.rating)}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default FeaturedProducts;

const FeaturedProducts = () => {
  return (
    <>
      <div>
        <p className="text-center text-gray-500">Products</p>
        <h1 className="text-center text-xl font-semibold mb-6">
          Our Featured Products
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <div className="col-span-1 lg:col-span-2 bg-summersale p-4 rounded-lg flex flex-col justify-center items-center text-center">
          <p className="text-green-600 font-bold text-4xl">75% off</p>
          <p className="text-lg">Summer Sale</p>
          <div className="mt-5 flex justify-center">
            <button className="cursor-pointer bg-white text-success px-4 py-3 rounded-full flex items-center">
              Shop Now
              <Image src={whitebuttonIcon} alt="button" className="ml-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
