"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Định nghĩa types
type Language = "VI" | "EN";

interface LanguageContextType {
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
  t: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
}

// ================== TRANSLATIONS ==================
const translations: Record<Language, Record<string, string>> = {
  VI: {
    // Header
    home: "Trang Chủ",
    overview: "Tổng Quan",
    gamemode: "Chế Độ Chơi",
    equipment: "Trang Bị",
    news: "Tin Tức",
    support: "Hỗ Trợ",
    login: "Đăng Nhập",
    language: "Ngôn ngữ",

    // Hero Section
    heroTitle: "Chào Mừng Đến Với NATV Game",
    heroSubtitle: "Trải nghiệm game đỉnh cao với đồ họa tuyệt đẹp",
    playNow: "Chơi Ngay",
    learnMore: "Tìm Hiểu Thêm",

    // Game Mode
    gameModeTitle: "Chế Độ Chơi",
    gameModeSubtitle1: "Subtitle normal mode",
    gameModeSubtitle2:
      "Chơi lại các chương ở mức độ khó cao hơn để kiếm được phần thưởng lớn hơn!",
    gameModeSubtitle3:
      "Bước vào ngục tối sâu nhất để thách đấu Stone King trong một trận chiến hoành tráng!",

    // Welcome
    welcomeSection:'Tổng quan',
    welcomeTitle: "Tham gia trận chiến ma thuật!",
    welcomeSubtitle1:
      "Bước vào thế giới mê hoặc của Làng Ngọc Lục Bảo, nơi Moo và Lulu cần sự giúp đỡ của bạn để bảo vệ thị trấn cổ kính của họ khỏi cuộc xâm lược của những sinh vật ma thuật!",
    welcomeSubtitle2:
      "Trong trò chơi nhập vai phòng thủ tháp nhàn rỗi này, bạn sẽ xây dựng, nâng cấp và lập chiến lược để bảo vệ thung lũng khỏi những đợt tấn công của kẻ thù kỳ quái nhưng nguy hiểm.",
    welcomeSubtitle3:
      "Bạn đã sẵn sàng cho một cuộc phiêu lưu nhàn rỗi đầy chiến lược và bí ẩn chưa?",
    join: "Chơi Ngay",

    // Weapons
    weaponSection:"Trang bị",
    weaponTitle: "Trang bị",
    weaponSubtitle: "Đa dạng trang bị – tùy biến phong cách chiến đấu của bạn!",

    // Footer
    copyright: "© 2025 NATV Game. Tất cả quyền được bảo lưu.",

    // Login Page
    "login.title": "Đăng nhập",
    "login.subtitle": "Đăng nhập để tiếp tục",
    "login.email": "Email",
    "login.emailPlaceholder": "Nhập email của bạn",
    "login.password": "Mật khẩu",
    "login.passwordPlaceholder": "Nhập mật khẩu",
    "login.rememberMe": "Ghi nhớ đăng nhập",
    "login.forgotPassword": "Quên mật khẩu?",
    "login.loginButton": "Đăng nhập",
    "login.or": "hoặc",
    "login.noAccount": "Chưa có tài khoản?",
    "login.registerNow": "Đăng ký ngay",

    // Register Page
    "register.title": "Đăng ký",
    "register.subtitle": "Tạo tài khoản mới",
    "register.username": "Tên người dùng",
    "register.usernamePlaceholder": "Nhập tên người dùng",
    "register.email": "Email",
    "register.emailPlaceholder": "Nhập email của bạn",
    "register.password": "Mật khẩu",
    "register.passwordPlaceholder": "Nhập mật khẩu",
    "register.confirmPassword": "Xác nhận mật khẩu",
    "register.confirmPasswordPlaceholder": "Nhập lại mật khẩu",
    "register.agreeWith": "Tôi đồng ý với",
    "register.terms": "Điều khoản dịch vụ",
    "register.and": "và",
    "register.privacy": "Chính sách bảo mật",
    "register.registerButton": "Đăng ký",
    "register.or": "hoặc",
    "register.haveAccount": "Đã có tài khoản?",
    "register.loginNow": "Đăng nhập ngay",
    "register.fillAllFields": "Vui lòng nhập đầy đủ thông tin",
    "register.passwordNotMatch": "Mật khẩu không khớp",
    "register.mustAgree": "Bạn cần đồng ý với điều khoản và xác nhận đủ 18 tuổi",
    "register.over18": "Tôi xác nhận đã đủ 18 tuổi",

    // Profile
    "profile.menu.account": "QUẢN LÝ TÀI KHOẢN",
    "profile.menu.history": "LỊCH SỬ NẠP TIỀN",
    "profile.menu.support": "HỖ TRỢ/BÁO LỖI",
    "profile.menu.password": "ĐỔI MẬT KHẨU",

    // download
    "download.title":"Tải Game",
    "download.subTitle":"Quét mã để tải"
  },

  EN: {
    home: "Home",
    overview: "Overview",
    gamemode: "Game Mode",
    equipment: "Equipment",
    news: "News",
    support: "Support",
    login: "Login",
    language: "Language",

    heroTitle: "Welcome To NATV Game",
    heroSubtitle: "Experience premium gaming with stunning graphics",
    playNow: "Play Now",
    learnMore: "Learn More",

    gameModeTitle: "Game Mode",
    gameModeSubtitle1: "Subtitle normal mode",
    gameModeSubtitle2:
      "Replay chapters at higher difficulty levels to earn even greater rewards!",
    gameModeSubtitle3:
      "Enter the deepest dungeon to challenge the Stone King in an epic battle!",

    welcomeSection:'Overview', 
    welcomeTitle: "JOIN THE MAGICAL BATTLE!",
    welcomeSubtitle1:
      "Step into the enchanting world of Emerald Village, where Moo and Lulu need your help to defend their quaint town from magical creatures!",
    welcomeSubtitle2:
      "In this idle tower defense RPG, you will build, upgrade, and strategize to protect the valley from waves of dangerous foes.",
    welcomeSubtitle3:
      "Ready for an idle game adventure packed with strategy and mystery?",
    join: "Start Your Adventure",

    weaponSection:"Equipments",
    weaponTitle: "Equipments",
    weaponSubtitle: "Diverse equipment – customize your combat style!",

    copyright: "© 2025 NATV Game. All rights reserved.",

    "login.title": "Login",
    "login.subtitle": "Login to continue",
    "login.email": "Email",
    "login.emailPlaceholder": "Enter your email",
    "login.password": "Password",
    "login.passwordPlaceholder": "Enter password",
    "login.rememberMe": "Remember me",
    "login.forgotPassword": "Forgot password?",
    "login.loginButton": "Login",
    "login.or": "or",
    "login.noAccount": "Don’t have an account?",
    "login.registerNow": "Register now",

    "register.title": "Register",
    "register.subtitle": "Create new account",
    "register.username": "Username",
    "register.usernamePlaceholder": "Enter username",
    "register.email": "Email",
    "register.emailPlaceholder": "Enter your email",
    "register.password": "Password",
    "register.passwordPlaceholder": "Enter password",
    "register.confirmPassword": "Confirm Password",
    "register.confirmPasswordPlaceholder": "Re-enter password",
    "register.agreeWith": "I agree with",
    "register.terms": "Terms of Service",
    "register.and": "and",
    "register.privacy": "Privacy Policy",
    "register.registerButton": "Register",
    "register.or": "or",
    "register.haveAccount": "Already have an account?",
    "register.loginNow": "Login now",
    "register.fillAllFields": "Please fill in all required fields",
    "register.passwordNotMatch": "Passwords do not match",
    "register.mustAgree":
      "You must agree to the terms and confirm that you are over 18",
    "register.over18": "I confirm that I am at least 18 years old",

    "profile.menu.account": "ACCOUNT MANAGEMENT",
    "profile.menu.history": "PAYMENT HISTORY",
    "profile.menu.support": "SUPPORT / BUG REPORT",
    "profile.menu.password": "CHANGE PASSWORD",

    // download
    "download.title": "Download",
    "download.subTitle": "Scan the QR code to download"
  },
  
};

// ================== CONTEXT SETUP ==================
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

// ================== PROVIDER ==================
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLang, setCurrentLangState] = useState<Language>("VI");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "EN" || savedLang === "VI") {
      setCurrentLangState(savedLang);
    }
  }, []);

  const setCurrentLang = (lang: Language) => {
    setCurrentLangState(lang);
    localStorage.setItem("lang", lang);
  };

  const t = (key: string): string => translations[currentLang]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
