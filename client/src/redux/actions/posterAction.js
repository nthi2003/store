import toast from "react-hot-toast";
import axios from "../../axiosConfig";
import { setError , setLoading , getAllPosterSuccess , createPosterSuccess } from "../reducers/posterSlice";


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
      dispatch(createPosterSuccess(response))
      const { status , message} = response;
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