"use client"


import { products } from "@/app/products/page";
import ProductCard from "../product/ProductCard";


export default function NewArrivals() {
  return (
    <div className="mt-16">
         <h2 className="text-2xl md:text-3xl font-medium">New Arrivals</h2>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  mt-6 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
         </div>
    </div>
  )
}
