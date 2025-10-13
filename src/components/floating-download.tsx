"use client";
import { Apple, PlaySquare, Package } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingDownload() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${baseUrl}/download&size=300x300`;

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-2xl p-3 shadow-2xl border border-gray-700 backdrop-blur-sm w-32 sm:w-36">
     
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
    >
      
      <img
        src="/images/boy-small.png"
        alt="boy-small"
        width={90}
        height={90}
      />
    </motion.div>
     {/* QR */}
      <img
         src={qrUrl}
        alt="Download QR"
        className="w-24 h-24 rounded-lg border border-gray-600 mb-3"
      />

      {/* Buttons */}
      <div className="flex flex-col w-full space-y-2">
        
        <a
          href="https://apps.apple.com/app/night-at-the-valley/id6467846624"
          target="_blank"
          className="flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-xs py-2 rounded-md hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          <Apple className="w-4 h-4" />
          iOS
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.pitaya.natv"
          target="_blank"
          className="flex items-center justify-center gap-1 bg-gradient-to-r from-green-600 to-teal-500 text-white font-semibold text-xs py-2 rounded-md hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          <PlaySquare className="w-4 h-4" />
          Android
        </a>
        <a
          href="https://nightvalley.gg/apk"
          target="_blank"
          className="flex items-center justify-center gap-1 bg-gradient-to-r from-gray-600 to-gray-400 text-white font-semibold text-xs py-2 rounded-md hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          <Package className="w-4 h-4" />
          APK
        </a>
      </div>

      
      
    </div>
  );
}
