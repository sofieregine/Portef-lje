"use client"
import Image from "next/image"
import Bildeavmei from "../assets/vaskebjørn.avif"
import Button from "./button"

export const Hero = () => {
    const doSomething = () => console.log ("dfghj")


    return (
    <div className="flex items-center w-2/3 bg-fuchsia-200 " >
       <div className="grow space-y-5"> 
        <p className="text-6xl font-bold bg-gradient-to-r from-red-200 to-pink-300 bg-clip-text text-transparent">Hei </p>
       
        <p>Bla. bla, bla</p>

        <Button  onClick={ ()=> console.log ("dfghj")}>Ring mæ</Button>

       </div>

       <div className="grow">
        <Image src={Bildeavmei} 
        alt="Mei" width={500} height={500} className="rounded-full animate-bounce"/>

       </div>
    </div>
    )
}