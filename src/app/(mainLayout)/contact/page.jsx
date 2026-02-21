import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-[70vh] px-4">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
        Contact Us
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: Contact Info + Social */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h3 className="text-2xl font-semibold text-orange-700">
            Get in Touch
          </h3>

          <p className="text-gray-600">
            Have questions about something or services? Feel free to reach out
            anytime.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-3">
              <Mail className="text-orange-600" />
              contact@oabfoundation.org
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-orange-600" />
              +880 1234-567890
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-600 hover:text-white transition"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="p-3 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-600 hover:text-white transition"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                className="p-3 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-600 hover:text-white transition"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none  border-gray-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none  border-gray-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 outline-none resize-none border-gray-300"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
