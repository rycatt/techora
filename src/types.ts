export interface BaseProduct {
  name: string;
  price: string;
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
