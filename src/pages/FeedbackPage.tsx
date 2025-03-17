import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Michael Johnson',
    rating: 5,
    comment: "The best pizza I've ever had! The crust is perfect - crispy on the outside, chewy on the inside. And the toppings are always fresh and abundant.",
    date: '3 days ago',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Jessica Williams',
    rating: 5,
    comment: "Amazing customer service and even better pizza! My family orders from here every Friday night. Their delivery is always on time and the food arrives hot.",
    date: '1 week ago',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Robert Smith',
    rating: 4,
    comment: "Great quality for the price. I love their special deals and the pepperoni pizza is my go-to choice. Could use a bit more cheese but overall really good!",
    date: '2 weeks ago',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: 4,
    name: 'Amanda Davis',
    rating: 5,
    comment: "I ordered catering for my office and everyone was impressed! The variety was excellent and they accommodated our dietary restrictions perfectly.",
    date: '3 weeks ago',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
];

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    subject: '',
    message: '',
    allowContact: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      rating: 5,
      subject: '',
      message: '',
      allowContact: false,
    });
    // In a real application, you would send this data to a server
  };

  return (
    <Layout>
      <div className="bg-[#121212] py-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Feedback</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We value your opinions and are committed to constantly improving our food and service.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF4500] to-[#FFA500] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Feedback Form */}
            <div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#333]">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-gradient-to-r from-[#FF4500] to-[#FFA500] inline-block p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300 mb-4">
                    We appreciate your feedback! Your insights help us improve our food and service.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-[#1E1E1E] text-white rounded-lg font-medium hover:bg-[#252525] transition-all duration-300"
                  >
                    Submit Another Review
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Share Your Experience</h2>

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

                  <div>
                    <label className="block text-gray-300 mb-2">
                      Rate Your Experience
                    </label>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="text-2xl mr-1 focus:outline-none"
                        >
                          <FaStar
                            className={`${
                              (hoverRating || formData.rating) >= star
                                ? 'text-[#FFA500]'
                                : 'text-gray-500'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
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
                      <option value="">Select a subject</option>
                      <option value="Food Quality">Food Quality</option>
                      <option value="Customer Service">Customer Service</option>
                      <option value="Delivery">Delivery</option>
                      <option value="Website/Ordering">Website/Ordering</option>
                      <option value="Menu Suggestion">Menu Suggestion</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Your Feedback
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-lg text-white focus:border-[#FF4500] focus:outline-none"
                      placeholder="Tell us about your experience..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="allowContact"
                      name="allowContact"
                      checked={formData.allowContact}
                      onChange={handleInputChange}
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="allowContact" className="text-gray-300">
                      I'm willing to be contacted about my feedback if needed.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:brightness-110 transition-all duration-300"
                  >
                    Submit Feedback
                  </button>
                </form>
              )}
            </div>

            {/* Testimonials Section */}
            <div>
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">What Our Customers Say</h2>
                <div className="space-y-6">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-[#1A1A1A] rounded-lg p-6 border border-[#333]">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h3 className="text-white font-medium">{testimonial.name}</h3>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={i < testimonial.rating ? 'text-[#FFA500]' : 'text-gray-500'}
                                size={14}
                              />
                            ))}
                            <span className="text-gray-400 text-sm ml-2">{testimonial.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300">{testimonial.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          {/* <div className="mt-16 bg-[#1A1A1A] rounded-lg p-8 border border-[#333] text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Have a Suggestion for Our Menu?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always open to new ideas! If you have a pizza creation or menu item you'd like to see, let us know and we might feature it as our next special.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF4500] to-[#FFA500] text-white rounded-lg font-medium hover:shadow-lg hover:brightness-110 transition-all duration-300"
            >
              Share Your Idea
            </a>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default FeedbackPage;
