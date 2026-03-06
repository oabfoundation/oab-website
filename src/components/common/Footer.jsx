import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const mainSocial = [
    { icon: Facebook, url: " https://www.facebook.com/oab.foundation.org.bd" },
    {
      icon: Instagram,
      url: "https://www.instagram.com/oab_foundation_org?igsh=MThyamh6YWhwYWM4ag==",
    },
    {
      icon: Twitter,
      url: "https://x.com/OAB_Foundation?t=htsJ1WVNFEJO1RxlEIYJIg&s=09",
    },
    { icon: Linkedin, url: "https://www.linkedin.com/company/oab-foundation/" },
    {
      icon: Youtube,
      url: "https://youtube.com/@oab_foundation_org?si=4FRJqceqpVcS7CXG",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              OAB <span className="text-orange-500">Foundation</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Empowering disadvantaged communities through education,
              healthcare, and sustainable development initiatives across
              Bangladesh.
            </p>
            <div className="flex gap-3 flex-wrap">
              {mainSocial.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">
              {[
                { name: "About Us", link: "/about" },
                { name: "Our Projects", link: "/projects" },
                { name: "Success Stories", link: "/success-stories" },
                {
                  name: "Volunteer",
                  link: "https://forms.gle/P8emtLLTMDE759TTA",
                },
                { name: "Contact", link: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="hover:text-orange-500 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Our Networks
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/overallbangladesh2018?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500"
                >
                  Over All Bangladesh
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/oab-learning-academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500"
                >
                  OAB Learning Academy
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/groups/alwaysmastibangladesh/?ref=share&mibextid=NSMWBT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500"
                >
                  OAB Blood Bank
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/groups/alwaysmastibangladesh/?ref=share&mibextid=NSMWBT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500"
                >
                  Allways Love Bangladesh
                </a>
              </li>

              <li>
                <a
                  href="https://facebook.com/groups/overallbangladesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500"
                >
                  Over All Bangladesh (Group)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 shrink-0" />
                <span>
                  Amin Garden, Amin Bhaban, 272/5, West Agargaon, Dhaka-1207,
                  Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <a href="tel:+8801785305266" className="hover:text-orange-500">
                  +880-1785305266
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <a
                  href="mailto:oabfoundationbd@gmail.com"
                  className="hover:text-orange-500"
                >
                  oabfoundationbd@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Newsletter
            </h3>

            <p className="text-sm mb-4">
              Stay updated with our latest impact stories.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg transition-colors text-sm cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-wider">
          <p>© 2026 OAB Foundation. All Rights Reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-orange-500">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-orange-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
