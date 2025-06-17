import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-7xl text-center px-4 pt-20 pb-16">
        <h1 className="mx-auto max-w-4xl text-6xl font-semibold tracking-tighter ">
          Hardware that delivers
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg tracking-tight text-gray-400">
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
      </div>
    </main>
  );
}
