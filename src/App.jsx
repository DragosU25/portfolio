import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="mx-auto ">
      <Header />
      <main>
        <Section id={"about"} styles={" bg-[#0B0213]"} content={<About />} />
        <Section
          id={"projects"}
          styles={"bg-[#0F0A1A]"}
          content={<Projects />}
        />
      </main>
      <Contact />
    </div>
  );
}

export default App;
