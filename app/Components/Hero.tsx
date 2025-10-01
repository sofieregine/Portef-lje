"use client"
import Image from "next/image"
import Bildeavmei from "../assets/vaskebjørn.avif"
import Button from "./button"

export const Hero = () => {
    const doSomething = () => console.log ("dfghj")


    return (
    <div className="flex items-center w-6/7 bg-sky-200" >
       <div className="grow space-y-7"> 
        <p className="text-6xl flex-wrap font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent p-5">Velkommen til min side </p>
       
        <p className="p-5">Bla. bla, bla</p>

        <Button  onClick={ ()=> console.log ("dfghj")} className="m-6 animate-pulse">Ring mæ</Button>

       </div>

       <div className="grow">
        <Image src={Bildeavmei} 
        alt="Mei" width={400} height={400} className="rounded-3xl p-5"/>

       </div>
    </div>
    )
}