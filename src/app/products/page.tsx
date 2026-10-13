import FrontendLayout from "@/components/layouts/FrontendLayout";
import FilterOptions from "@/components/product/FilterOptions";
import ProductCard from "@/components/product/ProductCard";
import SortOptions from "@/components/product/sortOptions";

export const products = [
  {
    id: 1,
    name: "Fresh Red Apples",
    slug: "fresh-red-apples",
    category: "Fresh Fruits",
    image: "/images/product-2.png",
    price: 4.99,
    oldPrice: 5.99,
    unit: "1 kg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    slug: "fresh-tomatoes",
    category: "Vegetables",
    image: "/images/product-17.png",
    price: 3.49,
    oldPrice: 4.29,
    unit: "1 kg",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    slug: "whole-wheat-bread",
    category: "Baked Foods",
    image: "/images/product-14.png",
    price: 2.99,
    oldPrice: 3.49,
    unit: "500 g",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Crunchy Corn Flakes",
    slug: "crunchy-corn-flakes",
    category: "Cereals",
    image: "/images/product-19.png",
    price: 6.49,
    oldPrice: 7.49,
    unit: "500 g",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Orange Juice",
    slug: "orange-juice",
    category: "Drinks",
    image: "/images/product-16.png",
    price: 4.49,
    oldPrice: 5.29,
    unit: "1 L",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Instant Chicken Noodles",
    slug: "instant-chicken-noodles",
    category: "Instant Foods",
    image: "/images/product-21.png",
    price: 2.49,
    oldPrice: 2.99,
    unit: "5 Pack",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Cheddar Cheese",
    slug: "cheddar-cheese",
    category: "Dairy Products",
    image: "/images/product-15.png",
    price: 7.99,
    oldPrice: 8.99,
    unit: "250 g",
    rating: 4.9,
  },
];

export default function ProductsPage() {
  return (
    <FrontendLayout>
        <div className="my-6">
           <div className="flex flex-col sm:flex-row gap-5  my-10 ">
            <FilterOptions/>
 <div className="flex-1">
 <SortOptions/>

           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   mt-6 gap-6">
                      {products.map((product) => (
                          <ProductCard key={product.id} product={product}/>
                      ))}
                   </div>
 </div>
           </div>
         
        </div>
        
    </FrontendLayout>
  )
}
