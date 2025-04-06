import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

interface ProductGridProps {
  products?: Product[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products = [
    {
      id: "1",
      name: "Collier en Or 18K",
      price: 5800,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      category: "Colliers",
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
    },
    {
      id: "6",
      name: "Parure Complète",
      price: 12500,
      image:
        "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=800&q=80",
      category: "Parures & Ensembles",
    },
  ],
  title = "Nos Collections",
  subtitle = "Découvrez nos bijoux en or 18K et montres de luxe",
  columns = 3,
  showCategory = true,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const getGridClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
      case 3:
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-4 mx-auto w-24 h-1 bg-amber-500"></div>
        </div>
      )}

      <motion.div
        className={`grid ${getGridClass()} gap-x-6 gap-y-10`}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={showCategory ? product.category : undefined}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductGrid;
