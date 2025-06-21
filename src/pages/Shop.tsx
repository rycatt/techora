import rtx4070 from '../assets/RTX 4070 Ti.png';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';

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
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-5">
          <ProductItem
            image={rtx4070}
            alt="RTX 4070 Ti"
            name="NVIDIA GeForce RTX 4070 Ti"
            price="$799.99"
          />
        </div>
      </div>
    </div>
  );
}
