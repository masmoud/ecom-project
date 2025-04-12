"use client";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { CartIcon } from "./cart-icon";
import { Button } from "./ui/button";

export const Navbar = () => {
  const { isOpen, setIsOpen } = useMobileMenu();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="font-bold">
          <span className="text-blue-600">My</span>
          <span className="text-gray-600">Ecommerce</span>
        </Link>
        <div className="hidden md:flex text-sm space-x-6">
          <Link href="/" className="hover:text-blue-600 font-semibold">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600 font-semibold">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600 font-semibold">
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <CartIcon />
          <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <div
        className={clsx(
          "md:hidden bg-white shadow-md transition-all duration-300 ease-in-out transform",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
        <nav>
          <ul className="flex flex-col p-4 space-y-2 font-semibold text-sm">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="block hover:text-blue-600">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};
