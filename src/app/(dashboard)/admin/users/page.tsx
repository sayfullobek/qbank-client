"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkToken } from "../../../../../lib/checkToken";

import { Input, Button } from "@chakra-ui/react";

const users = [
  { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
  { name: "Alex Lee", email: "alex@example.com", role: "Editor", status: "Active" },
  { name: "Emily Brown", email: "emily@example.com", role: "User", status: "Active" },
];

export default function UsersPage() {
  const router = useRouter();
  useEffect(() => { checkToken(router); }, [router]);

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <div className="flex gap-2">
          <Input
            placeholder="Search users..."
            size="sm"
            width="auto"
            minWidth="200px"
            borderColor="gray.300"
            _focus={{
              borderColor: "cyan.500",
              boxShadow: "0 0 0 1px var(--chakra-colors-cyan-500)"
            }}
          />
          <Button
            colorScheme="cyan"
            size="sm"
            leftIcon={<span>+</span>}
          >
            Add User
          </Button>
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
                  <Button
                    variant="ghost"
                    colorScheme="cyan"
                    size="sm"
                    fontSize="sm"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    colorScheme="red"
                    size="sm"
                    fontSize="sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}