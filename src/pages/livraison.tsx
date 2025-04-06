import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Clock,
  CreditCard,
  ShieldCheck,
  HelpCircle,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const LivraisonPage = () => {
  // FAQ items
  const faqItems = [
    {
      question: "Combien de temps faut-il pour livrer ma commande ?",
      answer:
        "Le délai de livraison standard est de 2 à 4 jours ouvrables pour les grandes villes du Maroc (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir). Pour les autres villes et zones rurales, comptez 3 à 7 jours ouvrables.",
    },
    {
      question: "La livraison est-elle vraiment gratuite ?",
      answer:
        "Oui, nous offrons la livraison gratuite sur toutes les commandes, quelle que soit la valeur de votre achat ou votre localisation au Maroc.",
    },
    {
      question: "Comment puis-je suivre ma commande ?",
      answer:
        "Une fois votre commande expédiée, vous recevrez un email avec un numéro de suivi. Vous pourrez également suivre votre commande dans la section 'Mon Compte' sur notre site web.",
    },
    {
      question: "Que faire si je ne suis pas disponible lors de la livraison ?",
      answer:
        "Notre livreur vous contactera avant la livraison. Si vous n'êtes pas disponible, vous pourrez convenir d'une autre date ou d'un autre lieu de livraison.",
    },
    {
      question: "Les bijoux sont-ils livrés dans un emballage sécurisé ?",
      answer:
        "Absolument. Tous nos bijoux sont soigneusement emballés dans des boîtes élégantes et protégés pour éviter tout dommage pendant le transport. L'emballage est discret et ne mentionne pas la valeur du contenu pour des raisons de sécurité.",
    },
    {
      question:
        "Puis-je changer l'adresse de livraison après avoir passé ma commande ?",
      answer:
        "Oui, vous pouvez modifier l'adresse de livraison tant que votre commande n'a pas été expédiée. Contactez-nous rapidement par téléphone ou WhatsApp pour effectuer ce changement.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-auto">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Livraison & Paiement
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Nous nous engageons à vous offrir une expérience d'achat sans souci,
            avec une livraison gratuite partout au Maroc et des options de
            paiement flexibles.
          </p>

          {/* Delivery Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Notre processus de livraison
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Préparation</h3>
                <p className="text-gray-700">
                  Votre commande est soigneusement préparée et emballée dans nos
                  ateliers sous 24h.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expédition</h3>
                <p className="text-gray-700">
                  Votre colis est confié à notre service de livraison partenaire
                  avec un suivi en temps réel.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Réception</h3>
                <p className="text-gray-700">
                  Recevez votre bijou en main propre et vérifiez sa qualité
                  avant d'effectuer le paiement.
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Informations de livraison
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Truck className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Livraison gratuite</h3>
                  <p className="text-gray-600">
                    Nous offrons la livraison gratuite sur toutes les commandes,
                    quelle que soit la valeur de votre achat ou votre
                    localisation au Maroc.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Délais de livraison</h3>
                  <p className="text-gray-600">
                    2-4 jours ouvrables pour les grandes villes (Casablanca,
                    Rabat, Marrakech, Tanger, Fès, Agadir)
                    <br />
                    3-7 jours ouvrables pour les autres villes et zones rurales
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CreditCard className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Paiement à la livraison</h3>
                  <p className="text-gray-600">
                    Payez en espèces lors de la réception de votre commande.
                    Vous pouvez vérifier votre bijou avant de payer.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <ShieldCheck className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Sécurité et assurance</h3>
                  <p className="text-gray-600">
                    Tous nos envois sont assurés à 100% de leur valeur. En cas
                    de perte ou de dommage pendant le transport, nous vous
                    remplacerons l'article ou vous rembourserons intégralement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <HelpCircle className="h-6 w-6 mr-2 text-amber-600" />
              Questions fréquentes sur la livraison
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact for Questions */}
          <div className="bg-amber-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-gray-700 mb-6">
              Notre équipe de service client est disponible pour répondre à
              toutes vos questions concernant la livraison et le paiement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 inline-flex items-center justify-center"
              >
                Contactez-nous
              </a>
              <a
                href="tel:+212661180440"
                className="bg-white border border-amber-600 text-amber-600 hover:bg-amber-50 font-bold py-2 px-6 rounded-md transition duration-300 inline-flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" /> +212 661 180 440
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LivraisonPage;
