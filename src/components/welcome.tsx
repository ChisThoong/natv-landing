"use client"
import { useLanguage } from '@/contexts/language-context';
export default function Welcome() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full bg-black overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left animate-slide-in-left">
        
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight text-white">
              
            <span className="mx-2 sm:mx-3">{t("welcomeTitle")}</span>
              
            </h2>
            
            {/* Description */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-justify">
                {t("welcomeSubtitle1")}</p>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-justify">
                {t("welcomeSubtitle2")}
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-justify">
                {t("welcomeSubtitle3")}
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  <span>{t("join")}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          {/* Right Side - Video */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative w-full max-w-[400px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]">
              {/* Video Container with 9:16 Aspect Ratio */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: '9 / 16' }}
              >
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                
                {/* Video Element */}
                <div className="relative bg-black rounded-3xl overflow-hidden">
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
                  
                  {/* Play Icon Overlay (optional) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float"></div>
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
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}