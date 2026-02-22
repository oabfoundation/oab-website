import {
  LayoutDashboard,
  PanelsTopLeft,
  LogOut,
  UserCircle,
  House,
} from "lucide-react";
import Link from "next/link";
import Footer from "./dashboard/Components/Footer";
import Banner from "./dashboard/Components/Banner";

const DashboardLayout = ({ children }) => {
  const sidebarLinks = [
    { name: "Return Home", path: "/", icon: House },
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Events", path: "/dashboard/events", icon: PanelsTopLeft },
    { name: "Projects", path: "/dashboard/projects", icon: PanelsTopLeft },
  ];

  return (
    <section className="min-h-screen bg-slate-50 flex flex-col">
      {/* --- Top Navbar --- */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
        <div className="flex items-center justify-between px-4 h-16 md:px-8">
          <Link href="/" className="transition-transform hover:scale-105">
            <h1 className="font-bold text-2xl">Polytechnic Info</h1>
          </Link>

          <div className="flex items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-sm font-medium">
              <UserCircle size={18} />
              <span className="hidden sm:inline">Hi, Admin</span>
            </div>
            <button className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:bg-red-50 py-2 px-4 rounded-lg transition-colors">
              <LogOut size={18} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* --- Sidebar --- */}
        <aside className="fixed top-16 h-screen w-18 md:w-60 bg-white border-r border-slate-200 flex flex-col py-6 transition-all duration-300">
          <nav className="space-y-1 px-3">
            {sidebarLinks.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === 1;

              return (
                <Link
                  href={item.path}
                  key={item.name}
                  className={`group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
                      : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                  }`}
                >
                  <Icon
                    size={22}
                    className={`${isActive ? "text-white" : "group-hover:text-indigo-600"}`}
                  />
                  <span className="hidden md:block font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* --- Main Content Area --- */}
        <main className="flex-1 overflow-y-auto ml-20 md:ml-60 lg:ml-60 p-6 md:p-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      
      </div>
        <Footer></Footer>
    </section>
  );
};

export default DashboardLayout;
