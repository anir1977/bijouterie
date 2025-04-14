import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const MerciPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-white shadow-md border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-amber-700 h-3"></div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-center mb-6">
                Merci pour votre commande !
              </h1>

              <div className="space-y-6 text-center">
                <p className="text-lg">
                  Votre commande a été enregistrée avec succès.
                </p>

                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 text-left">
                  <h2 className="text-xl font-semibold mb-4 text-amber-800">
                    Prochaines étapes :
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-amber-200 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-amber-800 font-bold text-sm">
                          1
                        </span>
                      </div>
                      <span>
                        Un conseiller vous contactera par téléphone dans les 24h
                        pour confirmer les détails de votre commande.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-amber-200 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-amber-800 font-bold text-sm">
                          2
                        </span>
                      </div>
                      <span>
                        Votre commande sera préparée et expédiée sous 24-48h.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-amber-200 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-amber-800 font-bold text-sm">
                          3
                        </span>
                      </div>
                      <span>
                        Livraison gratuite partout au Maroc sous 2-4 jours
                        ouvrables.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-amber-200 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-amber-800 font-bold text-sm">
                          4
                        </span>
                      </div>
                      <span>
                        Paiement à la livraison - vérifiez votre bijou avant de
                        payer.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-4">Besoin d'aide ?</h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      +212 661 180 440
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      contact@bendaoud.ma
                    </Button>
                  </div>
                </div>

                <div className="pt-6">
                  <Link to="/boutique">
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Continuer vos achats
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MerciPage;
