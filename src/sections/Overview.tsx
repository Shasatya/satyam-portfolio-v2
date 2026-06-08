import { capabilities } from "../constants";

const Overview = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4">
      <div>
        <h2 className="font-display text-5xl md:text-7xl mb-8 uppercase text-left pt-8 md:pt-0">
          Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities?.map((c) => (
            <div
              key={c?.id}
              className="group relative border border-zinc-800 p-12 overflow-hidden transition-colors duration-300 hover:border-main"
            >
              <div className="absolute inset-0 bg-main translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 z-0" />
              <div className="relative z-10">
                <span className="font-display text-4xl mb-6 block text-zinc-500 group-hover:text-black transition-colors duration-300">
                  {c?.id}
                </span>
                <h3 className="font-display text-4xl uppercase mb-2 group-hover:text-black transition-colors duration-300">
                  {c?.title}
                </h3>
                <p className="font-display text-zinc-400 group-hover:text-black/80 transition-colors duration-300">
                  {c?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
