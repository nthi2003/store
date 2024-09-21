import toast from "react-hot-toast";
import axios from "../../axiosConfig";
import { setError , setLoading , getAllPosterSuccess , createPosterSuccess , updatePosterSuccess , deleteImagePoster } from "../reducers/posterSlice";


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
  export const createPoster = (posterData, files) => async (dispatch) =>  {
    dispatch(setLoading(true))
    try {
        const formData = new FormData() ;
        formData.append('LinkPosterHeader' , posterData.LinkPosterHeader);
        formData.append('LinkPosterSlick' , posterData.LinkPosterSlick);
        formData.append('LinkPosterLeftSlick' , posterData.LinkPosterLeftSlick);
        formData.append('LinkPosterBottomSlick' , posterData.LinkPosterBottomSlick);
        formData.append('LinkPosterBottom' , posterData.LinkPosterBottom);
        formData.append('LinkPosterLeftRight' , posterData.LinkPosterLeftRight)
       
        if(files.headerFiles) {
            files.headerFiles.forEach(file => formData.append('headerFiles',file) 
                
            );
        }
        if(files.slickFiles) {
            files.slickFiles.forEach(file => formData.append('slickFiles',file) 
                
            );
        }
        if(files.leftSlickFiles) {
            files.leftSlickFiles.forEach(file => formData.append('leftSlickFiles',file) 
                
            );
        }
        if(files.bottomSlickFiles) {
            files.bottomSlickFiles.forEach(file => formData.append('bottomSlickFiles',file) 
                
            );
        }
        if(files.bottomFiles) {
            files.bottomFiles.forEach(file => formData.append('bottomFiles',file) 
                
            );
        }
        if(files.leftRightFiles) {
            files.leftRightFiles.forEach(file => formData.append('leftRightFiles',file) 
                
            );
        }
      const response = await axios.post(`/createPoster` , formData  )
      dispatch(createPosterSuccess(response.data))
      const { status , message} = response.data;
      if (status === 'success') {
        toast.success(message)
      }
      else {
        toast.error(message)
    }
      
  }
  catch (error) {
    dispatch(setError(error.response.data.message))
  }
  }
  export const updatePoster = (posterId, formData) => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const response = await axios.put(`/updatePoster/${posterId}`, formData);

        dispatch(updatePosterSuccess(response.data));

        const { status, message } = response.data;
        if (status === 'success') {
            toast.success(message);
        } else {
            toast.error(message);
        }
    } catch (error) {
        console.error(error);
        dispatch(setError(error.response?.data?.message ));
        toast.error(error.response?.data?.message );
    } finally {
        dispatch(setLoading(false));
    }
};



export const deleteImagesPoster = (id, imageId, imageType) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.delete(`deleteImagesPoster/${id}/${imageType}/${imageId}`);
        dispatch(deleteImagePoster({id, imageId, imageType}));
        
        const { status, message } = response.data;
        if (status === 'success') {
            toast.success(message);
        } else {
            toast.error(message);
        }
    } catch (error) {
        console.error(error);
        dispatch(setError(error.response?.data?.message ));
        toast.error(error.response?.data?.message );

    } finally {
        dispatch(setLoading(false));
    }
};
