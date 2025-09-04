import { useState } from "react";
import { Tag } from "../../components/ui/Tag";
import { Button } from "../../components/ui/Button";
import EmailIcon from "../../assets/svgs/email.svg?react";
import PhoneIcon from "../../assets/svgs/phone.svg?react";
import LocationIcon from "../../assets/svgs/location.svg?react";
import FacebookIcon from "../../assets/svgs/facebook.svg?react";
import TwitterIcon from "../../assets/svgs/twitter.svg?react";
import InstagramIcon from "../../assets/svgs/instagram.svg?react";
import YoutubeIcon from "../../assets/svgs/youtube.svg?react";
import { CONTACT_FORM_FIELDS } from "../../lib/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We'll get back to you soon.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="mt-[74px] bg-white text-black min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Film strip and camera"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 md:p-16 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4">
            Contact Us
          </h1>
          <p className="text-lg font-thin md:text-xl max-w-2xl mb-6 text-gray-200">
            We'd love to hear from you
          </p>
          <div className="flex items-center gap-4">
            <Tag title="Questions" />
            <Tag title="Feedback" />
            <Tag title="Support" />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">
                  Get In Touch
                </h2>
                <div className="w-24 h-1 bg-black mb-8"></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Have questions about our platform, need assistance with your
                  account, or want to provide feedback? We're here to help! Fill
                  out the form or use one of our contact methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <EmailIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">support@cinephilogy.com</p>
                    <p className="text-gray-600">business@cinephilogy.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <LocationIcon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">123 Cinema Street</p>
                    <p className="text-gray-600">Los Angeles, CA 90028</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <YoutubeIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

              {formStatus.submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
                  {formStatus.message}
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                {CONTACT_FORM_FIELDS.map((field) => (
                  <div key={field.id} className="space-y-1.5">
                    <label className="text-sm font-medium" htmlFor={field.id}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full p-2 border focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200"
                    />
                  </div>
                ))}

                <div className="space-y-1.5">
                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    rows="5"
                    className="w-full p-2 border focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200"
                  />
                </div>

                <Button onClick={handleSubmit}>Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
