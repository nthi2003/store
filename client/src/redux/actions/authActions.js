
import axios from '../../axiosConfig';
import { setLoading, setError, registerSuccess, logout, loginSuccess } from '../reducers/authSlice';

export const registerUser = (newUser) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post('/register', newUser);
        dispatch(registerSuccess(response.data));
       
        return response.data;
    } catch (error) {
        dispatch(setError(error.response.data.message));
    } finally {
        dispatch(setLoading(false));
    }
};
export const LoginUser = (login) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post('/login', login);
        dispatch(loginSuccess(response.data));
        return response.data;
    }
    catch (error) {
        dispatch(setError(error.response.data.message));
    }finally {
        dispatch(setLoading(false));
    }
}
export const logoutUser = () => async (dispatch) => {
    dispatch(logout());
};
