import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    text: "Fresh Fruits",
    slug: "fruits",
    image: "/images/fruits.png",
    background: "#FEF6DA",
  },
  {
    text: "Vegetables",
    slug: "vegetables",
    image: "/images/vegetables.png",
    background: "#FEE0E0",
  },
  {
    text: "Baked Foods",
    slug: "baked-foods",
    image: "/images/baked-foods.png",
    background: "#FCE8D5",
  },
  {
    text: "Cereals",
    slug: "cereals",
    image: "/images/cereals.png",
    background: "#E8F3E0",
  },
  {
    text: "Dairy Products",
    slug: "dairy-products",
    image: "/images/dairy-products.png",
    background: "#E3F2FD",
  },
  {
    text: "Drinks",
    slug: "drinks",
    image: "/images/drinks.png",
    background: "#E0F7FA",
  },
  {
    text: "Instant Foods",
    slug: "instant-foods",
    image: "/images/instant-foods.png",
    background: "#F3E8FF",
  },
];

export default function CategorySection() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl md:text-3xl font-medium">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
        {categories.map((category) => (
          <Link
            style={{ backgroundColor: category.background }}
            href={`/products${category.slug}`}
            key={category.slug}
            className="group py-5 px-3  gap-2 rounded-lg flex flex-col justify-center items-center"
          >
            <Image
              src={category.image}
              alt={category.text}
              width={100}
              height={100}
              className="max-w-28 object-cover group-hover:scale-108 transition"
            />
            <p className="text-sm font-medium">{category.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
