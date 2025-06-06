import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-fluid flex justify-between items-center">
        <Link to="/" className="text-primary-500 font-bold text-xl">
          OrganizaJá
        </Link>

        {}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`transition-colors duration-200 ${
              location.pathname === '/'
                ? 'text-primary-500 font-medium'
                : 'text-secondary-700 hover:text-primary-500'
            }`}
          >
            Home
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className={`transition-colors duration-200 ${
                  location.pathname === '/dashboard'
                    ? 'text-primary-500 font-medium'
                    : 'text-secondary-700 hover:text-primary-500'
                }`}
              >
                Dashboard
              </Link>
              <div className="relative group">
                <button className="flex items-center text-secondary-700 hover:text-primary-500">
                  {user?.username || 'Account'} 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-secondary-700 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-secondary"
              >
                Conecte-se
              </Link>
              <Link
                to="/register"
                className="btn btn-primary"
              >
               Registrar-se
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-secondary-700"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-md py-2 md:hidden"
          >
            <nav className="flex flex-col space-y-2 px-4">
              <Link
                to="/"
                className={`py-2 ${
                  location.pathname === '/'
                    ? 'text-primary-500 font-medium'
                    : 'text-secondary-700'
                }`}
              >
                Home
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className={`py-2 ${
                      location.pathname === '/dashboard'
                        ? 'text-primary-500 font-medium'
                        : 'text-secondary-700'
                    }`}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={logout}
                    className="py-2 text-left text-secondary-700"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="py-2 text-secondary-700"
                  >
                    Conecte-se
                  </Link>
                  <Link
                    to="/register"
                    className="py-2 text-primary-500 font-medium"
                  >
                    Registrar-se
                  </Link>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;