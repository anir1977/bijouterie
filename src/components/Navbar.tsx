import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <div className="flex items-center">
              <span className="text-amber-600 font-bold text-3xl mr-2">BD</span>
              <h1 className="text-2xl font-bold text-amber-700">
                Bijouterie Ben Daoud
              </h1>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`${isActive("/") ? "text-amber-600" : "text-gray-800"} hover:text-amber-600 font-medium`}
          >
            Accueil
          </Link>
          <Link
            to="/boutique"
            className={`${isActive("/boutique") ? "text-amber-600" : "text-gray-800"} hover:text-amber-600 font-medium`}
          >
            Boutique
          </Link>
          <Link
            to="/qui-sommes-nous"
            className={`${isActive("/qui-sommes-nous") ? "text-amber-600" : "text-gray-800"} hover:text-amber-600 font-medium`}
          >
            Qui sommes-nous
          </Link>
          <Link
            to="/contact"
            className={`${isActive("/contact") ? "text-amber-600" : "text-gray-800"} hover:text-amber-600 font-medium`}
          >
            Contact
          </Link>
          <Link
            to="/livraison"
            className={`${isActive("/livraison") ? "text-amber-600" : "text-gray-800"} hover:text-amber-600 font-medium`}
          >
            Livraison
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/panier" className="text-gray-800 hover:text-amber-600">
            <ShoppingBag className="h-6 w-6" />
          </Link>
          <Link to="/mon-compte">
            <Button
              variant="outline"
              className="hidden md:flex border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
            >
              Newsletter
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-amber-600"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`${isActive("/") ? "text-amber-600" : "text-gray-800"} hover:text-amber-600 font-medium py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/boutique"
              className={`${isActive("/boutique") ? "text-amber-600" : "text-gray-800"} hover:text-amber-600 font-medium py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Boutique
            </Link>
            <Link
              to="/qui-sommes-nous"
              className={`${isActive("/qui-sommes-nous") ? "text-amber-600" : "text-gray-800"} hover:text-amber-600 font-medium py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Qui sommes-nous
            </Link>
            <Link
              to="/contact"
              className={`${isActive("/contact") ? "text-amber-600" : "text-gray-800"} hover:text-amber-600 font-medium py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/livraison"
              className={`${isActive("/livraison") ? "text-amber-600" : "text-gray-800"} hover:text-amber-600 font-medium py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Livraison
            </Link>
            <Link to="/mon-compte" className="w-full">
              <Button
                variant="outline"
                className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white mt-2"
              >
                Newsletter
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
