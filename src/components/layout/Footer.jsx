import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-primary-500 font-bold text-xl">OrganizaJá</Link>
            <p className="mt-2 text-secondary-600 max-w-md">
              Aplicativo full-stack com backend Django REST API e frontend React.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-secondary-900 mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.django-rest-framework.org/" 
                   className="text-secondary-600 hover:text-primary-500 transition-colors duration-200">
                  Django REST Framework
                </a>
              </li>
              <li>
                <a href="https://reactjs.org/" 
                   className="text-secondary-600 hover:text-primary-500 transition-colors duration-200">
                  React Docs
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" 
                   className="text-secondary-600 hover:text-primary-500 transition-colors duration-200">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-secondary-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-600 hover:text-primary-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-secondary-600 hover:text-primary-500 transition-colors duration-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-secondary-600 hover:text-primary-500 transition-colors duration-200">
                  Registrar-se
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-secondary-600 text-sm">&copy; {currentYear} OrganizaJá. Todos os direitos reservados</p>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <a href="https://github.com/FelipeAlvesZX" className="text-secondary-500 hover:text-secondary-700">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;