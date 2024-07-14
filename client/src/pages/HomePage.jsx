import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { IoNewspaperOutline } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineTags } from "react-icons/ai";
import { RiBankCardLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import FooterComponent from '../components/FooterComponent';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import Categorry from '../components/Categorry';

const HomePage = () => {
  const [toastShow , setToastShow] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(toastShow) {
      if (token) {

        toast.success('Đăng nhập thành công'); 
      
      } else {
       
       toast.error('Chưa đăng nhập');
       
      }
      setToastShow(false)
    }
  }, [toastShow]);
  return (
    <div>
      <div className=' h-auto bg-[#03370f]'>
       <div className='max-w-7xl ml-auto mr-auto px-3'>
       <img src="https://file.hstatic.net/200000722513/file/pc_-_topbar_ae727c35df2d4cff9f0c611a7d19cc15.png" alt="" />
       </div>
      </div>
      <Header placeholder='Bạn cần tìm gì ?' />
      <Toaster />

      
      <section className='bg-gray-300 h-[491px] flex'>
        <div className='lg:w-20% ml-[360px] mt-4'>
          <div className=' bg-white h-72 w-[220px]'>


            <div className='bg-white '>
              <nav>
                <ul>
                  <li className='py-2 px-4 hover:bg-gray-100 text-black'>
                    <div>
                      <span></span>
                      <span className='text-sm'>LapTop</span>
                    </div>
                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>LapTop Gamming</span>
                    </div>
                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>PC</span>
                    </div>
                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>Main , CPU</span>
                    </div>

                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>Case, Nguồn, Tản</span>
                    </div>

                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>Màn hình</span>
                    </div>

                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>Bàn phím</span>
                    </div>

                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>Main , CPU</span>
                    </div>

                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>Case, Nguồn, Tản</span>
                    </div>

                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>Màn hình</span>
                    </div>

                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>Bàn phím</span>
                    </div>

                  </li>
                  <li className='py-2 px-4 hover:bg-gray-100'>
                    <div>
                      <span></span>
                      <span className='text-sm'>Main , CPU</span>
                    </div>

                  </li>


                </ul>
              </nav>
            </div>
           
          </div>
        </div>
        <div className='w-[70%] mt-4 mr-[360px] ml-2'>
          <div className='grid grid-rows-3 grid-cols-3 '>
            <div className='col-start-1 col-end-3 row-start-1 row-end-3 rounded-[30px]'>
              <img src="https://file.hstatic.net/200000722513/file/gearvn-sam-may-moi-he-vui-phoi-phoi-banner_5e36e05190c841f4b9e66710eee5ad85.jpg" alt="" />
            </div>
            <div>
              <a href="">
                <div>
                  <img src="https://file.hstatic.net/200000722513/file/right_1_117ab1d46da04c35af8ae2ae170887c1.png" alt="" className='h-full' />
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div>
                  <img src="https://file.hstatic.net/200000722513/file/right_1_117ab1d46da04c35af8ae2ae170887c1.png" alt="" />
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div>
                  <img src="https://file.hstatic.net/200000722513/file/right_1_117ab1d46da04c35af8ae2ae170887c1.png" alt="" />
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div>
                  <img src="https://file.hstatic.net/200000722513/file/right_1_117ab1d46da04c35af8ae2ae170887c1.png" alt="" />
                </div>
              </a>
            </div>
            <div>
              <a href="">
                <div>
                  <img src="https://file.hstatic.net/200000722513/file/right_1_117ab1d46da04c35af8ae2ae170887c1.png" alt="" />
                </div>
              </a>
            </div>

          </div>
          
        </div>

      </section>
      <div className='bg-gray-300 h-[2500px] '>
        <div className='grid grid-rows-1 grid-cols-4 mx-[360px]'>
          <div className='mt-2  '>
              <a href="">
                <img src="https://file.hstatic.net/200000722513/file/slider_6-6_920a2a63301a4e6694c8502ccfac4929.png" alt="" />
              </a>
            </div>
            <div className='mt-2  ml-2'>
              <a href="">
                <img src="https://file.hstatic.net/200000722513/file/slider_6-6_920a2a63301a4e6694c8502ccfac4929.png" alt="" />
              </a>
            </div>
            <div className='mt-2  ml-2'>
              <a href="">
                <img src="https://file.hstatic.net/200000722513/file/slider_6-6_920a2a63301a4e6694c8502ccfac4929.png" alt="" />
              </a>
            </div>
            <div className='mt-2 ml-2'>
              <a href="">
                <img src="https://file.hstatic.net/200000722513/file/slider_6-6_920a2a63301a4e6694c8502ccfac4929.png" alt="" />
              </a>
            </div>
        </div>
        <div className='flex px-[360px] mt-2'>
          <div className='mr-3 rounded-[20px]'>
            <img src="https://file.hstatic.net/200000722513/file/pc_-_may_bo_gvn_b53d8e3709b142828f7231b80dc03aa9.png" alt="" className='rounded-[5px]' />
          </div>
          <div className=''>
             <img src="https://file.hstatic.net/200000722513/file/banner_promotion_2_20720b3c3bef4fdea0b762238a9fd183.png" alt="" className='rounded-[5px]'  />
          </div>
        </div>
        <Product hTitle = 'PC bán chạy' shTitle = 'Trả góp 0%' />
        <Product hTitle = 'Laptop gaming bán chạy' shTitle = 'Miễn phí giao hàng' />
        <Product hTitle = 'Laptop văn phòng bán chạy' shTitle = 'Miễn phí giao hàng' />
        
        <Categorry/>
      </div>
      
     
      <FooterComponent/>
    </div>
  );
}

export default HomePage;
