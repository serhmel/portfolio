import ShopifyTheme from "./shopify-theme.jsx";
import UIComponents from "./ui-components.jsx";
import SchemaAI from "./schema-ai.jsx";
import DataVisualizations from "./data-visualizations.jsx";

export default function Projects() {
  return (
    <section id="projects" className="text-white">
      <UIComponents/>
      <SchemaAI/>
      <DataVisualizations/>
      <ShopifyTheme/>
    </section>
  );
}
