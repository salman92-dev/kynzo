import Image from "next/image";
import Hero_section from "./components/Hero-section";
import About from "./components/About";
import Distribution from "./components/Distribution";
import Roadmap from "./components/Roadmap";
import CountdownTimer from "./components/Countdown";
import FooterSection from "./components/Footer";
export default function Home() {
  return (
    <div className="2xl:container mx-auto">
      <Hero_section />
      <About />
      <Distribution />
      <Roadmap />
      <CountdownTimer />
      <FooterSection /> 
    </div>
  );
}
