import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-thermal-600" />,
      title: 'Quality Assurance',
      description: 'ISO certified manufacturing processes ensuring the highest quality standards for all our products.'
    },
    {
      icon: <Users className="h-8 w-8 text-thermal-600" />,
      title: 'Expert Team',
      description: 'Over 50+ years of combined experience in thermal power equipment engineering and manufacturing.'
    },
    {
      icon: <Award className="h-8 w-8 text-thermal-600" />,
      title: 'Industry Leader',
      description: 'Trusted by major power plants across the globe for reliable and efficient equipment solutions.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '25+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-industrial-gradient min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Powering the Future with 
              <span className="text-thermal-400"> Precision Engineering</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-industrial-200"
            >
              Leading manufacturer of thermal power plant equipment including valves, plough feeders, and industrial components.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-thermal-600 hover:bg-thermal-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-industrial-800 font-semibold rounded-lg transition-colors duration-200"
              >
                Get Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-6">
              Why Choose ThermalTech Industries?
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              We combine decades of engineering expertise with cutting-edge technology to deliver superior thermal power equipment solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-industrial-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-industrial-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-industrial-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-6">
              Our Track Record
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-thermal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-industrial-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-thermal-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Power Your Next Project?
            </h2>
            <p className="text-xl text-thermal-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your thermal power equipment needs and receive a customized solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-thermal-600 hover:bg-industrial-50 font-semibold rounded-lg transition-colors duration-200"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
