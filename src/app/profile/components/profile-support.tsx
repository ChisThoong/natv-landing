"use client";
import { HelpCircle, MessageCircle } from "lucide-react";

export default function ProfileSupport() {
  return (
    <div className="max-w-full">
      <div className="flex gap-4 mb-8 border-b border-gray-800">
        <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-t-lg">
          CÂU HỎI THƯỜNG GẶP
        </button>
        {/* <button className="px-6 py-3 text-white hover:bg-gray-900 rounded-t-lg">
          YÊU CẦU HỖ TRỢ
        </button> */}
      </div>

      <p className="text-gray-400 mb-6">Vui lòng chọn loại vấn đề bạn đang gặp phải:</p>

      <div className="space-y-4">
        {["TÀI KHOẢN VÀ ĐĂNG NHẬP", "NẠP TIỀN VÀ THANH TOÁN", "HƯỚNG DẪN CÀI ĐẶT"].map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-4 flex items-center gap-4 hover:border-gray-700 transition cursor-pointer"
          >
            <HelpCircle className="w-5 h-5 text-gray-400" />
            <span className="text-white font-semibold">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6">
        <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
          <MessageCircle className="w-5 h-5" />
          Gửi yêu cầu hỗ trợ
        </button>
      </div>
    </div>
  );
}
