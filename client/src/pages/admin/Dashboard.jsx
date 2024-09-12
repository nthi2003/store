import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';
import { IoHandLeftOutline } from 'react-icons/io5';
import { MdOutlineDashboard } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import Content from './components/Content';
import Product from './components/Product';
import Users from './components/Users';
import Category from './components/Category';
import { AiTwotoneTag } from "react-icons/ai";
import Poster from './components/Poster';
import { IoMdImages } from "react-icons/io";
const Dashboard = () => {
  const [active , setActive] = useState('dashboard')
  const contentMap = {
    dashboard : <Content/>,
    products: <Product/>,
    Users: <Users/>,
    Category : <Category/>,
    Poster : <Poster/>

  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleSearch = () => { }
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const user = useSelector(state => state.auth.user);
  return (
    <div>
      <div className='w-full flex  '>
        <div className='w-[15%] bg-[#31363F] p-2 '>
          <h1 className='ml-[30px] text-white '> 
           <div className='flex mt-[20px]'>
           <HiComputerDesktop className='text-[20px]'/> 
           <span>Store</span>
           </div>
            </h1>
          <span className='text-[#F6F5F2] ml-[30px] opacity-40 text-sm'>Sales Management Dashboard</span>

        </div>
        <div className='w-[85%] flex border-b border-slate-200 shadow-sm '>
          <div className='mt-[30px] mb-[20px]'>
            <span className=' ml-4 '>Welcome Back, {user.name}</span>
          </div>
          <div className='flex'>
            <div className='border flex mt-[20px] mb-[20px] ml-[600px]'>
              <div className='rounded-md'>
                <input className='pt-2 pb-2  pl-[15px] outline-none' type="text" />
              </div>
              <div className='pt-3 pb-1 px-4 bg-white h-10'>
                <FaSearch className='' onClick={handleSearch} />
              </div>
            </div>
          </div>
          <div>
            <div className='relative inline-block text-left bg-black mt-[20px] ml-[20px] '>
              <div className='flex'>
                <FiUser className='text-white w-8 h-8 mt-2 ml-2 ' />
                <button className='  items-center justify-between mt-1 w-full  text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 group' onClick={toggleDropdown}>
                  <span className='text-white'>
                    <p className='text-xs'>Xin chào</p>
                  </span>
                  <p className='text-white font-sans text-xs font-bold'>{user.name}</p>
                </button>
              </div>
              <div className={`absolute left-0 mt-2 w-48 bg-white border border-gray-300 ${isOpen ? 'block' : 'hidden'}`}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <span className='flex'>
                    <IoHandLeftOutline className='mt-[3px] mr-[3px] font-bold' />
                    <span className='flex'>
                      <a href="/profile">
                        <p className='font-bold'>Xin chào,{user.name}</p>

                      </a>
                    </span>
                  </span>
                </a>


                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                  <div className='flex'>
                    <FaHome className='mt-[3px] mr-[3px] font-bold' />
                    <span>Home</span>
                  </div>
                </a>


                <button className='block px-4 py-2  text-sm text-gray-700 hover:bg-gray-100 w-[190px]' onClick={handleLogout}>
                  <div className='flex'>
                    <IoIosLogOut className='mt-[3px] mr-[3px] font-bold' />
                    <span>Đăng xuất</span>
                  </div>
                </button>
              </div>
            </div>
          </div>


        </div>


      </div>
      <div className='flex'>
        <div className='w-[15%] bg-[#31363F] h-[863px] '>
          <div className={` p-4 flex items-center cursor-pointer ${active === 'dashboard' ? 'bg-gray-200 text-black' : 'text-white'}`} onClick={() => setActive('dashboard')} >
            <MdOutlineDashboard className=' mr-2'/>
            <span>Doashboard</span>
          </div>
          <div className={` p-4 flex items-center cursor-pointer ${active === 'products' ? 'bg-gray-200 text-black' : 'text-white'}`} onClick={() => setActive('products')}>
            <BsBoxSeamFill className=' mr-2'/>
            <span>Products </span>
          </div>
          <div className={` p-4 flex items-center cursor-pointer ${active === 'Users' ? 'bg-gray-200 text-black' : 'text-white'}`} onClick={() => setActive('Users')}>
            <FaUsers className='   mr-2'/>
            <span>Users</span>
          </div>
          <div className={` p-4 flex items-center cursor-pointer ${active === 'Category' ? 'bg-gray-200 text-black' : 'text-white'}`} onClick={() => setActive('Category')}>
            <AiTwotoneTag className='   mr-2'/>
            <span>Category</span>
          </div>
          <div className={` p-4 flex items-center cursor-pointer ${active === 'Poster' ? 'bg-gray-200 text-black' : 'text-white'}`} onClick={() => setActive('Poster')}>
            <IoMdImages className='   mr-2'/>
            <span>Poster</span>
          </div>
      
        </div>
        <div className='w-[85%]'>
        {contentMap[active]}
        </div>
      </div>
    </div>








  )
}

export default Dashboard
