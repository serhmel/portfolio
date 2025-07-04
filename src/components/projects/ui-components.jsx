import { useState } from "react";

export default function UIComponents() {
  const [showAll, setShowAll] = useState(false);

  const visibleComponents = showAll ? customComponents : customComponents.slice(0, 8);

  return (
  <section id="ui-components" className="py-20 px-10 bg-black text-white border-t border-neutral-800">
    <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-medium mb-4">UI Components</h2>

        <div className="text-sm text-yellow-400 font-mono mb-4">
          React · JavaScript · Less · Webpack · Stripe API
        </div>

        <p className="text-neutral-400 text-base text-justify mx-auto leading-relaxed mb-6 max-w-3xl">
          This section highlights custom components I developed for the Backendless UI Builder - including advanced
          form elements, media tools, QR/barcode scanners, payment integrations, and other UI enhancements. Some were
          built from scratch, while others were implemented using reliable libraries. Each component is crafted for
          flexibility, reusability, and seamless integration into the platform.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
          { visibleComponents.map((comp, index) => (
            <div
              key={ index }
              className="flex flex-col h-full bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl
               hover:-translate-y-1 transition duration-300">

              <img src={ comp.thumbnail } alt={ comp.name } className="w-full h-36 object-cover"/>

              <div className="p-4 flex flex-col h-full">
                <h3 className="text-white text-lg font-semibold mb-2">
                  { comp.name }
                </h3>

                <p className="text-neutral-300 text-sm mb-2">
                  { comp.description }
                </p>

                <a
                  href={ comp.url }
                  target="_blank"
                  rel="noreferrer"
                  className="text-yellow-400 text-sm hover:text-yellow-300 underline underline-offset-2 mt-auto">

                  View on GitHub →
                </a>
              </div>
            </div>
          )) }
        </div>

        <div className="text-center mt-8">
          <button
            onClick={ () => setShowAll((prev) => !prev) }
            className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">

            { showAll ? "Show less" : "Show all components" }
          </button>
        </div>
      </div>
    </section>
  );
};

const customComponents = [
  {
    name: "Avatar",
    description: "Displays user initials or profile picture.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-avatar",
    thumbnail: "/thumbnails/avatar.png"
  },
  {
    name: "Accordion",
    description: "Expandable/collapsible content sections.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-accordion",
    thumbnail: "/thumbnails/accordion.png"
  },
  {
    name: "Credit Card",
    description: "Styled credit card form input component.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-credit-card",
    thumbnail: "/thumbnails/credit-card.png"
  },
  {
    name: "Rich Editor",
    description: "WYSIWYG editor for rich text input.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-rich-editor",
    thumbnail: "/thumbnails/rich-editor.png"
  },
  {
    name: "TreeSelect",
    description: "Hierarchical dropdown with tree navigation.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-tree-select",
    thumbnail: "/thumbnails/tree-select.png"
  },
  {
    name: "Dropzone",
    description: "Drag and drop file upload area.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-dropzone",
    thumbnail: "/thumbnails/dropzone.png"
  },
  {
    name: "Tour Guide",
    description: "Step-by-step interactive tour across UI.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-tour-guide",
    thumbnail: "/thumbnails/tour-guide.png"
  },
  {
    name: "Stripe Payment",
    description: "Stripe Elements-based payment integration.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-stripe-payment",
    thumbnail: "/thumbnails/stripe-payment.png"
  },
  {
    name: "Particles",
    description: "Animated particle background component.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-particles",
    thumbnail: "/thumbnails/particles.png"
  },
  {
    name: "Badge",
    description: "Status label component for highlighting content.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-badge",
    thumbnail: "/thumbnails/badge.png"
  },
  {
    name: "Drawer",
    description: "Slide-over panel for side content or menus.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-drawer",
    thumbnail: "/thumbnails/drawer.png"
  },
  {
    name: "Signature Pad",
    description: "Canvas-based drawing field for user signatures.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-signature-pad",
    thumbnail: "/thumbnails/signature-pad.png"
  },
  {
    name: "Color Picker",
    description: "Custom color selection input with preview.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-color-picker",
    thumbnail: "/thumbnails/color-picker.png"
  },
  {
    name: "QR Scanner",
    description: "Scan QR codes using the device camera.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-qr-scanner",
    thumbnail: "/thumbnails/qr-scanner.png"
  },
  {
    name: "Barcode",
    description: "Generates 1D barcodes for product labels.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-barcode",
    thumbnail: "/thumbnails/barcode.png"
  },
  {
    name: "Barcode Scanner",
    description: "Detects and reads barcodes using camera input.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-barcode-scanner",
    thumbnail: "/thumbnails/barcode-scanner.png"
  },
  {
    name: "Audio Player",
    description: "Customizable HTML5 audio player.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-audio-player",
    thumbnail: "/thumbnails/audio-player.png"
  },
  {
    name: "Cropper",
    description: "Crop images using an interactive UI.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-cropper",
    thumbnail: "/thumbnails/cropper.png"
  },
  {
    name: "Static Breadcrumbs",
    description: "Non-clickable breadcrumb navigation trail.",
    url: "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-static-breadcrumbs",
    thumbnail: "/thumbnails/static-breadcrumbs.png"
  }
];
