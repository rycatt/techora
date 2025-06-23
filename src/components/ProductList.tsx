import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ["laptops", "smartphones", "tablets"];
        const requests = categories.map((category) =>
          fetch(
            `https://dummyjson.com/products/category/${category}?limit=10`
          ).then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to fetch: ${response.status}`);
            }
            return response.json();
          })
        );
        const results = await Promise.all(requests);
        const mergedProducts = results.flatMap((res) => res.products);
        setProducts(mergedProducts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-5">
        {loading &&
          [...Array(6)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-200 h-60 min-w-[200px] max-w-[300px] rounded-md"
            ></div>
          ))}
        {!loading &&
          products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductItem
                image={product.thumbnail}
                alt={product.title}
                name={product.title}
                price={product.price}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
