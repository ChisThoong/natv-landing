"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa types
type Language = 'VI' | 'EN';

interface LanguageContextType {
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
  t: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  VI: {
    // Header
    home:'Trang Chủ',
    overview: 'Tổng Quan',
    gamemode:'Chế Độ Chơi',
    equipment:'Trang Bị',
    news: 'Tin Tức',
    support: 'Hỗ Trợ',
    login: 'Đăng Nhập',
    language: 'Ngôn ngữ',
    
    // Hero Section
    heroTitle: 'Chào Mừng Đến Với NATV Game',
    heroSubtitle: 'Trải nghiệm game đỉnh cao với đồ họa tuyệt đẹp',
    playNow: 'Chơi Ngay',
    learnMore: 'Tìm Hiểu Thêm',

    // Hero Section
    gameModeTitle: 'Chế Độ Chơi',
    gameModeSubtitle1: 'Subtitle normal mode',
    gameModeSubtitle2: 'Chơi lại các chương ở mức độ khó cao hơn để kiếm được phần thưởng lớn hơn!',
    gameModeSubtitle3: 'Bước vào ngục tối sâu nhất để thách đấu Stone King trong một trận chiến hoành tráng!',

    // Welcome Section
    welcomeTitle: 'Tham gia trận chiến ma thuật!',
    welcomeSubtitle1: 'Bước vào thế giới mê hoặc của Làng Ngọc Lục Bảo, nơi Moo và Lulu cần sự giúp đỡ của bạn để bảo vệ thị trấn cổ kính của họ khỏi cuộc xâm lược của những sinh vật ma thuật!',
    welcomeSubtitle2: 'Trong trò chơi nhập vai phòng thủ tháp nhàn rỗi này, bạn sẽ xây dựng, nâng cấp và lập chiến lược để bảo vệ thung lũng khỏi những đợt tấn công của kẻ thù kỳ quái nhưng nguy hiểm.',
    welcomeSubtitle3: 'Bạn đã sẵn sàng cho một cuộc phiêu lưu nhàn rỗi đầy chiến lược và bí ẩn chưa?',
    join: 'Chơi Ngay',

    // Weapon Section
    weaponTitle: 'Trang bị',
    weaponSubtitle: 'Đa dạng trang bị – tùy biến phong cách chiến đấu của bạn!',
    
    // Features
    featuresTitle: 'Tính Năng Nổi Bật',
    feature1Title: 'Đồ Họa Tuyệt Đẹp',
    feature1Desc: 'Trải nghiệm hình ảnh sống động với công nghệ đồ họa tiên tiến',
    feature2Title: 'Gameplay Hấp Dẫn',
    feature2Desc: 'Lối chơi độc đáo, đa dạng thử thách hấp dẫn',
    feature3Title: 'Cộng Đồng Lớn',
    feature3Desc: 'Kết nối với hàng triệu game thủ trên toàn thế giới',
    
    // Stats
    activePlayers: 'Người Chơi Hoạt Động',
    totalDownloads: 'Lượt Tải Xuống',
    positiveReviews: 'Đánh Giá Tích Cực',
    
    // Footer
    copyright: '© 2025 NATV Game. Tất cả quyền được bảo lưu.',
  },
  EN: {
    // Header
    home:'Home',
    overview:'Overview',
    gamemode:'Game mode',
    equipment:'Equipment',
    news: 'News',
    support: 'Support',
    login: 'Login',
    language: 'Language',
    
    // Hero Section
    heroTitle: 'Welcome To NATV Game',
    heroSubtitle: 'Experience premium gaming with stunning graphics',
    playNow: 'Play Now',
    learnMore: 'Learn More',
     // Welcome Section
     welcomeTitle: 'JOIN THE MAGICAL BATTLE!',
     welcomeSubtitle1: 'Step into the enchanting world of Emerald Village, where Moo and Lulu need your help to defend their quaint town from an invasion of magical creatures!',
     welcomeSubtitle2: 'In this idle tower defense RPG, you will build, upgrade, and strategize to protect the valley from waves of whimsical yet dangerous foes.',
     welcomeSubtitle3: 'Ready for an idle game adventure packed with strategy and mystery?',
     join: 'Start Your Adventure',

     // Hero Section
    gameModeTitle: 'Game Mode',
    gameModeSubtitle1: 'Subtitle normal mode',
    gameModeSubtitle2: 'Replay chapters at higher difficulty levels to earn even greater rewards!',
    gameModeSubtitle3: 'Enter the deepest dungeon to challenge the Stone King in an epic battle',
    
    // Weapon Section
    weaponTitle: 'Equipments',
    weaponSubtitle: 'Diverse equipment – customize your combat style!',

    // Features
    featuresTitle: 'Key Features',
    feature1Title: 'Stunning Graphics',
    feature1Desc: 'Experience vivid visuals with advanced graphics technology',
    feature2Title: 'Engaging Gameplay',
    feature2Desc: 'Unique gameplay with diverse and exciting challenges',
    feature3Title: 'Large Community',
    feature3Desc: 'Connect with millions of gamers worldwide',
    
    // Stats
    activePlayers: 'Active Players',
    totalDownloads: 'Total Downloads',
    positiveReviews: 'Positive Reviews',
    
    // Footer
    copyright: '© 2025 NATV Game. All rights reserved.',
  }
};

// Tạo Language Context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook để sử dụng language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

// Language Provider Component
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLang, setCurrentLang] = useState<Language>('VI');

  // Function để lấy translation
  const t = (key: string): string => {
    return translations[currentLang]?.[key] || key;
  };

  const value: LanguageContextType = {
    currentLang,
    setCurrentLang,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}