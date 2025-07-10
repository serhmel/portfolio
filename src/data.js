import avatarThumbnail from './assets/thumbnails/avatar.png';
import accordionThumbnail from './assets/thumbnails/accordion.png';
import creditCardThumbnail from './assets/thumbnails/credit-card.png';
import richEditorThumbnail from './assets/thumbnails/rich-editor.png';
import treeSelectThumbnail from './assets/thumbnails/tree-select.png';
import dropzoneThumbnail from './assets/thumbnails/dropzone.png';
import tourGuideThumbnail from './assets/thumbnails/tour-guide.png';
import stripePaymentThumbnail from './assets/thumbnails/stripe-payment.png';
import particlesThumbnail from './assets/thumbnails/particles.png';
import badgeThumbnail from './assets/thumbnails/badge.png';
import drawerThumbnail from './assets/thumbnails/drawer.png';
import signaturePadThumbnail from './assets/thumbnails/signature-pad.png';
import colorPickerThumbnail from './assets/thumbnails/color-picker.png';
import qrScannerThumbnail from './assets/thumbnails/qr-scanner.png';
import barcodeThumbnail from './assets/thumbnails/barcode.png';
import barcodeScannerThumbnail from './assets/thumbnails/barcode-scanner.png';
import audioPlayerThumbnail from './assets/thumbnails/audio-player.png';
import cropperThumbnail from './assets/thumbnails/cropper.png';
import staticBreadcrumbsThumbnail from './assets/thumbnails/static-breadcrumbs.png';

import homepageThumbnail from './assets/shopify-theme/home-page-thumb.png';
import homepagePreview from './assets/shopify-theme/home-page.png';
import productPageThumbnail from './assets/shopify-theme/product-page-thumb.png';
import productPagePreview from './assets/shopify-theme/product-page.png';

export const customComponents = [
  {
    name       : "Avatar",
    description: "Displays user initials or profile picture.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-avatar",
    thumbnail  : avatarThumbnail,
  },
  {
    name       : "QR Scanner",
    description: "Scan QR codes using the device camera.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-qr-scanner",
    thumbnail  : qrScannerThumbnail,
  },
  {
    name       : "Accordion",
    description: "Expandable/collapsible content sections.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-accordion",
    thumbnail  : accordionThumbnail,
  },
  {
    name       : "Credit Card",
    description: "Styled credit card form input component.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-credit-card",
    thumbnail  : creditCardThumbnail,
  },
  {
    name       : "Rich Editor",
    description: "WYSIWYG editor for rich text input.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-rich-editor",
    thumbnail  : richEditorThumbnail,
  },
  {
    name       : "Dropzone",
    description: "Drag and drop file upload area.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-dropzone",
    thumbnail  : dropzoneThumbnail,
  },
  {
    name       : "Tour Guide",
    description: "Step-by-step interactive tour across UI.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-tour-guide",
    thumbnail  : tourGuideThumbnail,
  },
  {
    name       : "Barcode",
    description: "Generates 1D barcodes for product labels.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-barcode",
    thumbnail  : barcodeThumbnail,
  },
  {
    name       : "TreeSelect",
    description: "Hierarchical dropdown with tree navigation.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-tree-select",
    thumbnail  : treeSelectThumbnail,
  },
  {
    name       : "Stripe Payment",
    description: "Stripe Elements-based payment integration.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-stripe-payment",
    thumbnail  : stripePaymentThumbnail,
  },
  {
    name       : "Particles",
    description: "Animated particle background component.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-particles",
    thumbnail  : particlesThumbnail,
  },
  {
    name       : "Badge",
    description: "Status label component for highlighting content.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-badge",
    thumbnail  : badgeThumbnail,
  },
  {
    name       : "Drawer",
    description: "Slide-over panel for side content or menus.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-drawer",
    thumbnail  : drawerThumbnail,
  },
  {
    name       : "Signature Pad",
    description: "Canvas-based drawing field for user signatures.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-signature-pad",
    thumbnail  : signaturePadThumbnail,
  },
  {
    name       : "Color Picker",
    description: "Custom color selection input with preview.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-color-picker",
    thumbnail  : colorPickerThumbnail,
  },
  {
    name       : "Barcode Scanner",
    description: "Detects and reads barcodes using camera input.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-barcode-scanner",
    thumbnail  : barcodeScannerThumbnail,
  },
  {
    name       : "Audio Player",
    description: "Customizable HTML5 audio player.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-audio-player",
    thumbnail  : audioPlayerThumbnail,
  },
  {
    name       : "Cropper",
    description: "Crop images using an interactive UI.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-cropper",
    thumbnail  : cropperThumbnail,
  },
  {
    name       : "Static Breadcrumbs",
    description: "Non-clickable breadcrumb navigation trail.",
    url        : "https://github.com/serhmel/ui-builder-library/tree/main/components/bl-static-breadcrumbs",
    thumbnail  : staticBreadcrumbsThumbnail,
  },
];

export const shopifyPages = [
  {
    title    : "Homepage",
    thumbnail: homepageThumbnail,
    preview  : homepagePreview,
  },
  {
    title    : "Product Page",
    thumbnail: productPageThumbnail,
    preview  : productPagePreview,
  },
];

