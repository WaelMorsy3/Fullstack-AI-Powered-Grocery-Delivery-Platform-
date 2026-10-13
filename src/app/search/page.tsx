import FrontendLayout from "@/components/layouts/FrontendLayout";

import ProductCard from "@/components/product/ProductCard";
import { products } from "../products/page";
import Link from "next/link";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() || "";

  const searchResults = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <FrontendLayout>
      <div className="my-6">
       
          

          {/* Search Results */}
          <div className="flex-1">
            <div>
              <p className="text-sm font-medium text-primary">
                Search Results
              </p>

              <h1 className="mt-1 text-2xl font-semibold text-text md:text-3xl">
                {query ? `"${query}"` : "All Products"}
              </h1>

              <p className="mt-2 text-sm text-muted">
                {searchResults.length}{" "}
                {searchResults.length === 1 ? "product" : "products"} found
              </p>
            </div>

            {/* Products */}
            {searchResults.length > 0 ? (
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
                {searchResults.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="mt-10 flex min-h-60 flex-col items-center justify-center rounded-xl border border-border bg-background px-6 text-center">
                <h2 className="text-xl font-semibold text-text">
                  No products found
                </h2>

                <p className="mt-2 max-w-md text-sm text-muted">
                  We couldn&apos;t find any products matching{" "}
                  <span className="font-medium text-text">
                    &quot;{query}&quot;
                  </span>
                  . Try searching for something else.
                </p>

                <Link
                  href="/products"
                  className="mt-5 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
                >
                  Browse All Products
                </Link>
              </div>
            )}
          </div>
        </div>
   
    </FrontendLayout>
  );
}