import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Bell } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const MonComptePage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [preferences, setPreferences] = useState({
    colliers: true,
    bracelets: true,
    bagues: true,
    bouclesOreilles: true,
    montres: true,
    parures: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

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
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Newsletter
            </h1>
            <p className="text-gray-600">
              Inscrivez-vous pour recevoir nos nouveautés et offres exclusives
            </p>
          </div>

          <Card className="bg-white shadow-md border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-amber-700 h-3"></div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-amber-600" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-center mb-6">
                Restez informé
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse e-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Catégories qui vous intéressent</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="colliers"
                        checked={preferences.colliers}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            colliers: checked as boolean,
                          })
                        }
                      />
                      <label
                        htmlFor="colliers"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Colliers
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="bracelets"
                        checked={preferences.bracelets}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            bracelets: checked as boolean,
                          })
                        }
                      />
                      <label
                        htmlFor="bracelets"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Bracelets
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="bagues"
                        checked={preferences.bagues}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            bagues: checked as boolean,
                          })
                        }
                      />
                      <label
                        htmlFor="bagues"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Bagues
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="bouclesOreilles"
                        checked={preferences.bouclesOreilles}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            bouclesOreilles: checked as boolean,
                          })
                        }
                      />
                      <label
                        htmlFor="bouclesOreilles"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Boucles d'oreilles
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="montres"
                        checked={preferences.montres}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            montres: checked as boolean,
                          })
                        }
                      />
                      <label
                        htmlFor="montres"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Montres
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="parures"
                        checked={preferences.parures}
                        onCheckedChange={(checked) =>
                          setPreferences({
                            ...preferences,
                            parures: checked as boolean,
                          })
                        }
                      />
                      <label
                        htmlFor="parures"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Parures & Ensembles
                      </label>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white"
                >
                  <Bell className="mr-2 h-4 w-4" /> S'abonner aux nouveautés
                </Button>

                {subscribed && (
                  <div className="bg-green-100 text-green-800 p-3 rounded-md text-center">
                    Merci pour votre inscription ! Vous recevrez bientôt nos
                    nouveautés.
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center mt-4">
                  En vous inscrivant, vous acceptez de recevoir nos emails
                  concernant nos nouveaux produits et offres spéciales. Vous
                  pouvez vous désabonner à tout moment.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Avantages de l'inscription
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-amber-600 font-bold text-sm">✓</span>
                </div>
                <span>
                  Soyez le premier à découvrir nos nouvelles collections
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-amber-600 font-bold text-sm">✓</span>
                </div>
                <span>Recevez des offres exclusives réservées aux abonnés</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-amber-600 font-bold text-sm">✓</span>
                </div>
                <span>
                  Soyez informé des ventes privées et événements spéciaux
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MonComptePage;
