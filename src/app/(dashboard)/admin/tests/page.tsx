"use client";

const tests = [
  { name: "Reading Test", category: "Reading", status: "Active" },
  { name: "Listening Test", category: "Listening", status: "Inactive" },
  { name: "Writing Test", category: "Writing", status: "Active" },
  { name: "Speaking Test", category: "Speaking", status: "Active" },
];

export default function TestsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tests</h1>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold text-sm">+ New Test</button>
      </div>
      <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tests.map((test, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{test.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{test.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${test.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-500'}`}>{test.status}</span>
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