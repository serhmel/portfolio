import { useMemo, useState} from "react";
import { MdExpandMore } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { UIComponentCard } from "./ui-component-card.jsx";
import { customComponents } from "../../../data.js";

export default function UIComponents() {
  const [showAll, setShowAll] = useState(false);

  const visibleComponents = useMemo(() => (
    showAll ? customComponents : customComponents.slice(0, 8)
  ), [showAll]);

  return (
    <section id="ui-components" className="section bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-medium mb-4">UI Components</h2>

        <div className="text-sm text-yellow-400 font-mono mb-4">
          React · JavaScript · Less · Webpack · Stripe API
        </div>

        <p className="paragraph text-center mx-auto max-w-3xl">
          This section highlights custom components I developed for the Backendless UI Builder - including advanced
          form elements, media tools, QR/barcode scanners, payment integrations, and other UI enhancements. Some were
          built from scratch, while others were implemented using reliable libraries. Each component is crafted for
          flexibility, reusability, and seamless integration into the platform.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
          <AnimatePresence>
            { visibleComponents.map(comp => (
              <motion.div
                key={ comp.name }
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}>

                <UIComponentCard { ...comp } />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        { !showAll && (
          <div className="flex justify-center mt-8">
            <button
              onClick={ () => setShowAll(true) }
              className="flex items-center justify-center gap-1 text-yellow-400 hover:text-yellow-300">

              Load more <MdExpandMore className="text-xl"/>
            </button>
          </div>
        ) }
      </div>
    </section>
  );
};
