import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Thermometer, Gauge, Wrench } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Settings className="h-12 w-12 text-thermal-600" />,
      title: 'Industrial Valves',
      description: 'High-performance valves designed for extreme conditions in thermal power plants.',
      features: ['Gate Valves', 'Globe Valves', 'Check Valves', 'Safety Valves'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop'
    },
    {
      icon: <Thermometer className="h-12 w-12 text-thermal-600" />,
      title: 'Plough Feeders',
      description: 'Efficient coal feeding systems ensuring consistent fuel supply to boilers.',
      features: ['Chain Feeders', 'Screw Feeders', 'Belt Feeders', 'Rotary Feeders'],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop'
    },
    {
      icon: <Gauge className="h-12 w-12 text-thermal-600" />,
      title: 'Heat Exchangers',
      description: 'Advanced heat transfer solutions for optimal thermal efficiency.',
      features: ['Shell & Tube', 'Plate Heat Exchangers', 'Air Coolers', 'Condensers'],
      image: 'https://images.unsplash.com/photo-1581092160515-28e7ef7ebfeb?w=600&h=400&fit=crop'
    },
    {
      icon: <Wrench className="h-12 w-12 text-thermal-600" />,
      title: 'Boiler Components',
      description: 'Critical components ensuring reliable boiler operation and maintenance.',
      features: ['Superheaters', 'Economizers', 'Air Preheaters', 'Steam Drums'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop'
    }
  ];

  const specifications = [
    { label: 'Temperature Range', value: 'Up to 650°C' },
    { label: 'Pressure Rating', value: 'Up to 300 bar' },
    { label: 'Material Options', value: 'Carbon Steel, Stainless Steel, Alloy Steel' },
    { label: 'Certifications', value: 'ISO 9001, ASME, API' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-industrial-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-industrial-200 max-w-3xl mx-auto"
          >
            Comprehensive range of thermal power plant equipment engineered for reliability, efficiency, and long-term performance.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 bg-cover bg-center" 
                     style={{ backgroundImage: `url(${product.image})` }}>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {product.icon}
                    <h3 className="text-2xl font-bold text-industrial-800 ml-4">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-industrial-600 mb-6">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-industrial-800">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-industrial-600 flex items-center">
                          <span className="w-2 h-2 bg-thermal-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
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
              Technical Specifications
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              Our products are designed to meet the most demanding industrial requirements with superior performance characteristics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="font-semibold text-industrial-800 mb-2">
                  {spec.label}
                </h3>
                <p className="text-thermal-600 font-bold">
                  {spec.value}
                </p>
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
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-thermal-100 mb-8 max-w-2xl mx-auto">
              Our engineering team can design and manufacture custom equipment tailored to your specific requirements.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-thermal-600 hover:bg-industrial-50 font-semibold rounded-lg transition-colors duration-200">
              Request Custom Quote
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
