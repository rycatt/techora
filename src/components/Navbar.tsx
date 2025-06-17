import { BsPersonFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between px-12 py-6 mx-auto">
        <div>
          <h1 className="font-bold text-2xl">
            <Link to="/" className="cursor-pointer">
              Techora
            </Link>
          </h1>
        </div>
        <div className="flex gap-8">
          <Link
            to="/"
            className="rounded-md px-3 py-2 font-medium bg-gray-900 hover:bg-gray-700 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="rounded-md px-3 py-2 font-medium hover:bg-gray-700 hover:text-white"
          >
            Products
          </Link>
        </div>
        <div className="flex gap-8">
          <Link to="/cart">
            <FaCartShopping
              size={25}
              className="cursor-pointer hover:text-white/60"
            />
          </Link>
          <BsPersonFill
            size={25}
            className="cursor-pointer hover:text-white/60"
          />
        </div>
      </div>
    </nav>
  );
}
