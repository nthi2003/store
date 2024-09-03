import React, { useEffect, useState } from 'react';
import { FaTruck } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsGpuCard, BsCpu } from "react-icons/bs";
import { LiaMicrochipSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { MdScreenshotMonitor } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getAll } from '../redux/actions/productAction';
import { Link } from 'react-router-dom';
import { CiCircleChevRight } from "react-icons/ci";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "20px", zIndex: 100, background: '#343131' , borderRadius:'100%' }}
            onClick={onClick}
        >
         <CiCircleChevRight className='text-white'/>
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "20px", zIndex: 100, background: '#343131' , borderRadius: '100%' }}
            onClick={onClick}
        />
    );
};

const Product = ({ hTitle, shTitle }) => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product.products);

    const [productId, setProductId] = useState(null);
  
    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    const filteredProducts = products.filter(product => {
        if (hTitle === 'PC bán chạy') return product.categoryName === 'PC';
        if (hTitle === 'Laptop gaming bán chạy') return product.categoryName === 'Laptop';
        if (hTitle === 'Bàn phím văn phòng bán chạy') return product.categoryName === 'Bàn phím';
        return true;
    });

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-[1220px] mt-[20px] mx-auto px-3 rounded-[5px]">
            <div className="bg-white rounded-sm flex p-2 h-[50px]">
                <div className="mr-2 p-2">
                    <h2>
                        <a href="#">{hTitle}</a>
                    </h2>
                </div>
                <div className="border-l p-2 border-slate-700">
                    <h3 className="flex items-center">
                        <FaTruck className="mr-2 mt-1 text-[#E30019]" />
                        <span>{shTitle}</span>
                    </h3>
                </div>
            </div>
            <div className='bg-white'>
                <Slider {...settings}>
                    {filteredProducts.map(product => (
                        <Link to={`/products/${product._id}`} key={product._id} onClick={() => setProductId(product._id)}>
                            <div className='bg-white border border-solid border-1 border-slate-200 rounded-[1px]'>
                                <div className='p-2'>
                                    <img src={product.images[0]?.url} alt={product.name} />
                                </div>
                                <div>
                                    <div className='p-3'>
                                        <span className='font-bold text-[12px]'>{product.name}</span>
                                    </div>
                                    <div className='p-2'>
                                        <div className='bg-[#ECECEC] p-3'>
                                            {product.CPU && (
                                                <div className='flex'>
                                                    <BsCpu className='mt-[2px]' />
                                                    <span className='text-[10px] p-1'>{product.CPU}</span>
                                                </div>
                                            )}
                                            {product.VGA && (
                                                <div className='flex'>
                                                    <BsGpuCard className='mt-[2px]' />
                                                    <span className='text-[10px] p-1'>{product.VGA}</span>
                                                </div>
                                            )}
                                            {product.RAM && (
                                                <div className='flex'>
                                                    <LiaMicrochipSolid className='mt-[2px]' />
                                                    <span className='text-[10px] p-1'>{product.RAM}</span>
                                                </div>
                                            )}
                                            {product.monitor && (
                                                <div className='flex'>
                                                    <MdScreenshotMonitor className='mt-[2px]' />
                                                    <span className='text-[10px] p-1'>{product.monitor}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='flex justify-between p-3'>
                                        <span className='text-[14px] text-[#E30019] font-bold'>{product.price.toLocaleString()}₫</span>
                                        <div className='flex items-center'>
                                            <CiStar className='text-[#F7D303]' />
                                            <span className='text-[14px] text-[#F7D303]'>{product.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Product;
