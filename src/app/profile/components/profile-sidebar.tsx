"use client";
import { User, List, Settings, Lock, X } from "lucide-react";

const menuItems = [
  { id: "account", label: "QUẢN LÝ TÀI KHOẢN", icon: User },
  { id: "history", label: "LỊCH SỬ NẠP TIỀN", icon: List },
  { id: "support", label: "HỖ TRỢ/BÁO LỖI", icon: Settings },
  { id: "password", label: "ĐỔI MẬT KHẨU", icon: Lock },
] as const;
export type MenuId = typeof menuItems[number]["id"];
  
interface ProfileSidebarProps {
    activeMenu: MenuId;
    onChange: (id: MenuId) => void;
    open: boolean;
    onClose: () => void;
  }
  
  export default function ProfileSidebar({
    activeMenu,
    onChange,
    open,
    onClose,
  }: ProfileSidebarProps) {
  return (
    <aside
      className={`fixed h-[100vh] lg:static inset-y-0 left-0 z-30 w-64
      bg-gradient-to-b from-gray-950 to-black border-r border-gray-800
      transform transition-transform duration-300 lg:translate-x-0
      ${open ? "translate-x-0" : "-translate-x-full"}`}
      aria-label="Profile sidebar"
    >
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-800">
        <h3 className="text-white font-bold text-lg">Menu</h3>
        <button 
          onClick={onClose} 
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`
                group relative w-full flex items-center gap-3 px-4 py-3.5 rounded-lg 
                transition-all duration-300 text-left overflow-hidden
                ${active
                  ? "bg-gray-800 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-900/50"
                }
              `}
            >
              {/* Active indicator bar */}
              <div className={`
                absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full
                transition-all duration-300
                ${active ? "opacity-100" : "opacity-0 group-hover:opacity-50"}
              `} />

              {/* Icon with background */}
              <div className={`
                relative flex items-center justify-center w-10 h-10 rounded-lg
                transition-all duration-300
                ${active 
                  ? "bg-gray-700 shadow-inner" 
                  : "bg-gray-900 group-hover:bg-gray-800"
                }
              `}>
                <Icon className={`
                  w-5 h-5 transition-transform duration-300
                  ${active ? "scale-110" : "group-hover:scale-110"}
                `} />
              </div>

              {/* Label */}
              <span className={`
                flex-1 font-semibold text-xs tracking-wider
                transition-all duration-300
                ${active ? "translate-x-0" : "group-hover:translate-x-1"}
              `}>
                {item.label}
              </span>

              {/* Hover arrow indicator */}
              <div className={`
                w-1.5 h-1.5 rounded-full bg-white
                transition-all duration-300
                ${active ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"}
              `} />

              {/* Subtle hover background gradient */}
              {!active && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom decoration (optional) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
        <div className="text-center text-gray-600 text-xs">
          <p className="font-medium">Night Valley</p>
          <p className="text-gray-700 mt-1">Profile Dashboard</p>
        </div>
      </div>
    </aside>
  );
}