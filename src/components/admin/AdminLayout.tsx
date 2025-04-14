import React, { useState, useEffect, useRef } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Search,
  Settings,
  Bell,
  Sun,
  Moon,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [notifications, setNotifications] = useState<
    { id: number; text: string; read: boolean }[]
  >([
    { id: 1, text: "Nouvelle commande #1234", read: false },
    { id: 2, text: "Stock faible: Bracelet Or 18K", read: false },
    { id: 3, text: "Mise à jour système disponible", read: true },
  ]);

  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle clicks outside sidebar to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        windowWidth < 768
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, windowWidth]);

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated =
      localStorage.getItem("adminAuthenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin");
    }

    // Apply theme
    const savedTheme = localStorage.getItem("adminTheme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    }

    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [navigate, isDarkTheme]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/admin");
  };

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("adminTheme", newTheme ? "dark" : "light");
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Tableau de bord",
      path: "/admin/dashboard",
      active: location.pathname === "/admin/dashboard",
    },
    {
      icon: <Package size={20} />,
      label: "Produits",
      path: "/admin/products",
      active: location.pathname === "/admin/products",
    },
    {
      icon: <ShoppingCart size={20} />,
      label: "Commandes",
      path: "/admin/orders",
      active: location.pathname === "/admin/orders",
    },
    {
      icon: <Search size={20} />,
      label: "SEO",
      path: "/admin/seo",
      active: location.pathname === "/admin/seo",
    },
    {
      icon: <Settings size={20} />,
      label: "Paramètres",
      path: "/admin/settings",
      active: location.pathname === "/admin/settings",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col ${isDarkTheme ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Top Navigation */}
      <header
        className={`${isDarkTheme ? "bg-gray-800" : "bg-white"} border-b ${isDarkTheme ? "border-gray-700" : "border-gray-200"} shadow-sm sticky top-0 z-20`}
      >
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={
                isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            <Link to="/admin/dashboard" className="flex items-center">
              <span className="text-lg sm:text-xl font-bold text-amber-600">
                Ben Daoud
              </span>
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium">
                Admin
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-3">
            {windowWidth >= 640 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleTheme}
                      className={
                        isDarkTheme ? "text-amber-400" : "text-amber-600"
                      }
                      aria-label={isDarkTheme ? "Mode clair" : "Mode sombre"}
                    >
                      {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isDarkTheme ? "Mode clair" : "Mode sombre"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            <DropdownMenu>
              {windowWidth >= 640 ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="relative"
                        >
                          <Bell size={20} />
                          {unreadCount > 0 && (
                            <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-red-500 text-white text-xs">
                              {unreadCount}
                            </Badge>
                          )}
                        </Button>
                      </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Notifications</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell size={20} />
                    {unreadCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-red-500 text-white text-xs">
                        {unreadCount}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
              )}
              <DropdownMenuContent align="end" className="w-[280px] sm:w-80">
                <div className="flex items-center justify-between p-2 border-b">
                  <span className="font-semibold">Notifications</span>
                  {unreadCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={markAllAsRead}
                      className="text-xs hover:text-amber-600"
                    >
                      Tout marquer comme lu
                    </Button>
                  )}
                </div>
                <div className="max-h-60 sm:max-h-80 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <DropdownMenuItem
                        key={notification.id}
                        className={`p-3 border-b last:border-0 cursor-pointer ${!notification.read ? "bg-amber-50 dark:bg-amber-900/20" : ""}`}
                      >
                        <div className="flex items-start">
                          {!notification.read && (
                            <div className="w-2 h-2 mt-1.5 mr-2 rounded-full bg-amber-500"></div>
                          )}
                          <div
                            className={`${!notification.read ? "font-medium" : ""} text-sm sm:text-base`}
                          >
                            {notification.text}
                          </div>
                        </div>
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-500 text-sm">
                      Aucune notification
                    </div>
                  )}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="text-gray-500 hover:text-red-500"
              aria-label="Déconnexion"
            >
              <LogOut size={20} />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Mobile overlay */}
        {isMobileMenuOpen && windowWidth < 768 && (
          <div
            className="fixed inset-0 bg-black/30 z-10"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <AnimatePresence>
          {(isMobileMenuOpen || windowWidth >= 768) && (
            <motion.aside
              ref={sidebarRef}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${isDarkTheme ? "bg-gray-800" : "bg-white"} ${windowWidth < 768 ? "fixed inset-y-0 left-0 z-20 w-[240px]" : "hidden md:block w-64"} border-r ${isDarkTheme ? "border-gray-700" : "border-gray-200"} overflow-y-auto`}
            >
              <div className="p-4 space-y-1">
                {windowWidth < 768 && (
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-amber-600">
                        Ben Daoud
                      </span>
                      <span className="ml-1 text-xs font-medium">Admin</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-500"
                      aria-label="Fermer le menu"
                    >
                      <X size={20} />
                    </Button>
                  </div>
                )}
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                        item.active
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span
                        className={
                          item.active
                            ? "text-amber-600 dark:text-amber-400"
                            : ""
                        }
                      >
                        {item.icon}
                      </span>
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-2 sm:p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
