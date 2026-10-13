"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import AddAddressModal from "./AddressModal";

export default function CheckoutPageComponent() {
  const [showAddress, setShowAddress] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

  const products = [
    {
      id: 1,
      name: "Instant Chicken Noodles",
      category: "Instant Foods",
      unit: "5 Pack",
      offerPrice: 2.49,
      price: 2.99,
      quantity: 2,
      image: "/images/product-21.png",
    },
    {
      id: 2,
      name: "Fresh Red Apples",
      category: "Fresh Fruits",
      unit: "1 kg",
      offerPrice: 4.99,
      price: 5.99,
      quantity: 1,
      image: "/images/product-2.png",
    },
    {
      id: 3,
      name: "Cheddar Cheese",
      category: "Dairy Products",
      unit: "250 g",
      offerPrice: 7.99,
      price: 8.99,
      quantity: 1,
      image: "/images/product-15.png",
    },
  ];

  const subtotal = products.reduce(
    (total, product) => total + product.offerPrice * product.quantity,
    0
  );

  const shippingFee = subtotal >= 50 ? 0 : 5;
  const tax = subtotal * 0.02;
  const total = subtotal + shippingFee + tax;

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 md:px-8 lg:flex-row lg:py-12">
      {/* Cart */}
      <div className="min-w-0 flex-1">
        <h1 className="mb-6 text-2xl font-medium text-text md:text-3xl">
          Shopping Cart{" "}
          <span className="text-sm font-normal text-primary">
            {products.length} Items
          </span>
        </h1>
<AddAddressModal
  isOpen={showAddressModal}
  onClose={() => setShowAddressModal(false)}
/>
        {/* Desktop Header */}
        <div className="hidden grid-cols-[2fr_1fr_1fr] border-b border-border pb-3 text-sm font-medium text-muted sm:grid">
          <p>Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {/* Products */}
        <div className="divide-y divide-border">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid gap-4 py-5 sm:grid-cols-[2fr_1fr_1fr] sm:items-center"
            >
              {/* Product Details */}
              <div className="flex gap-3 sm:gap-5">
                <Link
                  href={`/products/${product.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background sm:h-28 sm:w-28"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={120}
                    className="h-full w-full object-contain p-2"
                  />
                </Link>

                <div className="min-w-0">
                  <p className="truncate text-base font-medium text-text">
                    {product.name}
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    {product.category}
                  </p>

                  <p className="mt-1 text-sm text-muted">
                    {product.unit}
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-medium text-primary">
                      ${product.offerPrice.toFixed(2)}
                    </span>

                    <span className="text-xs text-muted line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="mt-3 flex w-fit items-center overflow-hidden rounded-md border border-border">
                    <button
                      type="button"
                      className="flex h-7 w-7 cursor-pointer items-center justify-center text-muted hover:bg-background hover:text-primary"
                    >
                      <FiMinus size={13} />
                    </button>

                    <span className="flex h-7 w-8 items-center justify-center border-x border-border text-xs font-medium text-text">
                      {product.quantity}
                    </span>

                    <button
                      type="button"
                      className="flex h-7 w-7 cursor-pointer items-center justify-center text-muted hover:bg-background hover:text-primary"
                    >
                      <FiPlus size={13} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtotal */}
              <p className="text-left font-medium text-text sm:text-center">
                <span className="mr-2 text-sm text-muted sm:hidden">
                  Subtotal:
                </span>
                ${(product.offerPrice * product.quantity).toFixed(2)}
              </p>

              {/* Delete */}
              <button
                type="button"
                className="flex w-fit cursor-pointer items-center gap-2 text-sm text-error transition hover:opacity-70 sm:mx-auto"
              >
                <FiTrash2 size={17} />
                <span className="sm:hidden">Remove</span>
              </button>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <Link
          href="/products"
          className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-hover"
        >
          <FiArrowLeft
            size={17}
            className="transition-transform group-hover:-translate-x-1"
          />
          Continue Shopping
        </Link>
      </div>

      {/* Order Summary */}
      <div className="h-fit w-full rounded-lg border border-border bg-background p-5 lg:max-w-[360px]">
        <h2 className="text-xl font-medium text-text">
          Order Summary
        </h2>

        <hr className="my-5 border-border" />

        {/* Delivery Address */}
        <div>
          <p className="text-sm font-medium uppercase text-text">
            Delivery Address
          </p>

          <div className="relative mt-2 flex items-start justify-between gap-3">
            <p className="text-sm text-muted">
              No address found
            </p>

            <button
              type="button"
              onClick={() => setShowAddress((prev) => !prev)}
              className="cursor-pointer text-sm font-medium text-primary hover:underline"
            >
              Change
            </button>

            {showAddress && (
              <div className="absolute right-0 top-8 z-20 w-full overflow-hidden rounded-lg border border-border bg-white shadow-lg">
                <button
                  type="button"
                  onClick={() => setShowAddress(false)}
                  className="block w-full cursor-pointer p-3 text-left text-sm text-muted transition hover:bg-background"
                >
                  123 Main Street, New York
                </button>

                <button
                  type="button"
                   onClick={() => setShowAddressModal(true)}
                  className="block w-full cursor-pointer border-t border-border p-3 text-center text-sm font-medium text-primary transition hover:bg-primary-light"
                >
                  + Add New Address
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Payment Method */}
        <div className="mt-6">
          <p className="text-sm font-medium uppercase text-text">
            Payment Method
          </p>

          <select className="mt-2 w-full cursor-pointer rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text outline-none focus:border-primary">
            <option value="COD">Cash on Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="my-5 border-border" />

        {/* Summary */}
        <div className="space-y-3 text-sm text-muted">
          <p className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </p>

          <p className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-success">
              {shippingFee === 0
                ? "Free"
                : `$${shippingFee.toFixed(2)}`}
            </span>
          </p>

          <p className="flex justify-between">
            <span>Tax (2%)</span>
            <span>${tax.toFixed(2)}</span>
          </p>

          <hr className="border-border" />

          <p className="flex justify-between text-lg font-medium text-text">
            <span>Total Amount</span>
            <span className="text-primary">
              ${total.toFixed(2)}
            </span>
          </p>
        </div>

        {/* Place Order */}
        <button
          type="button"
          className="mt-6 w-full cursor-pointer rounded-lg bg-primary py-3.5 font-medium text-white transition hover:bg-primary-hover"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}