"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="relative w-full bg-black overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                {t("weaponSection")}
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6 tracking-tight leading-tight">
            {currentLang === "VI" ? (
              <>
                Trang Bị<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hành Trình
                </span>
              </>
            ) : (
              <>
                Equip for<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                the Journey
                </span>
              </>
            )}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("weaponSubtitle")}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 gap-3">
          {[
            { key: "gun", vi: "Súng", en: "Gun" },
            { key: "armor", vi: "Giáp", en: "Armor" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => switchTab(tab.key as "gun" | "armor")}
              className={`relative px-8 py-3 text-base sm:text-lg font-bold rounded-xl border transition-all duration-500 backdrop-blur-sm overflow-hidden group ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-white/20 shadow-lg shadow-blue-500/30"
                  : "text-gray-400 border-gray-800 hover:text-white hover:border-gray-700 hover:bg-white/5"
              }`}
            >
              {/* Hover glow effect */}
              {activeTab !== tab.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>
              )}
              
              <span className="relative z-10">{currentLang === "VI" ? tab.vi : tab.en}</span>
              
              {/* Active indicator line */}
              {activeTab === tab.key && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
              )}
            </button>
          ))}
        </div>

        {/* Main Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center max-w-7xl mx-auto">
          {/* Weapon Info */}
          <motion.div
            animate={{ opacity: isTransitioning ? 0 : 1, x: isTransitioning ? -20 : 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:pr-8"
          >
            {/* Title with decorative line */}
            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {item?.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
                <div className="h-1 w-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{desc}</p>

            {/* Grade Skills */}
            <div className="pt-4">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                {currentLang === "VI" ? "Cấp Độ Kỹ Năng" : "Grade Skill"}
                <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
              </h4>

              <ul className="space-y-3">
                {gradeList.map((g) => (
                  <li key={g.tier} className="group">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-white/10 hover:from-white/10 transition-all duration-300">
                      <span className={`${g.color} font-extrabold text-lg mt-0.5`}>●</span>
                      <div className="flex-1">
                        <span className="text-white font-semibold">{g.tier}</span>
                        <span className="text-gray-400 ml-2">{g.effect}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Weapon Image */}
          <motion.div
            animate={{
              opacity: isTransitioning ? 0 : 1,
              scale: isTransitioning ? 0.95 : 1,
            }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-square group">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>

              {/* Card Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-sm shadow-2xl group-hover:border-gray-700 transition-all duration-500">
                
                {/* Inner glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="relative z-10 w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 flex-wrap">
          {data.map((w, idx) => (
            <button
            key={w.id}
            onClick={() => goToItem(idx)}
            disabled={isTransitioning}
            className={`relative group transition-all duration-300 ${
              idx === currentIndex
                ? "scale-110"
                : "scale-100 opacity-70 hover:opacity-100 hover:scale-105"
            }`}
          >
            {/* Gradient border wrapper for active state */}
            {idx === currentIndex ? (
              <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg shadow-purple-400/50">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={w.image}
                    alt={w.name}
                    className="w-full h-full object-contain p-3"
                  />
                </div>
              </div>
            ) : (
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-gray-700  transition-all bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={w.image}
                  alt={w.name}
                  className="w-full h-full object-contain p-3"
                />
              </div>
            )}
            {idx === currentIndex && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-ping"></div>
            )}
          </button>
          ))}
        </div>
      </div>
    </section>
  );
}
