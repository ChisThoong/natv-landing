"use client";
import { useState } from "react";

export default function ProfileAccount() {
    const [cccd, setCccd] = useState("");
  const [error, setError] = useState("");

  const validateCccd = (value: string) => {
    // Kiểm tra: chỉ chấp nhận ký tự số
    if (!/^\d*$/.test(value)) {
      setError("Nhập số CCCD hợp lệ!");
      return false;
    }

    // CCCD hiện nay có độ dài 12 số, CMND cũ có 9 số
    // if (value.length > 0 && value.length !== 12) {
    //   setError("Nhập số CCCD hợp lệ!");
    //   return false;
    // }

    setError(""); // hợp lệ
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCccd(value);
    validateCccd(value);
  };
  return (
    <div className="space-y-10">
      {/* THÔNG TIN CÁ NHÂN */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">THÔNG TIN CÁ NHÂN</h3>
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 space-y-5">
          {/* Họ tên */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <label className="text-white md:text-right">Họ tên:</label>
            <input
              type="text"
              placeholder="Mời nhập họ tên"
              className="col-span-3 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
            />
          </div>

          {/* Giới tính */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <label className="text-white md:text-right">Giới tính:</label>
            <div className="col-span-3 flex gap-4">
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="gender" value="male" defaultChecked className="w-4 h-4" />
                Nam
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="gender" value="female" className="w-4 h-4" />
                Nữ
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="gender" value="other" className="w-4 h-4" />
                Không xác định
              </label>
            </div>
          </div>

          {/* Ngày sinh */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <label className="text-white md:text-right">
                <span className="text-red-500">*</span> Ngày cấp:
            </label>
            <div className="col-span-3 flex gap-2">
                {/* Select ngày */}
                <select
                className="flex-1 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
                defaultValue=""
                >
                <option value="" disabled>
                    Ngày
                </option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>
                    {day}
                    </option>
                ))}
                </select>

                {/* Select tháng */}
                <select
                className="flex-1 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
                defaultValue=""
                >
                <option value="" disabled>
                    Tháng
                </option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month}>
                    {month}
                    </option>
                ))}
                </select>

                {/* Select năm */}
                <select
                className="flex-1 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
                defaultValue=""
                >
                <option value="" disabled>
                    Năm
                </option>
                {Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, i) => new Date().getFullYear() - i).map(
                    (year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                    )
                )}
                </select>
            </div>
            </div>

          {/* Địa chỉ */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <label className="text-white md:text-right">Địa chỉ:</label>
            <input
              type="text"
              placeholder="Mời nhập địa chỉ"
              className="col-span-3 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
            />
          </div>
        </div>
      </section>

      {/* THÔNG TIN BẢO MẬT */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">THÔNG TIN BẢO MẬT</h3>
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 space-y-5">
          {/* Số CMND */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
            <label className="text-white md:text-right mt-2">
                <span className="text-red-500">*</span> Số CCCD:
            </label>
            <div className="col-span-3">
                <input
                type="text"
                value={cccd}
                onChange={handleChange}
                placeholder="Mời nhập số Căn cước công dân"
                className={`w-full bg-gray-800 border ${
                    error ? "border-red-500" : "border-gray-700"
                } text-white rounded px-4 py-2 focus:border-white outline-none transition-colors`}
                // maxLength={12}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            </div>

          {/* Ngày cấp */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <label className="text-white md:text-right">
                <span className="text-red-500">*</span> Ngày cấp:
            </label>
            <div className="col-span-3 flex gap-2">
                {/* Select ngày */}
                <select
                className="flex-1 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
                defaultValue=""
                >
                <option value="" disabled>
                    Ngày
                </option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>
                    {day}
                    </option>
                ))}
                </select>

                {/* Select tháng */}
                <select
                className="flex-1 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
                defaultValue=""
                >
                <option value="" disabled>
                    Tháng
                </option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month}>
                    {month}
                    </option>
                ))}
                </select>

                {/* Select năm */}
                <select
                className="flex-1 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
                defaultValue=""
                >
                <option value="" disabled>
                    Năm
                </option>
                {Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, i) => new Date().getFullYear() - i).map(
                    (year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                    )
                )}
                </select>
            </div>
            </div>


          {/* Nơi cấp */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <label className="text-white md:text-right">
              <span className="text-red-500">*</span> Nơi cấp:
            </label>
            <input
              type="text"
              placeholder="Mời nhập nơi cấp"
              className="col-span-3 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
            />
          </div>

          {/* SĐT bảo mật */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <label className="text-white md:text-right">
              <span className="text-red-500">*</span> SĐT bảo mật:
            </label>
            <div className="col-span-3 flex gap-2">
              <input
                type="tel"
                placeholder="Mời nhập số điện thoại"
                className="flex-1 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
              />
              <button className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 transition">
                Xác thực
              </button>
            </div>
          </div>

          {/* Email bảo mật */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <label className="text-white md:text-right">
              <span className="text-red-500">*</span> Email bảo mật:
            </label>
            <div className="col-span-3 flex gap-2">
              <input
                type="email"
                placeholder="Mời nhập email"
                className="flex-1 bg-gray-800 border border-gray-700 text-white rounded px-4 py-2 focus:border-white outline-none"
              />
              <button className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 transition">
                Xác thực
              </button>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button className="bg-white text-black font-bold px-8 py-3 rounded hover:bg-gray-200 transition">
              Cập nhật thông tin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
