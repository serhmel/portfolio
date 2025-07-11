export function UIComponentCard({ name, description, url, thumbnail }) {
  return (
    <div className="flex flex-col h-full bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <img src={ thumbnail } alt={ name } className="w-full h-36 object-cover" />
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-white text-lg font-semibold mb-2">{ name }</h3>
        <p className="text-neutral-300 text-sm mb-2">{ description }</p>
        <a
          href={ url }
          target="_blank"
          rel="noreferrer"
          className="text-yellow-400 text-sm hover:text-yellow-300 mt-auto">

          View on GitHub →
        </a>
      </div>
    </div>
  );
}