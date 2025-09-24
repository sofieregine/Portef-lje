import { iconLoaded } from "@iconify/react";
import { describe } from "node:test";

import Image from "next/image";
import { Icon } from "@iconify/react";

const aboutMe = [
  {
    title: "fghj",
    description: "dfghj",
    icon: "wi:day-cloudy", 
    icon2 :"wi:night-alt-lightning",
    icon3: "wi:day-snow"
  },
];

export const About = () => {
  return (
    <div className="flex items-start w-2/3 bg-fuchsia-300 space-x-6 p-4">
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

      <div className="grow space-y-5 border p-10">
        <div>
          <Icon
            icon="wi:day-cloudy"
            width="40"
            height="40"
            className="mr-2 float-left"
          />
          <p className=" font-bold text-3xl bg-fuchsia-800 bg-clip-text text-transparent">
            {" "}
            Innvikler{" "}
          </p>
          <p className=" "> Heter det en gifflar eller en giffel?</p>
        </div>
        <div>
          <Icon
            icon="wi:night-alt-lightning"
            width="40"
            height="40"
            className="mr-2 float-left"
          />
          <p className=" font-bold text-3xl bg-fuchsia-800 bg-clip-text text-transparent">
            Nåkka piss
          </p>
          <p>Mer piss</p>
        </div>
        <div>
          <Icon
            icon="wi:day-snow"
            width="40"
            height="40"
            className="mr-2 float-left"
          />
          <p className=" font-bold text-3xl bg-fuchsia-800 bg-clip-text text-transparent">
            Greier sykt interesasant
          </p>
          <p>stuhf</p>
        </div>
      </div>
    </div>
  );
};
