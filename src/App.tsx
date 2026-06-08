import { Experience, Hero, Overview, Projects } from "./sections";

function App() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Overview />
      <Experience />
      <Projects />
    </main>
  );
}

export default App;
