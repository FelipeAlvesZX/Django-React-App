import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col justify-center bg-gray-50">
      <div className="container-fluid text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-9xl font-bold text-primary-500">404</h1>
          <h2 className="mt-4 text-3xl font-bold text-secondary-900">Page Not Found</h2>
          <p className="mt-4 text-secondary-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="btn btn-primary inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;