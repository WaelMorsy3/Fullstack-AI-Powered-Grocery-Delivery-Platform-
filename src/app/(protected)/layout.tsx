import { getCurrentUser } from "@/server-actions/auth/getCurrentUser";
import { redirect } from "next/dist/client/components/navigation";

export default async function protectedLayout({ children }: LayoutProps<"/">) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/?login=true");
  }

  return <>{children}</>;
}
