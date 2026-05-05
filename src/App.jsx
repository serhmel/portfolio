import { useCallback, useEffect, useRef, useState } from "react";

import { Header, Footer } from "./components/layout";
import { Home, About, Projects, Experience } from "./components/sections";
import ScrollToTopButton from "./components/ui/scroll-to-top-button.jsx";
import bg from "/bg-texture.webp";

function App() {
  const [scrolled, setScrolled] = useState(false);

  const aboutRef = useRef(null);

  const onScrollToAbout = useCallback(() => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="scroll-smooth font-sans text-gray-800 bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}>
      <Header scrolled={ scrolled } />
      <Home onScrollDown={ onScrollToAbout }/>
      <About ref={ aboutRef }/>
      <Experience/>
      <Projects/>
      <Footer/>
      <ScrollToTopButton scrolled={ scrolled }/>
    </main>
  );
}

export default App;
