import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,

  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const order = {
  id: "ORD-1001",
  customer: {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
  },

  address: {
    firstName: "John",
    lastName: "Doe",
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipcode: "10001",
    country: "USA",
  },

  items: [
    {
      id: 1,
      name: "Fresh Red Apples",
      category: "Fresh Fruits",
      image: "/images/product-2.png",
      price: 4.99,
      quantity: 2,
      unit: "1 kg",
    },
    {
      id: 2,
      name: "Cheddar Cheese",
      category: "Dairy Products",
      image: "/images/product-15.png",
      price: 7.99,
      quantity: 1,
      unit: "250 g",
    },
    {
      id: 3,
      name: "Instant Chicken Noodles",
      category: "Instant Foods",
      image: "/images/product-21.png",
      price: 2.49,
      quantity: 3,
      unit: "5 Pack",
    },
  ],

  paymentMethod: "Stripe",
  paymentStatus: "Paid",
  orderStatus: "Delivered",
  orderDate: "Aug 31, 2026",
  shippingFee: 0,
};

const statusStyles: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
};

export default function OrderPage() {
  const subtotal = order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.02;
  const total = subtotal + tax + order.shippingFee;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/admin/orders"
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted transition hover:text-primary"
        >
          <FaArrowLeft size={13} />
          Back to Orders
        </Link>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-text">
              Order {order.id}
            </h1>

            <p className="mt-1 text-sm text-muted">
              Placed on {order.orderDate}
            </p>
          </div>

          <span
            className={`w-fit rounded-full px-4 py-2 text-sm font-medium ${
              statusStyles[order.orderStatus]
            }`}
          >
            {order.orderStatus}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Order Items */}
          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-semibold text-text">Order Items</h2>
            </div>

            <div className="divide-y divide-border">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-5"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background">
                    <Image
                    width={80}
                    height={80}
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <p className="truncate font-medium text-text">
                      {item.name}
                    </p>

                    <p className="mt-1 text-sm text-muted">
                      {item.category}
                    </p>

                    <p className="mt-1 text-sm text-muted">
                      {item.unit} × {item.quantity}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-center">
                    <p className="font-medium text-text">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <p className="mt-1 text-xs text-muted">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Information */}
          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-semibold text-text">
                Customer Information
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase text-muted">
                  Name
                </p>
                <p className="mt-1 text-sm font-medium text-text">
                  {order.customer.name}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-muted">
                  Email
                </p>
                <p className="mt-1 break-all text-sm font-medium text-text">
                  {order.customer.email}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase text-muted">
                  Phone
                </p>
                <p className="mt-1 text-sm font-medium text-text">
                  {order.customer.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-5 py-4">
              <FaMapMarkerAlt className="text-primary" />

              <h2 className="font-semibold text-text">
                Delivery Address
              </h2>
            </div>

            <div className="p-5 text-sm text-muted">
              <p className="font-medium text-text">
                {order.address.firstName} {order.address.lastName}
              </p>

              <p className="mt-1">
                {order.address.street}
              </p>

              <p>
                {order.address.city}, {order.address.state}{" "}
                {order.address.zipcode}
              </p>

              <p>{order.address.country}</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-semibold text-text">
                Order Summary
              </h2>
            </div>

            <div className="space-y-3 p-5 text-sm">
              <div className="flex justify-between text-muted">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-muted">
                <span>Shipping</span>

                <span className="font-medium text-success">
                  {order.shippingFee === 0
                    ? "Free"
                    : `$${order.shippingFee.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-muted">
                <span>Tax (2%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="my-4 border-t border-border" />

              <div className="flex justify-between text-base font-semibold text-text">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-semibold text-text">
                Payment Information
              </h2>
            </div>

            <div className="space-y-4 p-5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">
                  Payment Method
                </span>

                <span className="font-medium text-text">
                  {order.paymentMethod}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted">
                  Payment Status
                </span>

                <span className="flex items-center gap-1.5 font-medium text-success">
                  <FaCheckCircle size={13} />
                  {order.paymentStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Order Status */}
          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-5 py-4">
              <h2 className="font-semibold text-text">
                Order Status
              </h2>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F7EF] text-primary">
                  {order.orderStatus === "Delivered" ? (
                    <FaCheckCircle size={16} />
                  ) : (
                    <FaClock size={16} />
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium text-text">
                    {order.orderStatus}
                  </p>

                  <p className="text-xs text-muted">
                    Current order status
                  </p>
                </div>
              </div>

              <select
                defaultValue={order.orderStatus}
                className="mt-5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              >
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>

              <button className="mt-3 w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover">
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}