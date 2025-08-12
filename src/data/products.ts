import mensBlazer from "@/assets/products/mens-blazer.jpg";
import mensCoat from "@/assets/products/mens-coat.jpg";
import mensShirt from "@/assets/products/mens-shirt.jpg";
import mensSunglasses from "@/assets/products/mens-sunglasses.jpg";
import womensDress from "@/assets/products/womens-dress.jpg";
import womensTrench from "@/assets/products/womens-trench.jpg";
import womensHandbag from "@/assets/products/womens-handbag.jpg";
import womensBlouse from "@/assets/products/womens-blouse.jpg";

export type Gender = "men" | "women";
export type Category = "Tops" | "Bottoms" | "Outerwear" | "Accessories";

export interface Product {
  id: string;
  name: string;
  description: string;
  gender: Gender;
  category: Category;
  priceZAR: number;
  stock: number;
  images: string[];
  sizes: string[];
  colors: string[];
  newArrival?: boolean;
  exclusive?: boolean;
}

export const products: Product[] = [
  {
    id: "mens-blazer",
    name: "Limited Edition Black Blazer",
    description:
      "Architectural tailoring meets understated power. Hand-finished lapels and silk lining evoke Parisian precision.",
    gender: "men",
    category: "Outerwear",
    priceZAR: 12499,
    stock: 5,
    images: [mensBlazer],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    newArrival: true,
    exclusive: true,
  },
  {
    id: "mens-coat",
    name: "Structured Wool Long Coat",
    description:
      "A study in silhouette. The perfect winter armor with clean lines and subtle authority.",
    gender: "men",
    category: "Outerwear",
    priceZAR: 13999,
    stock: 3,
    images: [mensCoat],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    exclusive: true,
  },
  {
    id: "mens-shirt",
    name: "Crisp Tuxedo Shirt",
    description:
      "A monochrome essential. Razor-sharp collar with invisible placket – precision redefined.",
    gender: "men",
    category: "Tops",
    priceZAR: 5499,
    stock: 8,
    images: [mensShirt],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
  },
  {
    id: "mens-sunglasses",
    name: "Architect Sunglasses",
    description:
      "High-contrast lenses in a structural frame. The final word in urban minimalism.",
    gender: "men",
    category: "Accessories",
    priceZAR: 4999,
    stock: 10,
    images: [mensSunglasses],
    sizes: ["One Size"],
    colors: ["Black", "Silver"],
  },
  {
    id: "womens-dress",
    name: "Sleek Evening Dress",
    description:
      "An ode to line and light. Contoured fit with considered movement – night-ready elegance.",
    gender: "women",
    category: "Tops",
    priceZAR: 12999,
    stock: 4,
    images: [womensDress],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black"],
    newArrival: true,
  },
  {
    id: "womens-trench",
    name: "Belted Trench Coat",
    description:
      "Classic reimagined. Clean geometry, refined hardware, and a waist that means business.",
    gender: "women",
    category: "Outerwear",
    priceZAR: 14499,
    stock: 2,
    images: [womensTrench],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black"],
    exclusive: true,
  },
  {
    id: "womens-handbag",
    name: "Structured Leather Handbag",
    description:
      "A sculptural companion. Polished silhouette with precise proportions and soft grain.",
    gender: "women",
    category: "Accessories",
    priceZAR: 8999,
    stock: 7,
    images: [womensHandbag],
    sizes: ["One Size"],
    colors: ["Black", "Silver"],
  },
  {
    id: "womens-blouse",
    name: "Tailored Silk Blouse",
    description:
      "Liquid silk with architectural cuffs. Feels effortless, looks decisive.",
    gender: "women",
    category: "Tops",
    priceZAR: 6399,
    stock: 6,
    images: [womensBlouse],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black"],
  },
];

export const categories: Category[] = [
  "Tops",
  "Bottoms",
  "Outerwear",
  "Accessories",
];
