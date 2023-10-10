"use client"; // This is a client component 👈🏽
import { useEffect, useState } from 'react';
import './styles.css'

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgScale, setBgScale] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollPosition(scrollPosition);
    // Calculate scale factor - this can be adjusted
    const scaleFactor = 1 + scrollPosition / 1000;
    setBgScale(scaleFactor);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const divStyle = {
    backgroundSize: `${bgScale * 100}%`,
    backgroundPosition: 'center'
  };

  const computeScale = (index) => {
    const divHeight = window.innerHeight+30; // Assuming each div takes up the full viewport height
    const relativeScroll = scrollPosition - (divHeight * index);

    if (relativeScroll <= 0) return 1; // Not yet scrolled to this div
    if (relativeScroll >= divHeight) return 0; // Fully scrolled past this div

    // Compute scale between 1 and 0 based on how much of this div has been scrolled
    return 1 - ((relativeScroll / divHeight) * 2);
  };

  return (
    <div style={divStyle} className='backgroundImage'>
      <div className='relative h-screen w-screen flex justify-center items-center' style={{ scale: computeScale(0) }}>
        <div className='bg-white w-[80%] h-[80%] rounded-3xl flex justify-center items-center opacity-70'>
          <h1 className='text-black text-3xl font-bold font-mono'>Page 1</h1>
        </div>
      </div>
      <div className='relative h-screen w-screen flex justify-center items-center' style={{ scale: computeScale(1) }}><div className='bg-white w-[80%] h-[80%] rounded-3xl flex justify-center items-center opacity-70'>
          <h1 className='text-black text-3xl font-bold font-mono'>Page 2</h1>
        </div></div>
      <div className='relative h-screen w-screen flex justify-center items-center' style={{ scale: computeScale(2) }}><div className='bg-white w-[80%] h-[80%] rounded-3xl flex justify-center items-center opacity-70'>
          <h1 className='text-black text-3xl font-bold font-mono'>Page 3</h1>
        </div></div>
      <div className='relative h-screen w-screen flex justify-center items-center' style={{ scale: computeScale(3) }}><div className='bg-white w-[80%] h-[80%] rounded-3xl flex justify-center items-center opacity-70'>
          <h1 className='text-black text-3xl font-bold font-mono'>Page 4</h1>
        </div></div>
      <div className='relative h-screen w-screen flex justify-center items-center' style={{ scale: computeScale(4) }}><div className='bg-white w-[80%] h-[80%] rounded-3xl flex justify-center items-center opacity-70'>
          <h1 className='text-black text-3xl font-bold font-mono'>Page 5</h1>
        </div></div>
    </div>
  );
};

