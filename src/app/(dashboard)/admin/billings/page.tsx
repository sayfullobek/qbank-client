"use client";

const billings = [
  { invoice: "INV-001", client: "John Doe", amount: "$120.00", status: "Paid", date: "2024-06-01" },
  { invoice: "INV-002", client: "Jane Smith", amount: "$80.00", status: "Pending", date: "2024-06-02" },
  { invoice: "INV-003", client: "Alex Lee", amount: "$200.00", status: "Paid", date: "2024-06-03" },
  { invoice: "INV-004", client: "Emily Brown", amount: "$50.00", status: "Overdue", date: "2024-06-04" },
];

export default function BillingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Billings</h1>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg font-semibold text-sm">+ New Invoice</button>
      </div>
      <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {billings.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{item.invoice}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{item.client}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{item.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Paid' ? 'bg-green-100 text-green-800' : item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>{item.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button className="text-cyan-600 hover:underline text-sm">View</button>
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