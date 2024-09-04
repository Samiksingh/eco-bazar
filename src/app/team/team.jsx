import React from "react";
import Image from "next/image";
import { imageIcon } from "../../assets/memberimage";
import Facebook from "../brandlogo/facebook";
import Instagram from "../brandlogo/instagram";
import Twitter from "../brandlogo/twitter";
import Pinterest from "../brandlogo/pinterest";


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
            <Image
              src={member.imageUrl}
              alt="imgUrl"
              className="w-[19.5rem] h-[17.5rem] brightness-100 group-hover:brightness-50"
            />
            <div className="opacity-0 absolute group-hover:opacity-100 top-1/3 right-8 flex">
              <Facebook />
              <Instagram/>
              <Pinterest/>
              <Twitter/>
              
            </div>
            <h3>{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamSection;
