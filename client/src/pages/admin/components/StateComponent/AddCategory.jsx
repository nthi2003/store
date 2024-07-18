import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
const AddCategory = ({ show, onClose }) => {
    if (!show) return;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <button className="absolute top-2 right-2" onClick={onClose}>
                <AiOutlineCloseCircle className='text-white w-10 h-10' />
            </button>
            <div className="bg-white p-5 w-[700px] h-[800px] ">
                <div className='text-[50px] text-center '>
                    <span className='text-[50px] '>Add category</span>
                </div>

                <div>
                    <span>Name</span>
                    <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' placeholder='Tên loại sản phẩm ...' />
                </div>
                <div className=' items-center justify-center w-full mt-9'>
                    <span className=''>Image</span>
                    <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed'>
                        <div>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className='hidden'  name="image" />
                    </label>

                </div>



            </div>
        </div>
    );
};

export default AddCategory;
