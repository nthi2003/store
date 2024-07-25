import React from 'react'
import Pagination from './Pagination'
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md'
import { Toaster } from 'react-hot-toast'
import { IoAddSharp } from 'react-icons/io5'

const Product = () => {
  return (
    <div>
            <Toaster />
            <button className='text-white bg-black w-[70px] p-2 mt-2 mb-2 l-4 ml-[1500px] flex'>
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
                                <th className='min-w-[30px] py-4 px-4 font-medium text-black items-center '>Price</th>
                                <th className='min-w-[30px] py-4 px-4 font-medium text-black items-center '>Specifications</th>
                                <th className='min-w-[30px] py-4 px-4 font-medium text-black items-center '>Configuration</th>
                                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {categorys && categorys.map((category, index) => ( */}
                                <tr >
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>1</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>Laptop gaming ASUS ROG Strix G16 G614JI N4125W</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <img src='https://product.hstatic.net/200000722513/product/ava_1141b8e21a7f4d91ab18c0725bc56d5e_grande.png' alt="" className='w-20 h-20' />
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>49.990.000₫</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>
                                          <div>
                                            <div className='flex '>
                                              <span className='font-bold'>CPU</span>
                                              <p>13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M  Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>RAM</span>
                                              <p>13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M  Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>Card đồ họa</span>
                                              <p>13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M  Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>Màn hình</span>
                                              <p>13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M  Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>Cổng giao tiếp</span>
                                              <p>13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M  Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)</p>
                                              </div>
                                          </div>
                                        </p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>
                                          <div>
                                            <div className='flex '>
                                              <span className='font-bold'>CPU</span>
                                              <p>13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M  Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>RAM</span>
                                              <p>13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M  Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>Card đồ họa</span>
                                              <p>13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M  Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>Màn hình</span>
                                              <p>13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M  Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>Cổng giao tiếp</span>
                                              <p>13th Gen Intel® Core™ i7-13650HX Processor 2.6 GHz 24M  Cache, up to 4.9 GHz, 14 cores: 6 P-cores and 8 E-cores)</p>
                                              </div>
                                          </div>
                                        </p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <div className='text-black flex'>
                                            <div className='bg-red-200 border rounded-[20px] p-2 mr-2'>
                                                <MdOutlineDelete className='text-red-500'  />
                                            </div>
                                            <div className='bg-blue-200 border rounded-[20px] p-2 mr-2'>
                                                <MdOutlineEdit className='text-blue-500' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            {/* ))} */}
                        </tbody>
                    </table>
                    <Pagination    />
                </div>
            </div>
           
           
        </div>
  )
}

export default Product
