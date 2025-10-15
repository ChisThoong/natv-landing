"use client"
import { useLanguage } from '@/contexts/language-context';
import { Play, Sparkles } from 'lucide-react';

export default function Welcome() {
  const { t } = useLanguage();
  
  return (
    <section className="relative w-full bg-black overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-slide-in-left">
            
            {/* Badge */}
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold uppercase tracking-wider">
                  {t("welcomeSection") || "Welcome"}
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t("welcomeTitle")}
              </span>
            </h2>
            
            {/* Decorative line */}
            <div className="flex items-center gap-2">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
              <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
            </div>
            
            {/* Description */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                {t("welcomeSubtitle1")}
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                {t("welcomeSubtitle2")}
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                {t("welcomeSubtitle3")}
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <a
                // href={`${process.env.NEXT_PUBLIC_BASE_URL}/download`}
                href="/download"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-2">
                  <span>{t("join")}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>
            </div>

          </div>
          
          {/* Right Side - Video */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative w-full max-w-[400px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] group">
              
              {/* Video Container with 9:16 Aspect Ratio */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-800 to-black group-hover:border-gray-700 transition-all duration-500"
                style={{ aspectRatio: '9 / 16' }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-700"></div>
                
                {/* Video Element */}
                <div className="relative bg-black rounded-2xl overflow-hidden h-full">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/videos/night-at-the-valley-promo-2.mp4"
                  >
                    <source src="/videos/night-at-the-valley-promo-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Inner glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-white ml-1 fill-white" />
                    </div>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
              
              {/* Decorative glow elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-100px) translateX(20px);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}