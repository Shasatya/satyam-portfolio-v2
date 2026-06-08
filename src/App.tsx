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
