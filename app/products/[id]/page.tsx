import { ProductDetails } from "@/components/product-details";
import { stripe } from "@/lib/stripe";
import { parseStringify } from "@/lib/utils";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images,
    },
  };
};

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
