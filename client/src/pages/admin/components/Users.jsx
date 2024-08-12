import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { MdOutlineDelete } from "react-icons/md";
import Pagination from './Pagination';
import { deleteUsers, fetchUsers, updateUser } from '../../../redux/actions/authActions';
import toast, { Toaster } from 'react-hot-toast';
const Users = () => {
  const dispatch = useDispatch();
  const { users, totalPages, currentPage } = useSelector(state => state.auth);
  const [role, setRole] = useState({});

  useEffect(() => {
    dispatch(fetchUsers(currentPage, 9));
  }, [dispatch, currentPage]);
  
  const handlePageChange = (page) => {
    dispatch(fetchUsers(page, 9));
  };

  const handleDelete = async(id) => {
    const response = await dispatch(deleteUsers(id)); 
    if (response.status === 'success') {
      dispatch(fetchUsers(currentPage, ))
    }
  };

  const handleRoleChange = (id, newRole) => {

    setRole(prev => ({
      ...prev,
      [id]: newRole,
    }));
  };

  const handleUpdateUser = async (id, newRole) => {
    try {
      await dispatch(updateUser(id, newRole));
      await dispatch(fetchUsers(currentPage, 9));
    } catch (error) {
      console.error( error);
    }
  };

  return (
    <div>
       <Toaster />
      <div className='round-sm border border-gray-300 bg-white px-5 pt-6 pb-2.5'>
        <div className='max-w-full overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead>
              <tr className='bg-gray-100 text-left'>
                <th className='min-w-[20px] py-4 px-4 font-medium text-black items-center '>STT</th>
                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Name</th>
                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Email</th>
                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Phone</th>
                <th className='min-w-[40px] py-4 px-4 font-medium text-black items-center '>Role</th>
                <th className='min-w-[420px] py-4 px-4 font-medium text-black items-center  xl:pl-11'>Address</th>
                <th className='min-w-[220px] py-4 px-4 font-medium text-black items-center '>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user , index) => (
                <tr key={user._id}>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black'>{(currentPage - 1) * 9 + index + 1 }</p>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black'>{user.name}</p>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black'>{user.email}</p>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black'>{user.phone}</p>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <select 
                      value={role[user._id] || user.role} 
                      onChange={(e) => handleRoleChange(user._id, e.target.value)}
                      onBlur={(e) => handleUpdateUser(user._id, e.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4 pl-9'>
                    <p className='text-black'>
                      {user.address?.street && user.address?.district && user.address?.city 
                        ? `${user.address.street}, ${user.address.district}, ${user.address.city}` 
                        : 'Chưa cập nhật'}
                    </p>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black flex ml-10'>
                      <div className='bg-red-200 border rounded-[20px] p-2 mr-2'>
                        <MdOutlineDelete className='text-red-500' onClick={() => handleDelete(user._id)} />
                      </div>
                     
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default Users;
