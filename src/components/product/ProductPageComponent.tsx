"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductPageComponent() {
  const product = {
    name: "Instant Chicken Noodles",
    category: "Instant Foods",
    price: 189,
    offerPrice: 159,
    images: [
      "/images/gallery-1.png",
      "/images/gallery-2.png",
      "/images/gallery-3.png",
    ],
    description: [
      "Fresh and carefully selected for the best quality",
      "Rich in natural flavor and perfect for everyday meals",
      "Packed carefully to preserve freshness",
    ],
  };

  const [thumbnail, setThumbnail] = useState(product.images[0]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 md:px-8 md:py-10">
      {/* Breadcrumb */}
      <div className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted sm:text-sm">
        <span>Home</span>
        <span>/</span>
        <span>Products</span>
        <span>/</span>
        <span className="text-primary">{product.name}</span>
      </div>

      {/* Product */}
      <div className="flex flex-col gap-8 lg:flex-row md:gap-12 lg:gap-16">
        {/* Product Images */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col-reverse gap-3 sm:flex-row">
            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto sm:w-20 sm:flex-col sm:overflow-visible">
              {product.images.map((image, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className={`h-20 w-20 shrink-0 cursor-pointer overflow-hidden rounded-lg border bg-white transition sm:h-20 sm:w-20 ${
                    thumbnail === image
                      ? "border-primary"
                      : "border-border hover:border-primary"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex h-72 w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-background sm:h-96 md:h-105">
              <Image
                src={thumbnail}
                alt={product.name}
                width={600}
                height={600}
                className="h-full w-full object-contain p-4 sm:p-6"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-medium text-text sm:text-3xl lg:text-4xl">
            {product.name}
          </h1>

          <p className="mt-2 text-sm text-muted">
            {product.category}
          </p>

          {/* Price */}
          <div className="mt-5">
            <p className="text-sm text-muted line-through sm:text-base">
              ${product.price}
            </p>

            <p className="mt-1 text-2xl font-medium text-primary sm:text-3xl">
              ${product.offerPrice}
            </p>
          </div>

          {/* About Product */}
          <div className="mt-6">
            <p className="text-base font-medium text-text">
              About Product
            </p>

            <ul className="mt-3 ml-4 list-disc space-y-2 text-sm leading-6 text-muted">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              type="button"
              className="w-full cursor-pointer rounded-lg bg-gray-100 py-3.5 font-medium text-text transition hover:bg-border"
            >
              Add to Cart
            </button>

            <button
              type="button"
              className="w-full cursor-pointer rounded-lg bg-primary py-3.5 font-medium text-white transition hover:bg-primary-hover"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}