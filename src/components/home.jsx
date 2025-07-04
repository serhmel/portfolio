import { FaTelegramPlane, FaLinkedin, FaGithub, FaAngleDoubleDown } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center text-white">

      <div className="mb-8">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Welcome</p>

        <h1 className="text-5xl font-extrabold text-white leading-tight">I'm Serhiy Melnychuk</h1>

        <p className="text-2xl sm:text-3xl text-yellow-400 font-medium mt-2 tracking-wide">Frontend Developer</p>

        <div className="flex justify-center space-x-6 mt-6 text-[28px] text-white">
          <a
            href="https://t.me/serhmel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition">

            <FaTelegramPlane/>
          </a>

          <a
            href="https://www.linkedin.com/in/serhiy-melnychuk-0a2622216/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition">

            <FaLinkedin/>
          </a>

          <a
            href="https://github.com/serhmel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition">

            <FaGithub/>
          </a>
        </div>
      </div>


      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to Projects">

        <FaAngleDoubleDown className="w-6 h-6 text-white opacity-70 hover:opacity-100 transition-opacity"/>
      </a>
    </section>
  )
};
