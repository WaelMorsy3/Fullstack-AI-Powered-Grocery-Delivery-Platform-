import {
  FiBox,
  FiShoppingBag,
  FiUsers,
  
} from "react-icons/fi";

const stats = [
  {
    title: "Total Customers",
    value: "1,248",
    icon: FiUsers,
    description: "+12.5% from last month",
  },
  {
    title: "Total Orders",
    value: "3,642",
    icon: FiShoppingBag,
    description: "+8.2% from last month",
  },
  {
    title: "Total Products",
    value: "286",
    icon: FiBox,
    description: "+14 new products",
  },
  
];



export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-text">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted">
          Welcome back! Here&apos;s what&apos;s happening with your store.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E8F7EF] text-primary">
                  <Icon size={22} />
                </div>

              </div>

              <div className="mt-5">
                <p className="text-sm text-muted">{stat.title}</p>
                <h2 className="mt-1 text-2xl font-semibold text-text">
                  {stat.value}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

     
    </div>
  );
}