"use client";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useLanguage();
  const router = useRouter();

  //  Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert(t("login.fillAllFields") || "Please fill in all fields");
      return;
    }
    //  Fake login success, redirect to profile
    router.push("/profile");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative">
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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
       
      
      <div className="relative z-10 w-full max-w-md">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            {t("login.title") || "ĐĂNG NHẬP"}
          </h1>
          <p className="text-gray-400">{t("login.subtitle")}</p>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-white font-bold mb-2">
                {t("login.email")}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("login.emailPlaceholder")}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white font-bold mb-2">
                {t("login.password")}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("login.passwordPlaceholder")}
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg pl-10 pr-12 py-3 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-700 bg-gray-800"
                />
                <span className="text-gray-400 text-sm">
                  {t("login.rememberMe")}
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {t("login.forgotPassword")}
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              {t("login.loginButton")}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900 text-gray-400">
                  {t("login.or")}
                </span>
              </div>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <span className="text-gray-400">{t("login.noAccount")} </span>
              <a
                href="/register"
                className="text-white font-bold hover:underline"
              >
                {t("login.registerNow")}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
