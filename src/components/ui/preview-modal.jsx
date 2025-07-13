import { Dialog } from "@headlessui/react";

export default function PreviewModal({ show, source, onClose, title }) {
  return (
    <Dialog open={ show } onClose={ onClose } className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" onClick={ onClose } />
      <Dialog.Panel
        className="relative z-50 max-w-5xl w-full max-h-[90vh] overflow-auto rounded-lg shadow-xl bg-neutral-900 p-4">

        <button onClick={ onClose } className="absolute top-3 right-4 text-neutral-400 hover:text-white text-xl">
          ✕
        </button>

        <img src={ source } alt={ title } className="w-full rounded-lg" />
      </Dialog.Panel>
    </Dialog>
  )
}
