import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ProductDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: any;
}

const ProductDetails = ({
  open,
  onOpenChange,
  product,
}: ProductDetailsProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Détails du produit</DialogTitle>
          <DialogDescription>
            Informations complètes sur le produit {product.id}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="rounded-md overflow-hidden bg-gray-100 h-64">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/400x300?text=Image+non+disponible";
                }}
              />
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">Statut</h3>
              <div className="mt-2">
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full ${product.statusColor}`}
                >
                  {product.status}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-lg">Catégorie</h3>
              <div className="mt-2">
                <Badge variant="outline">{product.category}</Badge>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-xl font-semibold text-amber-600 mt-1">
                {product.price}
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg">Description</h3>
              <p className="text-gray-600 mt-1">
                {product.description ||
                  "Bijou en or 18K de haute qualité, fabriqué à la main avec des matériaux premium. Parfait pour toutes les occasions spéciales."}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Informations</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <p className="text-sm text-gray-500">ID</p>
                  <p>{product.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Stock</p>
                  <p>{product.stock} unités</p>
                </div>
              </div>
            </div>

            {product.variants && product.variants.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg">Variantes</h3>
                <div className="space-y-2 mt-2">
                  {product.variants.map((variant: any, index: number) => (
                    <div key={index} className="bg-gray-50 p-2 rounded-md">
                      <div className="flex justify-between">
                        <div>
                          <span className="font-medium">
                            {variant.type === "or-jaune"
                              ? "Or Jaune 18K"
                              : variant.type === "or-blanc"
                                ? "Or Blanc 18K"
                                : "Or Rose 18K"}
                          </span>
                          <span className="mx-2">-</span>
                          <span>Taille {variant.size}</span>
                        </div>
                        <div>
                          <span className="font-medium">{variant.price}</span>
                          <span className="text-gray-500 text-sm ml-2">
                            (Stock: {variant.stock})
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Fermer
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Modifier
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
