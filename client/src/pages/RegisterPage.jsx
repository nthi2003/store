import React, { useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/authActions';
import { setError } from '../redux/reducers/authSlice';
import { toast, Toaster } from 'react-hot-toast';
const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(registerUser(formData));
            
            if (response && !response.error) {
                toast.success('Đăng nhập thành công!');
                navigate('/');
            } else {
                toast.error('Đăng kí không thành công ');
            }
            
        } catch (error) {
            
            toast.error('Đăng kí không thành công ');
        }
    };

    return (
        <div className='text-center'>
            <Header placeholder='Bạn cần tìm gì ?' />
            <Toaster />
            <form className='w-full mt-[100px]' onSubmit={handleSubmit}>
                <div className='p-5'>
                    <h2>ĐĂNG NHẬP HOẶC TẠO TÀI KHOẢN</h2>
                </div>
                <div className='mb-6'>
                    <input
                        className='outline-none border border-solid pt-2 pb-2 pr-[50px] pl-[15px] w-[300px]'
                        type='text'
                        name='name'
                        onChange={handleChange}
                        placeholder='Họ và tên'
                    />
                </div>
                <div className='mb-6'>
                    <input
                        className='outline-none border border-solid pt-2 pb-2 pr-[50px] pl-[15px] w-[300px]'
                        type='email'
                        name='email'
                        onChange={handleChange}
                        placeholder='Email'
                    />
                </div>
                <div className='mb-6'>
                    <input
                        className='outline-none border border-solid pt-2 pb-2 pr-[50px] pl-[15px] w-[300px]'
                        type='password'
                        name='password'
                        onChange={handleChange}
                        placeholder='Mật khẩu'
                    />
                </div>
                <div className='mb-6'>
                    <input
                        className='outline-none border border-solid pt-2 pb-2 pr-[50px] pl-[15px] w-[300px]'
                        type='password'
                        name='confirmPassword'
                        onChange={handleChange}
                        placeholder='Xác nhận mật khẩu'
                    />
                </div>
                <div className='mb-6'>
                    <input
                        className='outline-none border border-solid pt-2 pb-2 pr-[50px] pl-[15px] w-[300px]'
                        type='text'
                        name='phone'
                        onChange={handleChange}
                        placeholder='Số điện thoại'
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='submit' className='bg-[#E30019] text-white w-[300px] pt-2 pb-2'>
                    {loading ? 'Đang đăng ký...' : 'Đăng ký'}
                </button>
                <p className='text-sm text-center mt-4'>
                    Bạn có tài khoản?{' '}
                    <Link to='/login' className='font-medium text-primary underline'>
                        Đăng nhập ngay
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
