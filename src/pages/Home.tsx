import Navbar from "../components/Navbar";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </>
  );
}  
export default Home;