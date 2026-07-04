"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CreditCard, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Events", path: "/events" },
    { name: "Members", path: "/members" },
    { name: "Contact", path: "/contact" },
    {
      name: "More",
      children: [
        { name: "Reference", path: "/reference" },
        { name: "Moments", path: "/moments" },
      ],
    },
  ];

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
        <nav className="hidden md:flex items-center space-x-5">
          {menuItems.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.name}
                  className="relative group py-2"
                  onMouseEnter={() => setMoreOpen(true)}
                  onMouseLeave={() => setMoreOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 font-semibold text-lg transition-colors cursor-pointer ${
                      item.children.some((child) => isActive(child.path))
                        ? "text-orange-600"
                        : "text-gray-700 group-hover:text-orange-600"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Desktop Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-amber-100 py-2 z-50 transition-all duration-200 ${
                      moreOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        onClick={() => setMoreOpen(false)}
                        className={`block px-5 py-3 transition ${
                          isActive(child.path)
                            ? "bg-orange-50 text-orange-600"
                            : "hover:bg-orange-50 hover:text-orange-600"
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`font-semibold text-lg transition-colors ${
                  isActive(item.path)
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <Link
              href="/donate"
              className="flex items-center gap-1 bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-3 rounded-xl transition-all active:scale-95 cursor-pointer"
            >
              Donate <CreditCard size={20} />
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
            {menuItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                      className="w-full flex justify-between items-center px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-orange-50"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileMoreOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileMoreOpen && (
                      <div className="ml-5 mt-2 flex flex-col border-l-2 border-gray-100 pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileMoreOpen(false);
                            }}
                            className={`px-4 py-2 rounded-lg ${
                              isActive(child.path)
                                ? "bg-orange-50 text-orange-600"
                                : "hover:bg-orange-50 hover:text-orange-600"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    isActive(item.path)
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="mt-6 flex flex-col gap-3 text-center sm:hidden">
              <Link
                href="/donate"
                className="flex items-center justify-center gap-1 bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-3 rounded-xl"
              >
                Donate <CreditCard size={20} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
