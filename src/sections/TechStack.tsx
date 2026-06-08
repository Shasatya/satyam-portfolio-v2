import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TechStack = () => {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    const animate = () => {
      if (xPercent <= -100) xPercent = 0;
      if (xPercent > 0) xPercent = -100;

      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });

      xPercent += 0.1 * direction;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative flex overflow-hidden py-16 bg-main text-black">
      <div ref={slider} className="relative whitespace-nowrap">
        <p
          ref={firstText}
          className="font-display text-[10vw] font-bold uppercase leading-none pr-12 inline-block"
        >
          Typescript • React • Next.js • Node.js • Postgres • Docker • AWS •
        </p>
        <p
          ref={secondText}
          className="absolute left-full top-0 font-display text-[10vw] font-bold uppercase leading-none pr-12 inline-block"
        >
          Typescript • React • Next.js • Node.js • Postgres • Docker • AWS •
        </p>
      </div>
    </div>
  );
};

export default TechStack;
