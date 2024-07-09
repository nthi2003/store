import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { MdOutlineDelete } from "react-icons/md";
import Pagination  from './Pagination'
import {deleteUsers, fetchUsers} from '../../../redux/actions/authActions'
const Users = () => {
  const dispatch = useDispatch();
  const {users , totalUsers , totalPages , currentPage, loading, error } = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(fetchUsers(currentPage, 9))
  }, [dispatch, currentPage])
  const handlePageChange = (page) => {
     dispatch(fetchUsers(page, 9))
  }
  const handleDelete = (id) => {
    dispatch(deleteUsers(id)); 
};
  return (
    <div>
      <div className='round-sm  border border-gray-300 bg-white px-5 pt-6 pb-2.5'>
        <div className='max-w-full overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead>
              <tr className='bg-gray-100 text-left'>
                <th className='min-w-[20px] py-4 px-4 font-medium text-black items-center text-center '>ID</th>
                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center text-center '>Name</th>
                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center text-center '>Email</th>
                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center text-center '>Phone</th>
                <th className='min-w-[40px] py-4 px-4 font-medium text-black items-center text-center '>Admin</th>
                <th className='min-w-[420px] py-4 px-4 font-medium text-black items-center text-center xl:pl-11 '>Address</th>
                <th className='min-w-[220px] py-4 px-4 font-medium text-black items-center text-center '>Actions</th>
              </tr>

            </thead>
            <tbody>
            {users && users.map(user => (
                <tr key={user._id}>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black'>{user._id}</p>
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
                    <p className='text-black'>{user.isAdmin ? "Yes" : "No"}</p>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4 pl-9'>
                  <p className='text-black'>
                      {user.address?.street && user.address?.district && user.address?.city 
                        ? `${user.address.street}, ${user.address.district}, ${user.address.city}` 
                        : 'Chưa cập nhật'}
                    </p>      
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black flex ml-10 '>
                      <div className='bg-red-200 border rounded-[20px] p-2 mr-2'>
                      <MdOutlineDelete className='text-red-500  ' onClick={() => handleDelete(user._id)} />
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
  )
}

export default Users
