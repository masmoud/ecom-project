"use client";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "My Ecommerce",
    description:
      "A modern e-commerce platform with secure Stripe payments and a great shopping experience",
    url: "https://myecommerce.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://myecommerce.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
