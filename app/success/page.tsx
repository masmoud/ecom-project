"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const { clearCart } = useCartStore();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    clearCart();
    setIsLoaded(true);
  }, [clearCart]);

  if (!isLoaded) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">
          <div className="h-12 w-12 mx-auto rounded-full bg-gray-200 mb-4"></div>
          <div className="h-8 w-64 mx-auto bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-96 mx-auto bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircleIcon className="h-10 w-10 text-green-500" />
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mb-4 text-gray-800">
          Payment successful!
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6 text-gray-600">
          Your order has been successfully placed. You will receive an email with the details of
          your order soon.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/products">Continue shopping</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back to home</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
