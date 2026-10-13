export default function SortOptions() {
  return (
    <div className="mb-4 flex items-center justify-between">
       <h2 className="text-xl font-medium md:text-3xl">All Products</h2>

      <select className="rounded-lg border border-border bg-background p-3 text-sm outline-none focus:border-primary">
        <option value="low-high">Sort By: Price (Low to High)</option>

        <option value="high-low">Sort By: Price (High to Low)</option>

        <option value="newest">Sort By: Newest</option>

        <option value="oldest">Sort By: Oldest</option>
      </select>
    </div>
  );
}
