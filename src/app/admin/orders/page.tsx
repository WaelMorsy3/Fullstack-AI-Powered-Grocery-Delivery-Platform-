"use client";

import Link from "next/link";
import { FaBoxOpen } from "react-icons/fa";

const orders = [
  {
    id: "ORD-1001",
    customer: "John Doe",
    email: "john@example.com",
    items: 3,
    amount: 42.5,
    paymentMethod: "Stripe",
    status: "Delivered",
    orderDate: "Aug 28, 2026",
  },
  {
    id: "ORD-1002",
    customer: "Sarah Williams",
    email: "sarah@example.com",
    items: 5,
    amount: 67.25,
    paymentMethod: "Cash on Delivery",
    status: "Processing",
    orderDate: "Aug 29, 2026",
  },
  {
    id: "ORD-1003",
    customer: "Michael Brown",
    email: "michael@example.com",
    items: 2,
    amount: 24.99,
    paymentMethod: "Stripe",
    status: "Shipped",
    orderDate: "Aug 30, 2026",
  },
  {
    id: "ORD-1004",
    customer: "Emily Johnson",
    email: "emily@example.com",
    items: 7,
    amount: 89.75,
    paymentMethod: "Cash on Delivery",
    status: "Pending",
    orderDate: "Aug 30, 2026",
  },
  {
    id: "ORD-1005",
    customer: "David Wilson",
    email: "david@example.com",
    items: 4,
    amount: 51.4,
    paymentMethod: "Stripe",
    status: "Delivered",
    orderDate: "Aug 31, 2026",
  },
];

const statusStyles: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
};

export default function OrdersPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text">Orders</h1>
        <p className="mt-1 text-sm text-muted">
          Manage and track customer orders.
        </p>
      </div>

      {/* Orders Table */}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        {/* Desktop Header */}
        <div className="hidden lg:grid grid-cols-[1.2fr_1.5fr_1fr_1fr_1.2fr_1fr_1fr] gap-4 border-b border-border bg-background px-5 py-4 text-sm font-medium text-muted">
          <p>Order ID</p>
          <p>Customer</p>
          <p>Items</p>
          <p>Amount</p>
          <p>Payment</p>
          <p>Status</p>
          <p>Action</p>
        </div>

        {/* Orders */}
        <div className="divide-y divide-border">
          {orders.map((order) => (
            <div
              key={order.id}
              className="px-5 py-5 transition hover:bg-background"
            >
              {/* Desktop */}
              <div className="hidden lg:grid grid-cols-[1.2fr_1.5fr_1fr_1fr_1.2fr_1fr_1fr] gap-4 items-center text-sm">
                <p className="font-medium text-text">{order.id}</p>

                <div>
                  <p className="font-medium text-text">
                    {order.customer}
                  </p>
                  <p className="text-xs text-muted">{order.email}</p>
                </div>

                <p className="text-muted">
                  {order.items}{" "}
                  {order.items === 1 ? "item" : "items"}
                </p>

                <p className="font-medium text-text">
                  ${order.amount.toFixed(2)}
                </p>

                <p className="text-muted">
                  {order.paymentMethod}
                </p>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                    statusStyles[order.status]
                  }`}
                >
                  {order.status}
                </span>

                {/* View Order */}
                <Link
                  href={`/admin/orders/${order.id}`}
                  className="w-fit rounded-lg bg-[#E8F7EF] px-3 py-2 text-xs font-medium text-primary transition hover:bg-primary hover:text-white"
                >
                  View Order
                </Link>
              </div>

              {/* Mobile / Tablet */}
              <div className="lg:hidden">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F7EF] text-primary">
                      <FaBoxOpen size={18} />
                    </div>

                    <div>
                      <p className="font-medium text-text">
                        {order.id}
                      </p>

                      <p className="text-sm text-muted">
                        {order.customer}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-y-4 sm:grid-cols-4 text-sm">
                  <div>
                    <p className="text-xs text-muted">Items</p>
                    <p className="mt-1 font-medium text-text">
                      {order.items}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted">Amount</p>
                    <p className="mt-1 font-medium text-text">
                      ${order.amount.toFixed(2)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted">Payment</p>
                    <p className="mt-1 font-medium text-text">
                      {order.paymentMethod}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted">Date</p>
                    <p className="mt-1 font-medium text-text">
                      {order.orderDate}
                    </p>
                  </div>
                </div>

                {/* Mobile View Button */}
                <Link
                  href={`/admin/orders/${order.id}`}
                  className="mt-5 block w-full rounded-lg bg-primary py-2.5 text-center text-sm font-medium text-white transition hover:bg-primary-hover"
                >
                  View Order
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <FaBoxOpen className="mb-3 text-4xl text-muted" />

            <h3 className="font-medium text-text">
              No orders found
            </h3>

            <p className="mt-1 text-sm text-muted">
              Customer orders will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}