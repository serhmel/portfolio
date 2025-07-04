import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-10 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#111111] shadow-md text-gray-300" : "text-gray-200"
      }`}>
      <div className="max-w-6xl mx-auto py-3 flex justify-between items-center">
        <h1 className="text-xl uppercase">Serhiy Melnychuk</h1>
      </div>
    </header>
  );
};
