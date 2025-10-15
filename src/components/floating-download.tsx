"use client";
import { ChevronRight, Download, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function FloatingDownload() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${baseUrl}/download&size=300x300`;

  const [isOpen, setIsOpen] = useState(true);
  const { t } = useLanguage();
  
  useEffect(() => {
    const checkMobile = () => {
      setIsOpen(window.innerWidth >= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex items-center gap-3">
      {/* Panel tải game */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="floating-panel"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-4 shadow-2xl border border-gray-700/50 backdrop-blur-md w-40 sm:w-44"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-transparent rounded-3xl blur-xl" />
            
            {/* Content wrapper */}
            <div className="relative z-10 w-full">
              {/* Header với icon */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-xl shadow-lg">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">{t("download.title")}</p>
                  <p className="text-gray-400 text-[10px]">Night at the Valley</p>
                </div>
              </div>

              {/* Character Decoration */}
              <motion.div
                animate={{ rotateZ: [0, -20, 20, 0] }}
                transition={{
                  delay: 0.7,
                  duration: 1,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="mb-3"
              >
                <img
                  src="/images/boy-small.png"
                  alt="boy-small"
                  width={80}
                  height={80}
                  className="mx-auto drop-shadow-2xl"
                />
              </motion.div>

              <div className="relative mb-4 flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur opacity-50" />
                <div className="relative bg-white p-2 rounded-xl mx-auto">
                  <img
                    src={qrUrl}
                    alt="Download QR"
                    className="w-24 h-24 rounded-lg mx-auto block"
                  />
                </div>
                <p className="text-center text-gray-400 text-[10px] mt-2">{t("download.subTitle")}</p>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col w-full space-y-2">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://apps.apple.com/app/night-at-the-valley/id6467846624"
                  target="_blank"
                  className="relative group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xs py-2.5 rounded-xl hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="relative z-10">iOS</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://play.google.com/store/apps/details?id=com.pitaya.natv"
                  target="_blank"
                  className="relative group flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-teal-500 text-white font-bold text-xs py-2.5 rounded-xl hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <span className="relative z-10">Android</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://nightvalley.gg/apk"
                  target="_blank"
                  className="relative group flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold text-xs py-2.5 rounded-xl hover:shadow-xl hover:shadow-gray-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span className="relative z-10">APK</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - Redesigned */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white p-3 rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden"
        aria-label={isOpen ? "Thu gọn" : "Mở rộng"}
      >
        {/* Animated background */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 blur-md"
        />
        
        {/* Icon */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="chevron-right"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="download"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Download className="w-6 h-6 animate-bounce" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            animate={{
              scale: [1, 1.5],
              opacity: [0.5, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute inset-0 rounded-2xl border-2 border-purple-400"
          />
        )}
      </motion.button>
    </div>
  );
}