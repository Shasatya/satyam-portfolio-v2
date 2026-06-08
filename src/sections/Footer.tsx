import { MagneticButton } from "../components";

const Footer = () => {
  return (
    <footer className="h-[70vh] bg-zinc-950 flex flex-col items-center justify-center text-white relative overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 opacity-5 font-display text-[30vw] font-bold leading-none flex items-center justify-center select-none pointer-events-none text-main">
        START
      </div>

      <h2 className="font-display text-6xl md:text-8xl uppercase relative z-10 mb-12">
        Ready?
      </h2>

      <div className="relative z-20">
        <MagneticButton />
      </div>
    </footer>
  );
};

export default Footer;
