import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Clock } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1999', event: 'Company Founded', description: 'Started as a small engineering firm' },
    { year: '2005', event: 'First Major Contract', description: 'Secured contract with leading power plant' },
    { year: '2010', event: 'International Expansion', description: 'Opened operations in 5 countries' },
    { year: '2015', event: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification' },
    { year: '2020', event: 'Innovation Center', description: 'Established R&D facility' },
    { year: '2025', event: 'Industry Leader', description: 'Recognized as top equipment manufacturer' }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-thermal-600" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from design to delivery.'
    },
    {
      icon: <Users className="h-8 w-8 text-thermal-600" />,
      title: 'Teamwork',
      description: 'Our success is built on collaboration, respect, and shared commitment to our goals.'
    },
    {
      icon: <Globe className="h-8 w-8 text-thermal-600" />,
      title: 'Innovation',
      description: 'We continuously invest in new technologies and processes to stay ahead of industry needs.'
    },
    {
      icon: <Clock className="h-8 w-8 text-thermal-600" />,
      title: 'Reliability',
      description: 'Our clients trust us to deliver on time, every time, with solutions that last.'
    }
  ];

  const leadership = [
    {
      name: 'John Mitchell',
      position: 'Chief Executive Officer',
      experience: '25+ years in power generation industry',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Sarah Chen',
      position: 'Chief Technology Officer',
      experience: '20+ years in engineering and R&D',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'David Rodriguez',
      position: 'VP of Manufacturing',
      experience: '18+ years in industrial manufacturing',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
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
            About ThermalTech Industries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-industrial-200 max-w-3xl mx-auto"
          >
            For over 25 years, we've been at the forefront of thermal power equipment manufacturing, delivering innovative solutions that power the world.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-industrial-600 mb-6">
                Founded in 1999 by a team of experienced engineers, ThermalTech Industries began with a simple mission: to create reliable, efficient equipment for the thermal power generation industry.
              </p>
              <p className="text-lg text-industrial-600 mb-6">
                What started as a small engineering firm has grown into a global leader, serving clients across 50+ countries with cutting-edge solutions that meet the most demanding industrial requirements.
              </p>
              <p className="text-lg text-industrial-600">
                Today, we continue to innovate and push the boundaries of what's possible in thermal power equipment, always with our core values of quality, reliability, and customer satisfaction at heart.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Manufacturing facility"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              Key milestones that have shaped our company and defined our commitment to excellence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-thermal-600"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-thermal-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold text-industrial-800 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-industrial-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-thermal-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-industrial-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-industrial-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-industrial-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
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
              Leadership Team
            </h2>
            <p className="text-lg text-industrial-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our company's vision and strategic direction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-industrial-800 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-thermal-600 font-semibold mb-2">
                    {leader.position}
                  </p>
                  <p className="text-industrial-600">
                    {leader.experience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
