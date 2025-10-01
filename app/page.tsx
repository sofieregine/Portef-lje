import { About } from "./Components/about";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";

export default function Hjemmeside() {
  return <div className="flex flex-col items-center m-2 bg-yellow-100">
    <Navbar/>
    <Hero/>
    <About/>
  </div>
}