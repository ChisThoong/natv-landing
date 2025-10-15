"use client";
import { useState } from "react";
import {
  HelpCircle,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

export default function ProfileSupport() {
  const faqData = {
    "TÀI KHOẢN VÀ ĐĂNG NHẬP": [
      {
        question: "Tôi quên mật khẩu, làm thế nào để khôi phục?",
        answer:
          "Bạn có thể sử dụng tính năng 'Quên mật khẩu' tại trang đăng nhập. Hệ thống sẽ gửi email hoặc mã xác minh để bạn đặt lại mật khẩu mới.",
      },
      {
        question: "Tôi không nhận được email xác minh?",
        answer:
          "Vui lòng kiểm tra hộp thư rác (Spam/Junk). Nếu vẫn không thấy, hãy thử gửi lại hoặc liên hệ hỗ trợ.",
      },
    ],
    "NẠP TIỀN VÀ THANH TOÁN": [
      {
        question: "Tôi đã nạp tiền nhưng chưa nhận được?",
        answer:
          "Hệ thống có thể mất vài phút để xử lý. Nếu sau 10 phút vẫn chưa nhận được, vui lòng gửi yêu cầu hỗ trợ kèm mã giao dịch.",
      },
      {
        question: "Những phương thức thanh toán nào được hỗ trợ?",
        answer:
          "Hiện tại hệ thống hỗ trợ Momo, ZaloPay, VNPay, và chuyển khoản ngân hàng.",
      },
    ],
    "HƯỚNG DẪN CÀI ĐẶT": [
      {
        question: "Ứng dụng có thể cài đặt trên thiết bị nào?",
        answer:
          "Ứng dụng hỗ trợ Android (từ 8.0 trở lên) và iOS (từ iOS 13 trở lên).",
      },
      {
        question: "Tôi bị lỗi khi cài đặt game?",
        answer:
          "Hãy đảm bảo bạn có đủ dung lượng và kết nối mạng ổn định. Nếu vẫn lỗi, thử gỡ cài đặt và tải lại.",
      },
    ],
  };

  const [openCategory, setOpenCategory] =
    useState<keyof typeof faqData | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [showSupportModal, setShowSupportModal] = useState(false);

  const handleCategoryClick = (category: keyof typeof faqData) => {
    setOpenCategory(openCategory === category ? null : category);
    setOpenQuestion(null);
  };

  const handleQuestionClick = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="max-w-full">
      <div className="flex gap-4 mb-8 border-b border-gray-800">
        <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-t-lg">
          CÂU HỎI THƯỜNG GẶP
        </button>
      </div>

      <p className="text-gray-400 mb-6">
        Vui lòng chọn loại vấn đề bạn đang gặp phải:
      </p>

      {/* Danh mục câu hỏi */}
      <div className="space-y-4">
        {Object.entries(faqData).map(([category, faqs]) => (
          <div
            key={category}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl"
          >
            <div
              onClick={() =>
                handleCategoryClick(category as keyof typeof faqData)
              }
              className={`p-4 flex items-center justify-between cursor-pointer transition ${
                openCategory === category
                  ? "border-b border-gray-700"
                  : "hover:bg-gray-800/30"
              }`}
            >
              <div className="flex items-center gap-4">
                <HelpCircle className="w-5 h-5 text-gray-400" />
                <span className="text-white font-semibold">{category}</span>
              </div>
              {openCategory === category ? (
                <ChevronUp className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </div>

            {openCategory === category && (
              <div className="px-4 pb-4 pt-2 space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition"
                  >
                    <div
                      onClick={() => handleQuestionClick(index)}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <p className="text-white font-medium">{faq.question}</p>
                      {openQuestion === index ? (
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    {openQuestion === index && (
                      <p className="mt-2 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button mở modal */}
      <div className="mt-10 border-t border-gray-800 pt-6">
        <button
          onClick={() => setShowSupportModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          <MessageCircle className="w-5 h-5" />
          Gửi yêu cầu hỗ trợ
        </button>
      </div>

      {/* Popup hỗ trợ */}
      {showSupportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-6 w-full max-w-lg relative">
            <button
              onClick={() => setShowSupportModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-4">
              Gửi yêu cầu hỗ trợ
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Đã gửi yêu cầu hỗ trợ!");
                setShowSupportModal(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-gray-300 text-sm block mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Nhập tên của bạn"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-1">
                  Email liên hệ
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-1">
                  Loại vấn đề
                </label>
                <select
                  required
                  className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="">Chọn loại vấn đề</option>
                  <option value="login">Tài khoản & Đăng nhập</option>
                  <option value="payment">Nạp tiền & Thanh toán</option>
                  <option value="install">Cài đặt & Kỹ thuật</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-1">
                  Mô tả chi tiết
                </label>
                <textarea
                  required
                  className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 min-h-[100px]"
                  placeholder="Hãy mô tả vấn đề bạn đang gặp phải..."
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowSupportModal(false)}
                  className="px-5 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
                >
                  Đóng
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                  Gửi yêu cầu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
