import { About } from "./Components/about";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";

export default function Hjemmeside() {
  return <div className="flex flex-col items-center border m-20 bg-pink-300">
    <Navbar/>
    <Hero/>
    <About/>
  </div>
}