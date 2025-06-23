import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

export default function Shop() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-5">
      <nav className="text-lg text-gray-500 py-4">
        <ul className="flex space-x-2">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">›</span>
            <Link to="/shop" className="hover:underline text-white">
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <ProductList />
    </div>
  );
}
