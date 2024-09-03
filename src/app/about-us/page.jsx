import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../footer/footer";
import Link from "next/link";
import {
  topIcon,
  midIcon,
  bottomIcon,
  leafIcon,
  bagIcon,
  boxIcon,
  carIcon,
  headphoneIcon,
  starIcon,
  checkIcon,
} from "../../assets/aboutImages";
import { homeIcon } from "@/assets/signinImages";
import { buttonIcon } from "../../assets/icons";

import TeamSection from "../team/team";
import TestimonialDetails from "../testimonial/testimonial";

import Brandlogo from "../brandlogo/brandlogo";

const pageItems = [
  {
    id: 1,
    title: "100% Organic food",
    text: "100% healthy & Fresh food",
    icon: leafIcon,
  },
  {
    id: 2,
    title: "Customer Feedback",
    text: "Our happy customer",
    icon: starIcon,
  },
  {
    id: 3,
    title: "Free Shipping",
    text: "Free shipping with discount",
    icon: carIcon,
  },
  {
    id: 4,
    title: "Great Support 24/7",
    text: "Instant access to Contact",
    icon: headphoneIcon,
  },
  {
    id: 5,
    title: "100% Sucure Payment",
    text: "We ensure your money is save",
    icon: bagIcon,
  },
  {
    id: 6,
    title: "100% Organic Food",
    text: "100% healthy & Fresh food.",
    icon: boxIcon,
  },
];

const page = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <section>
        <div className=" bg-background bg-cover px-28 py-12 ">
          <Link href="/">
            <Image src={homeIcon} alt="home" />
          </Link>
        </div>
        <div className="flex mt-10 ">
          <h1 className="">100% Trusted Organic Food Store</h1>
          <p>
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
          <Image src={topIcon} alt="top" />
        </div>
        <div className="flex mt-10">
          <h1>100% Trusted Organic Food Store</h1>
          <p>
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
          </p>
          <Image src={midIcon} alt="mid" />
        </div>
        <div className="grid grid-cols-2">
          {pageItems.map((about) => (
            <div key={about.id}>
              <Image src={about.icon} alt="icons" />
              <div className="flex">
                <h3>{about.title}</h3>
                <p>{about.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image src={bottomIcon} alt="bottom" />
          <h1>We Delivered, You Enjoy Your Order.</h1>
          <p>
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </p>
          <div>
            <Image src={checkIcon} alt="star" />
            <p>Sed in metus pellentesque.</p>
          </div>
          <div>
            <Image src={checkIcon} alt="star" />
            <p>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
          </div>
          <div>
            <Image src={checkIcon} alt="star" />
            <p>Maecenas ut nunc fringilla erat varius.</p>
          </div>
          <button className="bg-success text-white px-4 py-3 rounded-full flex items-center ">
            Shop Now
            <Image src={buttonIcon} alt="button" className=" ml-4 " />
          </button>
        </div>
      </section>
      <div className="mt-10">
        <TeamSection />
      </div>
      <div className="mt-10">
        <TestimonialDetails />
      </div>
      <div className="mt-10">
        <Brandlogo />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default page;
