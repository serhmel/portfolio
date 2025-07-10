import { useCallback, useEffect, useRef, useState } from "react";

import { Home, Header, About, Footer, ScrollToTopButton, Projects } from "./components";

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
    <main className="ms-back scroll-smooth font-sans text-gray-800">
      <Header scrolled={ scrolled } />
      <Home onScrollDown={ onScrollToAbout }/>
      <About ref={ aboutRef }/>
      <Projects/>
      <Footer/>
      <ScrollToTopButton scrolled={ scrolled }/>
    </main>
  );
}

export default App;
