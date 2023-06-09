import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";


export default function Navbar() {
  let header = useRef(null);
  let h1 = useRef(null);
  let h2 = useRef(null);
  let h3 = useRef(null);
  let h4 = useRef(null);
  let arrow = useRef(null);

  useEffect(() => {
    console.log("useEffect")
    gsap.timeline({ease: Power3.easeOut})
      .from(header, {duration: 1, opacity: 0}, "+=3")
      .from(h1, {duration: 1, opacity: 0, x: 500}, "-=.5")
      .from(h2, {duration: 1, opacity: 0, x: 400}, "-=.75")
      .from(h3, {duration: 1, opacity: 0, x: 300}, "-=.75")
      .from(h4, {duration: 1, opacity: 0, x: 300}, "-=.75")
      .from(arrow, {duration: 1, opacity: 0}, "-=.75")
  }, [])


  return (
    <header ref={el => {header = el}} className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a ref={el => {h1 = el}} className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Sean Campbell
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a ref={el => {h2 = el}} href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a ref={el => {h3 = el}} href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a ref={el => {h4 = el}} href="#contact" className="mr-5 hover:text-white">
            Get in Touch
          </a>
        </nav>
        <a ref={el => {arrow = el}}
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}