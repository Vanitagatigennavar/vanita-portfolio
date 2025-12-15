import { useState } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FadeSection from "./components/FadeSection";
import Home from "./components/Home"
function App() {
  // Default section is ABOUT
  const [activeSection, setActiveSection] = useState("home");

  return (
    <Layout>
      <Navbar setActiveSection={setActiveSection} />

      <main className="pt-24">
        {activeSection === "home" && (
          <FadeSection>
            <Home />
          </FadeSection>
        )}
{activeSection === "about" && (
          <FadeSection>
            <About />
          </FadeSection>
        )}

        {activeSection === "experience" && (
          <FadeSection>
            <Experience />
          </FadeSection>
        )}

        {activeSection === "skills" && (
          <FadeSection>
            <Skills />
          </FadeSection>
        )}

        {activeSection === "projects" && (
          <FadeSection>
            <Projects />
          </FadeSection>
        )}

        {activeSection === "contact" && (
          <FadeSection>
            <Contact />
          </FadeSection>
        )}
      </main>
    </Layout>
  );
}

export default App;
