import { BsPersonFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="relative z-50 flex justify-between">
          <div>
            <h1 className="font-bold text-3xl">
              <Link to="/" className="cursor-pointer">
                Techora
              </Link>
            </h1>
          </div>
          <div className="flex items-center gap-x-8">
            <Link
              to="/"
              className="rounded-md px-3 py-2 font-medium hover:bg-gray-700 hover:text-white data-[active=true]:bg-gray-800 data-[active=true]:text-white"
              data-active={location.pathname === "/"}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="rounded-md px-3 py-2 font-medium hover:bg-gray-700 hover:text-white data-[active=true]:bg-gray-800 data-[active=true]:text-white"
              data-active={location.pathname === "/shop"}
            >
              Products
            </Link>
          </div>
          <div className="flex items-center gap-x-8">
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
        </nav>
      </div>
    </header>
  );
}
