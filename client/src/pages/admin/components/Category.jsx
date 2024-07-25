import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, fetchCategory } from '../../../redux/actions/categoryAction';
import { IoAddSharp } from "react-icons/io5";
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';
import AddCategory from './StateComponent/AddCategory';
import UploadCategory from './StateComponent/UploadCategory';
import toast, { Toaster } from 'react-hot-toast';

const Category = () => {
    const dispatch = useDispatch();
    const { categorys, totalPages, currentPage } = useSelector(state => state.category);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editCategoryId, setEditCategoryId] = useState(null); 

    useEffect(() => {
        dispatch(fetchCategory(currentPage, 5));
    }, [dispatch, currentPage]);

    const handlePageChange = (currentPage) => {
        dispatch(fetchCategory(currentPage, 5));
    };

    const handleDelete = async (id) => {
        const response = await dispatch(deleteCategory(id));
        if (response.status === 'success') {
            dispatch(fetchCategory(currentPage, 5));
            
        }
    };

    const handleShowModel = () => {
        setShow(true);
    };

    const handleCloseModel = () => {
        setShow(false);
    };

    const handleCloseModelEdit = () => {
        setShowEdit(false);
    };

    const handleEditModel = (id) => {
        setEditCategoryId(id);
        setShowEdit(true);
    };

    return (
        <div>
            <Toaster />
            <button className='text-white bg-black w-[70px] p-2 mt-2 mb-2 l-4 ml-[1500px] flex' onClick={handleShowModel}>
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
                                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorys && categorys.map((category, index) => (
                                <tr key={category._id}>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>{(currentPage - 1) * 5 + index + 1}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>{category?.name}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <img src={category.image?.url} alt="" className='w-20 h-20' />
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <div className='text-black flex'>
                                            <div className='bg-red-200 border rounded-[20px] p-2 mr-2'>
                                                <MdOutlineDelete className='text-red-500' onClick={() => handleDelete(category._id)} />
                                            </div>
                                            <div className='bg-blue-200 border rounded-[20px] p-2 mr-2'>
                                                <MdOutlineEdit className='text-blue-500' onClick={() => handleEditModel(category._id)} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            </div>
            <AddCategory show={show} onClose={handleCloseModel} />
            <UploadCategory showEdit={showEdit} onClose={handleCloseModelEdit} categoryId={editCategoryId} />
        </div>
    );
};

export default Category;
