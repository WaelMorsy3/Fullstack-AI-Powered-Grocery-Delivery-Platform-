"use client";

import { useState } from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";

export default function FilterOptions() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <aside className="w-full sm:min-w-60 sm:max-w-60">
      {/* Filter Toggle */}
      <button
        onClick={() => setShowFilter((prev) => !prev)}
        className="mb-4 flex items-center gap-2 text-xl font-semibold text-text sm:cursor-default"
      >
        FILTERS

        <RiArrowRightDoubleFill
          className={`text-primary transition-transform duration-300 sm:hidden ${
            showFilter ? "rotate-90" : ""
          }`}
        />
      </button>

      {/* Filters */}
      <div
        className={`${
          showFilter ? "block" : "hidden"
        } space-y-6 sm:block`}
      >
        {/* Categories */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-text">
            CATEGORIES
          </h3>

          <div className="space-y-3 text-sm text-muted">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="Fresh Fruits"
                className="accent-primary"
              />
              <span>Fresh Fruits</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="Vegetables"
                className="accent-primary"
              />
              <span>Vegetables</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="Baked Foods"
                className="accent-primary"
              />
              <span>Baked Foods</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="Cereals"
                className="accent-primary"
              />
              <span>Cereals</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="Dairy Products"
                className="accent-primary"
              />
              <span>Dairy Products</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="Drinks"
                className="accent-primary"
              />
              <span>Drinks</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="Instant Foods"
                className="accent-primary"
              />
              <span>Instant Foods</span>
            </label>
          </div>
        </div>


        {/* Price Range */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-text">
            PRICE RANGE
          </h3>

          <div className="space-y-3 text-sm text-muted">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="0-10"
                className="accent-primary"
              />
              <span>$0 - $10</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="10-25"
                className="accent-primary"
              />
              <span>$10 - $25</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="25-50"
                className="accent-primary"
              />
              <span>$25 - $50</span>
            </label>

            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                value="50+"
                className="accent-primary"
              />
              <span>$50+</span>
            </label>
          </div>
        </div>

      
      </div>
    </aside>
  );
}