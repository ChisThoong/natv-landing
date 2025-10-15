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

      {/* Top Navigation Bar */}
      <header className="relative z-30 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center h-20 gap-6">
            
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* User Profile Info */}
            <div className="flex-1 flex items-center justify-start lg:justify-start">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center ring-2 ring-gray-700 hover:ring-gray-600 transition-all">
                    <span className="text-3xl">👤</span>
                  </div>
                  {/* Online indicator */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
                </div>

                {/* User info */}
                <div className="hidden sm:block">
                  <h2 className="text-white font-bold text-lg leading-tight">User</h2>
                  <p className="text-gray-400 text-sm">ID: #123456</p>
                </div>
              </div>
            </div>

            {/* Right section - Coin & Actions */}
            <div className="flex items-center gap-4">
              {/* Coin display */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15 8H9L12 2ZM12 22L9 16H15L12 22ZM2 12L8 15V9L2 12ZM22 12L16 9V15L22 12Z" />
                </svg>
                <span className="text-white font-bold">140</span>
                <span className="text-gray-400 text-sm hidden sm:inline">Coin</span>
              </div>

              {/* Logout button */}
              <Link href="/">
                <button className="group relative px-4 lg:px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    <span className="hidden lg:inline">Đăng xuất</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container - Layout grid  */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-6 lg:py-8">
        <div className="flex gap-6">
          
          {/* Sidebar - Fixed width, sticky */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <ProfileSidebar
                activeMenu={activeMenu}
                onChange={(id) => setActiveMenu(id)}
                open={true}
                onClose={() => {}}
              />
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
              <span>Profile</span>
              <span>/</span>
              <span className="text-white font-medium capitalize">{activeMenu}</span>
            </div>

            {/* Content Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
              {/* Card Header - Title section */}
              <div className="border-b border-gray-800 px-6 py-4 bg-gradient-to-r from-gray-900/80 to-transparent">
                <h3 className="text-xl font-bold text-white capitalize">
                  {activeMenu === "account" && "Thông Tin Tài Khoản"}
                  {activeMenu === "history" && "Lịch Sử Giao Dịch"}
                  {activeMenu === "support" && "Hỗ Trợ"}
                  {activeMenu === "password" && "Đổi Mật Khẩu"}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 lg:p-8">
                {activeMenu === "account" && <ProfileAccount />}
                {activeMenu === "history" && <ProfileHistory />}
                {activeMenu === "support" && <ProfileSupport />}
                {activeMenu === "password" && <ProfilePassword />}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-black border-r border-gray-800 transform transition-transform duration-300 lg:hidden
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
            <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-800 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          <ProfileSidebar
            activeMenu={activeMenu}
            onChange={(id) => {
              setActiveMenu(id);
              setSidebarOpen(false);
            }}
            open={true}
            onClose={() => setSidebarOpen(false)}
          />
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}