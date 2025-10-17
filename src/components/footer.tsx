"use client";
import { useLanguage } from "@/contexts/language-context";
import { Facebook, Twitter, Youtube, Globe, Mail, MapPin, ArrowRight } from "lucide-react";

export default function FooterSection() {
  const { currentLang } = useLanguage();

  const footerMenu = [
    { labelEN: "Home", labelVI: "Trang Chủ", href: "#home" },
    { labelEN: "Overview", labelVI: "Tổng Quan", href: "#overview" },
    { labelEN: "Game Mode", labelVI: "Chế Độ Chơi", href: "#gamemode" },
    { labelEN: "Equipment", labelVI: "Trang Bị", href: "#equipment" },
    { labelEN: "Skill", labelVI: "Kỹ năng", href: "#skill" },
    { labelEN: "News", labelVI: "Tin Tức", href: "#news" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/", label: "Youtube" },
    { icon: <Globe className="w-5 h-5" />, href: "https://nightvalley.gg", label: "Website" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-gray-950 to-black border-t border-gray-800/50 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl container mx-auto px-10 md:px-0 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left - Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <img
                src="/images/logo.png"
                alt="Night Valley Logo"
                className="w-32 sm:w-40 object-contain"
              />
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
                {currentLang === "VI"
                  ? "Khám phá thế giới huyền bí của Night Valley — nơi phép thuật và chiến lược hòa quyện!"
                  : "Explore the mystical world of Night Valley — where magic and strategy unite!"}
              </p>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                {currentLang === "VI" ? "Nhận Tin Mới" : "Newsletter"}
              </h4>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    placeholder={currentLang === "VI" ? "Email của bạn" : "Your email"}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">
              {currentLang === "VI" ? "Liên Kết Nhanh" : "Quick Links"}
            </h3>
            <nav className="grid grid-cols-2 gap-3">
              {footerMenu.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-purple-400 group-hover:w-2 transition-all duration-300"></span>
                  {currentLang === "VI" ? item.labelVI : item.labelEN}
                </a>
              ))}
            </nav>

            {/* Additional Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-500" />
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-500" />
                <span>contact@nightvalley.gg</span>
              </div>
            </div>
          </div>

          {/* Right - Social & Download */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg uppercase tracking-wider">
                {currentLang === "VI" ? "Cộng Đồng" : "Community"}
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-900/80 hover:bg-gray-800 border border-gray-800 group-hover:border-purple-500 rounded-lg p-3 transition-all duration-300 group-hover:scale-110">
                      {s.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                {currentLang === "VI" ? "Tải Game" : "Download Game"}
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://apps.apple.com/app/night-at-the-valley/id6467846624"
                  target="_blank"
                  className="group flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-purple-900/50 hover:to-blue-900/50 border border-gray-800 hover:border-purple-500 rounded-lg px-4 py-2.5 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.pitaya.natv"
                  target="_blank"
                  className="group flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-green-900/50 hover:to-teal-900/50 border border-gray-800 hover:border-green-500 rounded-lg px-4 py-2.5 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <span className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">Google Play</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative my-8 sm:my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-0.5 w-32"></div>
          </div>
        </div>

        {/* Bottom - Copyright & Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-500 text-center sm:text-left">
            © 2025 <span className="text-white font-semibold">Night Valley</span>.{" "}
            {currentLang === "VI"
              ? "Mọi quyền được bảo lưu."
              : "All rights reserved."}
          </div>
          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-purple-400 transition-colors">
              {currentLang === "VI" ? "Chính Sách" : "Privacy"}
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              {currentLang === "VI" ? "Điều Khoản" : "Terms"}
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              {currentLang === "VI" ? "Hỗ Trợ" : "Support"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}