"use client";

import React, { useState } from "react";
import axios from "axios";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { MessageCircle, Zap, Shield, Clock, ArrowRight, LayoutDashboard, LogOut, Sparkles } from "lucide-react";
import { div, p } from "motion/react-client";

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

export default function HomeClient({email}:{email:string}) {
    const [open, setOpen] = useState(false);
    const handleLogin=()=>{
        window.location.href="/api/auth/login"
    }
    const firstletter = email ? email[0].toUpperCase() : '';

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
    const handleLogout=async()=>{
      try {
        await axios.get("/api/auth/logout");
        window.location.href = "/";
      } catch (error) {
        console.error("Logout failed", error);
      }
    }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-black selection:text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/75 backdrop-blur-2xl border-b border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer group"
          >
            <div className="font-bold text-2xl tracking-tighter text-gray-900 leading-none group-hover:opacity-80 transition-opacity">
               Support
               <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 ml-0.5">AI</span>
               <span className="text-blue-600 text-3xl leading-none">.</span>
            </div>
          </motion.div>
          {email ? (
            <div className="relative">
              <motion.button 
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg shadow-sm cursor-pointer outline-none ring-offset-2 focus:ring-2 ring-black/20"
              >
                {firstletter}
              </motion.button>
              {open && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 origin-top-right"
                >
                  <div className="px-3 py-2.5 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-50 mb-1 truncate">
                    {email}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(249, 250, 251, 1)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = "/dashboard"}
                    className="w-full text-left px-3 py-2.5 text-sm text-gray-700 rounded-xl transition-all flex items-center gap-3 font-medium"
                  >
                    <LayoutDashboard className="w-4 h-4 text-gray-500" />
                    Dashboard
                  </motion.button>

                  <motion.button 
                    whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(254, 242, 242, 1)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2.5 text-sm text-red-600 rounded-xl transition-all flex items-center gap-3 font-medium mt-1"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </motion.button>
                </motion.div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-black text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Login
            </button>
          )}
          
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
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-sm font-medium shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Now with GPT-4o Integration</span>
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
                variants={fadeInUp}
              >
                AI Customer Support <br />
                <span className="text-gray-400">
                  Built for the Future
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg"
                variants={fadeInUp}
              >
                Instantly deploy a <span className="text-gray-900 font-semibold">human-like AI agent</span> to your website. 
                Train it on your data and let it handle support 24/7 while you sleep.
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
              className="flex-1 w-full max-w-md relative perspective-1000"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ perspective: 1000 }}
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
                className="absolute -top-10 -right-10 w-32 h-32 bg-gray-200 rounded-full blur-3xl opacity-60 mix-blend-multiply"
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
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-300 rounded-full blur-3xl opacity-60 mix-blend-multiply"
              />

              <div className="absolute -inset-4 bg-gradient-to-r from-gray-100/50 to-gray-200/50 rounded-3xl blur-2xl opacity-50" />
              
              <motion.div
                className="relative bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-6"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div style={{ transform: "translateZ(50px)" }}>
                <div className="flex items-center justify-between mb-6 border-b border-gray-100/50 pb-4">
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Live Chat Preview</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300/80 shadow-inner" />
                    <div className="w-3 h-3 rounded-full bg-gray-300/80 shadow-inner" />
                    <div className="w-3 h-3 rounded-full bg-gray-300/80 shadow-inner" />
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
