import React from 'react';
import { FaSearch } from "react-icons/fa";
import { BsHeadphones } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaRegClipboard } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { LuUser2 } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Header = ({ placeholder, onChange }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); 
    const user = useSelector(state => state.auth.user)
    const navigate = useNavigate();
    console.log(user);
    const handleSearch = () => {
        // console.log(1)
    }
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };


    return (
        <div className='sticky top-0 z-10 bg-[#E30019]'>
            <div className='max-w-7xl ml-auto mr-auto px-2 flex'>
                <div className='lg:py-4 flex'>
                    <div className='ml-[50px] mr-[20px]'>
                        <a href="/">
                            <img src="https://file.hstatic.net/200000636033/file/logo_fd11946b31524fbe98765f34f3de0628.svg" className='w-[120px] h-[40px]' alt="Logo" />
                        </a>
                    </div>
                    <div className='flex m-1 bg-[#BE1529]'>
                        <CiMenuBurger className='text-white size-4 p-[1px] mt-2 ml-2' />
                        <div className='p-2'>
                            <a href="">
                                <p className='text-white font-sans text-xs font-bold'>Doanh mục</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='rounded-md'>
                            <input className='pt-2 pb-2 pr-[50px] pl-[15px] outline-none' type="text" placeholder={placeholder} onChange={onChange} />
                        </div>
                        <div className='pt-3 pb-1 px-4 bg-white h-10'>
                            <FaSearch className='' onClick={handleSearch} />
                        </div>
                    </div>
                </div>
                <div className='pt-3 pb-3 pr-[50px] pl-[15px] flex'>
                    <div className='flex ml-4'>
                        <BsHeadphones className='text-white size-7 p-[1px] mt-2' />
                        <div className='p-2'>
                            <a href="">
                                <p className='text-white font-sans text-xs font-bold'>Hotline</p>
                                <p className='text-white font-sans text-xs font-bold'>1900.5301</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex ml-4'>
                        <FiMapPin className='text-white size-7 p-[1px] mt-2' />
                        <div className='p-2'>
                            <a href="">
                                <p className='text-white font-sans text-xs font-bold'>Hệ thống</p>
                                <p className='text-white font-sans text-xs font-bold'>Showroom</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex ml-4'>
                        <FaRegClipboard className='text-white size-7 p-[1px] mt-2' />
                        <div className='p-2'>
                            <a href="">
                                <p className='text-white font-sans text-xs font-bold'>Tra cứu</p>
                                <p className='text-white font-sans text-xs font-bold'>đơn hàng</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex ml-4'>
                        <GiShoppingCart className='text-white size-7 p-[1px] mt-2' />
                        <div className='p-2'>
                            <a href="">
                                <p className='text-white font-sans text-xs font-bold'>Giỏ</p>
                                <p className='text-white font-sans text-xs font-bold'>hàng</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex ml-4 bg-[#BE1529]   '>
                        <LuUser2 className='text-white size-7 p-[1px] mt-2' />
                        <div className='p-2'>
                            {isAuthenticated ? 
                            <div>
                                
                                <p className='text-white font-sans text-xs font-bold'>Xin chào</p>
                                <p className='text-white font-sans text-xs font-bold'>{user.name}</p>
                                <button onClick={handleLogout}>
                               <a href=""> <p className='text-white font-sans text-xs'>Đăng xuất</p></a>
                                </button>

                       
                            </div>  :
                             <div>
                                <a href="/login">

                                <p className='text-white font-sans text-xs font-bold'>Đăng</p>
                                <p className='text-white font-sans text-xs font-bold'>nhập</p>
                            </a>
                            </div> }
                            
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
       
    );
}

export default Header;
