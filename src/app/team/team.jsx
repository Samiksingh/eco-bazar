import React from "react";
import Image from "next/image";
import { imageIcon } from "../../assets/memberimage";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jenny Wilson",
      role: "CEO & Founder",
      imageUrl: imageIcon,
    },
    {
      name: "Jane Cooper",
      role: "Worker",
      imageUrl: imageIcon,
    },
    {
      name: "Cody Fisher",
      role: "Security Guard",
      imageUrl: imageIcon,
    },
    {
      name: "Robert Fox",
      role: "Senior Farmer Manager",
      imageUrl: imageIcon,
    },
  ];
  return (
    <div>
      <p className="text-center text-success">Team</p>
      <h1 className="text-center text-xl font-semibold mb-6">
        Our Professional Members
      </h1>

      <div className="grid grid-cols-4 gap-6 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="group relative">
            <button className="">
              <Image src={member.imageUrl} alt="imgUrl" className="" />
            </button>

            <h3>{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamSection;
