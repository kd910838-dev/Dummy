import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Instagram, Facebook, Twitter } from 'lucide-react';
import SEO from './SEO';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^[0-9+() \-]{8,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid Indian or international phone number.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject line is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type your custom message details.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error dynamically as the user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable API post sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form variables
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="space-y-16 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Contact SprintX – Support Center & Corporate Headquarters" 
        description="Get in touch with the SprintX customer support team. Reach us for catalog inquiries, bulk orders, size counseling, or tracking deliveries across India." 
        keywords="SprintX Contact, Customer Support, Footwear Assistance"
        canonicalPath="/contact"
      />
      {/* Page Header */}
      <div className="text-center space-y-2 max-w-lg mx-auto">
        <span className="inline-flex bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
          Support center
        </span>
        <h1 className="font-display font-extrabold text-4xl text-slate-900 tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="text-slate-700 font-normal text-sm sm:text-base">
          We would love to hear from you! Drop us a line regarding catalog queries, order tracing, or bulk inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column: Contact Info cards */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          {/* Card: Base contacts info */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-6 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl" />
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white">SprintX Footwear Pvt. Ltd.</h2>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base">
              <div className="flex items-start space-x-3.5">
                <MapPin className="h-5.5 w-5.5 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  221 Sports Avenue, New Delhi, India<br />
                  PIN - 110001
                </span>
              </div>

              <div className="flex items-center space-x-3.5">
                <Phone className="h-5 w-5 text-orange-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center space-x-3.5">
                <Mail className="h-5 w-5 text-orange-400 shrink-0" />
                <a href="mailto:support@sprintx.com" className="hover:text-white transition-colors">
                  support@sprintx.com
                </a>
              </div>
            </div>
          </div>

          {/* Card: Hours */}
          <div className="bg-white border border-slate-100 p-8 rounded-2xl flex items-start space-x-4 shadow-3xs">
            <div className="p-3 bg-orange-50 rounded-xl">
              <Clock className="h-6 w-6 text-orange-500" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-slate-900 text-base">Business Hours</h3>
              <p className="text-slate-650 text-sm">
                Monday – Saturday: 9:00 AM – 7:00 PM
              </p>
              <p className="text-xs text-slate-600">
                Closed on Sundays & official National holidays.
              </p>
            </div>
          </div>

          {/* Follow Us socials list */}
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl space-y-4">
            <h4 className="font-display font-bold text-slate-900 text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer noopener" 
                className="flex items-center space-x-3 text-slate-700 hover:text-orange-500 text-sm font-medium p-2 hover:bg-white rounded-lg transition-all"
              >
                <Instagram className="h-4.5 w-4.5 stroke-slate-500" />
                <span>Instagram: <b className="text-slate-800">@SprintXOfficial</b></span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer noopener" 
                className="flex items-center space-x-3 text-slate-700 hover:text-orange-500 text-sm font-medium p-2 hover:bg-white rounded-lg transition-all"
              >
                <Facebook className="h-4.5 w-4.5 stroke-slate-500" />
                <span>Facebook: <b className="text-slate-800">SprintX Footwear</b></span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer noopener" 
                className="flex items-center space-x-3 text-slate-700 hover:text-orange-500 text-sm font-medium p-2 hover:bg-white rounded-lg transition-all"
              >
                <Twitter className="h-4.5 w-4.5 stroke-slate-500" />
                <span>X (Twitter): <b className="text-slate-800">@SprintXOfficial</b></span>
              </a>
            </div>
          </div>

        </div>

        {/* Right column: Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-2xs text-left relative">
          
          {isSubmitted ? (
            <div className="py-12 px-6 text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                  Message Transmitted!
                </h2>
                <p className="text-slate-700 text-sm sm:text-base max-w-sm mx-auto">
                  Thank you for writing to SprintX Footwear. Our regional New Delhi support executives will review your query and reply within 24 working hours.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex justify-center px-5 py-2.5 bg-slate-900 hover:bg-slate-950 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
              >
                Submit Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950 mb-2">
                Send Us a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full name box */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-700 tracking-normal uppercase font-mono">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                      errors.name ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:ring-orange-500/20 focus:border-orange-500'
                    } focus:outline-hidden focus:ring-4`}
                  />
                  {errors.name && <p className="text-[11px] font-semibold text-red-500">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 tracking-normal uppercase font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. rahul@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                      errors.email ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:ring-orange-500/20 focus:border-orange-500'
                    } focus:outline-hidden focus:ring-4`}
                  />
                  {errors.email && <p className="text-[11px] font-semibold text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-700 tracking-normal uppercase font-mono">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                      errors.phone ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:ring-orange-500/20 focus:border-orange-500'
                    } focus:outline-hidden focus:ring-4`}
                  />
                  {errors.phone && <p className="text-[11px] font-semibold text-red-500">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-700 tracking-normal uppercase font-mono">
                    Subject Message
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Order Delivery Status"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                      errors.subject ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:ring-orange-500/20 focus:border-orange-500'
                    } focus:outline-hidden focus:ring-4`}
                  />
                  {errors.subject && <p className="text-[11px] font-semibold text-red-500">{errors.subject}</p>}
                </div>
              </div>

              {/* Message block */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 tracking-normal uppercase font-mono">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you today..."
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    errors.message ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:ring-orange-500/20 focus:border-orange-500'
                  } focus:outline-hidden focus:ring-4 resize-none`}
                />
                {errors.message && <p className="text-[11px] font-semibold text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Trigger Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-orange-500 disabled:bg-orange-350 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition-all text-base cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    <span>Verifying details...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <Send className="h-4.5 w-4.5" />
                    <span>Submit Message</span>
                  </span>
                )}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
