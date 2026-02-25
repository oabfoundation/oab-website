"use client";
import React, { useState } from "react";
import { Heart, ShieldCheck, Wallet, CreditCard, Banknote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [bankPopup, setBankPopup] = useState(false);

  const quickAmounts = ["500", "1000", "2000", "5000"];

  return (
    <section className="py-16 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-100 rounded-full animate-bounce">
              <Heart className="text-orange-600 w-8 h-8 fill-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Make a <span className="text-orange-600">Difference</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your contribution helps OAB Foundation provide education,
            healthcare, and disaster relief to those who need it most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Donation Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <Wallet className="text-orange-600" /> Choose Amount
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`py-3 rounded-xl font-bold transition-all border-2 
                    ${
                      amount === amt
                        ? "bg-orange-600 border-orange-600 text-white"
                        : "bg-white border-gray-100 text-gray-600 hover:border-orange-200"
                    }`}
                >
                  ৳{amt}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                Custom Amount (BDT)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-xl font-bold text-gray-800"
              />
            </div>

            <button
              onClick={() => setShowPopup(true)}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-3 text-lg cursor-pointer"
            >
              Donate Now <CreditCard size={20} />
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm">
              <ShieldCheck size={16} /> Secure Payment Processing
            </div>
          </div>

          {/* Right Side: Info & Methods */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Banknote className="text-orange-600" /> Payment Methods
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">
                      b
                    </div>
                    <span className="font-semibold text-gray-700">
                      bKash (Personal)
                    </span>
                  </div>
                  <span className="text-orange-600 font-bold">01785305266</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                      n
                    </div>
                    <span className="font-semibold text-gray-700">
                      Nagad (Merchant)
                    </span>
                  </div>
                  <span className="text-orange-600 font-bold">
                    01XXX-XXXXXX
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      B
                    </div>
                    <span className="font-semibold text-gray-700">
                      Bank Transfer
                    </span>
                  </div>
                  <button
                    onClick={() => setBankPopup(true)}
                    className="py-2 px-3 bg-orange-600 hover:bg-orange-700 text-white rounded cursor-pointer"
                  >
                    click bank info
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-orange-600 p-8 rounded-3xl text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Why Donate?</h3>
              <ul className="space-y-3 opacity-90 text-sm">
                <li className="flex gap-2">✓ 100% Transparency in usage</li>
                <li className="flex gap-2">
                  ✓ Direct impact on rural education
                </li>
                <li className="flex gap-2">
                  ✓ Tax exemption benefits available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- POPUP / MODAL --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-md w-full text-center shadow-2xl"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <Heart className="text-orange-600 w-10 h-10 fill-orange-600 animate-pulse" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Thanks for your interest!
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Please send money through our mobile banking numbers or transfer
                via bank to complete your donation.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                Ok, Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {bankPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBankPopup(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-md w-full text-center shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Bank: Dutch-Bangla Bank
              </h2>

              <p className="text-gray-600 mb-2 leading-relaxed">
                Holder: OAB Youth Foundation
              </p>
              <p className="text-gray-600 mb-2 leading-relaxed">
                Account Number :{" "}
                <span className="font-bold">1481100167897</span>
              </p>
              <p className="text-gray-600 mb-2 leading-relaxed">
                Branch: <span className="font-bold">148-Shyamoli Branch</span>
              </p>
              <p className="text-gray-600 mb-2 leading-relaxed">
                Routing num : <span className="font-bold">090263978</span>
              </p>

              <button
                onClick={() => setBankPopup(false)}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                Ok, Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Donate;
