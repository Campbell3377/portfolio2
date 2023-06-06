import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";

export default function About() {
    let head = useRef(null);
    let sub = useRef(null);
    let btn1 = useRef(null);
    let btn2 = useRef(null);
    let img = useRef(null);

    useEffect(() => {
      gsap.timeline({ease: Power3.easeIn})
      .from(head, {duration: 1, opacity: 0, y: 600})
      .from(sub, {duration: 1, opacity: 0, y: 500}, "-=.5")
      .from(btn1, {duration: 1, opacity: 0, y: 400}, "-=.75")
      .from(btn2, {duration: 1, opacity: 0, y: 300}, "-=.75")
      .from(img, {duration: 1, opacity: 0, y: 500}, "-=.9")

  }, [])

    return (
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 ref={el => {head = el}} className="title-font sm:text-4xl text-4xl mb-4 font-medium tracking-tight text-white customh2">
            Hi, I'm Sean. 
          </h1>
          <p ref={el => sub = el} className="mb-8 leading-relaxed">
            I am a recent ASU graduate with a degree in Computer Science. I am currently looking for a job as a software engineer.
            I have experience with React, Node.js, Express, MySQL, and more. I am also familiar with Java, C++, and C#. 
            I am a quick learner and I'm always eager to learn new technologies.
          </p>
          <div className="flex justify-center">
            <a ref={el => {btn1 = el}}
              href="#contact"
              className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-lg"> 
              Work With Me
            </a>
            <a ref={el => {btn2 = el}}
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img ref={el => {img = el}}
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding3.svg"
          />
        </div>
      </div>

    </section>
    );
}