import { auth } from "@/lib/auth";
import { headers } from "next/dist/server/request/headers";

export async function getCurrentUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user ?? null;
}
