"use client"
import { useState } from 'react';
import { Menu, X, Globe, User, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface Language {
  code: 'VI' | 'EN';
  label: string;
  flag: string;
}

interface MenuItem {
  labelKey: string;
  targetId?: string;
  externalUrl?:string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const { currentLang, setCurrentLang, t } = useLanguage();

  const languages: Language[] = [
    { code: 'VI', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
  ];

  const menuItems: MenuItem[] = [
    { labelKey: 'home', targetId: 'home' },
    { labelKey: 'overview', targetId: 'overview' },
    { labelKey: 'gamemode', targetId: 'gamemode' },
    { labelKey: 'equipment', targetId: 'equipment' },
    { labelKey: 'news', targetId: 'news' },
    { labelKey: 'support', externalUrl: 'https://nightvalley.gg/feedback' },
  ];
  

  return (
    <header className="bg-gradient-to-b from-black via-gray-900 to-black text-white sticky top-0 z-50"> 

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="NATV Game Logo" 
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            item.externalUrl ? (
             
              <a
                key={index}
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-gotham text-md text-white 
                  transition-all duration-300 ease-in-out
                  hover:text-blue-400 
                  hover:scale-110
                  hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]
                  inline-block
                "
              >
                {t(item.labelKey)}
              </a>
            ) : (
             
              <button
                key={index}
                onClick={() => {
                  const section = document.getElementById(item.targetId!);
                  if (section) {
                    const yOffset = -80; 
                    const y =
                      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="
                  font-gotham text-md text-white 
                  transition-all duration-300 ease-in-out
                  hover:text-blue-400 
                  hover:scale-110
                  hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]
                  inline-block
                "
              >
                {t(item.labelKey)}
              </button>
            )
          ))}


            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:border-blue-400 hover:bg-white/5 transition-all duration-200"
              >
               
                <span className=" font-gotham text-md uppercase">{currentLang}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-xl rounded-lg shadow-2xl py-2 border border-blue-400/30">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left transition-all flex items-center space-x-3 ${
                        currentLang === lang.code
                          ? 'bg-blue-600/40 text-blue-300'
                          : 'hover:bg-white/10 text-white'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <button className="group relative px-8 py-2 bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  <span>{t("login")}</span>
                </span>
              </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-blue-600/20 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-blue-500/20 pt-4">
            {menuItems.map((item, index) => (
              item.externalUrl ? (
                <a
                  key={index}
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block py-3 text-white text-lg
                    hover:text-blue-400
                    hover:scale-105
                    transition-all duration-300 ease-in-out
                    font-medium
                  "
                >
                  {t(item.labelKey)}
                </a>
              ) : (
                
                <button
                  key={index}
                  onClick={() => {
                    const section = document.getElementById(item.targetId!);
                    if (section) {
                      const yOffset = -80; 
                      const y =
                        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                    
                    setIsMenuOpen(false);
                  }}
                  className="
                    block w-full text-left py-3 text-white text-lg
                    hover:text-blue-400
                    hover:scale-105
                    transition-all duration-300 ease-in-out
                    font-medium
                  "
                >
                  {t(item.labelKey)}
                </button>
              )
            ))}

            {/* Mobile Language Selector */}
            <div className="py-2">
              <div className="text-sm text-gray-400 mb-2">{t('language')}</div>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-all ${
                      currentLang === lang.code
                        ? 'bg-blue-600/40 text-blue-300 border border-blue-400/50'
                        : 'hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Login Button */}
            <button className="group relative px-8 py-2 bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  <span>{t("login")}</span>
                </span>
              </button>
          </div>
        )}
      </nav>
    </header>
  );
}