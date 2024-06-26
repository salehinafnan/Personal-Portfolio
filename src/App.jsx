import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Publication from "./components/Publication";

const App = () => {
  return (
    <div className="overflow-x-hidden text-gray-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(130%_130%_at_50%_10%,#000_50%,#191970_100%)]"></div>
      </div>
      <div className="container mx-auto px-10">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Publication />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
