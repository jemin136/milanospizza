import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { CONTACT_INFO } from '../utils/constants';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    // In a real application, you would send this data to a server
  };

  return (
    <Layout>
      <div className="bg-[#121212] py-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Have questions, suggestions, or want to place a special order? We'd love to hear from you!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF4500] to-[#FFA500] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#333]">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-gradient-to-r from-[#FF4500] to-[#FFA500] inline-block p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    Your message has been successfully sent. We will contact you very soon!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-[#1E1E1E] text-white rounded-lg font-medium hover:bg-[#252525] transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-lg text-white focus:border-[#FF4500] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-lg text-white focus:border-[#FF4500] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-lg text-white focus:border-[#FF4500] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-300 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-lg text-white focus:border-[#FF4500] focus:outline-none"
                      >
                        <option value="">Choose a subject</option>
                        <option value="Order Inquiry">Order Inquiry</option>
                        <option value="Catering">Catering</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Employment">Employment</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-lg text-white focus:border-[#FF4500] focus:outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:brightness-110 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#333] mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-[#252525] p-3 rounded-lg mr-4">
                      <FaMapMarkerAlt className="text-[#FF4500] text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Address</h3>
                      <p className="text-gray-400 mt-1">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#252525] p-3 rounded-lg mr-4">
                      <FaPhone className="text-[#FF4500] text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Phone</h3>
                      <p className="text-gray-400 mt-1">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#252525] p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-[#FF4500] text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <p className="text-gray-400 mt-1">{CONTACT_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#252525] p-3 rounded-lg mr-4">
                      <FaClock className="text-[#FF4500] text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Hours</h3>
                      <div className="text-gray-400 mt-1 space-y-1">
                        <p>Monday: {CONTACT_INFO.hours.monday}</p>
                        <p>Tuesday: {CONTACT_INFO.hours.tuesday}</p>
                        <p>Wednesday: {CONTACT_INFO.hours.wednesday}</p>
                        <p>Thursday: {CONTACT_INFO.hours.thursday}</p>
                        <p>Friday: {CONTACT_INFO.hours.friday}</p>
                        <p>Saturday: {CONTACT_INFO.hours.saturday}</p>
                        <p>Sunday: {CONTACT_INFO.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#333]">
                <h2 className="text-2xl font-bold text-white mb-6">Our Location</h2>
                <div className="rounded-lg overflow-hidden h-[300px] border border-[#333]">
                  {/* Here you would typically embed a Google Map */}
                  <div className="w-full h-full bg-[#252525] flex items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20331.83677230901!2d174.885953!3d-36.992993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4dbd0ea56787%3A0xeef8550ae9c798eb!2sMilanos%20Manukau!5e1!3m2!1sen!2snz!4v1742104985635!5m2!1sen!2snz" width="516" height="298" style={{"border": 0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
