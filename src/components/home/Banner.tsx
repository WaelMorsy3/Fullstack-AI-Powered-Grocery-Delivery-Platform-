import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* Desktop Background */}
      <Image
        src="/images/main-banner-bg.png"
        className="hidden h-auto w-full md:block"
        width={2000}
        height={700}
        alt="Fresh groceries"
      />

      {/* Mobile Background */}
      <Image
        src="/images/main-banner-bg-sm.png"
        className="block h-auto w-full md:hidden"
        width={1000}
        height={1200}
        alt="Fresh groceries"
      />

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center w-full px-5 sm:px-8 md:px-14 lg:px-20 pb-26 md:pb-0">
       
          

          <h1 className="max-w-70  font-bold leading-tight text-text sm:max-w-md text-3xl md:max-w-lg md:text-5xl lg:text-6xl text-center md:text-left">
            Fresh Groceries.
            <br />
            
              Delivered to Your Door.
            
          </h1>

        
          <Link href="/products" className="mt-4 cursor-pointer rounded-md bg-primary  font-semibold text-white transition hover:bg-primary-hover sm:mt-6 px-7 py-3 text-sm">
            Shop Now
          </Link>
        </div>
      </div>

  );
}