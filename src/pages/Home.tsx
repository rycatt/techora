import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import iphone16 from "../assets/Apple_iPhone_16.png";
import surfacePro9 from "../assets/surface_pro_9.png";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
      <ProductCard
        image={iphone16}
        name="Apple iPhone 16"
        description="Experience the future with the iPhone 16"
        price="$1,099"
        bgColor="bg-slate-800/70"
        rotation="-rotate-6"
        position="left"
        imageClassName="h-60 object-cover rounded-lg"
      />
      <div className="text-center px-4 pt-20 pb-16">
        <h1 className="mx-auto max-w-4xl text-8xl font-semibold tracking-tighter ">
          Your One-Stop Electronics Shop
        </h1>
        <p className="mt-6 mx-auto w-full max-w-[85%] sm:max-w-[75%] md:max-w-xl lg:max-w-2xl text-base sm:text-lg md:text-xl tracking-tight text-gray3-400">
          Discover the latest in laptops, smartphones, tablets, and more.
          Whether you're gaming, working, or just staying connected—we've got
          the tech you need.
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
      </div>

      <ProductCard
        image={surfacePro9}
        name="Microsoft Surface Pro 9"
        description="A sleek 2-in-1 device combining tablet portability with laptop power—perfect"
        price="$999"
        bgColor="bg-blue-600/50"
        rotation="rotate-6"
        position="right"
        imageClassName="size-50 object-contain"
      />
    </main>
  );
}
