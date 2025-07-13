import { useState } from "react";
import { FaExpand } from "react-icons/fa";

import PreviewModal from "../../ui/preview-modal.jsx";
import schemaAIPreview from "../../../assets/schema-ai-preview.png";

export default function SchemaAI() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="schema-ai" className="section bg-[#111111] text-neutral-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium mb-6 tracking-tight text-center">
          AI-Powered Database Schema Generator
        </h2>

        <div className="text-sm text-yellow-400 font-mono mb-6 text-center">
          React · Redux · JavaScript · Node.js · Less · Backendless API · OpenAI API
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="paragraph">
              Developed an intelligent <strong>Schema AI</strong> feature that converts plain-text business ideas into
              fully structured database schemas using <strong>OpenAI</strong>. Users simply describe their project in
              natural language, and the system automatically generates tables, fields, and relationships.
            </p>

            <p className="paragraph">
              The feature offers a live, editable schema preview, version tracking for effortless iteration, and one-click
              saving with optional test data. Seamless integration into the <strong>Backendless Console</strong> ensures
              users can go from idea to implementation without switching tools.
            </p>
          </div>

          <div className="flex-1 relative group cursor-pointer" onClick={ () => setShowModal(true) }>
            <img src={ schemaAIPreview } alt="Schema AI" className="image-zoomable"/>

            <div className="image-overlay">
              <FaExpand className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <PreviewModal
        show={ showModal }
        source={ schemaAIPreview }
        onClose={ () => setShowModal(false) }
        title="Schema AI"
      />
    </section>
  )
};
