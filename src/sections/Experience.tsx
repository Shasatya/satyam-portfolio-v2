import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { jobs } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".exp-row", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: "top",
        opacity: 0,
        stagger: 0.5,
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="bg-zinc-950 text-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl mb-16 uppercase">
          Track Record
        </h2>

        <div className="flex flex-col">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="exp-row border-l-2 border-main pl-8 pb-16 relative"
            >
              <div className="absolute top-0 -left-[9px] w-4 h-4 bg-main rounded-full" />

              <span className="font-mono text-zinc-500 text-sm mb-2 block">
                {job.year}
              </span>
              <h3 className="font-display text-4xl uppercase">{job.company}</h3>
              <h4 className="font-sans text-xl text-zinc-300 font-light mb-4">
                {job.role}
              </h4>
              <p className="font-sans text-zinc-400 max-w-md leading-relaxed">
                {job.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
