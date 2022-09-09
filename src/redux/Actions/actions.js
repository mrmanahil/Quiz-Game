import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = "http://192.168.0.35:3000/api/user/";

export const userLogin = (data, reset, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const response = await axios.post(`${baseURL}userLogin`, data);
    console.log(response?.data);
    if (response?.data?.success) {
      console.log("++++++++++++++++++++++++++++++", response)
      toast.success("User Login Successfully", {
        autoClose: 5000,
      });
      reset();
      // toast.success(response?.data?.message)
      dispatch({
        type: "USER_LOGIN",
        payload: response?.data?.data,
      });
    } else {
      toast.error(response?.data?.message || "Something Went Wrong");
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};
