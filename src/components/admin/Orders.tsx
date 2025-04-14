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
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  FileDown,
  FileText,
  FileSpreadsheet,
  Truck,
  CheckCircle,
  Clock,
  CreditCard,
} from "lucide-react";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for orders
  const orders = [
    {
      id: "ORD-7352",
      customer: "Ahmed Benali",
      email: "ahmed.benali@gmail.com",
      date: "2023-08-15",
      amount: "4,890 MAD",
      status: "Payée",
      statusIcon: <CreditCard className="h-4 w-4" />,
      statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
      items: 3,
    },
    {
      id: "ORD-7351",
      customer: "Fatima Zahra",
      email: "fatima.z@outlook.com",
      date: "2023-08-15",
      amount: "2,450 MAD",
      status: "En attente",
      statusIcon: <Clock className="h-4 w-4" />,
      statusColor: "text-amber-600 bg-amber-100 dark:bg-amber-900/30",
      items: 1,
    },
    {
      id: "ORD-7350",
      customer: "Karim Idrissi",
      email: "k.idrissi@yahoo.fr",
      date: "2023-08-14",
      amount: "8,720 MAD",
      status: "Payée",
      statusIcon: <CreditCard className="h-4 w-4" />,
      statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
      items: 2,
    },
    {
      id: "ORD-7349",
      customer: "Nadia Alaoui",
      email: "nadia.alaoui@gmail.com",
      date: "2023-08-14",
      amount: "3,150 MAD",
      status: "Expédiée",
      statusIcon: <Truck className="h-4 w-4" />,
      statusColor: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
      items: 1,
    },
    {
      id: "ORD-7348",
      customer: "Youssef Amrani",
      email: "youssef.amrani@gmail.com",
      date: "2023-08-13",
      amount: "5,600 MAD",
      status: "Livrée",
      statusIcon: <CheckCircle className="h-4 w-4" />,
      statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
      items: 2,
    },
    {
      id: "ORD-7347",
      customer: "Samira Bennani",
      email: "samira.b@hotmail.com",
      date: "2023-08-12",
      amount: "1,890 MAD",
      status: "Livrée",
      statusIcon: <CheckCircle className="h-4 w-4" />,
      statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
      items: 1,
    },
  ];

  // Filter orders based on search term
  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Gestion des Commandes</h1>
          <p className="text-muted-foreground">
            Suivez et gérez les commandes de vos clients
          </p>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FileDown className="h-4 w-4 mr-2" /> Exporter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => alert("Export PDF des commandes en cours...")}
              >
                <FileText className="h-4 w-4 mr-2" /> Exporter en PDF
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => alert("Export Excel des commandes en cours...")}
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
                placeholder="Rechercher une commande..."
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
                  <TableHead>Commande</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Articles</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <div>{order.customer}</div>
                        <div className="text-xs text-muted-foreground">
                          {order.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell className="font-medium">
                      {order.amount}
                    </TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center space-x-1 px-2 py-1 text-xs rounded-full ${order.statusColor}`}
                      >
                        {order.statusIcon}
                        <span>{order.status}</span>
                      </div>
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
                            onClick={() =>
                              alert(`Détails de la commande ${order.id}`)
                            }
                          >
                            <Eye className="h-4 w-4 mr-2" /> Détails
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() =>
                              alert(`Modification de la commande ${order.id}`)
                            }
                          >
                            <Edit className="h-4 w-4 mr-2" /> Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() =>
                              alert(
                                `Mise à jour du statut de la commande ${order.id}`,
                              )
                            }
                          >
                            <Truck className="h-4 w-4 mr-2" /> Mettre à jour le
                            statut
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="cursor-pointer text-red-600"
                            onClick={() =>
                              alert(`Annulation de la commande ${order.id}`)
                            }
                          >
                            <Trash2 className="h-4 w-4 mr-2" /> Annuler
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
    </div>
  );
};

export default Orders;
