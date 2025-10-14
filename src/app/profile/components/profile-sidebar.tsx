"use client";
import { User, List, Settings, Lock, X } from "lucide-react";

const menuItems = [
  { id: "account", label: "QUẢN LÝ TÀI KHOẢN", icon: User },
  { id: "history", label: "LỊCH SỬ NẠP TIỀN", icon: List },
  { id: "support", label: "HỖ TRỢ/BÁO LỖI", icon: Settings },
  { id: "password", label: "ĐỔI MẬT KHẨU", icon: Lock },
] as const;

export default function ProfileSidebar({
  activeMenu,
  onChange,
  open,
  onClose,
}: {
  activeMenu: string;
  onChange: (id: string) => void;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <aside
      className={`fixed h-[100vh] lg:static inset-y-0 left-0 z-30 w-64
      bg-gradient-to-b from-gray-950 to-black border-r border-gray-800
      transform transition-transform duration-300 lg:translate-x-0
      ${open ? "translate-x-0" : "-translate-x-full"}`}
      aria-label="Profile sidebar"
    >
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-800">
        <h3 className="text-white font-semibold">Menu</h3>
        <button onClick={onClose} className="text-gray-300 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="p-2 space-y-4 mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = activeMenu === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`w-full  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left
                ${active
                  ? "bg-gray-800 border border-gray-700 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-900"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
