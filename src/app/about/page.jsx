"use client"
import { easeInOut, motion, useInView, useScroll } from "framer-motion";
import Brain from "@/components/brain";
import { useRef } from "react";


const AboutPage = () => {

  const containerRef = useRef();;
  const { scrollYProgress } = useScroll({ container: containerRef })

  const skillRef = useRef()
  // const isSkillRefInView = useInView(skillRef,{once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "100px" });

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, { margin: "100px" });


  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>

      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex overflow-x-hidden  " ref={containerRef}>
        {/* TEXT CONTAIINER */}
        <div className="px-4 sm:p-8 md:p-12 lg:p-20 xl:p-48  flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAIINER */}
          <div className="flex flex-col gap-24 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="font-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="itallic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            {/* BIOGRAPHY SIGN SVG */}
            <div className="self-end">
              <svg width="185" height="77" viewBox="0 0 3478 3966" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1742.64 3593.05C2122.75 3386.65 2499.47 3173.85 2879.63 2967.71" stroke="black" strokeWidth="30" strokeLinecap="round" />
                <path d="M3136 2854L3142.16 2860.24" stroke="black" strokeWidth="30" strokeLinecap="round" />
                <path d="M1515 2200C1531 2162.5 1536.17 2156.83 1561.5 2125.5C1608 2068 1698.83 2052.08 1723.02 2139.15C1746.78 2224.69 1725.81 2325.95 1698.33 2401.54" stroke="black" strokeWidth="30" strokeLinecap="round" />
                <path d="M534.5 3958C600.376 3617.33 640.403 3336.71 645.036 2988.78C649.864 2626.11 629.923 2222.62 474.036 1886.98C420.465 1771.64 306.383 1624.89 171.289 1748.91C15.145 1892.26 -57.4538 2220.43 82.8559 2396.82C209.388 2555.89 446.535 2553.04 625.635 2571.43C722.22 2581.35 914.979 2570.71 811.073 2718.97C709.937 2863.27 569.367 2968.69 490.73 3131.35C460.434 3194.02 423.007 3281.44 478.096 3347.02C534.477 3414.14 639.673 3399.67 710.458 3390.33C902.061 3365.07 1093.22 3288.53 1263.16 3199.03C1359.41 3148.34 1495.72 3074.06 1548.76 2970.73C1573.38 2922.78 1573.27 2827.55 1498.68 2818.23C1419.36 2808.31 1406.45 2917.87 1436.87 2965.32C1499.57 3063.12 1580.48 2940.67 1606.07 2890.42C1620.49 2862.09 1628.09 2830.78 1639.45 2801.08C1655.86 2758.2 1649.06 2738.64 1675.1 2774.92C1710.64 2824.42 1756.82 2898.77 1810.9 2803.79C1849.56 2735.91 1856.91 2636.77 1867.75 2562.86C1869.26 2552.56 1864.1 2450.12 1895.73 2507.81C1938.22 2585.31 1961.2 2697.56 2073.5 2698.21C2142.88 2698.62 2216.38 2636.95 2272.92 2603.46C2490.27 2474.73 2743.87 2416.53 2945.64 2256.05C3019.33 2197.44 3095.18 2137.91 3150.93 2062.04C3312.01 1842.83 3419.22 1541.9 3452.32 1276.07C3501.74 879.232 3464.76 349.261 3100.85 95.312C2855.29 -76.0496 2527.26 14.4697 2395.64 282.555C2289.09 499.597 2293.32 844.265 2320.75 1067.62C2399.59 1709.65 2449.13 1461.6 2585.14 2108.96" stroke="black" strokeWidth="30" strokeLinecap="round" />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat:Infinity, duration:3, ease:"easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>

          </div>
          {/* SKILLS CONTAIINER */}
          <div className="flex flex-col gap-24 justify-center " ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <motion.div initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className=" flex gap-4 flex-wrap">
              <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">JavaScript</div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black ">React.js</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">Material Ui</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">Tailwind CSS</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">Alan Ai</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">HTML</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">CSS</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">Next.js</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">Node.js</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">Npm</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">Illustrator</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">PhotoShop</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">Redux</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">PhotoShop</div>
              </div>
              <div className="">
                <div className=" p-2 rounded text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">Framer Motion</div>
              </div>



            </motion.div>
            {/* SKILLS SCROLLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat:Infinity, duration:3, ease:"easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>


          </div>
          {/* EXPERIENCE CONTAIINER */}
          <div className="flex flex-col gap-24 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1 initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="">
              {/* EXPERIENCE LIST ITEMS*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold p-3 rounded-s-lg rounded-b-lg w-fit">JavaScript Developer</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">My Current Employment ia way Better than the position Before.</div>
                  {/* JOB DATE */}
                  <div className="p-3 font-semibold text-red-400">2024-Present</div>
                  {/* cOMPANY NAME */}
                  <div className="bg-white text-sm p-1 rounded font-semibold w-fit">APPLE</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>

              </div>
              {/* EXPERIENCE LIST ITEMS*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">

                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold p-3 rounded-s-lg rounded-b-lg w-fit">JavaScript Developer</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">My Current Employment ia way Better than the position Before.</div>
                  {/* JOB DATE */}
                  <div className="p-3 font-semibold text-red-400">2024-Present</div>
                  {/* cOMPANY NAME */}
                  <div className="bg-white text-sm p-1 rounded font-semibold w-fit">APPLE</div>
                </div>

              </div>
              {/* EXPERIENCE LIST ITEMS*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold p-3 rounded-s-lg rounded-b-lg w-fit">JavaScript Developer</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">My Current Employment ia way Better than the position Before.</div>
                  {/* JOB DATE */}
                  <div className="p-3 font-semibold text-red-400">2024-Present</div>
                  {/* cOMPANY NAME */}
                  <div className="bg-white text-sm p-1 rounded font-semibold w-fit">APPLE</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>

              </div>
            </motion.div>

          </div>
        </div>
        {/* SVG CONTAIINER */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>

      </div>



    </motion.div>
  )
}

export default AboutPage;