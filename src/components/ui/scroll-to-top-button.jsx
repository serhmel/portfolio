import { FaAngleDoubleUp } from "react-icons/fa";

export default function ScrollToTopButton({ scrolled }) {
  return (
    <button
      onClick={ () => window.scrollTo({ top: 0, behavior: "smooth" }) }
      aria-label="Scroll to top"
      className={`
        scroll-button 
        ${ scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none" }
      `}>
      <FaAngleDoubleUp className="text-3xl"/>
    </button>
  );
}
