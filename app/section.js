"use client"; // This is a client component 👈🏽
import { motion,useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Section({pageNumber}) {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0.5 1", "0.9 1"]
    })

    const scaling = useTransform(scrollYProgress, [0, 0.8], [0, 1])

    return (
        <motion.div
        ref={ref}
        className="relative h-screen w-screen flex justify-center items-center"
        style={{ scale: scaling }}
      >
        <div className="bg-white w-[80%] h-[80%] rounded-3xl flex justify-center items-center opacity-70">
          <h1 className="text-black text-3xl font-bold font-mono">Page: {pageNumber}</h1>
        </div>
      </motion.div>
    )
}