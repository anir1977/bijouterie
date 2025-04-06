import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const QuiSommesNousPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-auto">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=1200&q=80"
            alt="Bijouterie Ben Daoud"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Notre Histoire
            </h1>
          </div>
        </div>

        {/* About Us Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Bijouterie Ben Daoud: 30 ans d'expertise et de passion
            </h2>

            <p className="text-gray-700 mb-6">
              Fondée en 1993 à Casablanca, la Bijouterie Ben Daoud est devenue
              une référence incontournable dans le domaine des bijoux en or 18
              carats et des montres de luxe au Maroc. Notre histoire est celle
              d'une famille passionnée par l'art de la joaillerie, transmettant
              son savoir-faire de génération en génération.
            </p>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=800&q=80"
                  alt="Atelier de bijouterie"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Notre savoir-faire
                </h3>
                <p className="text-gray-700">
                  Chaque bijou que nous proposons est le fruit d'un travail
                  minutieux, réalisé par des artisans joailliers expérimentés.
                  Nous sélectionnons avec soin les matériaux les plus nobles et
                  les pierres précieuses de la plus haute qualité pour créer des
                  pièces uniques qui traverseront les générations.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Notre engagement</h3>
            <p className="text-gray-700 mb-6">
              Chez Bijouterie Ben Daoud, nous nous engageons à offrir à nos
              clients des produits d'exception, accompagnés d'un service
              personnalisé. Notre équipe de conseillers est à votre disposition
              pour vous guider dans le choix de bijoux qui correspondent
              parfaitement à vos goûts et à vos occasions spéciales.
            </p>

            <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <h4 className="text-xl font-semibold mb-2">Qualité garantie</h4>
                <p className="text-gray-700">
                  Tous nos bijoux sont en or 18K certifié et nos montres sont
                  100% authentiques.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Service après-vente
                </h4>
                <p className="text-gray-700">
                  Nous assurons un service après-vente complet pour l'entretien
                  et la réparation de vos bijoux.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Conseils personnalisés
                </h4>
                <p className="text-gray-700">
                  Notre équipe de conseillers experts vous guide dans le choix
                  de vos bijoux.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Notre vision</h3>
            <p className="text-gray-700 mb-6">
              Notre vision est de continuer à offrir des bijoux d'exception qui
              célèbrent les moments importants de votre vie. Nous croyons que
              chaque bijou raconte une histoire unique et nous sommes fiers de
              faire partie de ces moments précieux.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Venez nous rencontrer
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Nous vous invitons à visiter notre boutique au Centre Tachfine à
                Casablanca pour découvrir notre collection complète et
                bénéficier des conseils de nos experts.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QuiSommesNousPage;
