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
        description: "Attacks have a % chance to activate Rapid Fire, which increases attack speed temporarily for a duration.",
        descriptionVN: "Attacks have a % chance to activate Rapid Fire, which increases attack speed temporarily for a duration.",
        image: "./images/skill/skill1.png",
      },
      passive: {
        name: "Pure Strength",
        nameVN: "Pure Strength",
        description: "Increases attack damage by %",
        descriptionVN: "Increases attack damage by %",
        image: "./images/skill/skill15.png",
      },
      ultimate: {
        name: "Rapid Power",
        nameVN: "Rapid Power",
        description: "A stronger skill than Rapid Fire. Increases attack speed and attack damage for a duration.",
        descriptionVN: "A stronger skill than Rapid Fire. Increases attack speed and attack damage for a duration.",
        image: "./images/skill/skill1_ultimate.png",
      }
    },
    {
      id: 2,
      active: {
        name: "Deadly Focus",
        nameVN: "Deadly Focus",
        description: "Attacks have a % chance to activate Deadly Focus, which increases the critical rate temporarily for a duration.",
        descriptionVN: "Attacks have a % chance to activate Deadly Focus, which increases the critical rate temporarily for a duration.",
        image: "./images/skill/skill2.png",
      },
      passive: {
        name: "Increased Crit Damage",
        nameVN: "Increased Crit Damage",
        description: "Increases critical damage by %",
        descriptionVN: "Increases critical damage by %",
        image: "./images/skill/skill20.png",
      },
      ultimate: {
        name: "Deadly Shot",
        nameVN: "Deadly Shot",
        description: "Increases critical rate to 100%. Enemies killed by critical hit will explode doing AOE damage to nearby enemies.",
        descriptionVN: "Increases critical rate to 100%. Enemies killed by critical hit will explode doing AOE damage to nearby enemies.",
        image: "./images/skill/skill2_ultimate.png",
      }
    },
    {
      id: 3,
      active: {
        name: "Snowball",
        nameVN: "Snowball",
        description: "Enemies will take AOE damage and be slowed for a duration.",
        descriptionVN: "Enemies will take AOE damage and be slowed for a duration.",
        image: "./images/skill/skill3.png",
      },
      passive: {
        name: "Increased Attack Range",
        nameVN: "Increased Attack Range",
        description: "Increases attack range by %",
        descriptionVN: "Increases attack range by %",
        image: "./images/skill/skill16.png",
      },
      ultimate: {
        name: "Ice Age",
        nameVN: "Ice Age",
        description: "Does more damage and now freezes affected enemies in the AOE range instead of just slowing their movement.",
        descriptionVN: "Does more damage and now freezes affected enemies in the AOE range instead of just slowing their movement.",
        image: "./images/skill/skill3_ultimate.png",
      }
    },
    {
      id: 4,
      active: {
        name: "Meteorites",
        nameVN: "Meteorites",
        description: "Spawns meteorites that will hit random areas (with enemies) in the attack radius. Enemies will take high AOE damage.",
        descriptionVN: "Spawns meteorites that will hit random areas (with enemies) in the attack radius. Enemies will take high AOE damage.",
        image: "./images/skill/skill4.png",
      },
      passive: {
        name: "Increased EXP Gain",
        nameVN: "Increased EXP Gain",
        description: "Increases exp gained per enemy killed by %",
        descriptionVN: "Increases exp gained per enemy killed by %",
        image: "./images/skill/skill22.png",
      },
      ultimate: {
        name: "Chaos Destruction",
        nameVN: "Chaos Destruction",
        description: "Does more damage and stuns affected enemies in the AOE range.",
        descriptionVN: "Does more damage and stuns affected enemies in the AOE range.",
        image: "./images/skill/skill4_ultimate.png",
      }
    },
    {
      id: 5,
      active: {
        name: "Mud Ball",
        nameVN: "Mud Ball",
        description: "Spawns mud puddles that will slow enemies in the AOE radius for a duration.",
        descriptionVN: "Spawns mud puddles that will slow enemies in the AOE radius for a duration.",
        image: "./images/skill/skill5.png",
      },
      passive: {
        name: "Increased Attack Range",
        nameVN: "Increased Attack Range",
        description: "Increases attack range by %",
        descriptionVN: "Increases attack range by %",
        image: "./images/skill/skill16.png",
      },
      ultimate: {
        name: "Mud Moat",
        nameVN: "Mud Moat",
        description: "Applies a big movement slow to the entire attack radius (same as the previous mud moat skill).",
        descriptionVN: "Applies a big movement slow to the entire attack radius (same as the previous mud moat skill).",
        image: "./images/skill/skill5_ultimate.png",
      }
    },
    {
      id: 6,
      active: {
        name: "Ricochet",
        nameVN: "Ricochet",
        description: "Attacks have a % chance to ricochet to other nearby enemies.",
        descriptionVN: "Attacks have a % chance to ricochet to other nearby enemies.",
        image: "./images/skill/skill6.png",
      },
      passive: {
        name: "Increased HP Regen",
        nameVN: "Increased HP Regen",
        description: "Increases HP Regen by %",
        descriptionVN: "Increases HP Regen by %",
        image: "./images/skill/skill19.png",
      },
      ultimate: {
        name: "Healing Touch",
        nameVN: "Healing Touch",
        description: "Bounced attacks have a % chance to heal the hero for % of max HP.",
        descriptionVN: "Bounced attacks have a % chance to heal the hero for % of max HP.",
        image: "./images/skill/skill6_ultimate.png",
      }
    },
    {
      id: 7,
      active: {
        name: "Chain Lightning",
        nameVN: "Chain Lightning",
        description: "Attacks have a % chance to deal with a chain lightning attack, hitting the primary target and other additional enemies.",
        descriptionVN: "Attacks have a % chance to deal with a chain lightning attack, hitting the primary target and other additional enemies.",
        image: "./images/skill/skill7.png",
      },
      passive: {
        name: "Increased Crit Rate",
        nameVN: "Increased Crit Rate",
        description: "Increases critical rate by %",
        descriptionVN: "Increases critical rate by %",
        image: "./images/skill/skill20.png",
      },
      ultimate: {
        name: "Paralyzing Bolt",
        nameVN: "Paralyzing Bolt",
        description: "Affected enemies are slowed by % for a duration.",
        descriptionVN: "Affected enemies are slowed by % for a duration.",
        image: "./images/skill/skill7_ultimate.png",
      }
    },
    {
      id: 8,
      active: {
        name: "Guardian Blade",
        nameVN: "Guardian Blade",
        description: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        descriptionVN: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        image: "./images/skill/skill8.png",
      },
      passive: {
        name: "Increased HP",
        nameVN: "Increased HP",
        description: "Increases HP by %",
        descriptionVN: "Increases HP by %",
        image: "./images/skill/skill18.png",
      },
      ultimate: {
        name: "Guardian Angel",
        nameVN: "Guardian Angel",
        description: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        descriptionVN: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        image: "./images/skill/skill8_ultimate.png",
      }
    },
    {
      id: 9,
      active: {
        name: "Pan Attack",
        nameVN: "Pan Attack",
        description: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        descriptionVN: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        image: "./images/skill/skill9.png",
      },
      passive: {
        name: "Increased EXP Gain",
        nameVN: "Increased EXP Gain",
        description: "Increases HP by %",
        descriptionVN: "Increases HP by %",
        image: "./images/skill/skill22.png",
      },
      ultimate: {
        name: "Ultimate Pan",
        nameVN: "Ultimate Pan",
        description: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        descriptionVN: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        image: "./images/skill/skill9_ultimate.png",
      }
    },
    {
      id: 10,
      active: {
        name: "Net",
        nameVN: "Net",
        description: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        descriptionVN: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        image: "./images/skill/skill10.png",
      },
      passive: {
        name: "Increased Gold Gain",
        nameVN: "Increased Gold Gain",
        description: "Increases HP by %",
        descriptionVN: "Increases HP by %",
        image: "./images/skill/skill23.png",
      },
      ultimate: {
        name: "Super Net",
        nameVN: "Super Net",
        description: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        descriptionVN: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        image: "./images/skill/skill10_ultimate.png",
      }
    },
    {
      id: 11,
      active: {
        name: "Shock Wave",
        nameVN: "Shock Wave",
        description: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        descriptionVN: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        image: "./images/skill/skill11.png",
      },
      passive: {
        name: "Increased Attack Speed",
        nameVN: "Increased Attack Speed",
        description: "Increases attack speed by %",
        descriptionVN: "Increases attack speed by %",
        image: "./images/skill/skill17.png",
      },
      ultimate: {
        name: "Sonic Wave",
        nameVN: "Sonic Wave",
        description: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        descriptionVN: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        image: "./images/skill/skill11_ultimate.png",
      }
    },
    {
      id: 12,
      active: {
        name: "Poison Cloud",
        nameVN: "Poison Cloud",
        description: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        descriptionVN: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        image: "./images/skill/skill12.png",
      },
      passive: {
        name: "Increased Attack Speed",
        nameVN: "Increased Attack Speed",
        description: "Increases attack speed by %",
        descriptionVN: "Increases attack speed by %",
        image: "./images/skill/skill17.png",
      },
      ultimate: {
        name: "Fog of Poison",
        nameVN: "Fog of Poison",
        description: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        descriptionVN: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        image: "./images/skill/skill12_ultimate.png",
      }
    },
    {
      id: 13,
      active: {
        name: "Fighting Flower",
        nameVN: "Fighting Flower",
        description: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        descriptionVN: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        image: "./images/skill/skill13.png",
      },
      passive: {
        name: "Increased Crit Rate",
        nameVN: "Increased Crit Rate",
        description: "Increases attack speed by %",
        descriptionVN: "Increases attack speed by %",
        image: "./images/skill/skill21.png",
      },
      ultimate: {
        name: "Venus Fly Trap",
        nameVN: "Venus Fly Trap",
        description: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        descriptionVN: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        image: "./images/skill/skill13_ultimate.png",
      }
    },
    {
      id: 14,
      active: {
        name: "Land Mine",
        nameVN: "Land Mine",
        description: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        descriptionVN: "Spawn blade(s) that rotates around the hero, dealing damage to all enemies that the blade(s) pass through.",
        image: "./images/skill/skill14.png",
      },
      passive: {
        name: "Increase Attack",
        nameVN: "Increase Attack",
        description: "Increases attack speed by %",
        descriptionVN: "Increases attack speed by %",
        image: "./images/skill/skill15.png",
      },
      ultimate: {
        name: "Mine Field",
        nameVN: "Mine Field",
        description: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        descriptionVN: "Applies a shield after the blades disappear that absorbs damage (a % of the max HP). Lasts for 2 seconds or until shield is broken.",
        image: "./images/skill/skill14_ultimate.png",
      }
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
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {currentLang === "VI" ? "Kỹ Năng Bị Động" : "Passive Skill"}
                </h3>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border border-green-500/30 overflow-hidden p-4 md:p-6 h-full min-h-[360px] sm:min-h-[400px] md:min-h-[540px]">
                  {/* Mobile Header inside card */}
                  <div className="flex md:hidden items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
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
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {currentLang === "VI" ? currentSkill.active.descriptionVN : currentSkill.active.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Passive Skill */}
            <div className="space-y-4">
              {/* Desktop Header */}
              <div className="hidden md:flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
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
                      <Sparkles className="w-4 h-4 text-white" />
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
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {currentLang === "VI" ? currentSkill.passive.descriptionVN : currentSkill.passive.description}
                  </p>
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
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {currentLang === "VI" ? currentSkill.ultimate.descriptionVN : currentSkill.ultimate.description}
                  </p>
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