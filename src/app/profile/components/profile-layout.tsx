"use client";
import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import ProfileSidebar from "./profile-sidebar";
import ProfileAccount from "./profile-account";
import ProfileHistory from "./profile-history";
import ProfileSupport from "./profile-support";
import ProfilePassword from "./profile-password";
import Link from "next/link";
import type { MenuId } from "./profile-sidebar";

export default function ProfileLayout() {
    const [activeMenu, setActiveMenu] = useState<MenuId>("account");
    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-gray-200">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

      {/* Top bar */}
      <header className="relative z-10 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <div>
              <h2 className="text-white font-bold leading-tight text-2xl">User</h2>
              <div className="flex items-center gap-1.5 text-sm px-3 py-1 mt-1 rounded-full border border-white/20 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm shadow-[0_0_8px_rgba(255,255,255,0.15)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15 8H9L12 2ZM12 22L9 16H15L12 22ZM2 12L8 15V9L2 12ZM22 12L16 9V15L22 12Z" />
                </svg>
                <span className="text-white font-semibold tracking-wide">140</span>
                <span className="text-gray-400 font-medium ml-1">Coin</span>
              </div>
            </div>
          </div>

          <Link href="/">
              <button className="group relative px-8 py-2 bg-gray-800 hover:bg-gray-700 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    <span>Đăng xuất</span>
                  </span>
              </button>
            </Link>
        </div>
      </header>

      <div className="relative z-10  mx-auto">
        <div className="flex">
          {/* Sidebar */}
          <ProfileSidebar
            activeMenu={activeMenu}
            onChange={(id) => {
                setActiveMenu(id);
                setSidebarOpen(false);
            }}
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            />

          {/* Main content */}
          <main className="flex-1 p-6 lg:p-10">
            {activeMenu === "account" && <ProfileAccount />}
            {activeMenu === "history" && <ProfileHistory />}
            {activeMenu === "support" && <ProfileSupport />}
            {activeMenu === "password" && <ProfilePassword />}
          </main>
        </div>
      </div>

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
