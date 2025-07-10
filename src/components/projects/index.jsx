import ShopifyTheme from "./shopify-theme";
import UIComponents from "./ui-components";
import SchemaAI from "./schema-ai";
import DataVisualizations from "./data-visualizations";

export function Projects() {
  return (
    <section id="projects" className="text-white">
      <UIComponents/>
      <SchemaAI/>
      <DataVisualizations/>
      <ShopifyTheme/>
    </section>
  );
}
