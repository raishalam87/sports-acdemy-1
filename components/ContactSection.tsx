'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', sport: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      lines: ['Shadow Striker Arena', '42 Champions Boulevard', 'Sports City, SC 10001'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['+91 9540879700', '+1 (800) 778-7529'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@shadowstrikerunited.com', 'join@shadowstrikerunited.com'],
    },
    {
      icon: Clock,
      title: 'Training Hours',
      lines: ['Mon – Sat: 5:30 PM – O7:00 PM', 'Sun: Closed'],
    },
  ];

  return (
    <section id="contact" className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Contact <span className="text-red-500">Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have questions about our programs? Ready to start your journey? Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map(({ icon: Icon, title, lines }) => (
                <div
                  key={title}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-2">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{title}</h3>
                  </div>
                  {lines.map((line, i) => (
                    <p key={i} className="text-gray-400 text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-gray-800 h-64 bg-gray-900 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 to-transparent" />
              <div className="text-center z-10">
                <MapPin className="w-10 h-10 text-red-500 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Shadow Strikers Arena</p>
                <p className="text-gray-500 text-xs">42 Champions Boulevard, Sports City</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="bg-red-600/20 border border-red-600/30 rounded-full p-4 mb-5">
                  <CheckCircle className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400 max-w-xs">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-red-500 text-sm font-medium hover:text-red-400 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (000) 000-0000"
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Sport Interest</label>
                      <select
                        name="sport"
                        value={form.sport}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors appearance-none"
                      >
                        <option value="" className="bg-black">Select a sport</option>
                        <option value="cricket" className="bg-black">Cricket</option>
                        <option value="football" className="bg-black">Football</option>
                        <option value="basketball" className="bg-black">Basketball</option>
                        <option value="taekwondo" className="bg-black">Taekwondo</option>
                        <option value="general" className="bg-black">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals or any questions you have..."
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
