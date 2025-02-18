import "./App.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <AboutMe />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
