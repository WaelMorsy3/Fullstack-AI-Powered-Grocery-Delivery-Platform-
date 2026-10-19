"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/dist/client/components/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiLogOut, FiPackage } from "react-icons/fi";

interface AvatarProps {
  mobile?: boolean;
}

export default function Avatar({ mobile = false }: AvatarProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    // Implement your logout logic here
    const { error } = await authClient.signOut();
    if (error) {
      toast.error("Logout failed");
    } else {
      toast.success("Logout successful");
      router.refresh(); // Refresh the page to reflect the new user state
    }
  };

  return (
    <div className="relative">
      {/* Avatar */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative h-10 w-10 cursor-pointer overflow-hidden rounded-full border-2 border-border transition hover:border-primary"
      >
        <Image
          src="/images/avatar.png"
          alt="User avatar"
          fill
          className="object-cover"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`${
            mobile ? "relative mt-3 w-full" : "absolute right-0 top-12 w-48"
          } z-50 overflow-hidden rounded-xl border border-border bg-card p-2 shadow-lg bg-background`}
        >
          {/* My Orders */}
          <Link
            href="/orders"
            className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text transition hover:bg-background hover:text-primary"
          >
            <FiPackage size={18} />
            <span>My Orders</span>
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            type="button"
            className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text transition hover:bg-background hover:text-primary"
          >
            <FiLogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}
