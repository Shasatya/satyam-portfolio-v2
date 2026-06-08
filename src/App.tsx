import {
  Archive,
  Experience,
  Hero,
  Overview,
  Projects,
  TechStack,
} from "./sections";

function App() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Overview />
      <Projects />
      <TechStack />
      <Experience />
      <Archive />
    </main>
  );
}

export default App;
