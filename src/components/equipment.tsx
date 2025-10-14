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
      description: "A machine gun renowned for its rapid-fire capabilities",
      descriptionVN:"Một loại súng máy nổi tiếng với khả năng bắn nhanh",
      image: "./images/gun/gun_nut.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 5%" },
        { tier: "Rare", color: "text-sky-400", effect: "2.5% chance to stun 1 nearby enemy for 0.7s" },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 7%" },
        { tier: "Legendary", color: "text-orange-400", effect: "5% chance to stun 2 nearby enemy for 1.1s" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 8%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 2.5% làm choáng 1 kẻ địch trong 0,7 giây" },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 7%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 5% làm choáng 2 kẻ địch trong 1.1 giây" },
      ],
    },
    {
      id: 3,
      name: "Discharger",
      description: "A static electricity gun known for its critical accuracy",
      descriptionVN:"Một khẩu súng tĩnh điện nổi tiếng với độ chính xác tuyệt đối",
      image: "./images/gun/gun_electric.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 4.5%" },
        { tier: "Rare", color: "text-sky-400", effect: "5% to shock the enemy, reducing movement speed by 25% for 1.5s" },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 6.5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "10% to shock the enemy, reducing movement speed by 50% for 1.5s" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 4.5%" },
        { tier: "Rare", color: "text-sky-400", effect: "5% gây sốc, giảm tốc độ di chuyển 25% trong 1,5 giây" },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 6.5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "10% gây sốc, giảm tốc độ di chuyển 50% trong 1,5 giây" },
      ],
    },
    {
      id: 4,
      name: "Dart Gun",
      description: "A dart shooting gun that can have healing effects for its user",
      descriptionVN:"Một khẩu súng có tác dụng hồi phục cho người sử dụng.",
      image: "./images/gun/gun_dart.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 5.5%" },
        { tier: "Rare", color: "text-sky-400", effect: "2.5% chance to heal for 1% HP" },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 8%" },
        { tier: "Legendary", color: "text-orange-400", effect: "5% chance to heal for 1.2% HP" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 5.5%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 2.5% hồi phục cho 1% HP" },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 8%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 5% hồi phục cho 1.2% HP" },
      ],
    },
    {
      id: 5,
      name: "Laser Gun",
      description: "A highly accurate laser beam gun with precision critical firing capabilities",
      descriptionVN:"Một khẩu súng tia laser có độ chính xác cao với khả năng bắn chính xác",
      image: "./images/gun/gun_laser.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 7%" },
        { tier: "Rare", color: "text-sky-400", effect: "3.5% chance to deal 1.5x damage" },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 10%" },
        { tier: "Legendary", color: "text-orange-400", effect: "7% chance to deal 1.7x damage" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 7%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 3.5% gây sát thương gấp 1,5 lần" },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 10%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 7% gây sát thương gấp 1,7 lần" },
      ],
    },
    {
      id: 6,
      name: "Water Gun",
      description: "A water gun that possesses special frost effects",
      descriptionVN:"Một khẩu súng nước có hiệu ứng băng giá đặc biệt",
      image: "./images/gun/gun_water.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 6%" },
        { tier: "Rare", color: "text-sky-400", effect: "2% change to activate Snowball skill" },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 9%" },
        { tier: "Legendary", color: "text-orange-400", effect: "2.5% change to activate Ice Age skill" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 6%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 2% kích hoạt Snowball" },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 9%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 2.5% kích hoạt Ice Age" },
      ],
    },
    {
      id: 7,
      name: "Flamethrower",
      description: "A slow firing flamethrower that ignite its target in fire",
      descriptionVN:"Một loại súng phun lửa bắn chậm có khả năng đốt cháy mục tiêu",
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
      description: "A gun that shoots out green slime",
      descriptionVN:"Một khẩu súng bắn ra chất nhờn màu xanh lá cây",
      image: "./images/gun/gun_slime.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "Damage + 9%" },
        { tier: "Rare", color: "text-sky-400", effect: "1.5% chance to shoot a slimeball" },
        { tier: "Epic", color: "text-purple-400", effect: "Atk Speed + 12%" },
        { tier: "Legendary", color: "text-orange-400", effect: "3% chance to shoot a slimeball" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "Sát thương + 9%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 1.5% bắn ra slimeball" },
        { tier: "Epic", color: "text-purple-400", effect: "Tốc độ tấn công + 11%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 3% bắn ra slimeball" },
      ],
    },
  ];

  // === ARMOR DATA ===
  const armors = [
    {
      id: 1,
      name: "Light Armor",
      description: "A light piece of armor filled with vitality",
      descriptionVN: "Một mảnh giáp nhẹ tràn đầy sinh lực",
      image: "./images/armor/Light_Armor.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 5%" },
        { tier: "Rare", color: "text-sky-400", effect: "4% chance to reduce incoming damage by 10% for 3s" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 8,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "8% chance to reduce incoming damage by 20% for 3s" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 6%" },
        { tier: "Rare", color: "text-sky-400", effect: "Tỷ lệ 4% giảm 10% sát thương nhận vào trong 3 giây" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 8,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Tỷ lệ 8% giảm 20% sát thương nhận vào trong 3 giây" },
      ],
    },
    {
      id: 2,
      name: "Adventure's Shirt",
      description: "Worn by explorers, pockets for map and snacks",
      descriptionVN: "Được các nhà thám hiểm đeo, có túi đựng bản đồ và đồ ăn nhẹ",
      image: "./images/armor/Adventure_Shirt.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 5.5%" },
        { tier: "Rare", color: "text-sky-400", effect: "Reflects 30% of damage taken back to the attacker(less effective on bosses)" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 9,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Reflects 60% of damage taken back to the attacker(less effective on bosses)" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 5.5%" },
        { tier: "Rare", color: "text-sky-400", effect: "Phản lại 30% sát thương nhận vào (ít hiệu quả hơn với Boss)" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 8,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Phản lại 60% sát thương nhận vào (ít hiệu quả hơn với Boss)" },
      ],
    },
    {
      id: 3,
      name: "Army Shirt",
      description: "Disguise yourself in nature's colors, blend in",
      descriptionVN: "Ngụy trang trong sắc màu của thiên nhiên — Gần mực thì đen, gần thiên nhiên thì thư giãn",
      image: "./images/armor/Army_Shirt.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 6%" },
        { tier: "Rare", color: "text-sky-400", effect: "3% change to regenerate 2.7% HP over 3s" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 10,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "5% change to regenerate 3.6% HP over 3s" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 6%" },
        { tier: "Rare", color: "text-sky-400", effect: "Khi bị tấn công có 3% khả năng hồi phục 2.7% HP trong 3s" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 10,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Khi bị tấn công có 5% khả năng hồi phục 3.6% HP trong 3s" },
      ],
    },
    {
      id: 4,
      name: "Leather Jacket",
      description: "Tougher than a swamp snake's hide",
      descriptionVN: "Cứng cáp hơn cả da rắn đầm lầy",
      image: "./images/armor/Leather_Jacket.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 6.5%" },
        { tier: "Rare", color: "text-sky-400", effect: "3% change to activate a 4% HP shield, last for 2s" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 11,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "5% change to activate a 6% HP shield, last for 2s" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 6.5%" },
        { tier: "Rare", color: "text-sky-400", effect: "Có 3% tỷ lệ kích hoạt lá chắn hấp thụ 4% HP, kéo dài 2 giây" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 10,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Có 5% tỷ lệ kích hoạt lá chắn hấp thụ 6% HP, kéo dài 2 giây." },
      ],
    },
    {
      id: 5,
      name: "Letterman Jacket",
      description: "Rebel chic, weatherproof, for the daring adventurer",
      descriptionVN: "Phong cách nổi loạn, chống chọi mọi thời tiết — dành cho những nhà thám hiểm táo bạo",
      image: "./images/armor/Letterman_Jacket.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 7%" },
        { tier: "Rare", color: "text-sky-400", effect: "2% change to gain invulnerability for 2s" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 12,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "4% change to gain invulnerability" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 7%" },
        { tier: "Rare", color: "text-sky-400", effect: "Có 2% tỷ lệ trở nên bất tử (miễn nhiễm sát thương) trong 2 giây" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 12,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Có 4% tỷ lệ trở nên bất tử (miễn nhiễm sát thương) trong 2 giây" },
      ],
    },
    {
      id: 6,
      name: "Bulletproof Vest",
      description: "Catch bullets, not feelings, stay safe, look tough",
      // descriptionVN: "Đỡ đạn chứ không đỡ cảm xúc — luôn tỉnh táo, luôn mạnh mẽ",
      descriptionVN: "Đỡ đạn thì được, đỡ tình thì thua",
      image: "./images/armor/Bulletproof_Jacket.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 7.5%" },
        { tier: "Rare", color: "text-sky-400", effect: "6% change to dodge an attack, heal 0.9% HP on dodge" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 13,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "10% change to dodge an attack, heal 1.5% HP on dodge" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 7.5%" },
        { tier: "Rare", color: "text-sky-400", effect: "Có 6% tỉ lệ né tránh một đòn tấn công, và hồi 0.9% HP khi né thành công" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 10,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Có 10% tỉ lệ né tránh một đòn tấn công, và hồi 1.5% HP khi né thành công" },
      ],
    },
    {
      id: 7,
      name: "Full Metal Suit",
      description: "Heavy armor, full protection, for the fearless",
      descriptionVN: "Giáp hạng nặng — bảo vệ toàn diện — dành cho những kẻ không biết sợ",
      image: "./images/armor/Full_Metal_Suit.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 6%" },
        { tier: "Rare", color: "text-sky-400", effect: "3% change to regenerate 2.7% HP over 3s" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 10,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "5% change to regenerate 3.6% HP over 3s" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 6%" },
        { tier: "Rare", color: "text-sky-400", effect: "Khi bị tấn công có 3% khả năng hồi phục 2.7% HP trong 3s" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 10,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Khi bị tấn công có 5% khả năng hồi phục 3.6% HP trong 3s" },
      ],
    },
    {
      id: 8,
      name: "Protective Armor",
      description: "A blessed armor of protection remored to have life saving powers",
      descriptionVN: "Bộ giáp thiêng được ban phước, được đồn rằng sở hữu sức mạnh cứu sinh",
      image: "./images/armor/Protective_Armor.png",
      gradeSkill: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 9%" },
        { tier: "Rare", color: "text-sky-400", effect: "Revives once per battle with 50% HP" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 15,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Revives once per battle with 100% HP, after revival hero gains ATK + %, ATK SPD + 5%" },
      ],
      gradeSkillVN: [
        { tier: "Uncommon", color: "text-green-400", effect: "HP + 6%" },
        { tier: "Rare", color: "text-sky-400", effect: "Hồi sinh một lần mỗi trận với 50% HP" },
        { tier: "Epic", color: "text-purple-400", effect: "HP + 10,5%" },
        { tier: "Legendary", color: "text-orange-400", effect: "Hồi sinh một lần mỗi trận với 100% HP. Sau khi hồi sinh, nhận thêm +5% ATK và +5% ATK SPD" },
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
                  <li key={g.tier} className="flex items-center gap-2 flex-nowrap">
                  <span className={`${g.color} font-extrabold whitespace-nowrap`}>● {g.tier}:</span>
                  <span className="text-gray-200 ">{g.effect}</span>
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
