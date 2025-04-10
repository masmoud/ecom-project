import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link className="hover:text-blue-600 font-bold text-2xl" href="/">
          My<span className="text-blue-600">Ecommerce</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link className="hover:text-blue-600" href="/products">
            Products
          </Link>
          <Link className="hover:text-blue-600" href="/checkout">
            Checkout
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4"></div>
    </nav>
  );
};
