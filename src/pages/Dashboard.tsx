import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Sun, Moon } from "lucide-react";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Vérifier si l'utilisateur est déjà authentifié (via localStorage)
  useEffect(() => {
    const authStatus = localStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Gérer le mode sombre
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification simple des identifiants
    if (
      (username === "yubaspirit" && password === "kanouza2023@") ||
      (username === "admin" && password === "admin2025")
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuthenticated", "true");
      setError("");
    } else {
      setError("Identifiants incorrects");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuthenticated");
  };

  // Si l'utilisateur n'est pas authentifié, afficher le formulaire de connexion
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-amber-600">
              Administration
            </CardTitle>
            <CardDescription className="text-center">
              Connectez-vous pour accéder au tableau de bord
              <br />
              <span className="text-xs text-amber-600 mt-2 block">
                Identifiants: yubaspirit / kanouza2023@
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700"
              >
                Se connecter
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Si l'utilisateur est authentifié, afficher le tableau de bord
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-600">
            Tableau de Bord Admin
          </h1>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
              onClick={handleLogout}
            >
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="statistiques" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="statistiques">Statistiques</TabsTrigger>
            <TabsTrigger value="produits">Produits</TabsTrigger>
            <TabsTrigger value="commandes">Commandes</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>

          <TabsContent value="statistiques" className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Statistiques Générales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total des Ventes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0 MAD</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +0% depuis le mois dernier
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Nombre de Commandes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    0 en cours de livraison
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Nombre de Produits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Dans 6 catégories
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Nombre de Clients
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +0% depuis le mois dernier
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Évolution des ventes sur 30 jours</CardTitle>
                <CardDescription>Suivi des ventes quotidiennes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex items-end justify-between h-[240px] w-full px-2">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div key={i} className="relative group">
                        <div
                          className="w-6 bg-amber-600 rounded-t-sm transition-all duration-300 hover:bg-amber-500"
                          style={{
                            height: `${Math.floor(Math.random() * 100) + 20}px`,
                          }}
                        ></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none transition-opacity">
                          {`${Math.floor(Math.random() * 5000)} MAD`}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>1 Mai</span>
                    <span>15 Mai</span>
                    <span>30 Mai</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Produits les plus vendus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      "Bracelet en or 18K",
                      "Collier diamant",
                      "Bague saphir",
                      "Montre luxe",
                    ].map((product, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <span>{product}</span>
                        <span className="font-medium">
                          {Math.floor(Math.random() * 20) + 1} vendus
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Commandes récentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["CMD-001", "CMD-002", "CMD-003", "CMD-004"].map(
                      (order, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between"
                        >
                          <span>{order}</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800">
                            {["Livré", "En cours", "En préparation", "Payé"][i]}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-muted-foreground text-sm mt-4">
              Les statistiques seront mises à jour automatiquement lorsque des
              données seront disponibles.
            </p>
          </TabsContent>

          <TabsContent value="produits" className="space-y-6">
            <h2 className="text-xl font-bold mb-4">Gestion des Produits</h2>

            <Card>
              <CardHeader>
                <CardTitle>Ajouter un Nouveau Produit</CardTitle>
                <CardDescription>
                  Remplissez le formulaire pour ajouter un nouveau produit à
                  votre catalogue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="productName">Nom du produit</Label>
                      <Input
                        id="productName"
                        placeholder="Bracelet en or 18K"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Catégorie</Label>
                      <select
                        id="category"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Sélectionner une catégorie</option>
                        <option value="bracelets">Bracelets</option>
                        <option value="colliers">Colliers</option>
                        <option value="bagues">Bagues</option>
                        <option value="boucles">Boucles d'oreilles</option>
                        <option value="montres">Montres</option>
                        <option value="autres">Autres</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price">Prix (MAD)</Label>
                      <Input id="price" type="number" placeholder="1500" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stock">Quantité en stock</Label>
                      <Input id="stock" type="number" placeholder="10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description détaillée</Label>
                    <textarea
                      id="description"
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Description détaillée du produit..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="imageUrl">URL de l'image</Label>
                    <Input
                      id="imageUrl"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 w-full md:w-auto"
                  >
                    Ajouter le produit
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Liste des Produits</CardTitle>
                <CardDescription>
                  Gérez votre catalogue de produits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground text-center py-8">
                  Aucun produit n'a encore été ajouté.
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="commandes">
            <h2 className="text-xl font-bold mb-4">Gestion des Commandes</h2>
            <p className="text-muted-foreground">
              Cette section sera implémentée prochainement.
            </p>
          </TabsContent>

          <TabsContent value="seo">
            <h2 className="text-xl font-bold mb-4">
              Paramètres SEO & Référencement
            </h2>
            <p className="text-muted-foreground">
              Cette section sera implémentée prochainement.
            </p>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
