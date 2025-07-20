export default function Experience() {
  return (
    <section id="experience" className="section-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium text-center mb-12 tracking-tight">
          Experience
        </h2>

        <div className="space-y-10">
          <div className="bg-[#111111] rounded-xl shadow-md p-6 lg:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">React Developer</h3>
                <p className="text-sm text-yellow-400 font-medium">Backendless Corp</p>
              </div>
              <p className="text-sm text-neutral-400 font-mono mt-2 md:mt-0">May 2022 – Apr 2025</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-neutral-400">
              <li>
                Developed and integrated <strong>20+ reusable components</strong> into the
                platform’s <strong>UI Builder</strong>.
              </li>
              <li>
                Created an <strong>AI-powered Schema Generator</strong> to produce database schemas
                using <strong>OpenAI</strong>.
              </li>
              <li>Contributed to development and improvement of diverse <strong>data visualizations</strong>,
                including <strong>charts</strong>, <strong>heatmaps</strong>, <strong>data grids</strong>, <strong>kanbans</strong>,
                and <strong>calendars</strong>.
              </li>
              <li>
                Utilized <code>Node.js</code> on the server side to implement business logic, manage file storage,
                and handle API interactions.
              </li>
              <li>Conducted code reviews to maintain code quality across the team.</li>
              <li>Enhanced the console’s user interface and overall performance.</li>
            </ul>
          </div>

          <div className="bg-[#111111] rounded-xl shadow-md p-6 lg:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Front-end Developer</h3>
                <p className="text-sm text-yellow-400 font-medium">Freelance</p>
              </div>
              <p className="text-sm text-neutral-400 font-mono mt-2 md:mt-0">Jul 2021 – May 2022</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-justify text-neutral-400">
              <li>
                Worked on <strong>BigCommerce</strong> and <strong>Shopify</strong> platforms, focusing on
                fixing bugs, creating new pages, and implementing custom features.
              </li>
              <li>Developed and tweaked themes to improve user experience and functionality.</li>
              <li>Collaborated with clients to meet their specific needs and improve their online stores.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
