"use client";
import { useLanguage } from "@/contexts/language-context";
import { useEffect, useState } from "react";
import { CalendarDays, ArrowRight, Newspaper } from "lucide-react";

export default function NewsSection() {
  const { currentLang } = useLanguage();

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [newsList, setNewsList] = useState([
    {
      id: 1,
      titleEN: "Update - v.1.0.17",
      titleVI: "Cập nhật v.1.0.17",
      date: "2025-09-12",
      link: "https://docs.nightvalley.gg/news/update-v.1.0.17",
      thumbnail: "https://s3.ap-southeast-1.amazonaws.com/com.pitaya.natv.asset/natv-news-3.png",
    },
    {
      id: 2,
      titleEN: "Update - v.1.0.15",
      titleVI: "Update - v.1.0.15",
      date: "2025-07-18",
      link: "https://docs.nightvalley.gg/news/update-v.1.0.15",
      thumbnail: "https://s3.ap-southeast-1.amazonaws.com/com.pitaya.natv.asset/natv-news-2.png",
    },
    {
      id: 3,
      titleEN: "Update - v.1.0.10",
      titleVI: "Update - v.1.0.10",
      date: "2025-05-29",
      link: "https://docs.nightvalley.gg/news/game-update-v.1.0.10",
      thumbnail: "https://s3.ap-southeast-1.amazonaws.com/com.pitaya.natv.asset/natv-news-1.png",
    }
  ]);

  const featured = newsList[0];
  const others = newsList.slice(1);

  return (
    <section
      id="news"
      className="relative w-full bg-black overflow-hidden py-20 sm:py-24 md:py-32"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-sm">
              <Newspaper className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                {currentLang === "VI" ? "Tin Tức" : "Latest News"}
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6 tracking-tight leading-tight">
            {currentLang === "VI" ? (
              <>
                Cập Nhật<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tin Tức
                </span>
              </>
            ) : (
              <>
                Latest<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Updates
                </span>
              </>
            )}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {currentLang === "VI"
              ? "Cập nhật những thông tin và sự kiện mới nhất trong Night Valley."
              : "Stay updated with the latest news and events from Night Valley."}
          </p>
        </div>

        {/* Featured News */}
        {featured && (
          <div className="relative group mb-12 lg:mb-16 max-w-7xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl hover:border-gray-700 transition-all duration-500">
              
              {/* Image Container */}
              <div className="relative w-full overflow-hidden aspect-[868/368]">
                <img
                  src={featured.thumbnail}
                  alt={featured.titleEN}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg backdrop-blur-sm border border-white/20">
                    <span className="text-white text-sm font-bold uppercase tracking-wider">
                      {currentLang === "VI" ? "Nổi Bật" : "Featured"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="space-y-4">
                  {/* Date */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                      <CalendarDays className="w-4 h-4 text-blue-400" />
                      <span className="text-white text-sm font-medium">{formatDate(featured.date)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link block"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white group-hover/link:text-transparent group-hover/link:bg-gradient-to-r group-hover/link:bg-clip-text group-hover/link:from-blue-400 group-hover/link:to-purple-400 transition-all duration-300 mb-3">
                      {currentLang === "VI" ? featured.titleVI : featured.titleEN}
                    </h3>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>{currentLang === "VI" ? "Đọc thêm" : "Read more"}</span>
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        )}

        {/* Other News Grid */}
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 max-w-7xl mx-auto">
          {others.map((news, index) => (
            <div
              key={news.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] h-full">
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-xl"></div>

                {/* Image Container */}
                <div className="relative w-full overflow-hidden aspect-[868/368]">
                  <img
                    src={news.thumbnail}
                    alt={news.titleEN}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative p-5 sm:p-6 space-y-3">
                  {/* Date */}
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400 text-sm font-medium">{formatDate(news.date)}</span>
                  </div>

                  {/* Title */}
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link block"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover/link:text-transparent group-hover/link:bg-gradient-to-r group-hover/link:bg-clip-text group-hover/link:from-blue-400 group-hover/link:to-purple-400 transition-all duration-300 mb-2">
                      {currentLang === "VI" ? news.titleVI : news.titleEN}
                    </h3>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>{currentLang === "VI" ? "Đọc thêm" : "Read more"}</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </a>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}