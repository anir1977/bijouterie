import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  FileDown,
  FileText,
  FileSpreadsheet,
} from "lucide-react";
import AddProductModal from "./AddProductModal";
import ProductDetails from "./ProductDetails";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);

  // Mock data for products
  const [products, setProducts] = useState([
    {
      id: "PRD-001",
      name: "Bracelet Diamant Or 18K",
      category: "Bracelets",
      price: "14,000 MAD",
      stock: 8,
      status: "En stock",
      statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=100&q=80",
    },
    {
      id: "PRD-002",
      name: "Collier Perles Royales",
      category: "Colliers",
      price: "12,500 MAD",
      stock: 5,
      status: "En stock",
      statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&q=80",
    },
    {
      id: "PRD-003",
      name: "Montre Festina Homme",
      category: "Montres",
      price: "3,800 MAD",
      stock: 12,
      status: "En stock",
      statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=100&q=80",
    },
    {
      id: "PRD-004",
      name: "Bague Solitaire 1 Carat",
      category: "Bagues",
      price: "18,900 MAD",
      stock: 3,
      status: "Stock faible",
      statusColor: "text-amber-600 bg-amber-100 dark:bg-amber-900/30",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&q=80",
    },
    {
      id: "PRD-005",
      name: "Boucles d'Oreilles Or Rose",
      category: "Boucles d'oreilles",
      price: "7,200 MAD",
      stock: 0,
      status: "Rupture",
      statusColor: "text-red-600 bg-red-100 dark:bg-red-900/30",
      image:
        "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=100&q=80",
    },
    {
      id: "PRD-006",
      name: "Parure Complète Diamant",
      category: "Parures & Ensembles",
      price: "24,500 MAD",
      stock: 2,
      status: "Stock faible",
      statusColor: "text-amber-600 bg-amber-100 dark:bg-amber-900/30",
      image:
        "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=100&q=80",
    },
  ]);

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAddProduct = (newProduct: any) => {
    setProducts([newProduct, ...products]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Gestion des Produits</h1>
          <p className="text-muted-foreground">
            Gérez votre catalogue de bijoux et montres
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white"
            onClick={() => setIsAddProductModalOpen(true)}
          >
            <Plus className="h-4 w-4 mr-2" /> Ajouter un produit
          </Button>

          <AddProductModal
            open={isAddProductModalOpen}
            onOpenChange={setIsAddProductModalOpen}
            onAddProduct={handleAddProduct}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FileDown className="h-4 w-4 mr-2" /> Exporter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => alert("Export PDF en cours...")}
              >
                <FileText className="h-4 w-4 mr-2" /> Exporter en PDF
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => alert("Export Excel en cours...")}
              >
                <FileSpreadsheet className="h-4 w-4 mr-2" /> Exporter en Excel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produit</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-md overflow-hidden bg-gray-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "https://placehold.co/100x100?text=Image";
                            }}
                          />
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {product.id}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{product.category}</Badge>
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${product.statusColor}`}
                      >
                        {product.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => {
                              setSelectedProduct(product);
                              setIsProductDetailsOpen(true);
                            }}
                          >
                            <Eye className="h-4 w-4 mr-2" /> Voir
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => {
                              // Ici on pourrait ouvrir un modal d'édition
                              // Pour l'instant, on simule une modification simple
                              const updatedName = prompt(
                                "Nouveau nom du produit:",
                                product.name,
                              );
                              if (updatedName) {
                                const updatedProducts = products.map((p) =>
                                  p.id === product.id
                                    ? { ...p, name: updatedName }
                                    : p,
                                );
                                setProducts(updatedProducts);
                              }
                            }}
                          >
                            <Edit className="h-4 w-4 mr-2" /> Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="cursor-pointer text-red-600"
                            onClick={() => {
                              if (
                                confirm(
                                  `Êtes-vous sûr de vouloir supprimer ${product.name}?`,
                                )
                              ) {
                                const updatedProducts = products.filter(
                                  (p) => p.id !== product.id,
                                );
                                setProducts(updatedProducts);
                              }
                            }}
                          >
                            <Trash2 className="h-4 w-4 mr-2" /> Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {selectedProduct && (
        <ProductDetails
          open={isProductDetailsOpen}
          onOpenChange={setIsProductDetailsOpen}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default Products;
