import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load pages for better performance
const BoutiquePage = lazy(() => import("./pages/boutique"));
const QuiSommesNousPage = lazy(() => import("./pages/qui-sommes-nous"));
const ContactPage = lazy(() => import("./pages/contact"));
const LivraisonPage = lazy(() => import("./pages/livraison"));
const ProductPage = lazy(() => import("./pages/product/[id]"));
const CheckoutPage = lazy(() => import("./pages/checkout"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Chargement...
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<BoutiquePage />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNousPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/livraison" element={<LivraisonPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Add this before the catchall route */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
