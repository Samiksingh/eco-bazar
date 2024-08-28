import React from "react";
import Image from "next/image";
import { Testimonial } from "../../assets/testimonialImages";

const TestimonialDetails = () => {
  return (
    <div className="bg-grey-50 my-14">
      <p className="text-center text-success text-body-small font-medium">
        Client Testimonial
      </p>
      <h1 className="text-center text-grey-900 text-h4 font-semibold">
        What our Client Says
      </h1>
      <div className="grid grid-cols-3 gap-4 p-10 ">
        <div className="h-64">
          <Image src={Testimonial} alt="testimonial" />
        </div>
        <div className="h-64">
          <Image src={Testimonial} alt="testimonial" />
        </div>
        <div className="h-64">
          <Image src={Testimonial} alt="testimonial" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
