import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true, //? scroll jitna animation utna
          pin: true,
        },
      });

      tl.to(textRef.current, { y: -150, opacity: 0.5 }, 0);
      tl.to(imageRef.current, { scale: 1.5 }, 0);
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden h-screen w-full flex items-center justify-center"
    >
      <div ref={imageRef} className="absolute w-full h-full inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1204941/pexels-photo-1204941.jpeg?_gl=1*1nb9ojj*_ga*MjgwNTI2MzU1LjE3NjkwNzYxMjA.*_ga_8JE65Q40S6*czE3NjkwNzYxMjAkbzEkZzEkdDE3NjkwNzY2MzIkajU5JGwwJGgw"
          alt="Hero Background"
          className="w-full h-full object-cover grayscale opacity-50"
        />
      </div>

      <div
        ref={textRef}
        className="relative flex flex-col items-center justify-center z-10 text-center"
      >
        <h1 className="font-a text-[15vw] leading-none font-bold uppercase tracking-tighter">
          SATYAM
        </h1>
        <hr />
        <div className="flex items-center gap-4 mt-4">
          <span className="h-0.5 w-20 bg-main"></span>
          <p className="text-xl tracking-[0.3em] uppercase font-a">
            Full Stack Developer
          </p>
          <span className="h-0.5 w-20 bg-main"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
