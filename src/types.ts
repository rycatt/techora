export interface BaseProduct {
  name: string;
  price: number | string;
  image: string;
}

export interface ProductItemProps extends BaseProduct {
  alt: string;
}

export interface ProductCardProps extends BaseProduct {
  description: string;
  bgColor: string;
  rotation: string;
  position: "left" | "right";
  imageClassName: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  image: string[];
}
