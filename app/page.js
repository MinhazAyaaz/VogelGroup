"use client"; // This is a client component 👈🏽
import { useEffect, useState, useRef } from "react";
import "./styles.css";
import { motion,useScroll } from "framer-motion";
import Section from "./section";

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
    backgroundPosition: "center",
  };

  const computeScale = (index) => {
    const divHeight = window.innerHeight + 30; // Assuming each div takes up the full viewport height
    const relativeScroll = scrollPosition - divHeight * index;

    if (relativeScroll <= 0) return 1; // Not yet scrolled to this div
    if (relativeScroll >= divHeight) return 0; // Fully scrolled past this div

    // Compute scale between 1 and 0 based on how much of this div has been scrolled
    return 1 - (relativeScroll / divHeight) * 2;
  };

  const pages = [1,2,3,4,5]

  return (
    <div style={divStyle} className="backgroundImage">
      {pages.map((pageNumber, key) => (
        <Section key={key} pageNumber={pageNumber}/>
      ))}
    </div>
  );
}
