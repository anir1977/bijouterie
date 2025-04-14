import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

const CheckoutPage = () => {
  // Mock cart data - in a real app, this would come from a cart context or state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Collier en Or 18K",
      price: 5800,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      id: "2",
      name: "Bracelet Diamant",
      price: 7200,
      quantity: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    },
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation would go here

    // In a real app, this would send the order to a backend
    console.log("Order submitted:", {
      customer: formData,
      items: cartItems,
      total: calculateTotal(),
      paymentMethod: "Paiement à la livraison",
    });

    // Redirect to thank you page
    window.location.href = "/merci";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Finaliser votre commande
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Customer Information Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4">
              Informations personnelles
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Nom complet *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phoneNumber">Numéro de téléphone *</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Exemple: 0661234567"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Adresse complète *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Ville, quartier, rue, etc."
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Remarques supplémentaires</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Instructions spéciales pour la livraison (facultatif)"
                    className="mt-1"
                  />
                </div>
              </div>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4">
              Résumé de la commande
            </h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Quantité: {item.quantity}
                    </p>
                  </div>
                  <div className="font-semibold text-primary">
                    {(item.price * item.quantity).toLocaleString()} MAD
                  </div>
                </div>
              ))}

              <Separator className="my-4" />

              <div className="flex justify-between items-center font-semibold">
                <span>Total</span>
                <span className="text-xl text-primary">
                  {calculateTotal().toLocaleString()} MAD
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Mode de paiement</h3>
                <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                    </div>
                    <span className="ml-2">Paiement à la livraison</span>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-6"
                size="lg"
                onClick={handleSubmit}
              >
                Confirmer la commande
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CheckoutPage;
