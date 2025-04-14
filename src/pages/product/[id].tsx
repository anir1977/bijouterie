import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ArrowLeft, Heart, Share2, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import ProductGrid from "@/components/ProductGrid";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

interface ProductDetails {
  id: string;
  name: string;
  price: number;
  description: string;
  material: string;
  weight: string;
  dimensions: string;
  images: ProductImage[];
  rating: number;
  inStock: boolean;
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app, this would be fetched from an API
  const product: ProductDetails = {
    id: id || "1",
    name: "Collier en Or 18K avec Diamants",
    price: 12500,
    description:
      "Ce magnifique collier en or 18 carats est orné de diamants de la plus haute qualité. Parfait pour les occasions spéciales, il apportera une touche d'élégance intemporelle à votre tenue. Chaque diamant est soigneusement sélectionné pour sa clarté et son éclat.",
    material: "Or 18K, Diamants",
    weight: "8.5g",
    dimensions: "Longueur: 45cm, Largeur: 0.3cm",
    images: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
        alt: "Collier en or vue de face",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
        alt: "Collier en or vue de côté",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
        alt: "Collier en or porté",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
        alt: "Détail des diamants",
      },
    ],
    rating: 4.8,
    inStock: true,
  };

  // Mock related products
  const relatedProducts = [
    {
      id: "2",
      name: "Bracelet en Or 18K",
      price: 8900,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    },
    {
      id: "3",
      name: "Bague Diamant Solitaire",
      price: 15000,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    },
    {
      id: "4",
      name: "Boucles d'Oreilles Or 18K",
      price: 6500,
      image:
        "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80",
    },
    {
      id: "5",
      name: "Montre Festina Homme",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80",
    },
  ];

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-MA", {
      style: "currency",
      currency: "MAD",
    }).format(price);
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Back button */}
      <div className="container py-4">
        <Link to="/boutique">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Retour
          </Button>
        </Link>
      </div>

      <div className="container pb-16 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border bg-white">
              <img
                src={product.images[selectedImage].url}
                alt={product.images[selectedImage].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={image.id}
                  className={`aspect-square cursor-pointer overflow-hidden rounded-md border ${selectedImage === index ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {product.name}
              </h1>
              <div className="mt-2 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating} (120 avis)
                </span>
              </div>
            </div>

            <div className="text-3xl font-bold text-primary">
              {formatPrice(product.price)}
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Disponibilité:</span>
                <span
                  className={`${product.inStock ? "text-green-600" : "text-red-600"}`}
                >
                  {product.inStock ? "En stock" : "Rupture de stock"}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-medium">Quantité:</span>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="h-9 px-2"
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="h-9 px-2"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 flex-1"
                onClick={() => {
                  const savedCart = localStorage.getItem("cartItems");
                  const currentCart = savedCart ? JSON.parse(savedCart) : [];

                  // Check if item already exists in cart
                  const existingItemIndex = currentCart.findIndex(
                    (item: any) => item.id === product.id,
                  );

                  if (existingItemIndex >= 0) {
                    // Update quantity if item exists
                    currentCart[existingItemIndex].quantity += quantity;
                  } else {
                    // Add new item to cart
                    currentCart.push({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: quantity,
                      imageUrl: product.images[0].url,
                    });
                  }

                  localStorage.setItem(
                    "cartItems",
                    JSON.stringify(currentCart),
                  );
                  alert("Produit ajouté au panier");
                }}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ajouter au panier
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => alert("Produit ajouté aux favoris!")}
              >
                <Heart className="mr-2 h-4 w-4" />
                Ajouter aux favoris
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Lien copié! Vous pouvez maintenant le partager.");
                }}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-lg bg-muted p-4 text-sm">
              <p className="font-medium">
                ✓ Livraison gratuite partout au Maroc
              </p>
              <p className="font-medium">
                ✓ Paiement à la livraison disponible
              </p>
              <p className="font-medium">✓ Garantie d'authenticité</p>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3"
              >
                Spécifications
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent py-3"
              >
                Avis clients
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <div className="prose max-w-none">
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="pt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Matériau</h3>
                      <p className="text-muted-foreground">
                        {product.material}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Poids</h3>
                      <p className="text-muted-foreground">{product.weight}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Dimensions</h3>
                      <p className="text-muted-foreground">
                        {product.dimensions}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">Garantie</h3>
                      <p className="text-muted-foreground">2 ans</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Avis clients (120)</h3>
                  <Button>Écrire un avis</Button>
                </div>
                <div className="space-y-4">
                  {/* Mock reviews */}
                  {[1, 2, 3].map((review) => (
                    <Card key={review}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Client {review}</h4>
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < 5 - (review % 2) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            Il y a {review * 3} jours
                          </span>
                        </div>
                        <p className="mt-3 text-muted-foreground">
                          {review === 1
                            ? "Magnifique bijou, exactement comme sur les photos. La livraison a été rapide et le service client excellent."
                            : review === 2
                              ? "Très satisfaite de mon achat. La qualité est au rendez-vous et le prix est justifié pour un bijou en or 18K."
                              : "Superbe pièce, je l'ai offert à ma femme qui l'adore. Le paiement à la livraison est vraiment pratique."}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Vous pourriez aussi aimer</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>

      {/* Footer and WhatsApp Button */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;
