import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Heart, TrendingUp } from 'lucide-react';
import { faker } from '@faker-js/faker';

const Careers = () => {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-thermal-600" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-thermal-600" />,
      title: 'Career Growth',
      description: 'Professional development opportunities, training programs, and clear advancement paths.'
    },
    {
      icon: <Users className="h-8 w-8 text-thermal-600" />,
      title: 'Team Culture',
      description: 'Collaborative work environment with experienced professionals and team events.'
    },
    {
      icon: <Clock className="h-8 w-8 text-thermal-600" />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and generous vacation policy.'
    }
  ];

  const jobOpenings = [
    {
      title: 'Senior Mechanical Engineer',
      department: 'Engineering',
      location: 'Tech City, TC',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead design and development of thermal power equipment with focus on valves and heat exchangers.',
      requirements: [
        'Bachelor\'s degree in Mechanical Engineering',
        '5+ years experience in power plant equipment',
        'Proficiency in CAD software (SolidWorks, AutoCAD)',
        'Knowledge of ASME codes and standards'
      ]
    },
    {
      title: 'Manufacturing Supervisor',
      department: 'Production',
      location: 'Industrial Park, TC',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Oversee production operations and ensure quality standards in manufacturing processes.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '3+ years supervisory experience in manufacturing',
        'Strong leadership and communication skills',
        'Knowledge of lean manufacturing principles'
      ]
    },
    {
      title: 'Quality Assurance Engineer',
      department: 'Quality',
      location: 'Tech City, TC',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Develop and implement quality control procedures for thermal power equipment.',
      requirements: [
        'Bachelor\'s degree in Engineering',
        '2+ years experience in quality assurance',
        'Familiarity with ISO 9001 standards',
        'Strong analytical and problem-solving skills'
      ]
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive sales growth by building relationships with power plant operators and contractors.',
      requirements: [
        'Bachelor\'s degree in Engineering or Business',
        '3+ years technical sales experience',
        'Excellent presentation and negotiation skills',
        'Willingness to travel (30-40%)'
      ]
    }
  ];

  const values = [
    'Innovation and continuous improvement',
    'Safety first in everything we do',
    'Environmental responsibility',
    'Customer-focused solutions',
    'Integrity and ethical business practices',
    'Diversity and inclusion'
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
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-industrial-200 max-w-3xl mx-auto"
          >
            Build your career with a leading thermal power equipment manufacturer. We're always looking for talented individuals to join our growing team.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us */}
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
              Why Work With Us?
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              We offer more than just a job – we provide a platform for professional growth, innovation, and making a meaningful impact in the power generation industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-industrial-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-industrial-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-industrial-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Values
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              These principles guide our company culture and define what it means to be part of the ThermalTech family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <p className="text-industrial-800 font-medium">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
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
              Current Openings
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across various departments and find the perfect role for your skills and aspirations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-industrial-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-industrial-800 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-industrial-600">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 px-6 py-2 bg-thermal-600 hover:bg-thermal-700 text-white font-semibold rounded-lg transition-colors duration-200">
                    Apply Now
                  </button>
                </div>

                <p className="text-industrial-600 mb-6">
                  {job.description}
                </p>

                <div>
                  <h4 className="font-semibold text-industrial-800 mb-3">Requirements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-industrial-600 flex items-start">
                        <span className="w-2 h-2 bg-thermal-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
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
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-thermal-100 mb-8 max-w-2xl mx-auto">
              We're always interested in hearing from talented professionals. Send us your resume and let us know how you'd like to contribute to our team.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-thermal-600 hover:bg-industrial-50 font-semibold rounded-lg transition-colors duration-200">
              Submit General Application
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
