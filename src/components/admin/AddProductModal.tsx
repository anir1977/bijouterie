import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Plus, X } from "lucide-react";

interface AddProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddProduct: (product: any) => void;
}

const AddProductModal = ({
  open,
  onOpenChange,
  onAddProduct,
}: AddProductModalProps) => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    description: "",
    basePrice: "",
    stock: "",
    imageUrl: "",
  });

  const [variants, setVariants] = useState<
    Array<{ type: string; size: string; price: string; stock: string }>
  >([]);
  const [currentVariant, setCurrentVariant] = useState({
    type: "or-jaune",
    size: "",
    price: "",
    stock: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVariantChange = (field: string, value: string) => {
    setCurrentVariant((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addVariant = () => {
    if (currentVariant.size && currentVariant.price && currentVariant.stock) {
      setVariants([...variants, { ...currentVariant }]);
      setCurrentVariant({ ...currentVariant, size: "", price: "", stock: "" });
    }
  };

  const removeVariant = (index: number) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a unique ID for the product
    const newProductId = `PRD-${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0")}`;

    const newProduct = {
      id: newProductId,
      ...productData,
      price: `${parseInt(productData.basePrice).toLocaleString()} MAD`,
      stock: parseInt(productData.stock),
      status:
        parseInt(productData.stock) > 5
          ? "En stock"
          : parseInt(productData.stock) > 0
            ? "Stock faible"
            : "Rupture",
      statusColor:
        parseInt(productData.stock) > 5
          ? "text-green-600 bg-green-100"
          : parseInt(productData.stock) > 0
            ? "text-amber-600 bg-amber-100"
            : "text-red-600 bg-red-100",
      image: productData.imageUrl,
      variants: variants.map((v) => ({
        ...v,
        price: `${parseInt(v.price).toLocaleString()} MAD`,
        stock: parseInt(v.stock),
      })),
    };

    onAddProduct(newProduct);
    onOpenChange(false);

    // Reset form
    setProductData({
      name: "",
      category: "",
      description: "",
      basePrice: "",
      stock: "",
      imageUrl: "",
    });
    setVariants([]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Ajouter un nouveau produit</DialogTitle>
          <DialogDescription>
            Remplissez les détails du produit. Vous pouvez ajouter plusieurs
            variantes (tailles et types d'or).
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nom du produit</Label>
                <Input
                  id="name"
                  name="name"
                  value={productData.name}
                  onChange={handleInputChange}
                  placeholder="Bracelet Diamant Or 18K"
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Catégorie</Label>
                <Select
                  value={productData.category}
                  onValueChange={(value) =>
                    setProductData({ ...productData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bracelets">Bracelets</SelectItem>
                    <SelectItem value="Colliers">Colliers</SelectItem>
                    <SelectItem value="Bagues">Bagues</SelectItem>
                    <SelectItem value="Boucles d'oreilles">
                      Boucles d'oreilles
                    </SelectItem>
                    <SelectItem value="Montres">Montres</SelectItem>
                    <SelectItem value="Parures & Ensembles">
                      Parures & Ensembles
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="basePrice">Prix de base (MAD)</Label>
                <Input
                  id="basePrice"
                  name="basePrice"
                  type="number"
                  value={productData.basePrice}
                  onChange={handleInputChange}
                  placeholder="12500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="stock">Stock initial</Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  value={productData.stock}
                  onChange={handleInputChange}
                  placeholder="10"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={productData.description}
                  onChange={handleInputChange}
                  placeholder="Description détaillée du produit..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="imageUrl">URL de l'image</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  value={productData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              {productData.imageUrl && (
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground mb-1">
                    Aperçu de l'image:
                  </p>
                  <div className="h-24 w-24 rounded-md overflow-hidden bg-gray-100">
                    <img
                      src={productData.imageUrl}
                      alt="Aperçu"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/100x100?text=Erreur";
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">
              Variantes (Tailles et Types d'Or)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <Label htmlFor="variant-type">Type d'Or</Label>
                <Select
                  value={currentVariant.type}
                  onValueChange={(value) => handleVariantChange("type", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Type d'or" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="or-jaune">Or Jaune 18K</SelectItem>
                    <SelectItem value="or-blanc">Or Blanc 18K</SelectItem>
                    <SelectItem value="or-rose">Or Rose 18K</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="variant-size">Taille</Label>
                <Input
                  id="variant-size"
                  value={currentVariant.size}
                  onChange={(e) => handleVariantChange("size", e.target.value)}
                  placeholder="16, 17, 18, etc."
                />
              </div>

              <div>
                <Label htmlFor="variant-price">Prix (MAD)</Label>
                <Input
                  id="variant-price"
                  type="number"
                  value={currentVariant.price}
                  onChange={(e) => handleVariantChange("price", e.target.value)}
                  placeholder="12500"
                />
              </div>

              <div>
                <Label htmlFor="variant-stock">Stock</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="variant-stock"
                    type="number"
                    value={currentVariant.stock}
                    onChange={(e) =>
                      handleVariantChange("stock", e.target.value)
                    }
                    placeholder="5"
                  />
                  <Button
                    type="button"
                    size="icon"
                    onClick={addVariant}
                    disabled={
                      !currentVariant.size ||
                      !currentVariant.price ||
                      !currentVariant.stock
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {variants.length > 0 && (
              <div className="border rounded-md p-4 mt-4">
                <h4 className="font-medium mb-2">Variantes ajoutées:</h4>
                <div className="space-y-2">
                  {variants.map((variant, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-2 rounded-md"
                    >
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
                        <span className="mx-2">-</span>
                        <span>
                          {parseInt(variant.price).toLocaleString()} MAD
                        </span>
                        <span className="mx-2">-</span>
                        <span>Stock: {variant.stock}</span>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeVariant(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Ajouter le produit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
