
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          TaskZen
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-taskzen-coral transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-gray-800 hover:text-taskzen-coral transition-colors">
            Features
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-taskzen-coral transition-colors">
            About
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <span className="text-sm text-gray-700">
                  Welcome, {user.user_metadata?.full_name || user.email}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="flex items-center gap-1 text-gray-800 hover:text-taskzen-coral"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </div>
          ) : (
            <>
              <Link to="/auth/signin">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-800 hover:text-taskzen-coral transition-colors"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/signup">
                <Button
                  className="bg-taskzen-coral hover:bg-taskzen-coral/90 text-white"
                  size="sm"
                >
                  <LogIn className="mr-1 h-4 w-4" /> Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-800"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4">
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block text-gray-800 hover:text-taskzen-coral py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="block text-gray-800 hover:text-taskzen-coral py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-800 hover:text-taskzen-coral py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="pt-4 border-t">
              {user ? (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Signed in as {user.user_metadata?.full_name || user.email}
                  </p>
                  <Button
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    variant="ghost"
                    className="w-full justify-start text-gray-800"
                  >
                    <User className="mr-2 h-4 w-4" /> Sign Out
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link to="/auth/signin" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-gray-800">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-taskzen-coral hover:bg-taskzen-coral/90 text-white">
                      <LogIn className="mr-2 h-4 w-4" /> Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
