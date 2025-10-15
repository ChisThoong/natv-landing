"use client"
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, LogIn, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import Link from "next/link";

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
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-500 ease-out
      ${isScrolled 
        ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-purple-900/20 border-b border-gray-800/50' 
        : 'bg-gradient-to-b from-black/80 via-gray-900/60 to-transparent '
      }
    `}> 
      {/* Top glow effect */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/images/logo.png" 
                alt="NATV Game Logo" 
                className="relative h-18 w-auto object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              item.externalUrl ? (
                <a
                  key={index}
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative px-4 py-2 font-gotham text-sm font-medium text-gray-300
                    transition-all duration-300 ease-out
                    hover:text-white
                    group
                  "
                >
                  <span className="relative z-10">{t(item.labelKey)}</span>
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-blue-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Bottom border */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
                </a>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    const section = document.getElementById(item.targetId!);
                    if (section) {
                      const yOffset = -80; 
                      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="
                    relative px-4 py-2 font-gotham text-sm font-medium text-gray-300
                    transition-all duration-300 ease-out
                    hover:text-white
                    group
                  "
                >
                  <span className="relative z-10">{t(item.labelKey)}</span>
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-blue-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Bottom border */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
                </button>
              )
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="
                  flex items-center space-x-2 px-3 py-2 
                  bg-gray-900/50 hover:bg-gray-800/70 
                  border border-gray-800 hover:border-purple-500/50
                  rounded-lg transition-all duration-300
                  group
                "
              >
                <span className="text-xl">{languages.find(l => l.code === currentLang)?.flag}</span>
                <span className="font-gotham text-sm font-medium uppercase text-gray-300 group-hover:text-white transition-colors">
                  {currentLang}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-950/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-800/50 overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5" />
                  <div className="relative py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`
                          w-full px-4 py-2.5 text-left transition-all flex items-center space-x-3
                          ${currentLang === lang.code
                            ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border-l-2 border-purple-500'
                            : 'hover:bg-white/5 text-gray-400 hover:text-white'
                          }
                        `}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium text-sm">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Login Button */}
            <Link href="/login">
              <button className="
                group relative px-6 py-2.5
                bg-gradient-to-r from-purple-600 to-blue-600
                hover:from-purple-500 hover:to-blue-500
                text-white font-bold text-sm rounded-lg
                overflow-hidden
                transition-all duration-300
                hover:shadow-lg hover:shadow-purple-500/50
                hover:scale-105
              ">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  <span>{t("login")}</span>
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              lg:hidden p-2 rounded-lg
              bg-gray-900/50 hover:bg-gray-800/70
              border border-gray-800 hover:border-purple-500/50
              transition-all duration-300
            "
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-gray-800/50 pt-4">
            {/* Backdrop blur effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-gray-950/95 backdrop-blur-xl -z-10" />
            
            {menuItems.map((item, index) => (
              item.externalUrl ? (
                <a
                  key={index}
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block px-4 py-3 text-gray-300 text-base
                    hover:text-white hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10
                    rounded-lg transition-all duration-300
                    font-medium border border-transparent hover:border-purple-500/30
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
                      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                    setIsMenuOpen(false);
                  }}
                  className="
                    block w-full text-left px-4 py-3 text-gray-300 text-base
                    hover:text-white hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10
                    rounded-lg transition-all duration-300
                    font-medium border border-transparent hover:border-purple-500/30
                  "
                >
                  {t(item.labelKey)}
                </button>
              )
            ))}

            {/* Mobile Language Selector */}
            <div className="pt-4 space-y-2">
              <div className="text-xs text-gray-500 uppercase tracking-wider px-4 mb-2">{t('language')}</div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`
                    flex items-center w-full px-4 py-3 rounded-lg transition-all duration-300
                    ${currentLang === lang.code
                      ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/50'
                      : 'hover:bg-white/5 text-gray-400 border border-transparent'
                    }
                  `}
                >
                  <span className="text-lg mr-3">{lang.flag}</span>
                  <span className="font-medium text-sm">{lang.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Login Button */}
            <Link href="/login" className="block pt-4">
              <button className="
                group relative w-full px-6 py-3
                bg-gradient-to-r from-purple-600 to-blue-600
                hover:from-purple-500 hover:to-blue-500
                text-white font-bold text-base rounded-lg
                overflow-hidden
                transition-all duration-300
                hover:shadow-lg hover:shadow-purple-500/50
              ">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative flex items-center justify-center gap-2">
                  <LogIn className="w-5 h-5" />
                  <span>{t("login")}</span>
                </span>
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}