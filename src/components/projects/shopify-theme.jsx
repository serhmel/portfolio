import { useState } from "react";
import { FaExpand } from "react-icons/fa";

import { PreviewModal } from "./preview-modal";
import { shopifyPages } from "../../data.js";

export default function ShopifyTheme() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="shopify-theme" className="bg-[#0d0d0d] text-neutral-100 py-20 px-10 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-medium mb-4">Shopify Theme Development</h2>

        <div className="text-sm text-yellow-400 font-mono mb-4">
          Liquid · JavaScript · HTML · CSS · Shopify
        </div>

        <p className="text-neutral-400 text-base text-center mx-auto leading-relaxed mb-6 max-w-3xl">
          Transformed static <strong>PSD</strong> designs into a responsive <strong>Shopify</strong> storefront for
          an <strong>Upwork</strong> client. Used the <strong>Dawn Theme</strong> as a foundation and implemented both
          homepage and product page layouts with attention to structure, design consistency, and usability.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          { shopifyPages.map((project) => (
            <div key={ project.title }>
              <div className="relative group cursor-pointer" onClick={ () => setActiveImage(project) }>
                <img
                  src={ project.thumbnail }
                  alt={ project.title }
                  className="rounded-lg shadow-lg transition-transform group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <FaExpand className="text-white text-2xl" />
                </div>
              </div>
              <p className="mt-2 text-white font-medium">{ project.title }</p>
            </div>
          )) }
        </div>
      </div>

      { !!activeImage && (
        <PreviewModal
          show
          source={ activeImage.preview }
          onClose={ () => setActiveImage(null) }
          title={ activeImage.title }
        />
      )}
    </section>
  );
};
