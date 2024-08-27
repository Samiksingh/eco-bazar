import React from "react";
import Image from "next/image";
import { Testimonial } from "../../assets/testimonialImages";

const TestimonialDetails = () => {
  return (
    <div className="border border-gray-50">
      <p className="text-center text-success">Client Testimonial</p>
      <h1 className="text-center text-xl font-semibold mb-6">
        What our Client Says
      </h1>
      <div className="grid grid-cols-3 gap-4">
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
