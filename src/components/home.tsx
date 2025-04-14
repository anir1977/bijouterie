import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import ProductGrid from "./ProductGrid";
import WhatsAppButton from "./WhatsAppButton";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  // Mock data for featured categories
  const featuredCategories = [
    {
      id: "1", // Changed to string to match Product interface
      name: "Colliers",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      price: 3500, // Changed to number to match Product interface
      category: "Colliers",
    },
    {
      id: "2", // Changed to string to match Product interface
      name: "Bracelets",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      price: 2800, // Changed to number to match Product interface
      category: "Bracelets",
    },
    {
      id: "3", // Changed to string to match Product interface
      name: "Bagues",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      price: 1950, // Changed to number to match Product interface
      category: "Bagues",
    },
    {
      id: "4", // Changed to string to match Product interface
      name: "Boucles d'oreilles",
      image:
        "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80",
      price: 1750, // Changed to number to match Product interface
      category: "Boucles d'oreilles",
    },
    {
      id: "5", // Changed to string to match Product interface
      name: "Parures & Ensembles",
      image:
        "https://images.unsplash.com/photo-1620656798932-902cbe7d3f1e?w=800&q=80",
      price: 5900, // Changed to number to match Product interface
      category: "Parures & Ensembles",
    },
    {
      id: "6", // Changed to string to match Product interface
      name: "Montres",
      image:
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
      price: 4200, // Changed to number to match Product interface
      category: "Montres",
    },
  ];

  // Mock data for special offers
  const specialOffers = [
    {
      id: 1,
      name: "Parure Diamant Élégance",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
      originalPrice: "12,500 MAD",
      discountedPrice: "9,900 MAD",
      discount: "20%",
    },
    {
      id: 2,
      name: "Montre Festina Prestige",
      image:
        "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=800&q=80",
      originalPrice: "5,800 MAD",
      discountedPrice: "4,350 MAD",
      discount: "25%",
    },
    {
      id: 3,
      name: "Bracelet Or Rose 18K",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      originalPrice: "3,900 MAD",
      discountedPrice: "2,925 MAD",
      discount: "25%",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-auto">
      {/* Header/Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=1200&q=80"
            alt="Luxury Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              L'élégance en or 18K
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Bijoux et montres de luxe livrés partout au Maroc
            </p>
            <div className="flex space-x-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Découvrir la Collection
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600"
              >
                Offres Spéciales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Nos Catégories</h2>
            <Button variant="link" className="text-amber-600 flex items-center">
              Voir tout <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <ProductGrid products={featuredCategories} />
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Offres Spéciales
            </h2>
            <Button variant="link" className="text-amber-600 flex items-center">
              Voir tout <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialOffers.map((offer) => (
              <Card
                key={offer.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-bold">
                    -{offer.discount}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-gray-400 line-through">
                      {offer.originalPrice}
                    </span>
                    <span className="text-xl font-bold text-amber-600">
                      {offer.discountedPrice}
                    </span>
                  </div>
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => {
                      const savedCart = localStorage.getItem("cartItems");
                      const currentCart = savedCart
                        ? JSON.parse(savedCart)
                        : [];

                      // Add special offer to cart
                      const newItem = {
                        id: `offer-${offer.id}`,
                        name: offer.name,
                        price: parseInt(
                          offer.discountedPrice.replace(/[^0-9]/g, ""),
                        ),
                        quantity: 1,
                        imageUrl: offer.image,
                      };

                      // Check if item already exists
                      const existingItemIndex = currentCart.findIndex(
                        (item: any) => item.id === newItem.id,
                      );

                      if (existingItemIndex >= 0) {
                        currentCart[existingItemIndex].quantity += 1;
                      } else {
                        currentCart.push(newItem);
                      }

                      localStorage.setItem(
                        "cartItems",
                        JSON.stringify(currentCart),
                      );
                      alert("Produit ajouté au panier");
                    }}
                  >
                    Ajouter au Panier
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="py-8 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 border border-amber-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Restez informé de nos nouveautés
                </h3>
                <p className="text-gray-600">
                  Inscrivez-vous à notre newsletter pour recevoir nos offres
                  exclusives
                </p>
              </div>
              <Link to="/mon-compte">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 whitespace-nowrap">
                  S'abonner maintenant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 30 Years Expertise Banner */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=800&q=80"
                alt="Jewelry Craftsmanship"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                30 Ans d'Expertise en Bijouterie
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Depuis 1993, Bijouterie Ben Daoud est une référence dans le
                  domaine des bijoux en or 18 carats et des montres de luxe au
                  Maroc.
                </p>
                <p className="text-lg">
                  Notre bijouterie familiale s'engage à vous offrir des pièces
                  raffinées, uniques et intemporelles, fabriquées avec le plus
                  grand soin.
                </p>
                <div className="flex space-x-4 pt-4">
                  <div className="flex items-center">
                    <Star
                      className="h-5 w-5 text-amber-500 mr-1"
                      fill="currentColor"
                    />
                    <Star
                      className="h-5 w-5 text-amber-500 mr-1"
                      fill="currentColor"
                    />
                    <Star
                      className="h-5 w-5 text-amber-500 mr-1"
                      fill="currentColor"
                    />
                    <Star
                      className="h-5 w-5 text-amber-500 mr-1"
                      fill="currentColor"
                    />
                    <Star
                      className="h-5 w-5 text-amber-500 mr-1"
                      fill="currentColor"
                    />
                  </div>
                  <span className="text-gray-700">
                    Plus de 10,000 clients satisfaits
                  </span>
                </div>
                <Button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white">
                  En Savoir Plus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery & Payment Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison Gratuite</h3>
              <p className="text-gray-600">
                Partout au Maroc, nous livrons gratuitement vos bijoux et
                montres en toute sécurité.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Paiement à la Livraison
              </h3>
              <p className="text-gray-600">
                Payez en toute confiance lors de la réception de votre commande
                (COD).
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Garantie Authentique
              </h3>
              <p className="text-gray-600">
                Tous nos bijoux sont en or 18K certifié et nos montres sont 100%
                authentiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
