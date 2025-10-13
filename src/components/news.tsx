"use client";
import { useLanguage } from "@/contexts/language-context";
import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";

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
      className="relative w-full bg-black overflow-hidden py-16 sm:py-20 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mb-6 tracking-wider">
            {currentLang === "VI" ? "Tin Tức" : "News"}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
            {currentLang === "VI"
              ? "Cập nhật những thông tin và sự kiện mới nhất trong Night Valley."
              : "Stay updated with the latest news and events from Night Valley."}
          </p>
        </div>

        {featured && (
            <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl border border-gray-700 group">
                <img
                src={featured.thumbnail}
                alt={featured.titleEN}
                className="w-full h-auto object-cover aspect-[868/368] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white hover:text-blue-400 transition-colors duration-300"
                >
                    {currentLang === "VI" ? featured.titleVI : featured.titleEN}
                </a>

                <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
                    <CalendarDays className="w-4 h-4 text-blue-400" />
                    <span>{formatDate(featured.date)}</span>
                </div>
                </div>
            </div>
            )}
            <div className="grid gap-8 md:grid-cols-2">
                {others.map((news) => (
                    <div
                    key={news.id}
                    className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-400 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                    <div className="relative w-full overflow-hidden aspect-[868/368]">
                        <img
                        src={news.thumbnail}
                        alt={news.titleEN}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="p-5 sm:p-6">
                        <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xl font-bold text-white hover:text-blue-400 transition-colors duration-200"
                        >
                        {currentLang === "VI" ? news.titleVI : news.titleEN}
                        </a>

                    
                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                        <CalendarDays className="w-4 h-4 text-blue-400" />
                        <span>{formatDate(news.date)}</span>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
        </div>
    </section>
  );
}
