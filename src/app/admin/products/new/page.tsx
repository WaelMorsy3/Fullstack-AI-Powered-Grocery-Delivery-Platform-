
"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

const categories = [
  "Fresh Fruits",
  "Vegetables",
  "Baked Foods",
  "Cereals",
  "Dairy Products",
  "Drinks",
  "Instant Foods",
];

export default function AddProduct() {
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    const remainingSlots = 4 - images.length;
    const selectedFiles = files.slice(0, remainingSlots);

    const newImages = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );

    setImages((prev) => [...prev, ...newImages]);

    e.target.value = "";
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please upload at least one product image.");
      return;
    }

    // Add product logic here
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text">
          Add Product
        </h1>

        <p className="mt-1 text-sm text-muted">
          Add a new product to your grocery store.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl rounded-xl border border-border bg-card p-5 sm:p-6 lg:p-8"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Product Name */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-text">
              Product Name
            </label>

            <input
              type="text"
              placeholder="e.g. Instant Chicken Noodles"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Category
            </label>

            <select
              defaultValue=""
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            >
              <option value="" disabled>
                Select category
              </option>

              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Unit */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Unit
            </label>

            <input
              type="text"
              placeholder="e.g. 1 kg, 500 g, 1 L"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>

          {/* Stock Quantity */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Stock Quantity
            </label>

            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 50"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            />

            <p className="mt-1.5 text-xs text-muted">
              Number of units currently available.
            </p>
          </div>

          {/* Price */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Price
            </label>

            <div className="flex overflow-hidden rounded-lg border border-border focus-within:border-primary">
              <span className="flex items-center bg-background px-4 text-sm text-muted">
                $
              </span>

              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                className="w-full bg-white px-3 py-3 text-sm outline-none"
              />
            </div>
          </div>

          {/* Old Price */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Old Price
            </label>

            <div className="flex overflow-hidden rounded-lg border border-border focus-within:border-primary">
              <span className="flex items-center bg-background px-4 text-sm text-muted">
                $
              </span>

              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                className="w-full bg-white px-3 py-3 text-sm outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-text">
              Description
            </label>

            <textarea
              rows={5}
              placeholder="Enter a short description about the product..."
              className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>

          {/* Product Images */}
          <div className="md:col-span-2">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-text">
                  Product Images
                </label>

                <p className="mt-1 text-xs text-muted">
                  Upload 1–4 images. The first image will be the main product
                  image.
                </p>
              </div>

              <span className="text-xs font-medium text-muted">
                {images.length}/4
              </span>
            </div>

            {/* Image Previews */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {images.map((image, index) => (
                <div
                  key={image}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-background"
                >
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />

                  {index === 0 && (
                    <span className="absolute left-2 top-2 rounded-md bg-primary px-2 py-1 text-[10px] font-medium text-white">
                      Main Image
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-error opacity-100 shadow-sm transition hover:bg-error hover:text-white"
                    aria-label={`Remove image ${index + 1}`}
                  >
                    <FiTrash2 size={15} />
                  </button>
                </div>
              ))}

              {/* Upload Button */}
              {images.length < 4 && (
                <label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background transition hover:border-primary hover:bg-[#E8F7EF]">
                  <FiUploadCloud
                    size={30}
                    className="text-primary"
                  />

                  <span className="mt-2 text-xs font-medium text-text">
                    Add Image
                  </span>

                  <span className="mt-1 text-[10px] text-muted">
                    {4 - images.length} slot
                    {4 - images.length !== 1 ? "s" : ""} left
                  </span>

                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {images.length === 0 && (
              <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                <FiImage size={15} />

                <span>At least one image is required.</span>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
        

          <button
            type="submit"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
