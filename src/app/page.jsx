'use client'
import Image from "next/image";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <motion.div
     className="h-full" 
     initial={{y:"-200vh"}} 
     animate={{y:"0%"}} 
     transition={{duration:1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 gap-8 flex flex-col justify-center items-center ">
          {/* TITILE */}
          <h1 className="text-4xl md:text-6xl font-bold" >Crafting Digital Experiences, Designing Tomorrow</h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">I’m a web developer and tech enthusiast, passionate about building modern, user-friendly web experiences. Combining creativity and cutting-edge technology. Let’s bring ideas to life in the digital world!</p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 ">
            <button className="p-4 rounded-lg ring-1  ring-black bg-black text-white">View My Work</button>
            <button className="p-4 rounded-lg ring-1  ring-black ">Contact Me</button>
          </div>

        </div>
      </div>
    </motion.div>)
};

export default Homepage;