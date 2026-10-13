import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section className="mt-20 px-6 md:mt-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/about.png"
            alt="Fresh groceries"
            width={800}
            height={650}
            className="h-auto w-full object-cover"
          />

          {/* Small Badge */}
          <div className="absolute bottom-5 left-5 rounded-xl bg-white px-5 py-4 shadow-lg">
            <p className="text-2xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted">Fresh & Quality</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            About GroceryCart
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-text md:text-4xl lg:text-5xl">
            Fresh groceries,
            <br />
            <span className="text-primary">delivered with care.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted md:text-base">
            GroceryCart makes it easy to get fresh groceries and everyday
            essentials delivered straight to your doorstep. From fresh fruits
            and vegetables to dairy, drinks, and pantry staples, we bring
            everything you need right to your door.
          </p>

          

          {/* Features */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="shrink-0 text-primary" size={19} />
              <span className="text-sm font-medium text-text">
                Fresh and quality products
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiCheckCircle className="shrink-0 text-primary" size={19} />
              <span className="text-sm font-medium text-text">
                Fast and reliable delivery
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiCheckCircle className="shrink-0 text-primary" size={19} />
              <span className="text-sm font-medium text-text">
                Easy and convenient shopping
              </span>
            </div>
          </div>

          {/* CTA */}
          <Link href="/products" className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover">
            Start Shopping
            <FiArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}