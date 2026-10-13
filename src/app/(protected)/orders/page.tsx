import FrontendLayout from "@/components/layouts/FrontendLayout";
import {
  FaBox,
  FaCheckCircle,
  FaClock,
  FaTruck,
} from "react-icons/fa";

const orders = [
  {
    id: "ORD-1001",
    items: [
      {
        product: { name: "Instant Chicken Noodles" },
        quantity: 2,
      },
      {
        product: { name: "Fresh Red Apples" },
        quantity: 1,
      },
    ],
    address: {
      firstName: "John",
      lastName: "Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipcode: "10001",
      country: "USA",
    },
    amount: 12.47,
    paymentType: "Credit Card",
    orderDate: "Aug 28, 2026",
    isPaid: true,
    status: "Delivered",
  },
  {
    id: "ORD-1002",
    items: [
      {
        product: { name: "Fresh Tomatoes" },
        quantity: 2,
      },
      {
        product: { name: "Cheddar Cheese" },
        quantity: 1,
      },
    ],
    address: {
      firstName: "John",
      lastName: "Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipcode: "10001",
      country: "USA",
    },
    amount: 14.97,
    paymentType: "Credit Card",
    orderDate: "Aug 29, 2026",
    isPaid: true,
    status: "Out for Delivery",
  },
  {
    id: "ORD-1003",
    items: [
      {
        product: { name: "Orange Juice" },
        quantity: 1,
      },
      {
        product: { name: "Whole Wheat Bread" },
        quantity: 1,
      },
    ],
    address: {
      firstName: "John",
      lastName: "Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipcode: "10001",
      country: "USA",
    },
    amount: 7.48,
    paymentType: "Cash on Delivery",
    orderDate: "Aug 30, 2026",
    isPaid: false,
    status: "Processing",
  },
];

export default function OrdersPage() {
  return (
    <FrontendLayout>
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-primary">
            Your purchases
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-text md:text-3xl">
            My Orders
          </h1>

          <p className="mt-2 text-sm text-muted">
            View and track your grocery orders.
          </p>
        </div>

        {/* Orders */}
        <div className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              {/* Order Header */}
              <div className="flex flex-col gap-3 border-b border-border bg-background px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FaBox size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-text">
                      Order #{order.id}
                    </p>

                    <p className="text-xs text-muted">
                      Placed on {order.orderDate}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  {order.status === "Delivered" && (
                    <FaCheckCircle className="text-success" size={14} />
                  )}

                  {order.status === "Out for Delivery" && (
                    <FaTruck className="text-primary" size={14} />
                  )}

                  {order.status === "Processing" && (
                    <FaClock className="text-accent" size={14} />
                  )}

                  <span
                    className={`text-sm font-medium ${
                      order.status === "Delivered"
                        ? "text-success"
                        : order.status === "Out for Delivery"
                        ? "text-primary"
                        : "text-accent"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Order Content */}
              <div className="grid gap-6 p-5 md:grid-cols-[1.5fr_1fr_1fr]">
                {/* Products */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-text">
                    Items
                  </h3>

                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background">
                          <FaBox
                            size={14}
                            className="text-primary"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-text">
                            {item.product.name}
                          </p>

                          <p className="text-xs text-muted">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-text">
                    Delivery Address
                  </h3>

                  <div className="text-sm leading-6 text-muted">
                    <p className="font-medium text-text">
                      {order.address.firstName}{" "}
                      {order.address.lastName}
                    </p>

                    <p>{order.address.street}</p>

                    <p>
                      {order.address.city}, {order.address.state}{" "}
                      {order.address.zipcode}
                    </p>

                    <p>{order.address.country}</p>
                  </div>
                </div>

                {/* Payment */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-text">
                    Order Summary
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted">Total</span>
                      <span className="font-semibold text-text">
                        ${order.amount.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-muted">Payment</span>
                      <span className="text-text">
                        {order.paymentType}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-muted">Status</span>

                      <span
                        className={
                          order.isPaid
                            ? "font-medium text-success"
                            : "font-medium text-accent"
                        }
                      >
                        {order.isPaid ? "Paid" : "Pending"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                  {order.items.length}{" "}
                  {order.items.length === 1 ? "item" : "items"} in this
                  order
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </FrontendLayout>
  );
}