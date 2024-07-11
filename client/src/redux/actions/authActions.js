import axios from '../../axiosConfig';
import { setLoading, setError, registerSuccess, logout, loginSuccess, updateProfileSuccess , fetchAllUsers ,updateUsersSuccess, deleteUsersSuccess} from '../reducers/authSlice';

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
export const updateUserProfile = (updateData) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.put('/profileUpdate', updateData);
        dispatch(updateProfileSuccess(response.data));
    } catch (error) {
        dispatch(setError(error.response.data.message));
    } finally {
        dispatch(setLoading(false));
    }
};
export const fetchUsers = (page, limit) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(`/getAllUsers?page=${page}&limit=${limit}`);
      dispatch(fetchAllUsers(response.data));
    } catch (error) {
      dispatch(setError(error.response.data.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
export const updateUser = (id, role) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
       const response = await axios.put(`/updateUsers/${id} ` , {role})
       dispatch(updateUsersSuccess(response.data));
    }
    catch (error) { 
        dispatch(setError(error.response.data.message));
      } finally {
        dispatch(setLoading(false));
      }
}
export const deleteUsers = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.delete(`/deleteUsers/${id}`)
      dispatch(deleteUsersSuccess({ id }));
    }
    catch (error) { 
        dispatch(setError(error.response.data.message));
      } finally {
        dispatch(setLoading(false));
      }
}