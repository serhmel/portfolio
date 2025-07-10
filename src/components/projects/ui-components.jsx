import { useMemo, useState } from "react";

import { UIComponentCard } from "./ui-component-card.jsx";
import { customComponents } from "../../data.js";

export default function UIComponents() {
  const [showAll, setShowAll] = useState(false);

  const visibleComponents = useMemo(() => (
    showAll ? customComponents : customComponents.slice(0, 8)
  ), [showAll]);

  return (
    <section id="ui-components" className="py-20 px-10 bg-black text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-medium mb-4">UI Components</h2>

        <div className="text-sm text-yellow-400 font-mono mb-4">
          React · JavaScript · Less · Webpack · Stripe API
        </div>

        <p className="text-neutral-400 text-base text-center mx-auto leading-relaxed mb-6 max-w-3xl">
          This section highlights custom components I developed for the Backendless UI Builder - including advanced
          form elements, media tools, QR/barcode scanners, payment integrations, and other UI enhancements. Some were
          built from scratch, while others were implemented using reliable libraries. Each component is crafted for
          flexibility, reusability, and seamless integration into the platform.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
          { visibleComponents.map((comp, index) => (
            <UIComponentCard key={ index } { ...comp }/>
          )) }
        </div>

        <div className="text-center mt-8">
          <button
            type="button"
            onClick={ () => setShowAll((prev) => !prev) }
            className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">

            { showAll ? "Show less" : "Show all components" }
          </button>
        </div>
      </div>
    </section>
  );
};
