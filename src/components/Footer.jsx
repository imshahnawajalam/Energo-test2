import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-industrial-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-thermal-400" />
              <span className="text-lg font-bold">ThermalTech Industries</span>
            </div>
            <p className="text-industrial-300 text-sm">
              Leading manufacturer of thermal power plant equipment, delivering quality engineering solutions for the power generation industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-industrial-400 hover:text-thermal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-industrial-400 hover:text-thermal-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-industrial-300 hover:text-thermal-400 transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-industrial-300 hover:text-thermal-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-industrial-300 hover:text-thermal-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-industrial-300 hover:text-thermal-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><span className="text-industrial-300">Industrial Valves</span></li>
              <li><span className="text-industrial-300">Plough Feeders</span></li>
              <li><span className="text-industrial-300">Heat Exchangers</span></li>
              <li><span className="text-industrial-300">Boiler Components</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-thermal-400" />
                <span className="text-industrial-300 text-sm">123 Industrial Park, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-thermal-400" />
                <span className="text-industrial-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-thermal-400" />
                <span className="text-industrial-300 text-sm">info@thermaltech.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-industrial-700 mt-8 pt-8 text-center">
          <p className="text-industrial-400 text-sm">
            © 2025 ThermalTech Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
