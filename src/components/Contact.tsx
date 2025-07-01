import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("zXO8yP-9vnnO0JFQY");
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted, validating...');
    
    if (!validateForm()) {
      console.log('Validation failed:', errors);
      return;
    }
    
    console.log('Validation passed, sending email...');
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Abhijeet Kumar'
      };

      console.log('Template params:', templateParams);

      const result = await emailjs.send(
        'service_mf8q8h4',
        'template_cafp7yx',
        templateParams
      );
      
      console.log('Email sent successfully:', result);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setShowError(true);
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden min-h-screen">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-2xl border border-green-400/50 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">✅</span>
              <div>
                <h4 className="font-['Orbitron'] font-bold text-lg">Message Sent Successfully!</h4>
                <p className="font-['Exo_2'] text-sm opacity-90">Have patience, Abhijeet will contact you soon! 🚀</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Toast */}
      {showError && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-xl shadow-2xl border border-red-400/50 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">❌</span>
              <div>
                <h4 className="font-['Orbitron'] font-bold text-lg">Error Sending Message</h4>
                <p className="font-['Exo_2'] text-sm opacity-90">{errorMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <h1 className="text-center text-white text-4xl lg:text-6xl font-['Orbitron'] font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Let's Connect
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-12"></div>
        
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-['Orbitron'] font-bold text-cyan-400 mb-6">
                  Let's Build The Future Together
                </h2>
                <p className="text-gray-300 font-['Exo_2'] text-lg leading-relaxed">
                  Ready to transform your ideas into reality? I'm here to help you create innovative solutions that push the boundaries of what's possible.
                </p>
              </div>
              
              <div className="space-y-6">
                <a 
                  href="mailto:abhijeetk452452@gmail.com"
                  className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-white font-['Exo_2'] font-semibold group-hover:text-cyan-400 transition-colors duration-300">Email</h3>
                    <p className="text-gray-400 font-['Rubik'] group-hover:text-gray-300 transition-colors duration-300">abhijeetk452452@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+919636464118"
                  className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-white font-['Exo_2'] font-semibold group-hover:text-purple-400 transition-colors duration-300">Phone</h3>
                    <p className="text-gray-400 font-['Rubik'] group-hover:text-gray-300 transition-colors duration-300">+91 6395998629</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-white font-['Exo_2'] font-semibold">Location</h3>
                    <p className="text-gray-400 font-['Rubik']">India</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-6">
                <h3 className="text-white font-['Exo_2'] font-semibold mb-6 text-xl">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/abhijeet4004/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-xl">💼</span>
                  </a>
                  <a 
                    href="https://github.com/Abhijeetk4118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-xl">🐙</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/abhijeetk8629/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-xl">📸</span>
                  </a>
                  <a 
                    href="https://wa.me/916395998629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-xl">💬</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-cyan-400 font-['Exo_2'] font-medium mb-2">Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white font-['Rubik'] focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 ${
                        errors.name ? 'border-red-500' : 'border-gray-600/50 focus:border-cyan-400'
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1 font-['Exo_2']">{errors.name}</p>
                    )}
                  </div>
                  <div className="group">
                    <label className="block text-cyan-400 font-['Exo_2'] font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white font-['Rubik'] focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 ${
                        errors.email ? 'border-red-500' : 'border-gray-600/50 focus:border-cyan-400'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 font-['Exo_2']">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-cyan-400 font-['Exo_2'] font-medium mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white font-['Rubik'] focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 ${
                      errors.phone ? 'border-red-500' : 'border-gray-600/50 focus:border-cyan-400'
                    }`}
                    placeholder="+91 1234567890"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1 font-['Exo_2']">{errors.phone}</p>
                  )}
                </div>
                
                <div className="group">
                  <label className="block text-cyan-400 font-['Exo_2'] font-medium mb-2">Subject *</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white font-['Rubik'] focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 ${
                      errors.subject ? 'border-red-500' : 'border-gray-600/50 focus:border-cyan-400'
                    }`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1 font-['Exo_2']">{errors.subject}</p>
                  )}
                </div>
                
                <div className="group">
                  <label className="block text-cyan-400 font-['Exo_2'] font-medium mb-2">Message *</label>
                  <textarea 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white font-['Rubik'] focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-600/50 focus:border-cyan-400'
                    }`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 font-['Exo_2']">{errors.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-white font-['Exo_2'] font-bold rounded-xl transition-all duration-300 shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 hover:scale-105 hover:shadow-cyan-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    '🚀 Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Footer Section */}
          <div className="pt-8 border-t border-gray-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 font-['Rubik'] text-sm text-center md:text-left">
                © {currentYear} Abhijeet Kumar. All rights reserved. | Crafted with pure ❤️ and passion.
              </p>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <span className="text-gray-400 font-['Exo_2'] text-sm">Built with</span>
                <div className="flex items-center space-x-1">
                  <span className="text-cyan-400 font-['Orbitron'] font-bold text-sm">React</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-purple-400 font-['Orbitron'] font-bold text-sm">Tailwind</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-pink-400 font-['Orbitron'] font-bold text-sm">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 