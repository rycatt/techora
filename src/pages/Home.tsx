import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import amd from "../assets/AMD_Ryzen_9_9950X3D.png";
import rtx4070 from "../assets/RTX 4070 Ti.png";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main className="relative">
      <div className="mx-auto max-w-7xl text-center px-4 pt-20 pb-16">
        <h1 className="mx-auto max-w-4xl text-9xl font-semibold tracking-tighter ">
          Hardware that delivers
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-xl tracking-tight text-gray-400">
          We know hardware inside and out. Find reliable parts for gaming PCs,
          work computers, or any custom build you have in mind.
        </p>
        <div className="flex items-center justify-center mt-12">
          <Link to="/shop">
            <button className="flex items-center justify-between bg-white shadow-lg py-2 px-1 rounded-full cursor-pointer hover:bg-white/70 hover:shadow-xl duration-100">
              <span className="text-slate-950 px-4">Explore Products</span>
              <div className="rounded-full bg-slate-950 p-4">
                <FaArrowRight size={20} />
              </div>
            </button>
          </Link>
        </div>

        <ProductCard
          image={rtx4070}
          name="NVIDIA GeForce RTX 4070 Ti"
          description="NVIDIA GeForce RTX 4070 delivers powerful 1440p gaming with ray tracing and DLSS 3 support."
          price="$799"
          bgColor="bg-emerald-600"
          rotation="-rotate-6"
          position="left"
          imageClassName="w-full h-auto rounded-lg"
        />

        <ProductCard
          image={amd}
          name="AMD Ryzen™ 9 9950X3D"
          description="The ultimate 16-core desktop CPU with 2nd gen AMD 3D V-Cache™
            Technology"
          price="$699"
          bgColor="bg-amber-500"
          rotation="rotate-6"
          position="right"
          imageClassName="size-50 object-contain"
        />
      </div>
    </main>
  );
}
