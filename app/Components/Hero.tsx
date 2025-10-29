"use client";
import Image from "next/image";
import Bildeavmei from "../assets/vaskebjørn.avif";
import Button from "./button";

export const Hero = () => {
  const doSomething = () => console.log("dfghj");

  return (
    <div className="w-6/7 bg-sky-200 grow space-y-10 space-x-flex border-3 rounded-4xl p-4">
      <p className=" w-full text-6xl flex-wrap font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent p-5">
        Velkommen til min side{" "}
      </p>
      <div className="flex">
      <div className="grow space-y-7">
        <p className="p-5 text-2xl ">Bla. bla, bla</p>

        <Button    
          onClick={() => console.log("dfghj")}
          className="m-6 animate-pulse"
        >
          Ring mæ
        </Button>
      </div>

      <div className="grow flex items-baseline-last">
        <Image
          src={Bildeavmei}
          alt="Mei"
          width={400}
          height={400}
          className="grow rounded-4xl p-5"
        />
      </div>
      </div>
    </div>
  );
};
