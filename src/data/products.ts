import mensBlazer from "@/assets/products/mens-blazer.jpg";
import mensCoat from "@/assets/products/mens-coat.jpg";
import mensShirt from "@/assets/products/mens-shirt.jpg";
import mensSunglasses from "@/assets/products/mens-sunglasses.jpg";
import womensDress from "@/assets/products/womens-dress.jpg";
import womensTrench from "@/assets/products/womens-trench.jpg";
import womensHandbag from "@/assets/products/womens-handbag.jpg";
import womensBlouse from "@/assets/products/womens-blouse.jpg";
import mensTrousers from "@/assets/products/mens-trousers.jpg";
import mensScarf from "@/assets/products/mens-scarf.jpg";
import mensChelseaBoots from "@/assets/products/mens-chelsea-boots.jpg";
import mensBelt from "@/assets/products/mens-belt.jpg";
import womensTrousers from "@/assets/products/womens-trousers.jpg";
import womensSkirt from "@/assets/products/womens-skirt.jpg";
import womensCapeCoat from "@/assets/products/womens-cape-coat.jpg";
import womensBelt from "@/assets/products/womens-belt.jpg";

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
  // New ultra-luxe additions
  {
    id: "mens-tailored-trousers",
    name: "Tailored Wool Trousers",
    description:
      "Sharply creased wool with architectural line. Cut in Joburg, finished with Paris-level precision.",
    gender: "men",
    category: "Bottoms",
    priceZAR: 7299,
    stock: 6,
    images: [mensTrousers],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Charcoal"],
    newArrival: true,
  },
  {
    id: "mens-cashmere-scarf",
    name: "Pure Cashmere Scarf",
    description:
      "Cloud-soft cashmere with disciplined drape. Minimal logo, maximal presence.",
    gender: "men",
    category: "Accessories",
    priceZAR: 4499,
    stock: 9,
    images: [mensScarf],
    sizes: ["One Size"],
    colors: ["Black", "Silver Grey"],
  },
  {
    id: "mens-chelsea-boots",
    name: "Polished Chelsea Boots",
    description:
      "Hand-burnished leather with sleek profile. From Braamfontein streets to black-tie with ease.",
    gender: "men",
    category: "Accessories",
    priceZAR: 11999,
    stock: 3,
    images: [mensChelseaBoots],
    sizes: ["UK 8", "UK 9", "UK 10", "UK 11"],
    colors: ["Black"],
    exclusive: true,
  },
  {
    id: "mens-leather-belt",
    name: "Sculpted Leather Belt",
    description:
      "Full-grain leather with brushed-silver buckle. Quietly assertive, endlessly refined.",
    gender: "men",
    category: "Accessories",
    priceZAR: 4999,
    stock: 8,
    images: [mensBelt],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Silver"],
  },
  {
    id: "womens-silk-trousers",
    name: "Fluid Silk Trousers",
    description:
      "Liquid movement. Precision waistband and elongated leg for statuesque lines.",
    gender: "women",
    category: "Bottoms",
    priceZAR: 7699,
    stock: 5,
    images: [womensTrousers],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black"],
    newArrival: true,
  },
  {
    id: "womens-pencil-skirt",
    name: "Structured Pencil Skirt",
    description:
      "Contour without compromise. Architectural seams create a decisive silhouette.",
    gender: "women",
    category: "Bottoms",
    priceZAR: 6899,
    stock: 4,
    images: [womensSkirt],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black"],
  },
  {
    id: "womens-cape-coat",
    name: "Sculptural Cape Coat",
    description:
      "A statement in shadow and light. Dramatic sweep with restrained hardware.",
    gender: "women",
    category: "Outerwear",
    priceZAR: 14999,
    stock: 2,
    images: [womensCapeCoat],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black"],
    exclusive: true,
  },
  {
    id: "womens-statement-belt",
    name: "Statement Leather Belt",
    description:
      "Supple leather framed by polished silver. Cinches a look, crowns a moment.",
    gender: "women",
    category: "Accessories",
    priceZAR: 5599,
    stock: 6,
    images: [womensBelt],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Silver"],
  },
];

export const categories: Category[] = [
  "Tops",
  "Bottoms",
  "Outerwear",
  "Accessories",
];
