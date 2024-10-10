'use client'

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';


const TransitionProvider = ({ children }) => {

    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div
                key={pathName}
                className="w-screen h-screen  bg-gradient-to-b from-blue-100 to-red-100">

                <motion.div className="h-screen w-screen bg-black fixed rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                <motion.div
                    className="fixed  m-auto right-0 left-0 top-0 bottom-0 text-8xl text-white cursor-default h-fit w-fit z-50 "
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    {pathName.substring(1)}
                </motion.div>

                <motion.div className="h-screen w-screen bg-black fixed bottom-0 rounded-t-[100px] z-30"
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}

                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-96px)]">
                    {children}
                </div>
            </div>
        </AnimatePresence>

    )
}

export default TransitionProvider