import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-thermal-600" />,
      title: 'Address',
      details: ['123 Industrial Park', 'Tech City, TC 12345', 'United States']
    },
    {
      icon: <Phone className="h-6 w-6 text-thermal-600" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Sales)']
    },
    {
      icon: <Mail className="h-6 w-6 text-thermal-600" />,
      title: 'Email',
      details: ['info@thermaltech.com', 'sales@thermaltech.com']
    },
    {
      icon: <Clock className="h-6 w-6 text-thermal-600" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ];

  const offices = [
    {
      city: 'Tech City (Headquarters)',
      address: '123 Industrial Park, Tech City, TC 12345',
      phone: '+1 (555) 123-4567',
      email: 'info@thermaltech.com'
    },
    {
      city: 'Manufacturing Facility',
      address: '456 Production Blvd, Industrial Zone, TC 54321',
      phone: '+1 (555) 987-6543',
      email: 'production@thermaltech.com'
    },
    {
      city: 'Sales Office - East Coast',
      address: '789 Business Ave, Metro City, MC 67890',
      phone: '+1 (555) 456-7890',
      email: 'east@thermaltech.com'
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-industrial-200 max-w-3xl mx-auto"
          >
            Get in touch with our experts to discuss your thermal power equipment needs. We're here to help you find the perfect solution.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-industrial-800 mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-industrial-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-thermal-500 focus:border-thermal-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-industrial-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-thermal-500 focus:border-thermal-500 transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-industrial-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-thermal-500 focus:border-thermal-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-industrial-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-thermal-500 focus:border-thermal-500 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-industrial-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-thermal-500 focus:border-thermal-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="quote-request">Quote Request</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-industrial-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-thermal-500 focus:border-thermal-500 transition-colors"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-thermal-600 hover:bg-thermal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-industrial-800 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-industrial-800 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-industrial-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-industrial-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-industrial-600">Interactive Map Coming Soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
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
              Our Locations
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              Visit us at any of our facilities or contact the office nearest to you for personalized assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-industrial-800 mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-thermal-600 mt-0.5 flex-shrink-0" />
                    <p className="text-industrial-600 ml-2">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-thermal-600 flex-shrink-0" />
                    <p className="text-industrial-600 ml-2">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-thermal-600 flex-shrink-0" />
                    <p className="text-industrial-600 ml-2">{office.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-thermal-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Emergency Support
            </h2>
            <p className="text-xl text-thermal-100 mb-8 max-w-2xl mx-auto">
              For urgent technical support and emergency repairs, our 24/7 hotline is always available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-8 py-4 bg-white text-thermal-600 hover:bg-industrial-50 font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Emergency Line
              </a>
              <a
                href="mailto:emergency@thermaltech.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-thermal-600 font-semibold rounded-lg transition-colors duration-200"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
