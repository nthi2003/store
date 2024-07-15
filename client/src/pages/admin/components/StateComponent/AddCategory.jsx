import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
const AddCategory = ({ show, onClose }) => {
    if (!show) return ;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <button className="absolute top-2 right-2" onClick={onClose}>
                   <AiOutlineCloseCircle className='text-white w-10 h-10'  />
                </button>
            <div className="bg-white p-5 w-[700px] h-[600px] ">
                
                 
            </div>
        </div>
    );
};

export default AddCategory;
