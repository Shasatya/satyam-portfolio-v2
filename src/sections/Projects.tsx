import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !wrapperRef.current) return;

      const totalWidth = containerRef.current.scrollWidth;
      const windowWidth = window.innerWidth;

      gsap.to(containerRef.current, {
        x: () => -(totalWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: wrapperRef },
  );

  return (
    <div ref={wrapperRef} className="bg-zinc-950 text-white overflow-hidden">
      <div ref={containerRef} className="flex h-screen w-fit">
        <div className="w-screen h-full flex flex-col items-center justify-center flex-shrink-0">
          <h2 className="font-display text-8xl md:text-9xl uppercase text-main">
            Selected <br /> Works
          </h2>
        </div>

        {projects.map((project) => (
          <div
            key={project.id}
            className="w-screen h-screen flex flex-col items-center justify-center flex-shrink-0 border-l border-zinc-800 relative"
          >
            <span className="font-display text-[30vw] text-zinc-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
              {project.id}
            </span>

            <div className="z-10 text-center">
              <h3 className="font-display text-6xl uppercase mb-2 tracking-tight">
                {project.title}
              </h3>
              <p className="font-sans text-xl text-main tracking-widest uppercase">
                {project.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
