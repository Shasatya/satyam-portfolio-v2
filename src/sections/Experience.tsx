import { jobs } from "../constants";

const Experience = () => {
  return (
    <section className="relative overflow-hidden h-screen w-full flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-a text-5xl md:text-7xl mb-16 uppercase">
          Track Record
        </h2>

        <div className="flex flex-col">
          {jobs?.map((job, index) => (
            <div
              key={index}
              className="exp-row border-l-2 border-main pl-8 pb-16 relative"
            >
              <div className="absolute top-0 -left-2.25 w-4 h-4 bg-main rounded-full" />

              <span className="font-mono text-zinc-500 text-sm mb-2 block">
                {job.year}
              </span>
              <h3 className="font-a text-4xl uppercase">{job.company}</h3>
              <h4 className="font-b text-xl text-zinc-300 font-light mb-4">
                {job.role}
              </h4>
              <p className="font-b text-zinc-400 max-w-md leading-relaxed">
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
