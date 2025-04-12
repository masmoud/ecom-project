// components/CartIcon.tsx
import { useCartStore } from "@/store/cart-store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CartIcon = () => {
  const { getCartCount, items } = useCartStore();
  const [cartCount, setCartCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setCartCount(getCartCount());
    }
  }, [mounted, getCartCount, items]);

  return (
    <Link href="/checkout" className="relative">
      <ShoppingCartIcon className="h-6 w-6 text-gray-800" />
      {mounted && cartCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white transition-transform">
          {cartCount}
        </span>
      )}
    </Link>
  );
};
