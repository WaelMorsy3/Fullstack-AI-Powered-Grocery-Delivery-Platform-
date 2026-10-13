"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  
  FiBox,
  FiGrid,
  FiMenu,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
  FiX,
} from "react-icons/fi";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: FiGrid,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: FiBox,
  },  
  {
    name: "Orders",
    href: "/admin/orders",
    icon: FiShoppingCart,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: FiUsers,
  }, 
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between bg-white border-b border-border bg-card px-5 lg:hidden">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <FiShoppingBag size={20} />
          </div>

          <span className="text-lg font-bold text-text">
            Grocery<span className="text-primary">Cart</span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-text transition hover:bg-background"
          aria-label="Toggle admin menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 bg-white top-0 z-50 h-screen w-64 border-r border-border
          bg-card transition-transform duration-300
          lg:sticky lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-border px-6">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
              <FiShoppingBag size={22} />
            </div>

            <span className="text-xl font-bold text-text">
              Grocery<span className="text-primary">Cart</span>
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 p-4">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Menu
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 rounded-lg px-3 py-6 text-sm
                  font-medium transition
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-muted hover:bg-background hover:text-primary"
                  }
                `}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border p-4">
          <div className="rounded-lg bg-background p-4">
            <p className="text-sm font-medium text-text">
              GroceryCart Admin
            </p>

            <p className="mt-1 text-xs text-muted">
              Manage your grocery store
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}