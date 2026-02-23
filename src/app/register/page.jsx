"use client"
import React, { useState, useEffect, useCallback } from "react";
import {
  User, Mail, Lock, Phone, MapPin, Sparkles,
  Eye, EyeOff, Building2, ChevronRight, 
  ExternalLink, ShieldCheck, ArrowLeft
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import bg from '../../../public/oab dashboard 1.png'

const Register = () => {
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    passion: ""
  });

  useEffect(() => { setMounted(true); }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Registration Logic
    setTimeout(() => setIsLoading(false), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-orange-100 dark:bg-orange-950 flex items-center justify-center p-4 md:p-6 transition-colors duration-500">
      <main className="w-full max-w-6xl grid lg:grid-cols-12 gap-0 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 relative z-10">
        
{/* Left Panel: Branding */}
<section className="hidden lg:flex lg:col-span-5 p-12 flex-col justify-between relative overflow-hidden bg-orange-600 group cursor-pointer">
  
  {/* Background Image Layer */}
  <div className="absolute inset-0 z-0 transition-all duration-700 ease-in-out">
    <Image 
      src={bg} 
      alt="Background" 
      fill 
      className="object-cover transition-opacity duration-700 opacity-20 group-hover:opacity-100" 
    />
    
    {/* Background Overlay: Hover korle color purapuri chole jabe */}
    <div className="absolute inset-0 bg-gradient-to-b from-orange-600/90 to-orange-900/95 transition-opacity duration-700 group-hover:opacity-0" />
  </div>

  {/* Content Wrapper: Ekhane 'group-hover:opacity-0' use kora hoyeche */}
  <div className="relative z-10 space-y-8 text-white transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
        <Building2 className="text-white w-6 h-6" />
      </div>
      <span className="text-xl font-bold tracking-tight">OAB Foundation</span>
    </div>

    <div className="space-y-4">
      <h1 className="text-4xl font-extrabold leading-tight">
        Join our Global <br />
        <span className="text-orange-200">Community</span>
      </h1>
      <p className="text-orange-100 text-sm font-medium leading-relaxed max-w-xs">
        Create an account to start managing beneficiaries and tracking grant distributions worldwide.
      </p>
    </div>
  </div>

  {/* Bottom Shield Card: Etio hover korle vanish hoye jabe */}
  <div className="relative z-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-4">
    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20">
      <ShieldCheck className="w-8 h-8 text-orange-200" />
      <div className="text-xs text-orange-50">
        <p className="font-bold">Verified Governance</p>
        <p className="opacity-80">Your data is encrypted with SOC2 standards.</p>
      </div>
    </div>
  </div>
</section>

        {/* Right Panel: Registration Form */}
        <section className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-slate-900">
          <div className="w-full max-w-2xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Create Account</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Please fill in the details below.</p>
              </div>
              <Link href="/login" className="flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-all">
                <ArrowLeft className="w-4 h-4" /> Back to Login
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <InputField 
                  label="Full Name" 
                  icon={<User />} 
                  name="name" 
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleInputChange}
                />

                {/* Email Address */}
                <InputField 
                  label="Email Address" 
                  icon={<Mail />} 
                  name="email" 
                  type="email" 
                  placeholder="john@oab.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                />

                {/* Phone Number */}
                <InputField 
                  label="Phone Number" 
                  icon={<Phone />} 
                  name="phone" 
                  type="tel" 
                  placeholder="+880 1XXX-XXXXXX" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Passion */}
                <InputField 
                  label="Your Passion" 
                  icon={<Sparkles />} 
                  name="passion" 
                  type="text" 
                  placeholder="e.g. Social Welfare" 
                  value={formData.passion}
                  onChange={handleInputChange}
                />

                {/* Address */}
                <InputField 
                  label="Current Address" 
                  icon={<MapPin />} 
                  name="address" 
                  type="text" 
                  placeholder="City, Country" 
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-xl shadow-orange-500/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Register Account</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <footer className="text-center">
              <p className="text-sm text-slate-500">
                Already have an account? 
                <Link href="/login" className="text-orange-600 font-bold ml-1 hover:underline inline-flex items-center gap-1">
                  Login here <ExternalLink className="w-3 h-3" />
                </Link>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

// Reusable Input Component
const InputField = ({ label, icon, name, type, placeholder, value, onChange }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
        placeholder={placeholder}
        required
      />
    </div>
  </div>
);

export default Register;