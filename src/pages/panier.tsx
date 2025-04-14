import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const PanierPage = () => {
  // Initialize cart from localStorage or use empty array if none exists
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );

    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleRemoveItem = (id: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    // Livraison gratuite
    return subtotal;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-grow sm:ml-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-lg font-medium">{item.name}</h3>
                          <p className="text-amber-600 font-semibold mt-1">
                            {item.price.toLocaleString()} MAD
                          </p>
                        </div>
                        <div className="flex items-center mt-4 sm:mt-0">
                          <div className="flex items-center border rounded-md mr-4">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="p-2 hover:bg-gray-100 rounded-l-md"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="p-2 hover:bg-gray-100 rounded-r-md"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6 sticky top-24"
              >
                <h2 className="text-xl font-semibold mb-4">
                  Résumé de la commande
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Sous-total</span>
                    <span>{calculateSubtotal().toLocaleString()} MAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Livraison</span>
                    <span className="text-green-600">Gratuite</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{calculateTotal().toLocaleString()} MAD</span>
                  </div>

                  <div className="pt-4">
                    <Link to="/checkout">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">
                        Passer à la caisse
                      </Button>
                    </Link>
                    <Link to="/boutique">
                      <Button
                        variant="outline"
                        className="w-full mt-3 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                      >
                        Continuer vos achats
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8 text-center"
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-10 w-10 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">Votre panier est vide</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Vous n'avez pas encore ajouté d'articles à votre panier.
                Découvrez notre collection de bijoux et montres de luxe.
              </p>
              <Link to="/boutique">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Découvrir la boutique
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PanierPage;
