import React from "react";
import photo from "./utilis/photo.jpg"
const About = () => {
  return (
    <div className="bg-zinc -mt-20 z-0">
      <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="font-['Neue_Montreal'] text-[4.5vw] tracking-tight mb-10">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
        <div className="w-full border-t-[1px] border-[#a1b562] border-t-[1px] pt-10 mt-20 gap-5 flex">
          <div className="w-1/2">
            <h1 className="mt-10 text-[4.5vw] font-['Neue_Montreal'] tracking-tight">
              Our Approch
            </h1>
            <button className="flex gap-10 items-center px-8 py-5 bg-zinc-900 rounded-full text-white mt-10">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh]  rounded-3xl">
          <img
          src={photo}
          alt="homepage_photo"
          className="w-1/2 h-full w-screen rounded-3xl bg-cover bg-center"
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
