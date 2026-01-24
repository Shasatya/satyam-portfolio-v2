import Lenis from "lenis";
import { useEffect } from "react";
import type { ReactNode } from "react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      //? High-precision performance time, page start se ab tak ka time (ms), Date.now() nahi
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf); //? Browser screen ko baar-baar redraw karta hai, usually 60 times per second, Jab browser next screen draw (paint) karega tab ye function chal jayega.

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div className="w-full min-h-screen">{children}</div>;
};

export default SmoothScroll;
