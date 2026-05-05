import { Suspense, lazy, useState } from "react";

const Banner = lazy(() => import("banner/Banner"));
const ProductList = lazy(() => import("products/ProductList"));
const Cart = lazy(() => import("cart/Cart"));

export default function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        background: "#fafafa",
      }}
    >
      <Suspense fallback={<div>Загрузка баннера...</div>}>
        <Banner />
      </Suspense>

      <div
        style={{
          maxWidth: 960,
          margin: "2rem auto",
          padding: "0 1rem",
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        <Suspense fallback={<div>Загрузка товаров...</div>}>
          <ProductList />
        </Suspense>

        <Suspense fallback={<div>Загрузка корзины...</div>}>
          <Cart />
        </Suspense>
      </div>
    </div>
  );
}
