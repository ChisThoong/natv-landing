"use client";
import { useLanguage } from "@/contexts/language-context";
import { Swords, Flame, Crown, ArrowRight } from "lucide-react";

export default function GameModeSection() {
  const { currentLang } = useLanguage();

  const modes = [
    {
      id: 1,
      name: "Normal Mode",
      nameVN: "Normal Mode",
      image: "./images/NORMAL.png",
      description:
        "A balanced adventure for all players. Enjoy smooth progression and story content",
      descriptionVN:
        "Hành trình cân bằng cho mọi người chơi. Tiến trình mượt mà, tận hưởng cốt truyện.",
      icon: Swords,
      color: "from-blue-600 to-cyan-600",
      glowColor: "shadow-blue-500/50",
    },
    {
      id: 2,
      name: "Hell Mode",
      nameVN: "Hell Mode",
      image: "./images/HELL.png",
      description:
        "Replay chapters at higher difficulty levels to earn even greater rewards",
      descriptionVN:
        "Chơi lại các chương ở mức độ khó cao hơn để kiếm được phần thưởng lớn hơn",
      icon: Flame,
      color: "from-red-600 to-orange-600",
      glowColor: "shadow-red-500/50",
    },
    {
      id: 3,
      name: "Boss Raid",
      nameVN: "Boss Raid",
      image: "./images/BOSS.png",
      description:
        "Enter the deepest dungeon to challenge the Stone King in an epic battle",
      descriptionVN:
        "Bước vào ngục tối sâu nhất để thách đấu Stone King trong một trận chiến hoành tráng",
      icon: Crown,
      color: "from-purple-600 to-pink-600",
      glowColor: "shadow-purple-500/50",
    },
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-sm">
              <Swords className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                {currentLang === "VI" ? "Chế Độ Chơi" : "Game Modes"}
              </span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6 tracking-tight leading-tight">
            {currentLang === "VI" ? (
              <>
                Chọn Lựa<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Thử Thách
                </span>
              </>
            ) : (
              <>
                Choose Your<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Challenge
                </span>
              </>
            )}
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {currentLang === "VI"
              ? "Ba chế độ chơi độc đáo, mỗi chế độ mang đến thử thách và phần thưởng khác nhau."
              : "Three unique game modes, each offering different challenges and rewards."}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] h-full">
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${mode.glowColor} blur-xl`}></div>

                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <img
                      src={mode.image}
                      alt={mode.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${mode.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                    {/* Icon badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`p-3 bg-gradient-to-br ${mode.color} rounded-xl shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 space-y-4">
                    {/* Title */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {currentLang === "VI" ? mode.nameVN : mode.name}
                      </h3>
                      
                      {/* Divider */}
                      <div className="flex items-center gap-2">
                        <div className={`h-1 w-12 bg-gradient-to-r ${mode.color} rounded-full group-hover:w-20 transition-all duration-500`}></div>
                        <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {currentLang === "VI" ? mode.descriptionVN : mode.description}
                    </p>

                    {/* CTA Button */}
                    <button className="flex items-center gap-2 text-white font-semibold text-sm group/btn opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4">
                      <span>{currentLang === "VI" ? "Khám phá" : "Explore"}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${mode.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA (optional) */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            {currentLang === "VI" 
              ? "Mỗi chế độ mở khóa phần thưởng và thử thách độc nhất" 
              : "Each mode unlocks unique rewards and challenges"}
          </p>
        </div>
      </div>
    </section>
  );
}