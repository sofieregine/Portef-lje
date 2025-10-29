import Link from "next/link";
import Navlinks from "./Navlinks";
import MobileNavlinks from "./MobileNavlinks";


const navlinks = [
    {
        title:"About",
        href: "#about"

    },
    {  title: "Experience",
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
    return (<div className=" font-thin flex p-4 w-full m-3">
        <p className=" grow font-bold text-3xl">Portfolio</p>
        <Navlinks links={navlinks}/>

        <MobileNavlinks links={navlinks}/>
     
    

        
    </div>
    );
}