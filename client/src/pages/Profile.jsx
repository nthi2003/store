import React, { useState } from 'react'
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent'
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import OrderUser from '../components/OrderUser';
import ProfileInfo from '../components/ProfileInfo';
import HeartUser from '../components/HeartUser';

const Profile = () => {
  const [active , setActive] = useState('default')
  const contentMap = {
    profile: <ProfileInfo/>,
    order: <OrderUser/>,
    heart: <HeartUser/>,
    default: <div>Chọn một mục từ sidebar để xem nội dung</div>
  }
  return (
    <div>
      <Header />
      <div className='bg-gray-300 h-[491px] flex '>
        <div className='max-w-[1220px] ml-auto mr-auto px-3 flex'>
          <div className=' p-2'>
            <div className='bg-white w-[300px]  '>
              <div className='p-3 flex border-b border-slate-500'>
                <img className='w-[48px] h-[48px]' src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" />
                <div className='p-3'>Quoc Thi</div>
              </div>
              <div className=''>
                <div className={`p-4 flex items-center cursor-pointer ${active === 'profile' ? 'bg-gray-200' : ''}`} onClick={() => setActive('profile')}>
                  <FaUser className='text-red-500 ' />
                  <span className='text-sm  ml-3'>Thông tin cá nhân</span>
                </div>
                <div className={`p-4 flex items-center cursor-pointer ${active === 'order' ? 'bg-gray-200' : ''}`} onClick={() => setActive('order')}>
                  <FaShoppingBag className='text-red-500 ' />
                  <span className='text-sm  ml-3'>Quản lí đơn hàng</span>
                </div>
                <div className={`p-4 flex items-center cursor-pointer ${active === 'heart' ? 'bg-gray-200' : ''}`} onClick={() => setActive('heart')}>
                  <FaHeart className='text-red-500 ' />
                  <span className='text-sm  ml-3'>Sản phẩm yêu thích</span>
                </div>

              </div>
            </div>
            <div className='bg-white'>

            </div>

          </div>
          <div className='p-2'>
            <div className='w-[700px] bg-white '>
            {contentMap[active]}
            </div>
          </div>
        </div>

      </div>
      <FooterComponent />
    </div>
  )
}

export default Profile
