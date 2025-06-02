import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container-fluid py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Modern Full-Stack Application
              </h1>
              <p className="mt-4 text-xl leading-relaxed text-white/90 max-w-lg">
                A beautiful application with Django REST API backend and React frontend.
                Experience seamless interaction with a responsive design.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="btn bg-white text-primary-600 hover:bg-gray-100"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
                >
                  Log In
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-1 bg-gray-100 border-b flex">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="p-6 bg-white text-gray-800">
                  <pre className="text-sm overflow-auto">
                    <code>{`# Django REST API Example
class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
        
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)`}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-fluid">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary-900">Modern Full-Stack Architecture</h2>
            <p className="mt-4 text-secondary-600">
              Built with cutting-edge technologies for the best developer and user experience.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Django REST API',
                description: 'Powerful backend with class-based views, serializers, and robust authentication.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg\" className="h-10 w-10 text-primary-500\" fill="none\" viewBox="0 0 24 24\" stroke="currentColor">
                    <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2H5z" />
                  </svg>
                ),
              },
              {
                title: 'React Frontend',
                description: 'Modern, component-based UI with hooks, context API, and smooth animations.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Responsive Design',
                description: 'Beautiful UI that adapts perfectly to any device, from mobile to desktop.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary-50 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">{feature.title}</h3>
                <p className="mt-2 text-secondary-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-fluid">
          <div className="bg-primary-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
                <p className="mt-2 text-primary-100 max-w-2xl">
                  Create your account now and experience the full capabilities of our application.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <Link
                  to="/register"
                  className="btn bg-white text-primary-600 hover:bg-gray-100"
                >
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;