

# 📦 Content Explorer — Frontend Assessment

A production-quality **Content Explorer** web application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

The app allows users to browse, search, filter, and view detailed information about products, with a strong focus on **performance, clean architecture, and UX consistency**.

---

## 🚀 Live Demo

👉 [Live URL](https://frontend-assessment-increase.vercel.app/products)

---

## 🛠 Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript (strict mode)
* **Styling:** Tailwind CSS (custom design system)
* **Data Source:** DummyJSON API
* **State Management:** React hooks + URL state
* **Testing:** Vitest + React Testing Library
* **Deployment:** Vercel

---

## 📚 Features

### ✅ Listing Page

* Server-side rendered product listing
* Displays 20+ items per page
* Fully responsive grid layout
* Product cards include:

  * Image (with fallback)
  * Title
  * Description
  * Price, rating, category
* Pagination with URL state

---

### ✅ Detail Page

* Dynamic route (`/products/[id]`)
* Server-side data fetching
* SEO metadata (`title`, `description`, `openGraph`)
* Breadcrumb navigation

---

### ✅ Search & Filtering

* Debounced search input (400ms)
* Category filter
* URL-driven state (`?q=...&category=...&page=...`)
* Shareable filtered views
* Pagination resets on filter/search changes

---

### ✅ UI States

* Skeleton loaders (`loading.tsx`)
* Error boundary (`error.tsx`)
* Empty state for no results

---

### ✅ Testing

* Unit tests using Vitest + React Testing Library
* Covered components:

  * ProductCard
  * Pagination

---

## 🧠 Architecture Decisions

### 1. App Router (Next.js 14+)

Chosen for:

* native support for Server Components
* improved routing and layouts
* better data fetching patterns

---

### 2. API Layer Abstraction

All API logic is centralized in:

```bash
/lib/api/products.ts
```

Benefits:

* separation of concerns
* reusable and testable logic
* components remain clean and focused on UI

---

### 3. URL-Driven State

Search, filters, and pagination are synchronized with the URL using:

* `useSearchParams`
* `router.replace`

Benefits:

* shareable URLs
* predictable navigation
* no hidden client state

---

### 4. Pagination over Infinite Scroll

Pagination was chosen instead of infinite scroll to ensure:

* predictable navigation and UX
* better accessibility
* easier URL state synchronization
* improved performance by limiting rendered items

---

### 5. Server vs Client Components

* Listing and detail pages are implemented as **Server Components** to reduce client bundle size and improve performance
* Interactive features (search, filtering, pagination controls) are implemented as **Client Components**
* This separation ensures efficient rendering while maintaining interactivity

---

### 6. Component Structure

Feature-based organization:

```bash
/components/products/
```

* `product-card`
* `product-grid`
* `search-controls`
* `pagination`
* `empty-state`

Benefits:

* modular and reusable components
* easier maintenance and scaling

---

### 7. Styling System

A custom design system was implemented using Tailwind theme tokens:

* Background: `#F8FAFC`
* Surface: `#FFFFFF`
* Text hierarchy:

  * Strong: `#0F172A`
  * Default: `#1E293B`
  * Muted: `#64748B`

Goals:

* consistent visual hierarchy
* improved readability
* production-level UI polish

---

## ⚡ Performance Optimizations

### 1. Image Optimization

* Used `next/image`
* responsive sizing
* automatic lazy loading

---

### 2. Server-Side Rendering

* Data fetched on the server
* reduces client-side JavaScript
* improves SEO and performance

---

### 3. Caching Strategy

* Leveraged Next.js `fetch` caching
* structured queries (`page`, `category`, `q`) for predictable caching behavior
* avoids unnecessary re-fetching

---

### 4. Layout Stability

* Fixed image aspect ratios to prevent layout shifts (CLS)
* consistent card sizing across all breakpoints

---

## 📊 Performance Targets

The application was built with Lighthouse metrics in mind:

* **LCP:** optimized via server-side rendering and image optimization
* **CLS:** minimized using fixed layouts and image sizing
* **INP:** reduced by limiting client-side JavaScript

---

## ⚖️ Trade-offs & Limitations

* Pagination used instead of infinite scroll for simplicity and better UX control
* No global state library (Zustand/Redux) — unnecessary for current scope
* Limited test coverage — focused on critical UI components
* No dark mode — prioritized core functionality and consistency

---

## 🔧 Setup Instructions

Clone the repository:

```bash
git clone https://github.com/Increaze/frontend-assessment-increase.git
cd frontend-assessment-increase
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Run tests:

```bash
npm run test
```

Build for production:

```bash
npm run build
```

---

## 🌱 What I Would Do Next (with 2 more hours)

* Implement edge caching with Cloudflare Workers
* Add accessibility improvements (ARIA roles, keyboard navigation)
* Expand test coverage to include search and filtering flows
* Introduce React Suspense for streaming server data

---

## 👤 Author

**Increase Lois Uwadiale**

---
