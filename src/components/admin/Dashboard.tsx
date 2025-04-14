import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  Users,
  ShoppingBag,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const Dashboard = () => {
  // Mock data for dashboard
  const stats = [
    {
      title: "Ventes Totales",
      value: "128,430 MAD",
      change: "+14%",
      trend: "up",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      title: "Nouveaux Clients",
      value: "24",
      change: "+32%",
      trend: "up",
      icon: <Users className="h-5 w-5" />,
      color:
        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      title: "Commandes",
      value: "38",
      change: "+18%",
      trend: "up",
      icon: <ShoppingBag className="h-5 w-5" />,
      color:
        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      title: "Panier Moyen",
      value: "3,380 MAD",
      change: "-4%",
      trend: "down",
      icon: <CreditCard className="h-5 w-5" />,
      color:
        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    },
  ];

  const recentOrders = [
    {
      id: "ORD-7352",
      customer: "Ahmed Benali",
      date: "Il y a 2 heures",
      amount: "4,890 MAD",
      status: "Payée",
      statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
    },
    {
      id: "ORD-7351",
      customer: "Fatima Zahra",
      date: "Il y a 3 heures",
      amount: "2,450 MAD",
      status: "En attente",
      statusColor: "text-amber-600 bg-amber-100 dark:bg-amber-900/30",
    },
    {
      id: "ORD-7350",
      customer: "Karim Idrissi",
      date: "Il y a 5 heures",
      amount: "8,720 MAD",
      status: "Payée",
      statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
    },
    {
      id: "ORD-7349",
      customer: "Nadia Alaoui",
      date: "Il y a 8 heures",
      amount: "3,150 MAD",
      status: "Expédiée",
      statusColor: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
    },
    {
      id: "ORD-7348",
      customer: "Youssef Amrani",
      date: "Hier",
      amount: "5,600 MAD",
      status: "Livrée",
      statusColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
    },
  ];

  const topProducts = [
    {
      name: "Bracelet Diamant Or 18K",
      sales: 12,
      revenue: "42,000 MAD",
      progress: 90,
    },
    {
      name: "Collier Perles Royales",
      sales: 10,
      revenue: "35,000 MAD",
      progress: 75,
    },
    {
      name: "Montre Festina Homme",
      sales: 8,
      revenue: "28,000 MAD",
      progress: 60,
    },
    {
      name: "Bague Solitaire 1 Carat",
      sales: 7,
      revenue: "24,500 MAD",
      progress: 52,
    },
    {
      name: "Boucles d'Oreilles Or Rose",
      sales: 6,
      revenue: "21,000 MAD",
      progress: 45,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Tableau de bord</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Aperçu de votre activité
          </p>
        </div>
        <div className="mt-2 sm:mt-0 w-full sm:w-auto">
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-8 sm:h-10">
              <TabsTrigger
                value="today"
                onClick={() => alert("Filtrage par jour activé")}
                className="text-xs sm:text-sm px-1 sm:px-3"
              >
                Aujourd'hui
              </TabsTrigger>
              <TabsTrigger
                value="week"
                onClick={() => alert("Filtrage par semaine activé")}
                className="text-xs sm:text-sm px-1 sm:px-3"
              >
                Cette semaine
              </TabsTrigger>
              <TabsTrigger
                value="month"
                onClick={() => alert("Filtrage par mois activé")}
                className="text-xs sm:text-sm px-1 sm:px-3"
              >
                Ce mois
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-full ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="flex items-center space-x-1">
                    <span
                      className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
                    >
                      {stat.change}
                    </span>
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-muted-foreground text-sm">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Commandes Récentes</CardTitle>
            <CardDescription>
              Les 5 dernières commandes passées sur votre boutique
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 sm:py-3 px-1 sm:px-2 font-medium text-xs sm:text-sm">
                      ID
                    </th>
                    <th className="text-left py-2 sm:py-3 px-1 sm:px-2 font-medium text-xs sm:text-sm">
                      Client
                    </th>
                    <th className="text-left py-2 sm:py-3 px-1 sm:px-2 font-medium text-xs sm:text-sm hidden sm:table-cell">
                      Date
                    </th>
                    <th className="text-left py-2 sm:py-3 px-1 sm:px-2 font-medium text-xs sm:text-sm">
                      Montant
                    </th>
                    <th className="text-left py-2 sm:py-3 px-1 sm:px-2 font-medium text-xs sm:text-sm">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr
                      key={order.id}
                      className="border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <td className="py-2 sm:py-3 px-1 sm:px-2 text-xs sm:text-sm">
                        {order.id}
                      </td>
                      <td className="py-2 sm:py-3 px-1 sm:px-2 text-xs sm:text-sm font-medium">
                        {order.customer}
                      </td>
                      <td className="py-2 sm:py-3 px-1 sm:px-2 text-xs sm:text-sm text-muted-foreground hidden sm:table-cell">
                        {order.date}
                      </td>
                      <td className="py-2 sm:py-3 px-1 sm:px-2 text-xs sm:text-sm font-medium">
                        {order.amount}
                      </td>
                      <td className="py-2 sm:py-3 px-1 sm:px-2">
                        <span
                          className={`inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-full ${order.statusColor}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Produits Populaires</CardTitle>
            <CardDescription>
              Les produits les plus vendus ce mois-ci
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {topProducts.map((product, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{product.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {product.revenue}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Progress value={product.progress} className="h-2" />
                    <span className="text-sm w-10">{product.sales} ventes</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
