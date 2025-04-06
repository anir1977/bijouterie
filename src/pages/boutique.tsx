import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import ProductGrid from "@/components/ProductGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const BoutiquePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Collier en Or 18K",
      price: 5800,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      category: "Colliers",
      isNew: true,
    },
    {
      id: "2",
      name: "Bracelet Diamant",
      price: 7200,
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
      category: "Bracelets",
    },
    {
      id: "3",
      name: "Bague Solitaire",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      category: "Bagues",
    },
    {
      id: "4",
      name: "Montre Festina Homme",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80",
      category: "Montres",
    },
    {
      id: "5",
      name: "Boucles d'Oreilles",
      price: 3800,
      image:
        "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
      category: "Boucles d'oreilles",
      isNew: true,
    },
    {
      id: "6",
      name: "Parure Complète",
      price: 12500,
      image:
        "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=800&q=80",
      category: "Parures & Ensembles",
    },
    {
      id: "7",
      name: "Collier Perles",
      price: 4200,
      image:
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      category: "Colliers",
    },
    {
      id: "8",
      name: "Bracelet Or Rose",
      price: 3900,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      category: "Bracelets",
      isNew: true,
    },
    {
      id: "9",
      name: "Montre Femme Élégante",
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?w=800&q=80",
      category: "Montres",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    "Colliers",
    "Bracelets",
    "Bagues",
    "Boucles d'oreilles",
    "Montres",
    "Parures & Ensembles",
  ];

  useEffect(() => {
    const categoryParam = searchParams.get("categorie");
    if (categoryParam) {
      let category = "";
      switch (categoryParam) {
        case "colliers":
          category = "Colliers";
          break;
        case "bracelets":
          category = "Bracelets";
          break;
        case "bagues":
          category = "Bagues";
          break;
        case "boucles-oreilles":
          category = "Boucles d'oreilles";
          break;
        case "montres":
          category = "Montres";
          break;
        case "parures":
          category = "Parures & Ensembles";
          break;
      }
      if (category) {
        setSelectedCategories([category]);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = products;

    // Filter by price
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1],
    );

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category),
      );
    }

    setFilteredProducts(filtered);
  }, [products, priceRange, selectedCategories]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const resetFilters = () => {
    setPriceRange([0, 15000]);
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen bg-white overflow-auto">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Mobile Filter Toggle */}
          <div className="w-full md:hidden mb-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-between"
              onClick={() => setShowFilters(!showFilters)}
            >
              <span className="flex items-center">
                <Filter className="mr-2 h-4 w-4" /> Filtres
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </Button>
          </div>

          {/* Sidebar Filters */}
          <div
            className={`w-full md:w-1/4 bg-white p-4 rounded-lg border ${showFilters ? "block" : "hidden md:block"}`}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Catégories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <label
                        htmlFor={category}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Prix (MAD)</h3>
                <div className="pt-4 px-2">
                  <Slider
                    defaultValue={[0, 15000]}
                    max={15000}
                    step={100}
                    value={[priceRange[0], priceRange[1]]}
                    onValueChange={handlePriceChange}
                    className="mb-6"
                  />
                  <div className="flex items-center justify-between">
                    <span>{priceRange[0]} MAD</span>
                    <span>{priceRange[1]} MAD</span>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={resetFilters}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Nos Bijoux</h1>
              <div className="text-sm text-gray-500">
                {filteredProducts.length} produits trouvés
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      imageUrl={product.image}
                      category={product.category}
                      isNew={product.isNew}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">
                  Aucun produit ne correspond à vos critères de recherche.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={resetFilters}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Import ProductCard component for use in the grid
const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  category,
  isNew,
}: {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category?: string;
  isNew?: boolean;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div className="h-full overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg">
        <div className="relative overflow-hidden">
          {isNew && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full z-10">
              Nouveau
            </div>
          )}
          <div className="relative group h-64 overflow-hidden bg-gray-100">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button
                variant="secondary"
                className="bg-white hover:bg-primary hover:text-white transition-colors duration-300"
                onClick={() => (window.location.href = `/product/${id}`)}
              >
                Aperçu rapide
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-muted-foreground mb-1">{category}</div>
          <h3 className="font-medium text-lg mb-2 line-clamp-1">{name}</h3>
          <div className="flex items-center justify-between">
            <div className="text-primary font-semibold">
              {price.toLocaleString()} MAD
            </div>
            <Button
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Ajouter
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BoutiquePage;
