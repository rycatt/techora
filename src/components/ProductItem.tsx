import type { ProductItemProps } from "../types";

export default function ProductItem({
  image,
  alt,
  name,
  price,
}: ProductItemProps) {
  return (
    <div className="flex flex-col min-w-[200px] max-w-[300px] h-full shadow-lg rounded-2xl bg-slate-800/90 cursor-pointer overflow-hidden">
      <div className="aspect-square ">
        <img
          src={image}
          alt={alt}
          width="400"
          height="300"
          className="rounded-2xl w-full h-full object-contain p-5 hover:brightness-90 bg-slate-700/30 border border-slate-600/50 hover:scale-105 transition-transform duration-300 "
        />
      </div>
      <div className="p-4">
        <h2 className="font-medium text-slate-100 text-xl truncate mb-1">
          {name}
        </h2>
        <p className="text-2xl text-white font-bold">${price}</p>
      </div>
    </div>
  );
}
