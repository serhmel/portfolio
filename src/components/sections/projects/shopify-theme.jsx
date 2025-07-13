import { useState } from "react";

import PreviewModal from "../../ui/preview-modal.jsx";
import { ShopifyPageCard } from "./shopify-page-card.jsx";
import { shopifyPages } from "../../../data.js";

export default function ShopifyTheme() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="shopify-theme" className="section bg-[#0d0d0d] text-neutral-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-medium mb-4">Shopify Theme Development</h2>

        <div className="text-sm text-yellow-400 font-mono mb-4">
          Liquid · JavaScript · HTML · CSS · Shopify
        </div>

        <p className="paragraph text-center mx-auto max-w-3xl">
          Transformed static <strong>PSD</strong> designs into a responsive <strong>Shopify</strong> storefront for
          an <strong>Upwork</strong> client. Used the <strong>Dawn Theme</strong> as a foundation and implemented both
          homepage and product page layouts with attention to structure, design consistency, and usability.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          { shopifyPages.map(project => (
            <ShopifyPageCard
              key={ project.title }
              title={ project.title }
              thumbnail={ project.thumbnail }
              onClick={ () => setActiveImage(project) }
            />
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
