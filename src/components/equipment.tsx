"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function EquipmentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeTab, setActiveTab] = useState<"gun" | "armor">("gun");
  const { currentLang, t } = useLanguage();

  // === GUN DATA ===
  const weapons = [
    {
      id: 1,
      name: "Nerf Gun",
      description: "Moo's favorite gun. It shoots round nerf balls at enemies",
      descriptionVN:"Súng yêu thích của Moo. Nó bắn những viên đạn nerf balls vào kẻ thù",
      image: "./images/gun/gun_basic.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 4%" },
        { tier: "Rare", color: "text-sky-400", effect: "5% chance to knock enemy back slightly" },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 6%" },
        { tier: "Legendary", color: "text-orange-400", effect: "10% chance to knock enemy back" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 4%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 5% đẩy lùi kẻ địch" },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 6%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 10% đẩy lùi kẻ địch" },
      ],
    },
    {
      id: 2,
      name: "Gatling Gun",
      description: "A machine gun renowned for its rapid-fire capabilities.",
      descriptionVN:"A machine gun renowned for its rapid-fire capabilities.",
      image: "./images/gun/gun_nut.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "1.5% chance to shoot a fireball." },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "3% chance to shoot a fireball." },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 1.5% bắn ra quả cầu lửa." },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 3% bắn ra quả cầu lửa." },
      ],
    },
    {
      id: 3,
      name: "Discharger",
      description: "A static electricity gun known for its critical accuracy.",
      descriptionVN:"A static electricity gun known for its critical accuracy.",
      image: "./images/gun/gun_electric.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "1.5% chance to shoot a fireball." },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "3% chance to shoot a fireball." },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 1.5% bắn ra quả cầu lửa." },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 3% bắn ra quả cầu lửa." },
      ],
    },
    {
      id: 4,
      name: "Dart Gun",
      description: "A dart shooting gun that can have healing effects for its user.",
      descriptionVN:"A dart shooting gun that can have healing effects for its user.",
      image: "./images/gun/gun_dart.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "1.5% chance to shoot a fireball." },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "3% chance to shoot a fireball." },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 1.5% bắn ra quả cầu lửa." },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 3% bắn ra quả cầu lửa." },
      ],
    },
    {
      id: 5,
      name: "Laser Gun",
      description: "A highly accurate laser beam gun with precision critical firing capabilities.",
      descriptionVN:"A highly accurate laser beam gun with precision critical firing capabilities.",
      image: "./images/gun/gun_laser.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "1.5% chance to shoot a fireball." },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "3% chance to shoot a fireball." },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 1.5% bắn ra quả cầu lửa." },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 3% bắn ra quả cầu lửa." },
      ],
    },
    {
      id: 6,
      name: "Water Gun",
      description: "A water gun that possesses special frost effects.",
      descriptionVN:"A water gun that possesses special frost effects.",
      image: "./images/gun/gun_water.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "1.5% chance to shoot a fireball." },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "3% chance to shoot a fireball." },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 1.5% bắn ra quả cầu lửa." },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 3% bắn ra quả cầu lửa." },
      ],
    },
    {
      id: 7,
      name: "Flamethrower",
      description: "A slow firing flamethrower that ignite its target in fire.",
      descriptionVN:"A slow firing flamethrower that ignite its target in fire.",
      image: "./images/gun/gun_fire.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "1.5% chance to shoot a fireball." },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "3% chance to shoot a fireball." },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 1.5% bắn ra quả cầu lửa." },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 3% bắn ra quả cầu lửa." },
      ],
    },
    {
      id: 8,
      name: "Slime Gun",
      description: "A gun that shoots out green slime.",
      descriptionVN:"A gun that shoots out green slime.",
      image: "./images/gun/gun_slime.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "1.5% chance to shoot a fireball." },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "3% chance to shoot a fireball." },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 1.5% bắn ra quả cầu lửa." },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 3% bắn ra quả cầu lửa." },
      ],
    },
  ];

  // === ARMOR DATA ===
  const armors = [
    {
      id: 1,
      name: "Guardian Armor",
      description: "Heavy armor designed to withstand powerful attacks.",
      descriptionVN: "Giáp hạng nặng giúp chống chịu những đòn tấn công mạnh mẽ.",
      image: "./images/armor/armor_guardian.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Defense + 6%" },
        { tier: "Rare", color: "text-sky-400", effect: "5% chance to block attacks" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 10%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Reduce damage taken by 8%" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Phòng thủ + 6%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 5% chặn đòn tấn công" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 10%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Giảm 8% sát thương nhận vào" },
      ],
    },
    {
      id: 2,
      name: "Frost Armor",
      description: "A mystical armor imbued with frost energy.",
      descriptionVN: "Bộ giáp băng giá mang năng lượng ma thuật.",
      image: "./images/armor/armor_frost.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Defense + 5%" },
        { tier: "Rare", color: "text-sky-400", effect: "Adds frost resistance" },
        { tier: "Epic", color: "text-purple-400", effect: "Reflects 3% damage" },
        { tier: "Legendary", color: "text-orange-400", effect: "Immune to freeze once per battle" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Phòng thủ + 5%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tăng kháng băng" },
        { tier: "Epic", color: "text-purple-400", effect: "Phản lại 3% sát thương" },
        { tier: "Legendary", color: "text-orange-400", effect: "Miễn đóng băng 1 lần mỗi trận" },
      ],
    },
  ];

  // === Select Data by Tab ===
  const data = activeTab === "gun" ? weapons : armors;
  const item = data[currentIndex];
  const gradeList = currentLang === "VI" ? item.gradeSkillVN : item.gradeSkill;
  const desc = currentLang === "VI" ? item.descriptionVN : item.description;

  // === Handlers ===
  const goToItem = (idx: number) => {
    if (isTransitioning || idx === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(idx);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const switchTab = (tab: "gun" | "armor") => {
    if (activeTab === tab) return;
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  // === UI ===
  return (
    <section className="relative w-full bg-black overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mb-4">
            {t("weaponTitle")}        
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400"> {t("weaponSubtitle")}</p>
        </div>
            {/* Tabs */}
            <div className="flex justify-center mb-10">
              <button
                onClick={() => switchTab("gun")}
                className={`px-6 py-3 text-lg font-bold rounded-l-xl border-2 border-gray-600 transition-all duration-300 ${
                  activeTab === "gun"
                    ? "bg-gray-800 text-white border-white"
                    : "text-gray-400 hover:text-white hover:border-white/40"
                }`}
              >
                {currentLang === "VI" ? "Súng" : "Gun"}
              </button>
              <button
                onClick={() => switchTab("armor")}
                className={`px-6 py-3 text-lg font-bold rounded-r-xl border-2 border-gray-600 transition-all duration-300 ${
                  activeTab === "armor"
                    ? "bg-gray-800 text-white border-white"
                    : "text-gray-400 hover:text-white hover:border-white/40"
                }`}
              >
                {currentLang === "VI" ? "Giáp" : "Armor"}
              </button>
            </div>

        {/* Main Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Text Info */}
          <div className="flex items-center">
            <div
              className={`w-full space-y-6 transition-all duration-500 ${
                isTransitioning ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
              }`}
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                {item.name}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed text-justify">
                {desc}
              </p>

              <h4 className="text-2xl font-extrabold text-white mb-4 tracking-wide">
                Grade Skill
              </h4>
              <ul className="space-y-2 text-lg sm:text-xl">
                {gradeList.map((g) => (
                  <li key={g.tier} className="flex items-center gap-2">
                    <span className={`${g.color} font-extrabold`}>● {g.tier}:</span>
                    <span className="text-gray-200">{g.effect}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r  blur-3xl opacity-30 animate-pulse`}></div>
                
                {/* Image Container */}
                <div className={`relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700 transition-all duration-500 ${
                  isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-300"
                    />
                </div>
              </div>
            </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-12 flex-wrap px-4">
          {data.map((w, idx) => (
            <button
              key={w.id}
              onClick={() => goToItem(idx)}
              disabled={isTransitioning}
              className={`relative group transition-all duration-300 ${
                idx === currentIndex
                  ? "scale-110"
                  : "scale-100 opacity-60 hover:opacity-100 hover:scale-105"
              } disabled:cursor-not-allowed`}
            >
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all bg-gradient-to-br from-gray-800 to-gray-900 ${
                  idx === currentIndex
                    ? `border-white shadow-lg shadow-white/50`
                    : "border-gray-600 hover:border-white/50"
                }`}
              >
                <img
                  src={w.image}
                  alt={w.name}
                  className="w-full h-full object-contain p-3"
                />
              </div>
              {idx === currentIndex && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
