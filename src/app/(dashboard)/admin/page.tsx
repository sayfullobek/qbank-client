"use client";

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col space-y-8">
      {/* Statistic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Users */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Users</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">+5%</span>
          </div>
          <div className="mt-4 text-3xl font-bold text-gray-900">1,245</div>
        </div>
        {/* Revenue */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Revenue</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">+12%</span>
          </div>
          <div className="mt-4 text-3xl font-bold text-gray-900">$34,500</div>
        </div>
        {/* Sales */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Sales</span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">+8%</span>
          </div>
          <div className="mt-4 text-3xl font-bold text-gray-900">2,390</div>
        </div>
        {/* Active */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Active</span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">-2%</span>
          </div>
          <div className="mt-4 text-3xl font-bold text-gray-900">1,024</div>
        </div>
      </div>

      {/* Chart Area (placeholder) */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
          <span className="text-sm text-gray-500">Last 30 days</span>
        </div>
        <div className="h-48 flex items-center justify-center text-gray-400">
          {/* You can replace this with a real chart component */}
          <span>Chart Placeholder</span>
        </div>
      </div>

      {/* Recent Activity Table (placeholder) */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <span className="text-sm text-gray-500">Today</span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap">Created an account</td>
                <td className="px-6 py-4 whitespace-nowrap">09:15</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                <td className="px-6 py-4 whitespace-nowrap">Upgraded plan</td>
                <td className="px-6 py-4 whitespace-nowrap">10:02</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Alex Lee</td>
                <td className="px-6 py-4 whitespace-nowrap">Added a payment method</td>
                <td className="px-6 py-4 whitespace-nowrap">11:23</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}