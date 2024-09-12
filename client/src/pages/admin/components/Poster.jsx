import React from 'react'
import { IoMdClose } from 'react-icons/io'

const Poster = () => {
    return (
       <div className=' bg-white p-5 w-[100%] h-[100%] overflow-hidden '>
         <div className='overflow-y-auto max-h-[30%] '>
            <h1 className=' text-center text-[40px] font-[600]'>Upload Poster</h1>
            <div className='ml-[200px]'>
                <span>PosterHeader</span>
                <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed'>
                    <div>
                        <p className="mb-2 text-sm text-red-500 ">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-red-500 ">SVG, PNG, JPG or GIF (MAX. 1200x500px)</p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className='hidden'
                        name="image"
                        required
                    />
                </label>
            </div>

            <div className='ml-[200px]'>
                <span>PorterSlick</span>
                <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed'>
                    <div>
                        <p className="mb-2 text-sm text-red-500 ">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-red-500 ">SVG, PNG, JPG or GIF (MAX. 1200x500px)</p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className='hidden'
                        name="image"
                        required
                    />
                </label>
            </div>
           
            <div className='ml-[200px]'>
                <span>PorterLeftSlick</span>
                <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed'>
                    <div>
                        <p className="mb-2 text-sm text-red-500 ">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-red-500 ">SVG, PNG, JPG or GIF (MAX. 1200x500px)</p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className='hidden'
                        name="image"
                        required
                    />
                </label>
            </div>
            <div className='ml-[200px]'>
                <span>PorterBottomSlick</span>
                <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed'>
                    <div>
                        <p className="mb-2 text-sm text-red-500 ">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-red-500 ">SVG, PNG, JPG or GIF (MAX. 1200x500px)</p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className='hidden'
                        name="image"
                        required
                    />
                </label>
            </div>

            <div className='ml-[200px]'>
                <span>PorterBottom</span>
                <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed'>
                    <div>
                        <p className="mb-2 text-sm text-red-500 ">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-red-500 ">SVG, PNG, JPG or GIF (MAX. 1200x500px)</p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        className='hidden'
                        name="image"
                        required
                    />
                </label>
            </div>
            
        </div>
       </div>
    )
}

export default Poster
