"use client";

import { useColorModeValue } from "@chakra-ui/react";

export default function AdminDashboardPage() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <div className="flex flex-col space-y-8">
      {/* Statistic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Users */}
        <div className="rounded-lg shadow p-6 flex flex-col" style={{ backgroundColor: cardBg }}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Users</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">+5%</span>
          </div>
          <div className="mt-4 text-3xl font-bold" style={{ color: textColor }}>1,245</div>
        </div>
        {/* Revenue */}
        <div className="rounded-lg shadow p-6 flex flex-col" style={{ backgroundColor: cardBg }}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Revenue</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">+12%</span>
          </div>
          <div className="mt-4 text-3xl font-bold" style={{ color: textColor }}>$34,500</div>
        </div>
        {/* Sales */}
        <div className="rounded-lg shadow p-6 flex flex-col" style={{ backgroundColor: cardBg }}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Sales</span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">+8%</span>
          </div>
          <div className="mt-4 text-3xl font-bold" style={{ color: textColor }}>2,390</div>
        </div>
        {/* Active */}
        <div className="rounded-lg shadow p-6 flex flex-col" style={{ backgroundColor: cardBg }}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Active</span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">-2%</span>
          </div>
          <div className="mt-4 text-3xl font-bold" style={{ color: textColor }}>1,024</div>
        </div>
      </div>

      {/* Chart Area (placeholder) */}
      <div className="rounded-lg shadow p-6" style={{ backgroundColor: cardBg }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: textColor }}>Overview</h2>
          <span className="text-sm text-gray-500">Last 30 days</span>
        </div>
        <div className="h-48 flex items-center justify-center text-gray-400">
          {/* You can replace this with a real chart component */}
          <span>Chart Placeholder</span>
        </div>
      </div>

      {/* Recent Activity Table (placeholder) */}
      <div className="rounded-lg shadow p-6" style={{ backgroundColor: cardBg }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: textColor }}>Recent Activity</h2>
          <span className="text-sm text-gray-500">Today</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y" style={{ borderColor: borderColor }}>
            <thead className="bg-gray-50" style={{ backgroundColor: useColorModeValue("gray.50", "gray.700") }}>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: borderColor }}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap" style={{ color: textColor }}>John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap" style={{ color: textColor }}>Created an account</td>
                <td className="px-6 py-4 whitespace-nowrap" style={{ color: textColor }}>09:15</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap" style={{ color: textColor }}>Jane Smith</td>
                <td className="px-6 py-4 whitespace-nowrap" style={{ color: textColor }}>Upgraded plan</td>
                <td className="px-6 py-4 whitespace-nowrap" style={{ color: textColor }}>10:02</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap" style={{ color: textColor }}>Alex Lee</td>
                <td className="px-6 py-4 whitespace-nowrap" style={{ color: textColor }}>Added a payment method</td>
                <td className="px-6 py-4 whitespace-nowrap" style={{ color: textColor }}>11:23</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}