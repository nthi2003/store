import toast from "react-hot-toast";
import axios from "../../axiosConfig";
import { setError , setLoading , getAllPosterSuccess } from "../reducers/posterSlice";


export const getAllPoster = () => async (dispatch) =>  {
    dispatch(setLoading(true))
    try {
      const response = await axios.get(`/getAllPoster`)
      dispatch(getAllPosterSuccess(response.data))
  }
  catch (error) {
      dispatch(setError(error.response.data.message))
  }
  }