import { FaExpand } from "react-icons/fa";

export function ShopifyPageCard({ title, thumbnail, onClick }) {
  return (
    <div>
      <div className="relative group cursor-pointer" onClick={ onClick } role="button" aria-label={`Preview ${ title }`}>

        <img src={ thumbnail } alt={ title } className="image-zoomable"/>

        <div className="image-overlay">
          <FaExpand className="text-white text-2xl" />
        </div>
      </div>

      <p className="mt-2 text-white font-medium">{ title }</p>
    </div>
  );
}
