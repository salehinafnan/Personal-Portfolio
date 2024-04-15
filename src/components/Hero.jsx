import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/afnanProfile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin tracking-tight lg:mt-16">
              Mushfiqus Salehin{" "}
              <span className="font-light text-blue-100">Afnan</span>
            </h1>
            <span className="bg-gradient-to-r from-blue-300 via-slate-300 to-pink-300 bg-clip-text text-3xl tracking-tight text-transparent">
              Web Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="rounded-2xl w-full object-cover sm:object-contain md:object-scale-down"
              src={profilePic}
              alt="Mushfiqus Salehin Afnan"
              style={{ maxWidth: "420px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;