"use client"
import { User, Mail, Calendar, Trash2 } from "lucide-react"

const DataTable = ({ userData, onDeleteUser }) => {
  if (!userData || userData.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <User className="mr-2 w-5 h-5" />
          Registered Users
        </h2>
        <div className="text-center py-8">
          <User className="mx-auto w-12 h-12 text-gray-400 mb-4" />
          <p className="text-gray-500">No users registered yet.</p>
          <p className="text-sm text-gray-400 mt-1">Users will appear here after successful registration.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <User className="mr-2 w-5 h-5" />
          Registered Users ({userData.length})
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <User className="mr-1 w-4 h-4" />
                  Name
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <Mail className="mr-1 w-4 h-4" />
                  email
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <Calendar className="mr-1 w-4 h-4" />
                  Registered At
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userData.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">
                          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                        </span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.registeredAt ? new Date(user.registeredAt).toLocaleDateString() : "Just now"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {onDeleteUser && (
                    <button
                      onClick={() => onDeleteUser(index)}
                      className="text-red-600 hover:text-red-900 transition-colors flex items-center"
                      title="Delete user"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Total registered users: <span className="font-medium">{userData.length}</span>
        </p>
      </div>
    </div>
  );
};

export default DataTable;