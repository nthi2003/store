import axios from '../../axiosConfig';
import { setLoading, setError, registerSuccess, logout, loginSuccess, updateProfileSuccess } from '../reducers/authSlice';

export const registerUser = (newUser) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post('/register', newUser);
        dispatch(registerSuccess(response.data)); // Dispatch một action plain object
        return response.data;
    } catch (error) {
        dispatch(setError(error.response.data.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const loginUser = (loginData) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post('/login', loginData);
        dispatch(loginSuccess(response.data));
        return response.data;
    } catch (error) {
        dispatch(setError(error.response.data.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const logoutUser = () => (dispatch) => {
    dispatch(logout());
};
export const updateUserProfile = (updateDta) => async(dispatch) => {
     dispatch(setLoading(true));
     try {
        const response = await axios.put('/profileUpdate ', updateDta);
        dispatch(updateProfileSuccess(response.data));
     }
     catch (error) {
        dispatch(setError(error.response.data.message));
     } finally {
        dispatch(setLoading(false));
     }
}