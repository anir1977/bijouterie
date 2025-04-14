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
const AdminPage = lazy(() => import("./pages/admin"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const MonComptePage = lazy(() => import("./pages/mon-compte"));
const MerciPage = lazy(() => import("./pages/merci"));
const PanierPage = lazy(() => import("./pages/panier"));

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
        {/* Tempo routes for storyboards */}
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<BoutiquePage />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNousPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/livraison" element={<LivraisonPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/mon-compte" element={<MonComptePage />} />
          <Route path="/merci" element={<MerciPage />} />
          <Route path="/panier" element={<PanierPage />} />

          {/* Add this before the catchall route */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
