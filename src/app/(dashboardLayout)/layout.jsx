"use client";
import {
  LayoutDashboard,
  PanelsTopLeft,
  LogOut,
  UserCircle,
  House,
  Menu,
  X,
  CalendarRange,
  FolderKanban,
  ChevronDown,
  Users,
  Image as ImageIcon,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isManagementOpen, setIsManagementOpen] = useState(false);

  const sidebarLinks = [
    { name: "Return Home", path: "/", icon: House },
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", path: "/dashboard/projects", icon: FolderKanban },
    { name: "Events", path: "/dashboard/events", icon: CalendarRange },
    { name: "Moments", path: "/dashboard/moments", icon: ImageIcon },
    { name: "Reference", path: "/dashboard/reference", icon: PanelsTopLeft },
    {
      name: "Upcoming Events",
      path: "/dashboard/upcomingEvents",
      icon: CalendarRange,
    },
    {
      name: "Testimonials",
      path: "/dashboard/testimonials",
      icon: MessageSquare,
    },
    {
      name: "Member",
      icon: Users,
      children: [
        {
          name: "Board of Director",
          path: "/dashboard/board-of-director",
          icon: PanelsTopLeft,
        },
        {
          name: "General Member",
          path: "/dashboard/general-member",
          icon: Users,
        },
        {
          name: "Committee",
          path: "/dashboard/committee",
          icon: PanelsTopLeft,
        },
        { name: "Leader", path: "/dashboard/leader", icon: PanelsTopLeft },
      ],
    },
  ];

  const logout = () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("user");
    window.location.href = "/auth/login";
  };

  const isActiveLink = (path) => pathname === path;

  const isChildActive = (children) =>
    children.some((child) => pathname === child.path);

  return (
    <section className="min-h-screen bg-slate-50 flex flex-col">
      {/* --- Top Navbar --- */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-slate-200">
        <div className="flex items-center justify-between px-4 h-16 md:px-8">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link href="/">
              <Image
                width={224}
                height={150}
                src="/logo.png"
                alt="logo"
                className="md:w-[85%] h-full"
              />
            </Link>
          </div>

          <div className="flex items-center gap-3 text-slate-600">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-sm font-medium">
              <UserCircle size={18} />
              <span className="hidden sm:inline">Hi, Admin</span>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:bg-red-50 py-2 px-3 md:px-4 rounded-lg transition-colors cursor-pointer"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 pt-16">
        {/* --- Sidebar --- */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 pt-20 transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <nav className="space-y-1 px-3 pb-6">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;

              if (item.children) {
                const hasActiveChild = isChildActive(item.children);
                return (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() => setIsManagementOpen(!isManagementOpen)}
                      className={`w-full group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                        hasActiveChild
                          ? "bg-orange-50 text-orange-600 font-semibold"
                          : "text-slate-600 hover:bg-slate-100 hover:text-orange-600"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {Icon && (
                          <Icon
                            size={20}
                            className={`${
                              hasActiveChild
                                ? "text-orange-600"
                                : "text-slate-400 group-hover:text-orange-600"
                            }`}
                          />
                        )}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          isManagementOpen || hasActiveChild ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Items */}
                    {(isManagementOpen || hasActiveChild) && (
                      <div className="pl-6 space-y-1 border-l-2 border-slate-100 ml-6 mt-1 transition-all">
                        {item.children.map((child) => {
                          const isChildCurrent = isActiveLink(child.path);
                          const ChildIcon = child.icon;
                          return (
                            <Link
                              href={child.path}
                              key={child.name}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                                isChildCurrent
                                  ? "bg-orange-600 text-white font-medium shadow-sm"
                                  : "text-slate-500 hover:bg-slate-50 hover:text-orange-600"
                              }`}
                            >
                              {ChildIcon && (
                                <ChildIcon
                                  size={16}
                                  className={
                                    isChildCurrent
                                      ? "text-white"
                                      : "text-slate-400"
                                  }
                                />
                              )}
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  href={item.path}
                  key={item.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActiveLink(item.path)
                      ? "bg-orange-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100 hover:text-orange-600"
                  }`}
                >
                  {Icon && (
                    <Icon
                      size={20}
                      className={`${isActiveLink(item.path) ? "text-white" : "text-slate-400 group-hover:text-orange-600"}`}
                    />
                  )}
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* --- Overlay for Mobile Sidebar --- */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* --- Main Content Area --- */}
        <main className="flex-1 transition-all duration-300 md:ml-64 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
