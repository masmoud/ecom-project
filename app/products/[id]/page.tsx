import { ProductDetails } from "@/components/product-details";
import { stripe } from "@/lib/stripe";
import { parseStringify } from "@/lib/utils";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });
  if (!product) {
    notFound();
  }

  const normalizedProduct = parseStringify(product);

  return <ProductDetails product={normalizedProduct} />;
};

export default ProductPage;
