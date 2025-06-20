import { VscTriangleLeft } from "react-icons/vsc";
import type { ProductCardProps } from "../types";

export default function ProductCard({
  image,
  name,
  description,
  price,
  bgColor,
  rotation,
  position,
  imageClassName,
}: ProductCardProps) {
  const positionClasses =
    position === "left"
      ? "md:top-150 md:left-40 lg:top-90 left-50"
      : "md:top-150 md:right-40 lg:top-90 right-50";

  return (
    <div
      className={`w-72 rounded-xl shadow-lg p-4 ${bgColor} cursor-pointer ${rotation} absolute ${positionClasses} hover:scale-105 hover:shadow-xl transition-transform`}
    >
      <h1 className="text-lg font-bold text-white tracking-tight">{name}</h1>
      <div className="flex justify-center relative mt-8">
        <img src={image} alt={name} className={imageClassName} />
        <div className="absolute top-10 right-0 bg-white text-gray-800 px-4 py-1 rounded-full -rotate-6 font-bold shadow">
          <VscTriangleLeft className="absolute top-0 -left-4 size-8 text-white" />
          {price}
        </div>
      </div>
      <p className="text-sm text-gray-300/80 font-semibold mt-12">
        {description}
      </p>
    </div>
  );
}
