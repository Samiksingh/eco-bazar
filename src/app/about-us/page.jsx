import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../footer/footer";
import Link from "next/link";
import { topIcon, midIcon, bottomIcon } from "../../assets/aboutImages";
import { homeIcon } from "@/assets/signinImages";

import TeamSection from "../team/team";
import TestimonialDetails from "../testimonial/testimonial";

import Brandlogo from "../brandlogo/brandlogo";

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
