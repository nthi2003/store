import React, { useEffect } from 'react';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, fetchCategory } from '../../../redux/actions/categoryAction';
import { IoAddSharp } from "react-icons/io5";
import { MdOutlineDelete } from 'react-icons/md';

const Category = () => {
    const dispatch = useDispatch();
    const { categorys, totalPages, currentPage } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(fetchCategory(currentPage, 9));
      }, [dispatch, currentPage]);
    const handlePageChange = (page) => {
        dispatch(fetchCategory(page, 9));
    };
    const handleDelete = (id) => {
        dispatch(deleteCategory(id))
    }
    const handleSunmit = () => {
        console.log(1)
    }

    return (
        <div>
            <button className='text-white bg-black w-[70px] p-2 mt-2 mb-2 l-4 ml-[1500px] flex' onClick={() => handleSunmit()}>
                <IoAddSharp className='mt-1' />
                <span>Add</span>
            </button>
            <div className='round-sm border border-gray-300 bg-white px-5 pt-6 pb-2.5'>

                <div className='max-w-full overflow-x-auto'>

                    <table className='w-full table-auto'>
                        <thead>
                            <tr className='bg-gray-100 text-left'>
                                <th className='min-w-[20px] py-4 px-4 font-medium text-black items-center '>STT</th>
                                <th className='min-w-[30px] py-4 px-4 font-medium text-black items-center '>Name</th>
                                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Image</th>
                                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorys && categorys.map((category, index) => (
                                <tr key={category._id}>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>{(currentPage - 1) * 9 + index + 1}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>{category.name}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <img src={category.image} alt="" className='w-20 h-20' />
                                    </td>
                                    <td>
                                        <p className='text-black flex ml-10'>
                                            <div className='bg-red-200 border rounded-[20px] p-2 mr-2'>
                                                <MdOutlineDelete className='text-red-500' onClick={() => handleDelete(category._id)} />
                                            </div>

                                        </p></td>
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

export default Category;
