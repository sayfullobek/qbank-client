"use client";

const users = [
  { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
  { name: "Alex Lee", email: "alex@example.com", role: "Editor", status: "Active" },
  { name: "Emily Brown", email: "emily@example.com", role: "User", status: "Active" },
];

export default function UsersPage() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search users..."
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold text-sm">+ Add User</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>{user.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button className="text-cyan-600 hover:underline text-sm">Edit</button>
                  <button className="text-red-600 hover:underline text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}