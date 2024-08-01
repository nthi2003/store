import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, fetchCategory } from "../../../../redux/actions/categoryAction"; // Import fetchCategory action

const AddCategory = ({ show, onClose }) => {
    const [name, setName] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.category);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setSelectedImage(file);
            setImagePreview(fileUrl);
        }
    };

    const handleRemoveImage = () => {
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }
        setSelectedImage(null);
        setImagePreview(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !selectedImage) {
            alert('Điền thưông tin còn thiếu.');
            return;
        }
        const categoryData = {
            name,
            image: selectedImage
        };
        try {
            await dispatch(createCategory(categoryData)); 
            dispatch(fetchCategory(1, 5)); 
            onClose();
            setName('')
            setSelectedImage(null); 
            setImagePreview(null);
        } catch (error) {
        //    dispatch(setError(error));
        }

        
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <button className="absolute top-2 right-2" onClick={onClose}>
                <AiOutlineCloseCircle className='text-white w-10 h-10' />
            </button>
            <div className="bg-white p-5 w-[700px] h-[800px] ">
                <div className='text-[50px] text-center '>
                    <span className='text-[50px] '>Add Category</span>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <span>Name</span>
                        <input 
                            type="text" 
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
                            placeholder='Tên loại sản phẩm ...'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            
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
                                onChange={handleFileChange}  
                                name="image"
                                required
                            />
                        </label>
                        {imagePreview && (
                            <div className='mt-4 relative w-40 h-40 '>
                                <img 
                                    src={imagePreview} 
                                    alt="Selected preview" 
                                    className='border rounded w-full h-full object-cover'
                                />
                                <button 
                                    onClick={handleRemoveImage} 
                                    className='ml-4 bg-red-200 rounded-[20px] mt-1 text-white py-2 px-2 absolute top-1 right-1'
                                >
                                    <IoMdClose className='text-red-600'/>
                                </button>
                            </div>
                        )}
                    </div>
                    <button 
                        type="submit" 
                        className='bg-black text-white p-2 mt-10 w-full' 
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : 'Add'}
                    </button>
                 
                </form>
            </div>
        </div>
    );
};

export default AddCategory;