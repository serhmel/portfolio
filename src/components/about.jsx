export default function About() {
  return (
    <section id="about" className="bg-[#0d0d0d] text-neutral-100 py-20 px-10 border-t border-neutral-800">
      <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
        <div className="items-top">
          <img
            src="/images/about-me.png"
            alt="Backendless Visualizations"
            className="w-full max-w-2xl max-h-[380px] rounded-lg border border-neutral-700 shadow-md object-contain"
          />
        </div>

        <div className="flex-1 text-base text-center md:text-left">
          <h2 className="text-3xl font-medium mb-6">
            About Me
          </h2>

          <p className="text-neutral-400 leading-relaxed mb-4">
            Hello! My name is <strong>Serhiy Melnychuk</strong>, and I’m a <strong>Frontend Developer</strong> with
            around four years of professional experience in web development, including more than three years working
            extensively with <strong>React</strong>. I’m a responsible, detail-oriented, and self-driven engineer
            who enjoys turning complex ideas into clean, efficient, and user-friendly interfaces.
          </p>

          <p className="text-neutral-400 leading-relaxed mb-4">
            My journey into web development began with freelance work on eCommerce platforms
            like <strong>BigCommerce</strong> and <strong>Shopify</strong>, where I built pages, implemented custom
            features, and enhanced themes. Since 2022, I’ve been focused on <strong>React</strong> development,
            working on a wide range of projects within a product company environment.
          </p>

          <p className="text-neutral-400 leading-relaxed mb-4">
            I work primarily with <strong>React</strong>, <strong>JavaScript</strong>, and modern frontend tools. My
            toolbox includes <strong>Redux</strong>, <strong>Webpack</strong>, <strong>LESS</strong>
            , <strong>Tailwind CSS</strong>, <strong>Material UI</strong>, <strong>REST APIs</strong>
            , <strong>jQuery</strong>, <strong>Node.js</strong>, <strong>Git</strong>, and more. I’m always open to
            learning and believe that the best developers never stop growing.
          </p>
        </div>
      </div>
    </section>
  )
};
