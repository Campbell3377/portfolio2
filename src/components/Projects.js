import { CodeIcon } from "@heroicons/react/solid";
import React, { useRef, useEffect } from "react";
import { projects } from "../data";
import gsap, { Power3 } from "gsap";

export default function Projects() {
  let icon = useRef(null);
  let header = useRef(null);
  let sub = useRef(null);
  let proj = useRef(null);

  useEffect(() => {
    console.log("useEffect")
    gsap.timeline({ease: Power3.easeOut})
      .from(icon, {duration: 1, opacity: 0, y: 600}, "+=1")
      .from(header, {duration: 1, opacity: 0, y: 500}, "-=.5")
      .from(sub, {duration: 1, opacity: 0, y: 400}, "-=.75")
      .from(proj, {duration: 1, opacity: 0, y: 300}, "-=.75")

  }, [])

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div ref={el => {icon = el}} className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 ref={el =>{header = el}} className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p ref={el =>{sub = el}} className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the projects I have worked on. The technologies/languages I used for these projects include: html, css, JavaScript, d3.js, node.js, express.js, React, MySQL, and .NET with C#. 
          </p>
        </div>
        <div ref={el =>{proj = el}} className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-cyan-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <hr className="my-12 h-px border-t-1 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}