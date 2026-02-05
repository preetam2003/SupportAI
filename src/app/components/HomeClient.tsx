"use client";

import React from "react";
import { motion } from "motion/react";
import { MessageCircle, Zap, Shield, Clock, ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomeClient() {
    const handleLogin=()=>{
        window.location.href="/api/auth/login"
    }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">Support <span className="">AI</span></div>
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
          onClick={handleLogin}>
            Login
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              className="flex-1 max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
                variants={fadeInUp}
              >
                AI Customer Support <br />
                <span className="text-gray-500">Built for Modern Websites</span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg"
                variants={fadeInUp}
              >
                Add a powerful AI chatbot to your website in minutes. Let your
                customers get instant answers using your own business knowledge.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Chat Animation */}
            <motion.div
              className="flex-1 w-full max-w-md relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Floating Background Blobs */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-60 mix-blend-multiply"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-60 mix-blend-multiply"
              />

              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100/50 to-blue-100/50 rounded-3xl blur-2xl opacity-50" />
              
              <motion.div
                className="relative bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-6"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-6 border-b border-gray-100/50 pb-4">
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Live Chat Preview</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-inner" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-inner" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80 shadow-inner" />
                  </div>
                </div>

                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="bg-white/50 backdrop-blur-sm border border-white/40 py-3 px-5 rounded-2xl rounded-tr-none text-gray-800 shadow-sm"
                    >
                      Do you offer cash on delivery?
                    </motion.div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 2.5 }}
                      className="bg-black text-white py-3 px-5 rounded-2xl rounded-tl-none shadow-lg relative"
                    >
                        Yes, Cash on Delivery is available.
                        <div className="absolute -right-12 bottom-0 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg">
                             <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      times: [0, 0.5, 1],
                      repeat: 1,
                      delay: 1.2 // Start after user message
                    }}
                    className="flex gap-1 ml-4"
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Features Section */}
          <div className="mt-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-center mb-16"
            >
              Why Businesses Choose SupportAI
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Plug & Play",
                  desc: "Add the chatbot to your site with a simple script. No coding required.",
                },
                {
                  icon: Shield,
                  title: "Admin Controlled",
                  desc: "You control exactly what the AI knows and what it tells your customers.",
                },
                {
                  icon: Clock,
                  title: "Always Online",
                  desc: "Your customers get instant support 24/7, even when you are sleeping.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="mb-6 p-4 bg-gray-50 rounded-2xl w-fit group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-black transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
