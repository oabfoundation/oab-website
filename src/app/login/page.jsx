"use client"
import React, { useState, useEffect, useCallback } from "react";
import {
  Eye, EyeOff, Mail, Lock, Building2,
  AlertCircle, Activity, Users,
  ChevronRight, ExternalLink, ShieldCheck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import bg from '../../../public/oab dashboard 1.png'

const Login = () => {
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => { setMounted(true); }, []);

  const getValidation = useCallback((name, value) => {
    if (name === 'email') {
      if (!value) return 'Work email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid corporate email format';
    }
    if (name === 'password') {
      if (!value) return 'Security credential required';
      if (value.length < 8) return 'Minimum 8 characters required';
    }
    return '';
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: getValidation(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: getValidation(name, value) }));
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    const emailErr = getValidation('email', formData.email);
    const passErr = getValidation('password', formData.password);

    if (emailErr || passErr) {
      setErrors({ email: emailErr, password: passErr });
      setTouched({ email: true, password: true });
      return;
    }
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-orange-100 dark:bg-orange-950 flex items-center justify-center p-6 selection:bg-orange-100 selection:text-orange-900 transition-colors duration-500">
      <main className="w-full max-w-6xl grid lg:grid-cols-12 gap-0 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] overflow-hidden border border-slate-200 dark:border-slate-800 relative z-10">
        
        {/* Left Panel: Branding & Interactive Background */}
        <section className="hidden lg:flex lg:col-span-7 p-16 flex-col justify-between border-r border-slate-100 dark:border-slate-800 relative overflow-hidden group cursor-pointer">
          
   
          <div className="absolute inset-0 z-0">
            <Image 
              src={bg} 
              alt="Dashboard Preview" 
              fill 
              className="object-cover transition-all duration-700 opacity-20 group-hover:opacity-100" 
            />
            {/* Overlay jetah hover korle vanished hobe */}
            <div className="absolute inset-0 bg-orange-800 transition-opacity duration-700 opacity-90 group-hover:opacity-0" />
          </div>

         
          <div className="relative z-10 space-y-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/20">
                <Building2 className="text-white w-7 h-7" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">OAB Foundation</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold text-white leading-[1.1]">
                Unified Governance <br />
                <span className="text-orange-300">Portal</span>
              </h1>
              <p className="text-lg text-white dark:text-slate-400 max-w-md">
                Secure access to foundation analytics, beneficiary lifecycle management, and global grant distribution.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8">
              <StatItem icon={<Activity />} label="System Status" value="Online" />
              <StatItem icon={<Users />} label="Records" value="2.4M+" />
            </div>
          </div>

          {/* Bottom Content: Hover-e vanish hobe */}
          <div className="relative z-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-8">
            <div className="flex items-center gap-6 bg-white/50 dark:bg-slate-800/50 p-6 rounded-[2rem] border border-white dark:border-slate-700 backdrop-blur-sm w-fit">
              <ShieldCheck className="w-10 h-10 text-emerald-500/80" />
              <div className="text-sm">
                <p className="font-semibold text-slate-900 dark:text-white">Enterprise Security</p>
                <p className="text-slate-500">Fully compliant with GDPR standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel: Authentication Form */}
        <section className="lg:col-span-5 p-10 md:p-16 flex flex-col justify-center bg-white dark:bg-slate-900 z-10">
          <div className="w-full max-w-sm mx-auto space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Sign In</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Authentication required for dashboard access.</p>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border rounded-2xl outline-none transition-all ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10'
                      }`}
                      placeholder="Enter Email"
                    />
                  </div>
                  {errors.email && <p className="text-xs font-medium text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Password</label>
                    <a href="#" className="text-xs font-semibold text-orange-600 hover:text-orange-500">Forgot?</a>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800/50 border rounded-2xl outline-none transition-all ${
                        errors.password ? 'border-red-500 bg-red-50/30' : 'border-slate-200 dark:border-slate-700 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10'
                      }`}
                      placeholder="*******"
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
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
                  checked={rememberDevice}
                  onChange={(e) => setRememberDevice(e.target.checked)}
                />
                <label htmlFor="remember" className="text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
                  Trust this device
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl shadow-xl shadow-orange-500/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Sign In</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <footer className="pt-8 text-center border-t border-slate-100 dark:border-slate-800">
              <p className="text-sm flex justify-center gap-2 font-medium">
                New To OAB Foundation? 
                <Link className="text-orange-500 flex items-center gap-1 hover:underline" href={'/register'}>
                  Sign Up <ExternalLink className="w-3 h-3" />
                </Link>   
              </p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

const StatItem = ({ icon, label, value }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-orange-300">
      {React.cloneElement(icon, { className: "w-4 h-4" })}
      <span className="text-xs font-bold uppercase tracking-widest opacity-60">{label}</span>
    </div>
    <div className="text-2xl font-bold text-white dark:text-white">{value}</div>
  </div>
);

export default Login;