"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef(null);

  // Menu items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "OAB Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Active link check
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="w-11/12 mx-auto">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center py-2 gap-2 font-bold text-lg"
        >
          <Image
            width={200}
            height={40}
            src={"/logo.png"}
            alt={"oab foundation"}
            className="md:w-[85%] h-full py-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={`flex items-center transition-colors font-semibold text-lg ${
                isActive(path)
                  ? "text-orange-600"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="md:hidden lg:block flex items-center space-x-4">
          <div className="hidden sm:block relative" ref={userDropdownRef}>
            <Link
              href="/donate"
              className="border border-orange-600 text-orange-600 px-4 py-2 rounded font-semibold hover:bg-orange-50 transition"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-3">
            {menuItems.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors font-semibold ${
                  isActive(path)
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {name}
              </Link>
            ))}

            {/* Extra Mobile Action */}
            <div className="mt-6 flex flex-col gap-3 text-center">
              <Link
                href="/donate"
                className="border border-orange-600 text-orange-600 px-4 py-2 rounded font-semibold hover:bg-orange-50 transition"
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
