// Photos from https://citizenofnowhe.re/lines-of-the-city
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

const cardVariants = {
  offscreen: {
    scale: 0,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
    opacity: 1,
  },
};

export default function ThirdSection() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
        <motion.div
          className="h-screen flex justify-center items-center relative"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8  }}
        >
          <motion.div
            className="w-[80%] h-[60%] flex items-center justify-center "
            variants={cardVariants}
          >
            <div className="w-full h-full flex">
              <div className="w-[50%] h-full flex justify-center items-center">
                <Image
                  src="https://images.unsplash.com/photo-1489395131208-596c1ecb2a39"
                  alt="image"
                  className="w-[80%] rounded-3xl"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-[50%] h-full flex flex-col justify-center items-center">
                <h3 className="mt-6 text-5xl font-mono mb-10">THE ADVENTURE</h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aliquam sem et tortor consequat id porta nibh venenatis. Orci
                  phasellus egestas tellus rutrum. Nisl condimentum id venenatis
                  a. Diam sollicitudin tempor id eu nisl nunc. Pretium fusce id
                  velit ut tortor pretium. Euismod nisi porta lorem mollis
                  aliquam. Aliquet risus feugiat in ante. Tempor orci dapibus
                  ultrices in iaculis. Ridiculus mus mauris vitae ultricies leo
                  integer. Sagittis eu volutpat odio facilisis mauris sit amet
                  massa vitae. Aliquet lectus proin nibh nisl condimentum id
                  venenatis a.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="fixed left-0 right-0 h-[5px] bg-white bottom-24"
          style={{ scaleX }}
        />
    </>
  );
}
