"use client";
import { useState } from "react";
import { Sparkles, Zap, Lock, Brain, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";



export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { currentLang } = useLanguage();

  const skills = [
    {
      id: 1,
      active: {
        name: "Rapid Fire",
        nameVN: "Rapid Fire",
        description: "Each shot has a chance to boost <span class='font-bold' style='color:#C7F400'>ATK SPD</span> for a short duration.",
        descriptionVN: "Mỗi phát bắn có cơ hội tăng <span class='font-bold' style='color:#C7F400'>TỐC ĐỘ TẤN CÔNG</span> trong thời gian ngắn.",
        image: "./images/skill/skill1.png",
      },
      passive: {
        name: "Pure Strength",
        nameVN: "Pure Strength",
        description: "Increases attack damage by %",
        descriptionVN: "Tăng sát thương tấn công theo phần trăm.",
        image: "./images/skill/skill15.png",
      },
      ultimate: {
        name: "Rapid Power",
        nameVN: "Rapid Power",
        description: "Now also greatly increases <span class='font-bold' style='color:#FFA500'>ATK DMG</span>.",
        descriptionVN: "Giờ đây còn tăng mạnh <span class='font-bold' style='color:#FFA500'>SÁT THƯƠNG TẤN CÔNG</span>.",
        image: "./images/skill/skill1_ultimate.png",
      },
    },
    {
      id: 2,
      active: {
        name: "Deadly Focus",
        nameVN: "Deadly Focus",
        description: "Each shot has a chance to increase <span class='font-bold' style='color:#FFA500'>CRIT RATE</span> for a short duration.",
        descriptionVN: "Mỗi đòn bắn có cơ hội tăng <span class='font-bold' style='color:#FFA500'>TỶ LỆ CHÍ MẠNG</span> trong thời gian ngắn.",
        image: "./images/skill/skill2.png",
      },
      passive: {
        name: "Increased Crit Damage",
        nameVN: "Increased Crit Damage",
        description: "Increases critical damage by %",
        descriptionVN: "Tăng sát thương chí mạng theo phần trăm.",
        image: "./images/skill/skill20.png",
      },
      ultimate: {
        name: "Deadly Shot",
        nameVN: "Deadly Shot",
        description: "Enemies killed by a critical hit now explode for <span class='font-bold' style='color:#FF4500'>AOE DAMAGE</span>.",
        descriptionVN: "Kẻ địch bị hạ gục bằng đòn chí mạng sẽ phát nổ, gây <span class='font-bold' style='color:#FF4500'>SÁT THƯƠNG DIỆN RỘNG</span>.",
        image: "./images/skill/skill2_ultimate.png",
      },
    },
    {
      id: 3,
      active: {
        name: "Snowball",
        nameVN: "Snowball",
        description: "Summons a Snow Ball that deals damage and <span class='font-bold' style='color:#00BFFF'>SLOWS</span> enemies.",
        descriptionVN: "Triệu hồi cầu tuyết gây sát thương và <span class='font-bold' style='color:#00BFFF'>LÀM CHẬM</span> kẻ địch.",
        image: "./images/skill/skill3.png",
      },
      passive: {
        name: "Increased Attack Range",
        nameVN: "Increased Attack Range",
        description: "Increases attack range by %",
        descriptionVN: "Tăng phạm vi tấn công theo phần trăm.",
        image: "./images/skill/skill16.png",
      },
      ultimate: {
        name: "Ice Age",
        nameVN: "Ice Age",
        description: "Now <span class='font-bold' style='color:#ADD8E6'>FREEZES</span> affected enemies.",
        descriptionVN: "Giờ đây có thể <span class='font-bold' style='color:#ADD8E6'>ĐÓNG BĂNG</span> kẻ địch bị trúng chiêu.",
        image: "./images/skill/skill3_ultimate.png",
      },
    },
    {
      id: 4,
      active: {
        name: "Meteorites",
        nameVN: "Meteorites",
        description: "Summons a Meteorite that deals <span class='font-bold' style='color:#FF4500'>AOE DAMAGE</span>.",
        descriptionVN: "Triệu hồi thiên thạch gây <span class='font-bold' style='color:#FF4500'>SÁT THƯƠNG DIỆN RỘNG</span>.",
        image: "./images/skill/skill4.png",
      },
      passive: {
        name: "Increased EXP Gain",
        nameVN: "Increased EXP Gain",
        description: "Increases exp gained per enemy killed by %",
        descriptionVN: "Tăng lượng kinh nghiệm nhận được khi tiêu diệt kẻ địch.",
        image: "./images/skill/skill22.png",
      },
      ultimate: {
        name: "Chaos Destruction",
        nameVN: "Chaos Destruction",
        description: "Now <span class='font-bold' style='color:#800080'>STUNS</span> affected enemies.",
        descriptionVN: "Giờ đây có thể <span class='font-bold' style='color:#800080'>GÂY CHOÁNG</span> kẻ địch bị trúng chiêu.",
        image: "./images/skill/skill4_ultimate.png",
      },
    },
    {
      id: 5,
      active: {
        name: "Mud Ball",
        nameVN: "Mud Ball",
        description: "Summons a Mud Ball that <span class='font-bold' style='color:#8B4513'>SLOWS</span> enemies.",
        descriptionVN: "Triệu hồi quả cầu bùn khiến kẻ địch bị <span class='font-bold' style='color:#8B4513'>LÀM CHẬM</span>.",
        image: "./images/skill/skill5.png",
      },
      passive: {
        name: "Increased Attack Range",
        nameVN: "Increased Attack Range",
        description: "Increases attack range by %",
        descriptionVN: "Tăng phạm vi tấn công theo phần trăm.",
        image: "./images/skill/skill16.png",
      },
      ultimate: {
        name: "Mud Moat",
        nameVN: "Mud Moat",
        description: "Now summons a moat that <span class='font-bold' style='color:#8B4513'>SLOWS</span> the entire attack radius.",
        descriptionVN: "Triệu hồi một vùng bùn bao phủ khiến tất cả kẻ địch trong phạm vi bị <span class='font-bold' style='color:#8B4513'>LÀM CHẬM</span>.",
        image: "./images/skill/skill5_ultimate.png",
      },
    },
    {
      id: 6,
      active: {
        name: "Ricochet",
        nameVN: "Ricochet",
        description: "Each shot has a chance to ricochet onto nearby enemies.",
        descriptionVN: "Mỗi phát bắn có cơ hội nảy sang kẻ địch ở gần.",
        image: "./images/skill/skill6.png",
      },
      passive: {
        name: "Increased HP Regen",
        nameVN: "Increased HP Regen",
        description: "Increases HP Regen by %",
        descriptionVN: "Tăng tốc độ hồi máu theo phần trăm.",
        image: "./images/skill/skill19.png",
      },
      ultimate: {
        name: "Healing Touch",
        nameVN: "Healing Touch",
        description: "Ricochets now have a chance to <span class='font-bold' style='color:#7FFF00'>HEAL</span> some HP.",
        descriptionVN: "Các phát đạn nảy giờ có cơ hội <span class='font-bold' style='color:#7FFF00'>HỒI MÁU</span> cho người chơi.",
        image: "./images/skill/skill6_ultimate.png",
      },
    },
    {
      id: 7,
      active: {
        name: "Chain Lightning",
        nameVN: "Chain Lightning",
        description: "Each shot has a chance to activate a <span class='font-bold' style='color:#1E90FF'>CHAINED LIGHTNING</span> attack.",
        descriptionVN: "Mỗi phát bắn có cơ hội kích hoạt <span class='font-bold' style='color:#1E90FF'>SÉT LIÊN HOÀN</span> tấn công nhiều mục tiêu.",
        image: "./images/skill/skill7.png",
      },
      passive: {
        name: "Increased Crit Rate",
        nameVN: "Increased Crit Rate",
        description: "Increases critical rate by %",
        descriptionVN: "Tăng tỷ lệ chí mạng theo phần trăm.",
        image: "./images/skill/skill20.png",
      },
      ultimate: {
        name: "Paralyzing Bolt",
        nameVN: "Paralyzing Bolt",
        description: "Now paralyzes affected enemies.",
        descriptionVN: "Giờ đây có thể <span class='font-bold' style='color:#1E90FF'>GÂY TÊ LIỆT</span> kẻ địch bị trúng chiêu.",
        image: "./images/skill/skill7_ultimate.png",
      },
    },
    {
      id: 8,
      active: {
        name: "Guardian Blade",
        nameVN: "Guardian Blade",
        description: "Summons 2 spinning blades dealing <span class='font-bold' style='color:#FFA500'>DAMAGE</span>.",
        descriptionVN: "Triệu hồi 2 lưỡi kiếm xoay quanh gây <span class='font-bold' style='color:#FFA500'>SÁT THƯƠNG</span> cho kẻ địch xung quanh.",
        image: "./images/skill/skill8.png",
      },
      passive: {
        name: "Increased HP",
        nameVN: "Increased HP",
        description: "Increases HP by %",
        descriptionVN: "Tăng lượng máu tối đa theo phần trăm.",
        image: "./images/skill/skill18.png",
      },
      ultimate: {
        name: "Guardian Angel",
        nameVN: "Guardian Angel",
        description: "Now <span class='font-bold' style='color:#4169E1'>SHIELDS</span> hero after blades disappear.",
        descriptionVN: "Sau khi lưỡi kiếm biến mất, tạo <span class='font-bold' style='color:#4169E1'>LÁ CHẮN</span> bảo vệ anh hùng.",
        image: "./images/skill/skill8_ultimate.png",
      },
    },
    {
      id: 9,
      active: {
        name: "Pan Attack",
        nameVN: "Pan Attack",
        description: "Sidekick's pan attack with a chance to <span class='font-bold' style='color:#800080'>STUN</span> enemies.",
        descriptionVN: "Đòn tấn công bằng chảo của đồng đội có cơ hội <span class='font-bold' style='color:#800080'>GÂY CHOÁNG</span> kẻ địch.",
        image: "./images/skill/skill9.png",
      },
      passive: {
        name: "Increased EXP Gain",
        nameVN: "Increased EXP Gain",
        description: "Increases HP by %",
        descriptionVN: "Tăng kinh nghiệm nhận được khi tiêu diệt kẻ địch.",
        image: "./images/skill/skill22.png",
      },
      ultimate: {
        name: "Ultimate Pan",
        nameVN: "Ultimate Pan",
        description: "The Ultimate Pan. Increases <span class='font-bold' style='color:#FFA500'>DAMAGE</span> and <span class='font-bold' style='color:#800080'>STUN</span> chance.",
        descriptionVN: "Chiêu cuối của chảo — tăng <span class='font-bold' style='color:#FFA500'>SÁT THƯƠNG</span> và cơ hội <span class='font-bold' style='color:#800080'>GÂY CHOÁNG</span>.",
        image: "./images/skill/skill9_ultimate.png",
      },
    },
    {
      id: 10,
      active: {
        name: "Net",
        nameVN: "Net",
        description: "Sidekick throws a net <span class='font-bold' style='color:#008000'>TRAPPING</span> enemies for a duration.",
        descriptionVN: "Đồng đội tung lưới <span class='font-bold' style='color:#008000'>BẮT GIỮ</span> kẻ địch trong thời gian ngắn.",
        image: "./images/skill/skill10.png",
      },
      passive: {
        name: "Increased Gold Gain",
        nameVN: "Increased Gold Gain",
        description: "Increases HP by %",
        descriptionVN: "Tăng lượng vàng nhận được từ kẻ địch.",
        image: "./images/skill/skill23.png",
      },
      ultimate: {
        name: "Super Net",
        nameVN: "Super Net",
        description: "A big Super Net! Increases <span class='font-bold' style='color:#008000'>TRAP</span> radius, duration, and reduces cooldown.",
        descriptionVN: "Lưới siêu to! Tăng phạm vi <span class='font-bold' style='color:#008000'>BẪY</span>, kéo dài thời gian hiệu lực và giảm hồi chiêu.",
        image: "./images/skill/skill10_ultimate.png",
      },
    },
    {
      id: 11,
      active: {
        name: "Shock Wave",
        nameVN: "Shock Wave",
        description: "A shock wave that deals <span class='font-bold' style='color:#FF4500'>AOE DAMAGE</span> to all enemies in the radius.",
        descriptionVN: "Tạo sóng xung kích gây <span class='font-bold' style='color:#FF4500'>SÁT THƯƠNG DIỆN RỘNG</span> cho mọi kẻ địch trong phạm vi.",
        image: "./images/skill/skill11.png",
      },
      passive: {
        name: "Increased Attack Speed",
        nameVN: "Increased Attack Speed",
        description: "Increases attack speed by %",
        descriptionVN: "Tăng tốc độ tấn công theo phần trăm.",
        image: "./images/skill/skill17.png",
      },
      ultimate: {
        name: "Sonic Wave",
        nameVN: "Sonic Wave",
        description: "Now <span class='font-bold' style='color:#FFA500'>PUSHES</span> enemies back.",
        descriptionVN: "Giờ đây có thể <span class='font-bold' style='color:#FFA500'>ĐẨY LÙI</span> kẻ địch.",
        image: "./images/skill/skill11_ultimate.png",
      },
    },
    {
      id: 12,
      active: {
        name: "Poison Cloud",
        nameVN: "Poison Cloud",
        description: "Summons a poison cloud that deals <span class='font-bold' style='color:#FF4500'>AOE DAMAGE</span> over time.",
        descriptionVN: "Triệu hồi đám mây độc gây <span class='font-bold' style='color:#FF4500'>SÁT THƯƠNG THEO THỜI GIAN</span>.",
        image: "./images/skill/skill12.png",
      },
      passive: {
        name: "Increased Attack Speed",
        nameVN: "Increased Attack Speed",
        description: "Increases attack speed by %",
        descriptionVN: "Tăng tốc độ tấn công theo phần trăm.",
        image: "./images/skill/skill17.png",
      },
      ultimate: {
        name: "Fog of Poison",
        nameVN: "Fog of Poison",
        description: "Now summons a deadly FOG that covers the entire attack radius.",
        descriptionVN: "Triệu hồi <span class='font-bold' style='color:#008000'>SƯƠNG ĐỘC</span> bao phủ toàn bộ khu vực tấn công.",
        image: "./images/skill/skill12_ultimate.png",
      },
    },
    {
      id: 13,
      active: {
        name: "Fighting Flower",
        nameVN: "Fighting Flower",
        description: "Summons a <span class='font-bold' style='color:#FF69B4'>FLOWER</span> that attacks nearby enemies.",
        descriptionVN: "Triệu hồi <span class='font-bold' style='color:#FF69B4'>BÔNG HOA</span> tấn công kẻ địch xung quanh.",
        image: "./images/skill/skill13.png",
      },
      passive: {
        name: "Increased Crit Rate",
        nameVN: "Increased Crit Rate",
        description: "Increases attack speed by %",
        descriptionVN: "Tăng tỷ lệ chí mạng theo phần trăm.",
        image: "./images/skill/skill21.png",
      },
      ultimate: {
        name: "Venus Fly Trap",
        nameVN: "Venus Fly Trap",
        description: "Now has a chance to DEVOUR a whole enemy (not effective on bosses).",
        descriptionVN: "Giờ đây có cơ hội <span class='font-bold' style='color:#FF69B4'>NUỐT CHỬNG</span> toàn bộ kẻ địch (không hiệu quả với trùm).",
        image: "./images/skill/skill13_ultimate.png",
      },
    },
    {
      id: 14,
      active: {
        name: "Land Mine",
        nameVN: "Land Mine",
        description: "Summons 2 mines that explode for <span class='font-bold' style='color:#FF4500'>AOE DAMAGE</span> upon detonation.",
        descriptionVN: "Triệu hồi 2 quả mìn phát nổ gây <span class='font-bold' style='color:#FF4500'>SÁT THƯƠNG DIỆN RỘNG</span> khi kích hoạt.",
        image: "./images/skill/skill14.png",
      },
      passive: {
        name: "Increase Attack",
        nameVN: "Increase Attack",
        description: "Increases attack speed by %",
        descriptionVN: "Tăng sát thương tấn công theo phần trăm.",
        image: "./images/skill/skill15.png",
      },
      ultimate: {
        name: "Mine Field",
        nameVN: "Mine Field",
        description: "The entire area becomes a minefield. Mines will self-explode for the duration.",
        descriptionVN: "Biến toàn bộ khu vực thành <span class='font-bold' style='color:#FF4500'>BÃI MÌN</span>; các mìn sẽ tự phát nổ trong thời gian hiệu lực.",
        image: "./images/skill/skill14_ultimate.png",
      },
    },
  ];
  

  const currentSkill = skills[selectedSkill];

  const handleSkillSelect = (idx: number) => {
    if (isTransitioning || idx === selectedSkill) return;
    setIsTransitioning(true);
    setSelectedSkill(idx);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  return (
    <section className="relative w-full bg-black overflow-hidden py-20 sm:py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                {currentLang === "VI" ? "Kỹ Năng" : "Skills"}
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6 tracking-tight leading-tight">
            {currentLang === "VI" ? (
              <>
                Làm Chủ<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sức Mạnh
                </span>
              </>
            ) : (
              <>
                Master Your<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Powers
                </span>
              </>
            )}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {currentLang === "VI" 
              ? "Kết hợp kỹ năng chủ động và bị động để mở khóa Ultimate mạnh mẽ" 
              : "Combine Active and Passive skills to unlock powerful Ultimates"}
          </p>
        </div>

        {/* Skill Combination Explanation */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-gray-900/50 via-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 p-6 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              {/* Active */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold">
                  {currentLang === "VI" ? "Chủ Động" : "Active"}
                </span>
              </div>

              {/* Plus */}
              <div className="text-2xl text-white font-bold">+</div>

              {/* Passive */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold">
                  {currentLang === "VI" ? "Bị Động" : "Passive"}
                </span>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2">
                
                <ArrowRight className="w-6 h-6 text-white" />
              </div>

              {/* Ultimate */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center animate-pulse">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Ultimate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Display - 3 Column Layout */}
        <div className="max-w-7xl mx-auto mb-16">
          <motion.div
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Active Skill */}
            <div className="space-y-4">
              {/* Desktop Header */}
              <div className="hidden md:flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {currentLang === "VI" ? "Kỹ Năng Chủ Động" : "Active Skill"}
                </h3>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border border-green-500/30 overflow-hidden p-4 md:p-6 h-full min-h-[360px] sm:min-h-[400px] md:min-h-[540px]">
                  {/* Mobile Header inside card */}
                  <div className="flex md:hidden items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-white">
                      {currentLang === "VI" ? "Bị Động" : "Passive"}
                    </span>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/20">
                    <img
                      src={currentSkill.active.image}
                      alt={currentSkill.active.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {currentLang === "VI" ? currentSkill.active.nameVN : currentSkill.active.name}
                  </h4>
                  <p
                    className="text-gray-300 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html:
                        currentLang === "VI"
                          ? currentSkill.active.descriptionVN
                          : currentSkill.active.description,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Passive Skill */}
            <div className="space-y-4">
              {/* Desktop Header */}
              <div className="hidden md:flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {currentLang === "VI" ? "Kỹ Năng Bị Động" : "Passive Skill"}
                </h3>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border border-blue-500/30 overflow-hidden p-4 md:p-6 h-full min-h-[360px] sm:min-h-[400px] md:min-h-[540px]">
                  {/* Mobile Header inside card */}
                  <div className="flex md:hidden items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-white">
                      {currentLang === "VI" ? "Bị Động" : "Passive"}
                    </span>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/20">
                    <img
                      src={currentSkill.passive.image}
                      alt={currentSkill.passive.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {currentLang === "VI" ? currentSkill.passive.nameVN : currentSkill.passive.name}
                  </h4>
                  <p
                    className="text-gray-300 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html:
                        currentLang === "VI"
                          ? currentSkill.passive.descriptionVN
                          : currentSkill.passive.description,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Ultimate Skill */}
            <div className="space-y-4">
              {/* Desktop Header */}
              <div className="hidden md:flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center animate-pulse">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  {currentLang === "VI" ? "Ultimate" : "Ultimate"}
                </h3>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border-2 border-purple-500/50 overflow-hidden p-4 md:p-6 h-full min-h-[360px] sm:min-h-[400px] md:min-h-[540px]">
                  {/* Mobile Header inside card */}
                  <div className="flex md:hidden items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center animate-pulse">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                      Ultimate
                    </span>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative aspect-square mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10"></div>
                    <img
                      src={currentSkill.ultimate.image}
                      alt={currentSkill.ultimate.name}
                      className="relative w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    {currentLang === "VI" ? currentSkill.ultimate.nameVN : currentSkill.ultimate.name}
                  </h4>
                  <p
                    className="text-gray-300 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html:
                        currentLang === "VI"
                          ? currentSkill.ultimate.descriptionVN
                          : currentSkill.ultimate.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upgrade Arrow Indicator - Desktop only */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-full border border-white/10">
              <span className="text-sm text-gray-300 font-semibold">
                {currentLang === "VI" ? "Kết hợp để mở khóa" : "Combine to unlock"}
              </span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 flex-wrap">
          {skills.map((skill, idx) => (
            <button
              key={skill.id}
              onClick={() => handleSkillSelect(idx)}
              disabled={isTransitioning}
              className={`relative group transition-all duration-300 ${
                idx === selectedSkill
                  ? "scale-110"
                  : "scale-100 opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              {idx === selectedSkill ? (
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg shadow-purple-400/50">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={skill.active.image}
                      alt={skill.active.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </div>
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 hover:border-gray-600 transition-all">
                  <img
                    src={skill.active.image}
                    alt={skill.active.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}