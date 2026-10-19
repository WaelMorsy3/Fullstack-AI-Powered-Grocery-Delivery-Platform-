"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

import Avatar from "./Avatar";
import CartSidebar from "./CartSidebar";
import { useAuthModal } from "@/store/authModalStore";
import { LuSparkles } from "react-icons/lu";
import GroceryAssistant from "./GroceryAssistant";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { openLogin } = useAuthModal();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsAIOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-primary-hover"
        aria-label="Open AI grocery assistant"
      >
        <LuSparkles size={18} />
        <span>Ask AI</span>
      </button>
      <nav className="relative z-40 flex items-center justify-between border-b border-border bg-white px-6 py-4 transition-all md:px-16 lg:px-24 xl:px-32">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <FiPackage size={22} />
          </div>

          <span className="text-xl font-bold text-text">
            Grocery<span className="text-primary">Cart</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 sm:flex">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>

          <Link href="/products" className="transition hover:text-primary">
            Products
          </Link>

          <Link href="/contact" className="transition hover:text-primary">
            Contact
          </Link>

          {/* Search */}
          <div className="hidden items-center gap-2 rounded-full border border-border px-3 lg:flex">
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-transparent py-1.5 text-sm outline-none placeholder:text-muted"
            />

            <FaSearch className="text-muted" size={14} />
          </div>

          {/* Cart */}
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
            className="relative cursor-pointer"
          >
            <IoCartOutline
              size={24}
              className="text-muted transition hover:text-primary"
            />

            <span className="absolute -right-3 -top-2 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
              3
            </span>
          </button>

          {/* Login + Avatar */}
          <div className="flex items-center gap-2">
            {session ? (
              <Avatar />
            ) : (
              <button
                onClick={openLogin}
                className="cursor-pointer rounded-full bg-primary px-6 py-2 text-sm text-white transition hover:bg-primary-hover"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menu"
          className="sm:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-muted" />
            <span className="ml-2 h-0.5 w-4 rounded-full bg-muted" />
            <span className="ml-1 h-0.5 w-4.5 rounded-full bg-muted" />
          </span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 top-full z-50 w-full flex-col items-start gap-4 border-b border-border bg-white px-5 py-5 text-sm shadow-md sm:hidden`}
        >
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>

          <Link href="/products" className="transition hover:text-primary">
            Products
          </Link>

          <Link href="/contact" className="transition hover:text-primary">
            Contact
          </Link>

          {/* Mobile Search */}
          <div className="flex w-full items-center gap-2 rounded-full border border-border px-3">
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted"
            />

            <FaSearch className="text-muted" size={14} />
          </div>

          {/* Mobile Cart */}
          <button
            type="button"
            onClick={() => {
              setCartOpen(true);
              setOpen(false);
            }}
            className="flex w-full cursor-pointer items-center gap-3 text-left transition hover:text-primary"
          >
            <div className="relative">
              <IoCartOutline size={22} />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] text-white">
                3
              </span>
            </div>

            <span>Cart</span>
          </button>

          {/* Login + Avatar */}
          <div className="flex items-center gap-3">
            {session ? (
              <Avatar mobile />
            ) : (
              <button
                onClick={openLogin}
                className="cursor-pointer rounded-full bg-primary px-6 py-2 text-sm text-white transition hover:bg-primary-hover"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />

      <GroceryAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
    </>
  );
}
