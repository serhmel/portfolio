export default function DataVisualizations() {
  return (
    <section id="visualizations" className="py-20 px-10 bg-black text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium mb-6 tracking-tight text-center">
          Data Visualizations
        </h2>

        <div className="text-sm text-yellow-400 font-mono mb-6 text-center">
          React · JavaScript · Less · Material UI · Chart.js · React DnD · Luxon · Backendless API
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <img
              src="src/assets/visualizations-preview.png"
              alt="Backendless Visualizations"
              className="w-full max-w-2xl rounded-lg border border-neutral-700 shadow-md object-contain"
            />
          </div>

          <div className="flex-1">
            <p className="text-neutral-400 text-base leading-relaxed mb-6 max-w-2xl">
              I contributed to building a set of powerful data visualizations. These tools enable users to present,
              explore, and manipulate structured data through a no-code interface tightly integrated with the
              platform's visual logic and data systems.
            </p>

            <p className="text-neutral-400 text-base leading-relaxed max-w-2xl">
              The visualizations include <strong>data grids</strong>, interactive <strong>charts</strong>
              , <strong>calendars</strong>, <strong>heat maps</strong>, and <strong>kanban</strong> boards - each
              designed to be reusable, configurable, and optimized for real-world applications, from dashboards to
              internal tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};
