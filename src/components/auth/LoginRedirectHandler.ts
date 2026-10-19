"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAuthModal } from "@/store/authModalStore";
import { useEffect } from "react";

export default function LoginRedirectHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { openLogin } = useAuthModal();

  useEffect(() => {
    if (searchParams.get("login") === "true") {
      openLogin();

      router.replace(pathname); // Remove the query parameter from the URL
    }
  }, [searchParams, openLogin, router, pathname]);

  return null;
}
