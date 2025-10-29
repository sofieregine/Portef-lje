import { About } from "./Components/about";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Experience } from "./Components/experience";

export default function Hjemmeside() {
  return <div className="flex flex-col items-center m-2 bg-yellow-100">
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
  </div>
}