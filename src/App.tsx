import {
  Archive,
  Experience,
  Hero,
  Overview,
  Projects,
  TechStack,
  Footer,
} from "./sections";

function App() {
  return (
    <main className="bg-black text-white">
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
        <div className="font-display text-2xl font-bold tracking-widest">
          ME
        </div>
        <div className="font-sans text-xs tracking-[0.2em] uppercase cursor-pointer hover:text-main transition-colors">
          Menu
        </div>
      </nav>

      <Hero />
      <Overview />
      <Projects />
      <TechStack />
      <Experience />
      <Archive />
      <Footer />
    </main>
  );
}

export default App;
