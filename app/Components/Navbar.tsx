import Link from "next/link";
import Navlinks from "./Navlinks";
import MobileNavlinks from "./MobileNavlinks";


const navlinks = [
    {
        title:"About",
        href: "#about"

    },
    {  title: "Experince",
        href: "#experience"
    },
    {
    title: "Projects",
    href: "#projects"
    },
    {   title: "Contact",
        href: "#contact",

        
    },

]

export function Navbar() {
    return (<div className=" flex p-4 w-full">
        <p className=" grow font-bold text-4xl">Portfolio</p>
        <Navlinks links={navlinks}/>

        <MobileNavlinks links={navlinks}/>
     
    

        
    </div>
    );
}