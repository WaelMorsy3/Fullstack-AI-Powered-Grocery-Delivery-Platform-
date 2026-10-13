
const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipcode: "10001",
      country: "USA",
    },
    totalOrders: 8,
    totalSpent: 245.5,
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    address: {
      street: "45 Green Avenue",
      city: "Chicago",
      state: "IL",
      zipcode: "60601",
      country: "USA",
    },
    totalOrders: 5,
    totalSpent: 128.75,
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    address: {
      street: "78 Oak Street",
      city: "Los Angeles",
      state: "CA",
      zipcode: "90001",
      country: "USA",
    },
    totalOrders: 12,
    totalSpent: 389.99,
  },
  {
    id: 4,
    name: "Emily Johnson",
    email: "emily@example.com",
    address: {
      street: "22 Market Road",
      city: "Houston",
      state: "TX",
      zipcode: "77001",
      country: "USA",
    },
    totalOrders: 3,
    totalSpent: 74.5,
  },
];

export default function CustomersPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text">Customers</h1>
        <p className="mt-1 text-sm text-muted">
          View and manage your customers.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full min-w-[800px] text-sm">
          <thead className="border-b border-border bg-background">
            <tr className="text-left">
              <th className="px-5 py-4 font-semibold text-text">Customer</th>
              <th className="px-5 py-4 font-semibold text-text">Address</th>
              <th className="px-5 py-4 font-semibold text-text">
                Total Orders
              </th>
              <th className="px-5 py-4 font-semibold text-text">
                Total Spent
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-background/60">
                <td className="px-5 py-4">
                  <div>
                    <p className="font-medium text-text">{customer.name}</p>
                    <p className="mt-1 text-muted">{customer.email}</p>
                  </div>
                </td>

                <td className="px-5 py-4 text-muted">
                  <p>{customer.address.street}</p>
                  <p>
                    {customer.address.city}, {customer.address.state}{" "}
                    {customer.address.zipcode}
                  </p>
                  <p>{customer.address.country}</p>
                </td>

                <td className="px-5 py-4 font-medium text-text">
                  {customer.totalOrders}
                </td>

                <td className="px-5 py-4 font-medium text-primary">
                  ${customer.totalSpent.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

