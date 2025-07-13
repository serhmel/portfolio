import { FaExpand } from "react-icons/fa";

export function ShopifyPageCard({ title, thumbnail, onClick }) {
  return (
    <div>
      <div className="relative group cursor-pointer" onClick={ onClick } role="button" aria-label={`Preview ${ title }`}>

        <img src={ thumbnail } alt={ title } className="rounded-lg shadow-lg transition group-hover:scale-[1.03]"/>

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition rounded-lg">
          <FaExpand className="text-white text-2xl" />
        </div>
      </div>

      <p className="mt-2 text-white font-medium">{ title }</p>
    </div>
  );
}
