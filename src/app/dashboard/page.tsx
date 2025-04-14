'use client';

import { useRouter } from 'next/navigation';

const UserDashboard = ({ users }) => {
    console.log('users', users);
  const router = useRouter();

  return (
    <div className="container-fluid mx-auto bg p-4">
      <div className="flex items-center gap-8 mb-4 bg-green-200 p-4 rounded text-green-900 cursor-pointer">
        <div onClick={() => router.push('/dashboard/home')}>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <table className="table-auto w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">User ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Address</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {users?.map((user) => (
              <tr key={user.id}>
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.firstName} {user.lastName}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.phone}</td>
                <td className="p-2">{user.address?.address || 'N/A'}</td>
                <td className="p-2">
                  <button className="bg-green-500 text-white p-2 rounded"
                  onClick={() => router.push(`/dashboard/user/${user.id}`)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
