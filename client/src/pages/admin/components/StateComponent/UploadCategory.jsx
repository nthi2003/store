import React, { useState, useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory, deleteImage, fetchCategory } from '../../../../redux/actions/categoryAction';
import { IoMdClose } from 'react-icons/io';
import { fetchAllCategorys } from '../../../../redux/reducers/categorySlice';
import { fetchAllProducts } from '../../../../redux/reducers/productSlice';

const UploadCategory = ({ showEdit, onClose, categoryId }) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.categorys.find(cat => cat._id === categoryId));
    const { currentPage } = useSelector(state => state.category);
    const [formData, setFormData] = useState({
        name: '',
        image: null
    });
    const [previewImage, setPreviewImage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    console.log(showEdit)
    useEffect(() => {
        if (category) {
            setFormData({
                name: category.name,
                image: category.image
            });
            setPreviewImage(category.image.url || '');
        }
    }, [category]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            const file = files[0];
            if (file) {
                const fileUrl = URL.createObjectURL(file);
                setSelectedImage(file);
                setPreviewImage(fileUrl);
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleRemoveImage =  () => {
   
        if (categoryId) {
             dispatch(deleteImage(categoryId));
          
            setPreviewImage('');
            setFormData({ ...formData, image: null });
            setSelectedImage(null);
          
        }
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        const { name } = formData;

        if (categoryId) {
           await dispatch(updateCategory(categoryId, name, selectedImage));
           dispatch(fetchCategory(currentPage, 5));

            
          
        }
        
    };

    if (!showEdit) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <button className="absolute top-2 right-2" onClick={onClose}>
                <AiOutlineCloseCircle className='text-white w-10 h-10' />
            </button>
            <div className='bg-white p-5 w-[700px] h-[800px]'>
                <div className='text-[50px] text-center'>
                     <span className='text-[50px]'>Update Category</span>
                </div>
                <div>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='items-center justify-center w-full mt-9'>
                            <span className=''>Image</span>
                            <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed'>
                                <div>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className='hidden'
                                    onChange={handleChange}
                                    name="image"
                                />
                            </label>
                            {previewImage && (
                                <div className='w-40 relative h-50'>
                                    <img src={previewImage} alt="Preview" className='border rounded w-full h-full object-cover mt-2' />
                                    <button
                                        onClick={handleRemoveImage}
                                        className='ml-4 bg-red-200 rounded-[20px] mt-1 text-white py-2 px-2 absolute top-1 right-1'
                                    >
                                        <IoMdClose className='text-red-600' />
                                    </button>
                                </div>
                            )}
                        </div>
                        <button type="submit" className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadCategory;
