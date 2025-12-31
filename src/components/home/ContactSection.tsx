// components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, ExternalLink, Send, Linkedin, Github, FileText } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "iamsusanpant@gmail.com",
      href: "mailto:iamsusanpant@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+977 9846514741",
      href: "tel:+9779846514741",
      color: "text-green-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kathmandu, Nepal",
      color: "text-red-400"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      title: "Website",
      value: "susanpant.com.np",
      href: "https://www.susanpant.com.np",
      color: "text-purple-400"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "#",
      color: "hover:bg-blue-500/20 hover:border-blue-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "#",
      color: "hover:bg-gray-500/20 hover:border-gray-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: "Resume",
      href: "#",
      color: "hover:bg-green-500/20 hover:border-green-500"
    }
  ];

  return (
    <section ref={ref} id="contact" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`p-3 rounded-lg bg-gray-900/50 ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-blue-400 transition-colors text-lg font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-lg font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl border border-gray-700 bg-gray-900/30 ${link.color} transition-all group`}
                  >
                    <div className="text-gray-400 group-hover:text-white mb-2 transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all text-white resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Susan Pant. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Senior Software Engineer | Full-Stack Developer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;