import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, Cog, Phone, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-thermal-600" />,
      title: 'Installation & Commissioning',
      description: 'Professional installation services ensuring optimal performance from day one.',
      features: [
        'On-site installation supervision',
        'Equipment commissioning and testing',
        'Performance optimization',
        'Training for operational staff'
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-thermal-600" />,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance programs to maximize equipment lifespan and efficiency.',
      features: [
        'Preventive maintenance schedules',
        'Emergency repair services',
        'Spare parts management',
        '24/7 technical support'
      ]
    },
    {
      icon: <Cog className="h-12 w-12 text-thermal-600" />,
      title: 'Engineering Consultation',
      description: 'Expert consulting services for thermal power plant optimization and upgrades.',
      features: [
        'System design and analysis',
        'Efficiency improvement studies',
        'Equipment selection guidance',
        'Regulatory compliance support'
      ]
    },
    {
      icon: <Phone className="h-12 w-12 text-thermal-600" />,
      title: 'Remote Monitoring',
      description: 'Advanced monitoring solutions for real-time equipment performance tracking.',
      features: [
        'IoT-enabled monitoring systems',
        'Predictive maintenance alerts',
        'Performance analytics dashboard',
        'Remote diagnostics capability'
      ]
    }
  ];

  const benefits = [
    'Reduced downtime and operational costs',
    'Extended equipment lifespan',
    'Improved energy efficiency',
    'Enhanced safety compliance',
    'Optimized performance metrics',
    'Quick issue resolution'
  ];

  const supportLevels = [
    {
      name: 'Basic Support',
      price: 'Custom Quote',
      features: [
        'Business hours support',
        'Email and phone assistance',
        'Basic maintenance guidance',
        'Spare parts availability'
      ]
    },
    {
      name: 'Premium Support',
      price: 'Custom Quote',
      features: [
        '24/7 technical support',
        'Priority response times',
        'On-site service visits',
        'Preventive maintenance plans',
        'Performance monitoring'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise Support',
      price: 'Custom Quote',
      features: [
        'Dedicated account manager',
        'Custom SLA agreements',
        'Remote monitoring systems',
        'Predictive maintenance',
        'Emergency response team',
        'Training programs'
      ]
    }
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-industrial-200 max-w-3xl mx-auto"
          >
            Comprehensive service solutions to ensure your thermal power equipment operates at peak performance throughout its lifecycle.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-industrial-800 ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-industrial-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-industrial-600">
                      <CheckCircle className="h-5 w-5 text-thermal-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Service Benefits
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              Our comprehensive service approach delivers measurable value to your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
              >
                <CheckCircle className="h-6 w-6 text-thermal-600 mr-3 flex-shrink-0" />
                <span className="text-industrial-800 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
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
              Support Packages
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              Choose the support level that best fits your operational needs and budget requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  level.highlighted ? 'ring-2 ring-thermal-600 transform scale-105' : ''
                }`}
              >
                <div className={`p-6 ${level.highlighted ? 'bg-thermal-gradient text-white' : 'bg-industrial-50'}`}>
                  <h3 className={`text-xl font-bold mb-2 ${level.highlighted ? 'text-white' : 'text-industrial-800'}`}>
                    {level.name}
                  </h3>
                  <div className={`text-2xl font-bold ${level.highlighted ? 'text-white' : 'text-thermal-600'}`}>
                    {level.price}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-industrial-600">
                        <CheckCircle className="h-5 w-5 text-thermal-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-6 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    level.highlighted
                      ? 'bg-thermal-600 hover:bg-thermal-700 text-white'
                      : 'bg-industrial-100 hover:bg-industrial-200 text-industrial-800'
                  }`}>
                    Contact Sales
                  </button>
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
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-thermal-100 mb-8 max-w-2xl mx-auto">
              Contact our service experts to discuss how we can help improve your equipment performance and reduce operational costs.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-thermal-600 hover:bg-industrial-50 font-semibold rounded-lg transition-colors duration-200">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
