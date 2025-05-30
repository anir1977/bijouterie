import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category?: string;
  isNew?: boolean;
  onAddToCart?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Bracelet en Or 18K",
  price = 4999,
  imageUrl = "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&q=80",
  category = "Bracelets",
  isNew = false,
  onAddToCart = () => {},
  onQuickView = () => {},
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
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
                onClick={() => onQuickView(id)}
              >
                Aperçu rapide
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
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
              onClick={() => onAddToCart(id)}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Ajouter
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
