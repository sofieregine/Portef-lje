import { iconLoaded } from "@iconify/react";
import { describe } from "node:test";
import { InniAbout, InniAboutProps } from "./inniabout";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { title } from "process";

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
  return (
    <div className="flex items-start w-6/7 bg-sky-200 space-x-6 p-10 m-3 ">
      <div className="flex flex-col justify-start">
        <p className="font-bold text-md bg-fuchsia-800 bg-clip-text text-transparent mb-2">
          this is real this is me
        </p>
      </div>
      <div className="grow">
        <Image
          src={require("../assets/dusjetid.jpg")}
          alt="Jeg tar meg en god vask iblandt"
          width={200}
          height={200}
        />
      </div>

      <div className="grow space-y-5 border p-3">
        {aboutMe.map((item) => {
          return (
            <InniAbout
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};
