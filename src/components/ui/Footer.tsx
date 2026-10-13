import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <span className="text-lg font-bold">G</span>
              </div>

              <span className="text-xl font-bold text-text">
                Grocery<span className="text-primary">Cart</span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Fresh groceries and everyday essentials delivered straight to
              your doorstep.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <FiFacebook size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <FiInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <FiTwitter size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted transition hover:text-primary"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-muted transition hover:text-primary"
                >
                  Shop
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-muted transition hover:text-primary"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-muted transition hover:text-primary"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-muted transition hover:text-primary"
                >
                  My Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text">
              Customer Service
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted transition hover:text-primary"
                >
                  Delivery Information
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-muted transition hover:text-primary"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-muted transition hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-muted transition hover:text-primary"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-muted transition hover:text-primary"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FiMapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-primary"
                />

                <p className="text-muted">
                  123 Market Street
                  <br />
                  Lagos, Nigeria
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone size={18} className="shrink-0 text-primary" />

                <a
                  href="tel:+2348000000000"
                  className="text-muted transition hover:text-primary"
                >
                  +234 800 000 0000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiMail size={18} className="shrink-0 text-primary" />

                <a
                  href="mailto:support@grocerygo.com"
                  className="text-muted transition hover:text-primary"
                >
                  support@grocerycart.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-center text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} GroceryCart. All rights reserved.</p>

          <p>
            Fresh groceries, delivered{" "}
            <span className="font-medium text-primary">with care.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}