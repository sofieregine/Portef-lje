import { iconLoaded } from "@iconify/react";
import { describe } from "node:test";
import { InniAbout, InniAboutProps } from "./inniabout";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { title } from "process";
import { Aboutservice } from "../backend/Aboutservice";

const aboutMe: InniAboutProps[] = [
  {
    icon: "wi:day-cloudy",
    title: "Utvikler",
    description: "heiheihei",
  },
  {
    icon: "wi:night-alt-lightning",
    title: "fghj",
    description: "fghj",
  },
  {
    icon: "pepicons-pop:flower-circle-filled",
    title: "Hallai",
    description: "ye",
  },
  {
    icon: "bi:airplane-engines",
    title: "Hallai",
    description: "ye",
  },
];

export const About = () => {
  const data = Aboutservice.getaboutinfo;
  const daystoxmas = Aboutservice.daysUntilChristmas();

  return (
    <div id="about" className="flex items-start w-6/7 space-x-6  m-3  ">
      {/* Left column: heading + image */}
      <div className=" grow space-y-6 p-4 border-3 rounded-4xl  bg-sky-200">
        <div className="flex flex-col">
          <p className="font-bold text-3xl bg-fuchsia-800 bg-clip-text text-transparent">
            Det er {daystoxmas} dager til jul
          </p>
        
        </div>

        <div className="w-80 h-80 overflow-hidden rounded-2xl ">
          <Image
            src={require("../assets/dusjetid.jpg")}
            alt="Jeg tar meg en god vask iblandt"
            width={320}
            height={320}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right column: list */}
      <div className="grow space-y-6 p-4 border-3 rounded-4xl  bg-sky-200">
        {aboutMe.map((item) => (
          <InniAbout
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
