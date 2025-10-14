"use client";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
    over18: false,
  });

  const { t } = useLanguage();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      alert(t("register.fillAllFields") || "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert(t("register.passwordNotMatch") || "Mật khẩu không khớp");
      return;
    }

    if (!formData.agree || !formData.over18) {
      alert(t("register.mustAgree") || "Bạn cần đồng ý với điều khoản và xác nhận đủ 18 tuổi");
      return;
    }

    //  Giả lập đăng ký thành công → chuyển đến /login
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12 relative">
        <div
            onClick={() => router.push("/")}
            className="absolute top-6 container left-20 z-20 cursor-pointer flex items-center gap-2 group"
        >
            <img
            src="/images/logo.png"
            alt="NATV Logo"
            className="w-28 object-contain transition-transform group-hover:scale-110"
            />
        </div>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>

      {/* Register Container */}
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            {t("register.title")}
          </h1>
          <p className="text-gray-400">{t("register.subtitle")}</p>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-white font-bold mb-2">{t("register.username")}</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  placeholder={t("register.usernamePlaceholder")}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-bold mb-2">{t("register.email")}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t("register.emailPlaceholder")}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white font-bold mb-2">{t("register.password")}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder={t("register.passwordPlaceholder")}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg pl-10 pr-12 py-3 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-white font-bold mb-2">{t("register.confirmPassword")}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder={t("register.confirmPasswordPlaceholder")}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg pl-10 pr-12 py-3 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="space-y-3">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="w-4 h-4 mt-1 rounded border-gray-700 bg-gray-800"
                />
                <span className="text-gray-400 text-sm">
                  {t("register.agreeWith")}{" "}
                  <a
                    href="https://nightvalley.gg/terms"
                    target="_blank"
                    className="text-white hover:underline"
                  >
                    {t("register.terms")}
                  </a>{" "}
                  {t("register.and")}{" "}
                  <a
                    href="https://nightvalley.gg/privacy-policy"
                    target="_blank"
                    className="text-white hover:underline"
                  >
                    {t("register.privacy")}
                  </a>
                </span>
              </label>

              {/* Over 18 */}
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.over18}
                  onChange={(e) => setFormData({ ...formData, over18: e.target.checked })}
                  className="w-4 h-4 mt-1 rounded border-gray-700 bg-gray-800"
                />
                <span className="text-gray-400 text-sm">
                  {t("register.over18") || "Tôi xác nhận đã đủ 18 tuổi"}
                </span>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              {t("register.registerButton")}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900 text-gray-400">{t("register.or")}</span>
              </div>
            </div>

            {/* Login link */}
            <div className="text-center">
              <span className="text-gray-400">{t("register.haveAccount")} </span>
              <a href="/login" className="text-white font-bold hover:underline">
                {t("register.loginNow")}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
