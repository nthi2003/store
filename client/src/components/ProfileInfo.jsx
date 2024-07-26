import { useState, useEffect } from 'react';
import { AiTwotoneSave } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../redux/actions/authActions';

const ProfileInfo = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: {
            street: '',
            district: '',
            city: '',
        }
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                phone: user.phone || '',
                address: {
                    street: user.address?.street || '',
                    district: user.address?.district || '',
                    city: user.address?.city || '',
                }
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    [addressField]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateData = { ...formData };

        for (const key in updateData.address) {
            if (!updateData.address[key] && user.address && user.address[key]) {
                updateData.address[key] = user.address[key];
            }
        }

        dispatch(updateUserProfile(updateData));
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mb-[200px] w-[800px]'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-xl p-2'>Thông tin tài khoản</h1>
                <div className='grid grid-cols-2'>
                    {['name', 'email', 'phone'].map((field) => (
                        <div key={field} className='mb-4 flex items-center'>
                            <span className='p-2 w-32 capitalize'>{field}</span>
                            <input
                                type='text'
                                className='border p-2 flex-1'
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <div className='mb-4 flex items-center'>
                        <span className='p-2 w-32'>Tên đường</span>
                        <input
                            type='text'
                            className='border p-2 flex-1'
                            name='address.street'
                            value={formData.address.street}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <span className='p-2 w-32'>Quận</span>
                        <input
                            type='text'
                            className='border p-2 flex-1'
                            name='address.district'
                            value={formData.address.district}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-4 flex items-center'>
                        <span className='p-2 w-32'>Thành phố</span>
                        <input
                            type='text'
                            className='border p-2 flex-1'
                            name='address.city'
                            value={formData.address.city}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="bg-[#E30019] text-white w-[300px] pt-2 pb-2 flex items-center justify-center mt-4">
                        <AiTwotoneSave className='mr-2' />
                        <span>Lưu thay đổi</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileInfo;
