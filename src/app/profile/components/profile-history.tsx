"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Clock } from "lucide-react";

export default function ProfileHistory() {
  const [transactions] = useState([
    {
      id: "TXN123456",
      amount: 500000,
      method: "Momo",
      date: "2025-10-10 14:23",
      status: "success",
    },
    {
      id: "TXN123457",
      amount: 200000,
      method: "ZaloPay",
      date: "2025-10-11 09:15",
      status: "pending",
    },
    {
      id: "TXN123458",
      amount: 1000000,
      method: "ATM Bank",
      date: "2025-10-12 19:42",
      status: "failed",
    },
    {
      id: "TXN123459",
      amount: 300000,
      method: "VNPay",
      date: "2025-10-13 21:05",
      status: "success",
    },
  ]);

  const getStatus = (status: string) => {
    switch (status) {
      case "success":
        return (
          <span className="flex items-center text-green-400">
            <CheckCircle size={16} className="mr-1" /> Thành công
          </span>
        );
      case "failed":
        return (
          <span className="flex items-center text-red-400">
            <XCircle size={16} className="mr-1" /> Thất bại
          </span>
        );
      case "pending":
        return (
          <span className="flex items-center text-yellow-400">
            <Clock size={16} className="mr-1" /> Đang xử lý
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-full">
      <h3 className="text-2xl font-bold text-white mb-6">LỊCH SỬ NẠP TIỀN</h3>

      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
        {transactions.length === 0 ? (
          <p className="text-gray-400 text-center py-8">Chưa có lịch sử giao dịch</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300">
              <thead className="text-xs uppercase bg-gray-800/50 text-gray-400">
                <tr>
                  <th className="px-4 py-3">Mã giao dịch</th>
                  <th className="px-4 py-3">Số tiền</th>
                  <th className="px-4 py-3">Phương thức</th>
                  <th className="px-4 py-3">Thời gian</th>
                  <th className="px-4 py-3">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className="border-b border-gray-800 hover:bg-gray-800/40 transition-colors"
                  >
                    <td className="px-4 py-3 font-mono">{tx.id}</td>
                    <td className="px-4 py-3 font-semibold text-white">
                      {tx.amount.toLocaleString("vi-VN")}₫
                    </td>
                    <td className="px-4 py-3">{tx.method}</td>
                    <td className="px-4 py-3">{tx.date}</td>
                    <td className="px-4 py-3">{getStatus(tx.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
