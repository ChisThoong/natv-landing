"use client";
import { useLanguage } from "@/contexts/language-context";

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
    },
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mb-6 tracking-wider">
          {currentLang === "VI" ? "Chế Độ Chơi" : "Game Modes"}
        </h2>
        <p className="text-xl sm:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto">
          {currentLang === "VI"
            ? "Khám phá ba chế độ chơi độc đáo – mỗi chế độ mang đến thử thách và phần thưởng khác nhau."
            : "Explore three unique game modes – each offering new challenges and rewards."}
        </p>

        {/* === 3 cột full width === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {modes.map((mode) => (
            <div
              key={mode.id}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-white/60 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-white/20"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src={mode.image}
                  alt={mode.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Text */}
              <div className="p-6 space-y-2 text-center">
                <h3 className="text-2xl font-extrabold text-white">
                  {currentLang === "VI" ? mode.nameVN : mode.name}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {currentLang === "VI"
                    ? mode.descriptionVN
                    : mode.description}
                </p>
              </div>

              {/* Glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white blur-2xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
