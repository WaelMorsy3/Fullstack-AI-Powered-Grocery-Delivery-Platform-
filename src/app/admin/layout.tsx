import AdminLayout from "@/components/layouts/AdminLayout";



export default function Admin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminLayout>
        {children}
    </AdminLayout>
  )
}