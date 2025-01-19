
import Hero from "@/components/Hero";

import Projects from "./Project/page";
import AboutUs from "./About/page";
import Projects2 from "./Projects2/page";


export default function Home() {
  return (
   <div>
    <Hero />
    <Projects />
    <Projects2 />
   
    <AboutUs />
   </div>
  );
}
