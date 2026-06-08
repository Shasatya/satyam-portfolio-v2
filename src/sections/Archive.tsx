import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { archiveProjects } from "../constants";

const Archive = () => {
  const container = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorImgRef = useRef<HTMLImageElement>(null);

  const xMove = useRef<any>(null);
  const yMove = useRef<any>(null);

  useGSAP(
    () => {
      xMove.current = gsap.quickTo(cursorRef.current, "left", {
        duration: 0.5,
        ease: "power3",
      });
      yMove.current = gsap.quickTo(cursorRef.current, "top", {
        duration: 0.5,
        ease: "power3",
      });
    },
    { scope: container },
  );

  const moveCursor = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    xMove.current(clientX);
    yMove.current(clientY);
  };

  const handleMouseEnter = (imgSrc: string) => {
    if (cursorImgRef.current) cursorImgRef.current.src = imgSrc;

    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <section
      ref={container}
      onMouseMove={moveCursor}
      className="relative bg-zinc-950 text-white py-32 px-6 cursor-default"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-zinc-600 text-sm tracking-[0.2em] mb-12 uppercase border-b border-zinc-800 pb-4">
          Project Archive
        </h2>

        <div className="flex flex-col">
          {archiveProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(project.img)}
              onMouseLeave={handleMouseLeave}
              className="group flex justify-between items-center py-8 border-b border-zinc-900 transition-all hover:px-4 hover:bg-zinc-900"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-4">
                <h3 className="font-display text-4xl md:text-5xl uppercase group-hover:text-main transition-colors">
                  {project.name}
                </h3>
                <span className="font-mono text-zinc-500 text-xs uppercase bg-zinc-900 border border-zinc-800 px-2 py-1 rounded group-hover:bg-black group-hover:text-white transition-colors">
                  {project.type}
                </span>
              </div>
              <span className="font-sans text-zinc-500 group-hover:text-white transition-colors">
                {project.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[300px] h-[200px] pointer-events-none z-50 rounded-lg overflow-hidden opacity-0 scale-0 -translate-x-1/2 -translate-y-1/2 border-2 border-main bg-black"
      >
        <img
          ref={cursorImgRef}
          src=""
          alt="Project Preview"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Archive;
