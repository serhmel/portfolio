import { FaTelegramPlane, FaLinkedin, FaGithub, FaAngleDoubleDown } from "react-icons/fa";

import { SocialIcon } from "./social-icon";

export function Home({ onScrollDown }) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Welcome</p>

        <h1 className="text-5xl font-extrabold text-white leading-tight">I'm Serhiy Melnychuk</h1>

        <p className="text-2xl sm:text-3xl text-yellow-400 font-medium mt-2 tracking-wide">Frontend Developer</p>

        <div className="flex justify-center space-x-6 mt-6 text-[28px] text-white">
          <SocialIcon href="https://t.me/serhmel" label="Telegram">
            <FaTelegramPlane/>
          </SocialIcon>

          <SocialIcon href="https://www.linkedin.com/in/serhiy-melnychuk-0a2622216/" label="LinkedIn">
            <FaLinkedin/>
          </SocialIcon>

          <SocialIcon href="https://github.com/serhmel" label="GitHub">
            <FaGithub/>
          </SocialIcon>
        </div>
      </div>

      <button
        type="button"
        onClick={ onScrollDown }
        aria-label="Scroll down"
        className="absolute bottom-4 animate-bounce">

        <FaAngleDoubleDown className="text-3xl text-gray-600 hover:text-yellow-400"/>
      </button>
    </section>
  )
}
