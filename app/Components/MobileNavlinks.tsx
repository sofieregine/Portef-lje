"use client"
import Link from "next/link"
import { FC, useState } from "react"
import { Icon } from "@iconify/react"


interface Navlinksprops {
    links: {
        href: string
        title: string
   }[]
 
}

const MobileNavlinks: FC<Navlinksprops>= (props) => {
    const [open, setopen] = useState(false)

     return (
         <div className=" grow flex justify-end gap-28 text-2xl sm:hidden"> 
          <Icon icon={"tabler:menu-2"} onClick={() => setopen(!open)} className="size-10!"/>
          {
            open &&  (
            <div className="absolute top-30 flex flex-col p-5 gap-6 rounded-3xl from-pink-400 to bg-pink-300 bg-gradient-to-b"> 
              {props.links.map((link) => {
             return (
              <Link key={link.title} href={link.href}>{link.title}</Link>
              );
              })} 
         </div>
          )}
         
         </div>
     );
}

export default MobileNavlinks