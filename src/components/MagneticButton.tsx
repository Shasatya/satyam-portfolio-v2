import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MagneticButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const button = buttonRef.current;
    if (!button) return;

    const xTo = gsap.quickTo(button, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(button, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const xTextTo = gsap.quickTo(textRef.current, "x", {
      duration: 0.5,
      ease: "power3",
    });
    const yTextTo = gsap.quickTo(textRef.current, "y", {
      duration: 0.5,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0.3);
      yTo(y * 0.3);

      // Move text more
      xTextTo(x * 0.1);
      yTextTo(y * 0.1);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      xTextTo(0);
      yTextTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="relative px-12 py-6 bg-black text-white font-display text-2xl uppercase tracking-widest rounded-full overflow-hidden border border-zinc-800 hover:border-main transition-colors group"
    >
      <div className="absolute inset-0 bg-main translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />

      <span
        ref={textRef}
        className="relative z-10 group-hover:text-black transition-colors"
      >
        Get In Touch
      </span>
    </button>
  );
};

export default MagneticButton;
