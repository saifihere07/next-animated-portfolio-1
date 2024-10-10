'use client';
import { motion } from 'framer-motion';


const variants= {
    variant1:{
         x: 300, y: 400, opacity:0.5,
     transition:{
       delay:2, duration:4
     },
    },
    variant2:{
        x: 100, y: -300, rotation:90,
   },
}

const TestPage = () => {
    return (
        <div className="h-full flex justify-center items-center">
            <motion.div className="h-96 w-96 bg-red-500 rounded"
                
                variants={variants}
                animate="variant1"
               >

            </motion.div>
        </div>
    )
}

export default TestPage;