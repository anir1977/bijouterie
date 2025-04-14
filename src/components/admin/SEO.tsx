import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Search,
  Share2,
  Tag,
  FileText,
  Save,
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

const SEO = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Optimisation SEO</h1>
        <p className="text-muted-foreground">
          Améliorez la visibilité de votre boutique en ligne
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="general">
            <Globe className="h-4 w-4 mr-2" /> Général
          </TabsTrigger>
          <TabsTrigger value="pages">
            <FileText className="h-4 w-4 mr-2" /> Pages
          </TabsTrigger>
          <TabsTrigger value="social">
            <Share2 className="h-4 w-4 mr-2" /> Réseaux Sociaux
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres SEO Généraux</CardTitle>
              <CardDescription>
                Configurez les paramètres SEO globaux de votre site
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-title">Titre du Site</Label>
                <Input
                  id="site-title"
                  placeholder="Bijouterie Ben Daoud - Bijoux en Or 18K et Montres de Luxe"
                  defaultValue="Bijouterie Ben Daoud - Bijoux en Or 18K et Montres de Luxe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="site-description">Description du Site</Label>
                <Textarea
                  id="site-description"
                  placeholder="Bijouterie Ben Daoud, spécialiste des bijoux en or 18K et montres de luxe au Maroc depuis 1993. Livraison gratuite et paiement à la livraison disponibles."
                  defaultValue="Bijouterie Ben Daoud, spécialiste des bijoux en or 18K et montres de luxe au Maroc depuis 1993. Livraison gratuite et paiement à la livraison disponibles."
                  className="min-h-24"
                />
                <p className="text-xs text-muted-foreground">
                  Cette description apparaîtra dans les résultats de recherche
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Mots-clés</Label>
                <Textarea
                  id="keywords"
                  placeholder="bijoux or 18k, montres de luxe, bijouterie maroc, bijoux diamant, livraison gratuite bijoux"
                  defaultValue="bijoux or 18k, montres de luxe, bijouterie maroc, bijoux diamant, livraison gratuite bijoux"
                  className="min-h-24"
                />
                <p className="text-xs text-muted-foreground">
                  Séparez les mots-clés par des virgules
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="robots">Indexation des Robots</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="robots"
                    defaultValue="index, follow"
                    className="flex-1"
                  />
                  <Button variant="outline" size="sm">
                    Réinitialiser
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Contrôle comment les moteurs de recherche indexent votre site
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => alert("Paramètres SEO enregistrés avec succès")}
              >
                <Save className="h-4 w-4 mr-2" /> Enregistrer les modifications
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Analyse SEO</CardTitle>
              <CardDescription>
                Aperçu de la performance SEO de votre site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Balises de titre optimisées</h3>
                    <p className="text-sm text-muted-foreground">
                      Toutes vos pages ont des titres uniques et descriptifs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Structure des URL</h3>
                    <p className="text-sm text-muted-foreground">
                      Vos URLs sont propres et descriptives
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Texte alternatif des images</h3>
                    <p className="text-sm text-muted-foreground">
                      8 images n'ont pas de texte alternatif
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Vitesse de chargement</h3>
                    <p className="text-sm text-muted-foreground">
                      La vitesse de chargement mobile peut être améliorée
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                onClick={() => alert("Analyse SEO en cours...")}
              >
                <Search className="h-4 w-4 mr-2" /> Analyser à nouveau
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SEO des Pages</CardTitle>
              <CardDescription>
                Optimisez chaque page individuellement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Page d'accueil</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        alert(
                          "Modification des paramètres SEO de la page d'accueil",
                        )
                      }
                    >
                      Modifier
                    </Button>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                    <div className="text-blue-600 text-lg font-medium">
                      Bijouterie Ben Daoud - Bijoux en Or 18K et Montres de Luxe
                    </div>
                    <div className="text-green-600 text-xs">
                      https://bijouterie-bendaoud.ma/
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      Bijouterie Ben Daoud, spécialiste des bijoux en or 18K et
                      montres de luxe au Maroc depuis 1993. Livraison gratuite
                      et paiement à la livraison...
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Catalogue</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        alert("Modification des paramètres SEO du catalogue")
                      }
                    >
                      Modifier
                    </Button>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                    <div className="text-blue-600 text-lg font-medium">
                      Catalogue de Bijoux en Or 18K et Montres | Bijouterie Ben
                      Daoud
                    </div>
                    <div className="text-green-600 text-xs">
                      https://bijouterie-bendaoud.ma/catalogue
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      Découvrez notre collection de bijoux en or 18 carats et
                      montres de luxe. Colliers, bracelets, bagues et montres
                      livrés partout au Maroc...
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">À propos</h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        alert(
                          "Modification des paramètres SEO de la page À propos",
                        )
                      }
                    >
                      Modifier
                    </Button>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                    <div className="text-blue-600 text-lg font-medium">
                      À propos de Bijouterie Ben Daoud | 30 ans d'expertise
                    </div>
                    <div className="text-green-600 text-xs">
                      https://bijouterie-bendaoud.ma/a-propos
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      Depuis 1993, Bijouterie Ben Daoud est une référence dans
                      le domaine des bijoux en or 18 carats et des montres de
                      luxe au Maroc...
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Intégration Réseaux Sociaux</CardTitle>
              <CardDescription>
                Optimisez le partage de votre contenu sur les réseaux sociaux
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="og-title">Titre Open Graph</Label>
                <Input
                  id="og-title"
                  placeholder="Bijouterie Ben Daoud - Bijoux de Luxe au Maroc"
                  defaultValue="Bijouterie Ben Daoud - Bijoux de Luxe au Maroc"
                />
                <p className="text-xs text-muted-foreground">
                  Ce titre s'affichera lors du partage sur Facebook, LinkedIn,
                  etc.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="og-description">Description Open Graph</Label>
                <Textarea
                  id="og-description"
                  placeholder="Découvrez notre collection exclusive de bijoux en or 18K et montres de luxe. Livraison gratuite partout au Maroc."
                  defaultValue="Découvrez notre collection exclusive de bijoux en or 18K et montres de luxe. Livraison gratuite partout au Maroc."
                  className="min-h-24"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="og-image">Image Open Graph</Label>
                <div className="border-2 border-dashed rounded-md p-4 text-center">
                  <img
                    src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=800&q=80"
                    alt="Open Graph Preview"
                    className="mx-auto h-40 object-cover rounded-md mb-2"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      alert("Sélection d'une nouvelle image Open Graph")
                    }
                  >
                    Changer l'image
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Recommandé: 1200 x 630 pixels
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Aperçu Facebook</Label>
                <div className="border rounded-md p-4 bg-gray-50 dark:bg-gray-800">
                  <div className="max-w-md mx-auto">
                    <div className="rounded-t-md overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=800&q=80"
                        alt="Facebook Preview"
                        className="w-full h-52 object-cover"
                      />
                    </div>
                    <div className="border-x border-b rounded-b-md p-3 bg-white dark:bg-gray-700">
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                        bijouterie-bendaoud.ma
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        Bijouterie Ben Daoud - Bijoux de Luxe au Maroc
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        Découvrez notre collection exclusive de bijoux en or 18K
                        et montres de luxe. Livraison gratuite partout au Maroc.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() =>
                  alert("Paramètres réseaux sociaux enregistrés avec succès")
                }
              >
                <Save className="h-4 w-4 mr-2" /> Enregistrer les modifications
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEO;
