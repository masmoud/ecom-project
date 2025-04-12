"use server";
import { stripe } from "@/lib/stripe";
import { CartItem } from "@/store/cart-store";
import { redirect } from "next/navigation";
import Stripe from "stripe";

export const checkoutAction = async (formData: FormData): Promise<void> => {
  const items = JSON.parse(formData.get("items") as string);

  const line_items = items.map((item: CartItem) => ({
    price_data: {
      currency: "eur",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
  });

  redirect(session.url!);
};

export const getCheckoutSession = async (sessionId: string): Promise<Stripe.Checkout.Session> => {
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return session;
};
