import { FaAngleDoubleUp } from "react-icons/fa";

export function ScrollToTopButton({ scrolled }) {
  return (
    <button
      onClick={ () => window.scrollTo({ top: 0, behavior: "smooth" }) }
      aria-label="Scroll to top"
      className={`
        fixed bottom-4 right-4 z-50 p-3 rounded-full bg-gray-800 text-white
        hover:text-yellow-400 transition duration-300 ease-in-out
        ${ scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none" }
      `}>

      <FaAngleDoubleUp className="text-3xl"/>
    </button>
  );
}
