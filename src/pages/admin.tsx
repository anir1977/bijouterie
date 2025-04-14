import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, User } from "lucide-react";
import Dashboard from "@/components/admin/Dashboard";
import Products from "@/components/admin/Products";
import Orders from "@/components/admin/Orders";
import SEO from "@/components/admin/SEO";
import Settings from "@/components/admin/Settings";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// This will be replaced with actual components as they are implemented
const PlaceholderComponent = ({ title }: { title: string }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    <p>Cette section est en cours de développement.</p>
  </div>
);

const AdminLogin = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated =
      localStorage.getItem("adminAuthenticated") === "true";
    if (isAuthenticated) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple authentication for demo purposes
    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        localStorage.setItem("adminAuthenticated", "true");
        setIsLoggedIn(true);
      } else {
        setError("Identifiants incorrects. Veuillez réessayer.");
      }
      setIsLoading(false);
    }, 1000);
  };

  if (isLoggedIn) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-4"
      >
        <Card className="border-amber-200 shadow-lg">
          <CardHeader className="space-y-1 text-center bg-amber-50">
            <CardTitle className="text-2xl font-bold text-amber-800">
              Administration
            </CardTitle>
            <p className="text-gray-500">Bijouterie Ben Daoud</p>
          </CardHeader>
          <CardContent className="pt-6">
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Bijouterie Ben Daoud - Tous droits
              réservés
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

// Simple admin layout with placeholder content
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-amber-600">Ben Daoud</span>
            <span className="ml-2 text-sm font-medium">Admin</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-gray-500 hover:text-red-500"
          >
            Déconnexion
          </Button>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-64px)] sticky top-16">
          <nav className="p-4 space-y-1">
            <a
              href="/admin/dashboard"
              className="flex items-center space-x-3 px-3 py-2 rounded-md transition-colors hover:bg-gray-100"
            >
              <span>Tableau de bord</span>
            </a>
            <a
              href="/admin/products"
              className="flex items-center space-x-3 px-3 py-2 rounded-md transition-colors hover:bg-gray-100"
            >
              <span>Produits</span>
            </a>
            <a
              href="/admin/orders"
              className="flex items-center space-x-3 px-3 py-2 rounded-md transition-colors hover:bg-gray-100"
            >
              <span>Commandes</span>
            </a>
            <a
              href="/admin/seo"
              className="flex items-center space-x-3 px-3 py-2 rounded-md transition-colors hover:bg-gray-100"
            >
              <span>SEO</span>
            </a>
            <a
              href="/admin/settings"
              className="flex items-center space-x-3 px-3 py-2 rounded-md transition-colors hover:bg-gray-100"
            >
              <span>Paramètres</span>
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

const AdminPage = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route
        path="/dashboard"
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/products"
        element={
          <AdminLayout>
            <Products />
          </AdminLayout>
        }
      />
      <Route
        path="/orders"
        element={
          <AdminLayout>
            <Orders />
          </AdminLayout>
        }
      />
      <Route
        path="/seo"
        element={
          <AdminLayout>
            <SEO />
          </AdminLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <AdminLayout>
            <Settings />
          </AdminLayout>
        }
      />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default AdminPage;
