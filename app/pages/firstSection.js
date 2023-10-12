"use client"; // This is a client component 👈🏽
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, forwardRef } from "react";
import Image from "next/image";

function Section({styling}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "0.9 1"],
  });

  const scaling = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-screen w-screen flex justify-center items-center snap-center"
      style={{ scale: scaling, opacity: opacity}}
    >
      <div className="w-[80%] h-[80%] rounded-3xl flex justify-center items-center" style={{scale: styling, opacity: styling}}>
        <div className="w-[50%] h-full flex justify-center items-center flex-col">
          <Image
                  src="https://images.unsplash.com/photo-1489395131208-596c1ecb2a39"
                  alt="image"
                  className="w-[80%] rounded-3xl"
                  width={1000}
                  height={1000}
                />
        </div>
        <div className="w-[50%] h-full flex justify-center items-center flex-col">
          <h3 className="mt-6 text-5xl font-mono mb-10">THE ADVENTURE</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            sem et tortor consequat id porta nibh venenatis. Orci phasellus
            egestas tellus rutrum. Nisl condimentum id venenatis a. Diam
            sollicitudin tempor id eu nisl nunc. Pretium fusce id velit ut
            tortor pretium. Euismod nisi porta lorem mollis aliquam. Aliquet
            risus feugiat in ante. Tempor orci dapibus ultrices in iaculis.
            Ridiculus mus mauris vitae ultricies leo integer. Sagittis eu
            volutpat odio facilisis mauris sit amet massa vitae. Aliquet lectus
            proin nibh nisl condimentum id venenatis a.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Section;
