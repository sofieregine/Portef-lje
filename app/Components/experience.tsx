"use client";

import Image from "next/image";




export const Experience = () => {
  return (
    <div className="bg-sky-200 border-3 rounded-4xl m-3 w-6/7 flex flex-col justify-between ">
      <p className="font-bold text-4xl pl-10 pt-5">
        Experience</p>

      <div className="items-center flex flex-row justify-between flex-1">
        <ul className="ml-10 text-3xl flex-1 space-y-3" >
          <li> Student at NTNU</li>
          <li> One year in Trondheim kommune</li>
          <li> Two years as an EMT</li>
        </ul>
        <div className="mr-5  flex-shrink-0 ">
            <Image
            src={require("../assets/smartvenn.jpg")}
            alt="Vaskebjørn på laptop"
            width={420}
            height={420}
            className=" rounded-4xl p-5"
             />
    
        </div>
      </div>
    </div>
  );
};
