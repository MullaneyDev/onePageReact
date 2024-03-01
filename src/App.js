import "./App.css";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
