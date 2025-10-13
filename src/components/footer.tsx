"use client";
import { useLanguage } from "@/contexts/language-context";
import { Facebook, Twitter, Youtube, Globe } from "lucide-react";

export default function FooterSection() {
  const { currentLang } = useLanguage();

  const footerMenu = [
    { labelEN: "Home", labelVI: "Trang Chủ", href: "#home" },
    { labelEN: "Overview", labelVI: "Tổng Quan", href: "#overview" },
    { labelEN: "Game Mode", labelVI: "Chế Độ Chơi", href: "#gamemode" },
    { labelEN: "Equipment", labelVI: "Trang Bị", href: "#equipment" },
    { labelEN: "News", labelVI: "Tin Tức", href: "#news" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/" },
    { icon: <Globe className="w-5 h-5" />, href: "https://nightvalley.gg" },
  ];

  return (
    <footer className="relative w-full bg-black border-t border-gray-800 py-12 sm:py-16 mt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-black to-black"></div>

      <div className="relative z-10 container mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left - Logo + Description */}
          <div className="text-center md:text-left space-y-4">
            <img
              src="/images/logo.png"
              alt="Night Valley Logo"
              className="mx-auto md:mx-0 w-28 sm:w-36 object-contain"
            />
            {/* <p className="text-gray-400 text-sm sm:text-base max-w-xs mx-auto md:mx-0">
              {currentLang === "VI"
                ? "Khám phá thế giới huyền bí của Night Valley — nơi phép thuật và chiến lược hòa quyện!"
                : "Explore the mystical world of Night Valley — where magic and strategy unite!"}
            </p> */}
          </div>

          {/* Middle - Menu Links */}
          <div className="text-center">
            {/* <h3 className="text-lg font-bold text-white mb-4">
              {currentLang === "VI" ? "Liên Kết Nhanh" : "Quick Links"}
            </h3> */}
            <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm sm:text-base">
              {footerMenu.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block"
                >
                  {currentLang === "VI" ? item.labelVI : item.labelEN}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Social Icons */}
          <div className="text-center md:text-right space-y-4">
            <h3 className="text-lg font-bold text-white">
              {currentLang === "VI" ? "Kết Nối Với Chúng Tôi" : "Connect With Us"}
            </h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom - Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 <span className="text-white font-semibold">Night Valley</span>.{" "}
          {currentLang === "VI"
            ? "Mọi quyền được bảo lưu."
            : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
