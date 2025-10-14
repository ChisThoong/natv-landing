"use client";
import { Lock, CheckCircle } from "lucide-react";

export default function ProfilePassword() {
  return (
    <div className="max-w-full">
      <h3 className="text-2xl font-bold text-white mb-6">ĐỔI MẬT KHẨU</h3>
      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 space-y-5">
        {/* Mật khẩu cũ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <label className="text-white md:text-right">Mật khẩu cũ:</label>
          <div className="col-span-3 relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="password"
              placeholder="Mật nhập mật khẩu cũ"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded pl-10 pr-4 py-2 focus:border-white outline-none"
            />
          </div>
        </div>

        {/* Mật khẩu mới */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <label className="text-white md:text-right">Mật khẩu mới:</label>
          <div className="col-span-3 relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="password"
              placeholder="Mật nhập mật khẩu mới"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded pl-10 pr-4 py-2 focus:border-white outline-none"
            />
          </div>
        </div>

        {/* Nhập lại mật khẩu */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <label className="text-white md:text-right">Nhập lại mật khẩu:</label>
          <div className="col-span-3 relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="password"
              placeholder="Mật nhập lại mật khẩu mới"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded pl-10 pr-4 py-2 focus:border-white outline-none"
            />
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <button className="bg-white text-black font-bold px-8 py-3 rounded flex items-center gap-2 hover:bg-gray-200 transition">
            <CheckCircle className="w-5 h-5" />
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}
