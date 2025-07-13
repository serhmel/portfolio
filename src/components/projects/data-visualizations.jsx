import visualizationsPreview from "../../assets/visualizations-preview.png";

export default function DataVisualizations() {
  return (
    <section id="visualizations" className="section bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium mb-6 tracking-tight text-center">
          Data Visualizations
        </h2>

        <div className="text-sm text-yellow-400 font-mono mb-6 text-center">
          React · JavaScript · Less · Material UI · Chart.js · React DnD · Luxon · Backendless API
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <img src={ visualizationsPreview } alt="Data Visualizations" className="preview-image"/>
          </div>

          <div className="flex-1">
            <p className="paragraph">
              I contributed to building a set of powerful data visualizations. These tools enable users to present,
              explore, and manipulate structured data through a no-code interface tightly integrated with the
              platform's visual logic and data systems.
            </p>

            <p className="paragraph">
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
