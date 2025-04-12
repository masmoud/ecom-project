# E-commerce Application

A modern e-commerce application built with **Next.js**, **Tailwind CSS**, and **Stripe**.

## What I Learned from Implementing Stripe

This project gave me the opportunity to integrate **Stripe** for payment processing, where I learned and applied the following:

- **Stripe Checkout Integration**: Implemented Stripe’s hosted checkout page, making payment collection seamless with minimal effort.
- **Payment Flow Management**: Set up **success** and **payment-failed** URLs to handle different payment outcomes.
- **Testing with Stripe**: Used test cards to simulate payments, test edge cases, and ensure a smooth user experience.
- **Security Best Practices**: Leveraged **Stripe Elements** to ensure PCI compliance and secure card information handling.
- **Stripe Dashboard**: Gained hands-on experience with the **Stripe Dashboard** for monitoring and debugging payment flows.

---

## Screenshots

### Home Page

![Home Page](./public/screenshots/home-page.png)

### Products Page

![Product Page](./public/screenshots/products-page.png)

### Product Details Page

![Product Details Page](./public/screenshots/product-details-page.png)

### Checkout Page

![Checkout Page](./public/screenshots/checkout-page.png)

### Stripe Payment

![Stripe Payment](./public/screenshots/stripe-payment.png)

### Checkout Success Page

![Checkout Success Page](./public/screenshots/checkout-success-page.png)

---

## Current Features

- Responsive design with **Tailwind CSS**
- **Stripe** payment integration (test mode)
- Persistent shopping cart with **Zustand**
- Modern and intuitive user interface
- Performance optimization
- Demo banner for Stripe test cards
- Success payment page

---

## Features to Implement

- **Authentication**: Registration, login, social login (Google), and route protection with JWT
- **Backend**: Use **Next.js API Routes**, **Prisma ORM**, **PostgreSQL**, and secure API endpoints
- **User Profile**: Profile management, order history, address management

---

## Proposed Technical Stack

- **Frontend**: **Next.js**, **React**, **Tailwind CSS**, **Zustand** (state management), **Framer Motion** (animations)
- **Backend**: **Next.js API Routes**, **Prisma ORM**, **PostgreSQL**, **JWT** for authentication
- **Payments**: **Stripe** for secure payment processing

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- **Stripe** account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/masmoud/ecom-app.git
cd ecom-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure environment variables in `.env.local`:

```
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Project Structure

```
ecom-app/
├── app/                  # Next.js App Router directory
│   ├── api/              # API routes
│   ├── checkout/         # Checkout page
│   ├── products/         # Product pages
│   ├── success/          # Payment success page
│   ├── failure/          # Payment failure page
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── navbar.tsx        # Navigation bar
│   ├── product-card.tsx  # Product card
│   └── ...
├── lib/                  # Utilities and configurations
│   ├── stripe.ts         # Stripe configuration
│   └── utils.ts          # Utility functions
├── store/                # Global state (Zustand)
│   └── cart-store.ts     # Cart store
└── ...
```

---

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.
