import About from "./components/About";
import "./App.css";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Arrow from "./components/Arrow";

function App() {
  return (
    <div className="App">
      <Header />

      <About />
      <Arrow />
      <Experience />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
