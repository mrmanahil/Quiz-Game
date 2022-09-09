import {
  GET_CUSTOMER,
  GET_INVOICE,
  DELETE_CUSTOMER,
  GET_TOTAL_INVESTMENT,
  UPDATE_PROFILE,
  CREATE_CUSTOMER,
  SHOWINVESTMENTS,
  SEARCH_BY_DATE,
  GET_INVOICE_BY_EMAIL,
  NO_OF_USERS,
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_BY_TYPE,
  SEND_INVOICE,
  GET_INVOICE_BY_NAME,
  GET_CUSTOMER_NAME,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  SEARCH_BY_CUSTOMER_NAME,
  UPDATE_CUSTOMER,
  GET_CUSTOMER_INDIVIDUAL_INVOICE,
  FILTER_USER_BY_EMAIL_NAME,
  GET_PRODUCT_SUBSCRIPTION_DATA,
  FILTER_SUBSCRIBER_BY_NAME_EMAIL,
} from "../const/customer.const";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = "http://192.168.0.35:3000/api/";

export const fetchData = async (dispatch) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  if (res) {
    dispatch({
      type: GET_CUSTOMER,
      payload: res.data,
    });
  }
};

// export const getCustomers = (token, page,setLoading) => async (dispatch) => {
//   try {
//     setLoading(true)
// const response = await axios.get(`${baseURL}/api/customers?page=${page}`, {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/pdf",
//     Authorization: `Bearer ${token}`,
//   },
// });
//     // console.log(response.data);
//     if (response.data?.success) {
//       setLoading(false)
//       // toast.success(response?.data?.message);
//       dispatch({
//         type: GET_CUSTOMER,
//         payload: response?.data?.data,
//         count: response?.data?.data?.total,
//       });
//     }
//   } catch (err) {
//     setLoading(false)
//     // toast.error(err?.message);
//     // console.log(err?.message);
//   }
// };

export const getCustomer = async (token) => {
  try {
    const { data } = await axios.get(`${baseURL}customer/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    if (data?.success) {
      return data;
    } else return new Error("Server Error");
  } catch (err) {
    return new Error(err || "Sserver error");
  }
};
// const customers = getCustomer("abc")
// console.log(customers);

// export const getCustomers = (token,page,setLoading) => async (dispatch) => {
//   setLoading(true)
//   const response = await axios.get(`${baseURL}/api/customers?page=${page}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/pdf",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   console.log(response.data);
//   setLoading(false)
//   dispatch({
//     type: GET_CUSTOMER,
//     payload: response.data.data,
//     count: response?.data?.data?.total
//   });
// };

export const updateCustomer = (customerId, data, token) => async (dispatch) => {
  // console.log(customerId, data, token);
  try {
    const response = await axios.put(
      `${baseURL}/api/customers/updated/${customerId}`,
      data,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response);
    if (response?.data?.success) {
      toast.success("Customer Updated Successfully");
      dispatch({
        type: UPDATE_CUSTOMER,
        payload: { data },
      });
    } else {
      toast.error(response?.data?.msg);
    }
  } catch (error) {
    toast.error(error);
    // console.log(error);
  }
};

export const createCustomer =
  (data, token, reset, setLoading) => async (dispatch) => {
    // console.log(data, token, e);
    try {
      setLoading(true);
      const response = await axios.post(`${baseURL}/api/customers`, data, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response?.data?.data);
      if (response?.data?.success) {
        setLoading(false);
        toast.success(response?.data?.message);
        reset();
        dispatch({
          type: CREATE_CUSTOMER,
          payload: response?.data?.data,
        });
      }
      // else{
      else if (response?.data?.data?.first_name?.length > 0) {
        setLoading(false);
        toast.error(response?.data?.data?.first_name?.toString());
      } else if (response?.data?.data?.last_name?.length > 0) {
        setLoading(false);
        toast.error(response?.data?.data?.last_name?.toString());
      } else {
        setLoading(false);
        toast.error(response?.data?.data?.email?.toString());
      }
      // }
    } catch (error) {
      setLoading(false);
      // console.log("Ok");
    }
  };

export const deleteCustomer = (id, token) => async (dispatch) => {
  try {
    const response = await axios.delete(`${baseURL}/api/customers/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response?.data);
    if (response?.data?.success) {
      toast.success(response?.data?.message);
      dispatch({
        type: DELETE_CUSTOMER,
        payload: { id },
      });
    }
  } catch (error) {
    toast.error(error);
    // console.log(error);
  }
};

export const getInvoice = (token, page) => async (dispatch) => {
  // console.log(token);
  try {
    const response = await axios(`${baseURL}/api/getInvoice?page=${page}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    if (response.data.success) {
      dispatch({
        type: GET_INVOICE,
        payload: response?.data?.data,
        count: response?.data?.data?.total,
      });
      // toast.success(response?.data?.message);
    }
  } catch (err) {
    // toast.error(err?.message);
    // console.log(err?.message);
  }
};

export const getTotalInvestment = (token) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${baseURL}/api/count`,
      {},
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    if (response.data) {
      dispatch({
        type: GET_TOTAL_INVESTMENT,
        payload: response?.data?.data,
      });
    }
  } catch (err) {
    // toast.error(err?.message);
  }
};

export const profileUpdate =
  (data, token, profileUserId, setLoading, reset) => async (dispatch) => {
    // console.log(data, profileUserId, token);
    try {
      setLoading(true);
      const response = await axios(`${baseURL}/api/update/${profileUserId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: { ...data },
      });
      // console.log(response.data);
      if (response.data.data) {
        setLoading(false);
        toast.success(response?.data?.message);
        reset();
        dispatch({
          type: UPDATE_PROFILE,
          payload: response?.data?.data,
        });
      } else {
        toast.error(response?.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      // console.log(error.response);
      toast.error(error.response);
    }
  };

export const changeUserPassword = (data, token, reset) => async () => {
  // console.log(data, token);
  try {
    const response = await axios(`${baseURL}/api/password-change`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: { ...data },
    });
    // console.log(response.data);
    if (response.data.success) {
      reset();
      toast.success(response.data.message);
    } else {
      toast.error(response.data);
      // console.log("INVALID PASSWORD");
      // console.log(response.data);
    }
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const showInvestmentDetails = (token, email) => async (dispatch) => {
  // console.log(token, email);
  try {
    const response = await axios(
      `${baseURL}/api/customers/userInvementDetail/${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    if (response.data?.success) {
      // toast.success(response?.data?.message);
      dispatch({
        type: SHOWINVESTMENTS,
        payload: response?.data?.data,
      });
    }
  } catch (err) {
    // toast.error(err?.message);
  }
};

export const searchByDate = (date, token) => async (dispatch) => {
  // console.log(date,token);
  try {
    const response = await axios.post(
      `${baseURL}/api/getInvoiceFilter`,
      { date },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data?.data);
    if (response?.data?.success) {
      dispatch({
        type: SEARCH_BY_DATE,
        payload: response?.data?.data,
      });
      // console.log(response.data.message);
      toast.success(response.data?.message);
    }
  } catch (error) {
    toast.error(error.response);
    // console.log(error);
  }
};

export const getInvoiceByEmail = (body, token, reset) => async (dispatch) => {
  // console.log(body, token);
  try {
    const response = await axios.post(
      `${baseURL}/api/getInvoiceEmail`,
      { email: body.email },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    if (response?.data?.success) {
      reset();
      dispatch({
        type: GET_INVOICE_BY_EMAIL,
        payload: response.data,
      });
      // console.log(response.data);
      toast.success(response?.data?.message);
    }
  } catch (error) {
    toast.error(error.response);
    // console.log(error);
  }
};

export const noOfUsers = (token) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${baseURL}/api/totalRegisteredUserCount`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    if (response?.data?.success) {
      dispatch({
        type: NO_OF_USERS,
        payload: response.data,
      });
      // console.log(response.data);
      // toast.success(response.data);
    }
  } catch (error) {
    // toast.error(error.response);
    // console.log(error);
  }
};

export const getProducts = (email, token) => async (dispatch) => {
  // console.log(token, email);
  try {
    const response = await axios.post(
      `${baseURL}/api/getUserAgainstEmail`,
      { email: email },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response);
    if (response.data) {
      dispatch({
        type: GET_PRODUCTS,
        payload: response?.data,
      });
      // toast.success(response?.data?.message);
    }
  } catch (err) {
    toast.error(err?.message);
    // console.log(err);
  }
};

export const getProductDetails = (data, token) => async (dispatch) => {
  // console.log(data);
  try {
    const response = await axios.post(
      `${baseURL}/api/getDataAgainstType`,
      { platform: data },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response?.data);
    if (response.data) {
      dispatch({
        type: GET_PRODUCT_DETAILS,
        payload: response?.data,
      });
      // toast.success(response?.data?.message);
    }
  } catch (err) {
    toast.error(err?.message);
    // console.log(err);
  }
};

export const getUserProductByType = (data, token, page) => async (dispatch) => {
  // console.log(data);
  try {
    const response = await axios.post(
      `${baseURL}/api/getUserProductByType?page=${page}`,
      { type: data },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    if (response?.data?.success) {
      dispatch({
        type: GET_PRODUCT_BY_TYPE,
        payload: response?.data,
        count: response?.data?.data?.total,
      });
    }
  } catch (err) {
    toast.error(err?.message);
    // console.log(err);
  }
};

export const filterUserByEmailName =
  (data, token, reset) => async (dispatch) => {
    // console.log(data.Client_Email);
    try {
      const response = await axios.post(
        `${baseURL}/api/filterUserProductByEmailName`,
        { Client_Email: data.Client_Email },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data);
      if (response?.data?.success) {
        reset();
        dispatch({
          type: FILTER_USER_BY_EMAIL_NAME,
          payload: response?.data,
        });
      }
    } catch (err) {
      toast.error(err?.message);
      // console.log(err);
    }
  };

export const sendInvoice =
  (data, token, reset, setLoading) => async (dispatch) => {
    // console.log(data,token);
    try {
      setLoading(true);
      const response = await axios.post(`${baseURL}/api/sendInvoice`, data, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response?.data?.success);
      if (response.data?.success) {
        toast.success(response?.data?.message);
        setLoading(false);
        reset();
        dispatch({
          type: SEND_INVOICE,
          payload: response?.data,
        });
      } else {
        setLoading(false);
        toast.error(response?.data);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err?.message);
      console.log(err);
    }
  };

export const getInvoiceByName = (name, token) => async (dispatch) => {
  // console.log(name, token);
  try {
    const response = await axios.post(
      `${baseURL}/api/getInvoiceByName`,
      { name },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    if (response?.data?.success) {
      toast.success(response?.data?.message);
      dispatch({
        type: GET_INVOICE_BY_NAME,
        payload: response.data,
      });
      // console.log(response.data);
    }
  } catch (error) {
    toast.error(error.response);
    // console.log(error);
  }
};

export const getCustomerByName = (token) => async (dispatch) => {
  // console.log(token);
  try {
    const response = await axios.get(`${baseURL}/api/getCustomerName`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    // if (response.data?.success) {
    dispatch({
      type: GET_CUSTOMER_NAME,
      payload: response?.data,
    });
    // toast.success(response?.data?.message);
    // }
  } catch (err) {
    toast.error(err?.message);
  }
};

export const forgotPassword = (data, reset, setLoading) => async (dispatch) => {
  // console.log(data);
  try {
    setLoading(true);
    const response = await axios.post(
      `${baseURL}/api/forgot-password`,
      { email: data?.email },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer `,
        },
      }
    );
    // console.log(response?.data);
    if (response?.data) {
      setLoading(false);
      reset();
      toast.success("We have emailed your password reset link!");
      dispatch({
        type: FORGOT_PASSWORD,
        payload: response?.data,
      });
    }
    // else{
    //   toast.error("Email Does Not Match")
    // }
  } catch (err) {
    setLoading(false);
    // console.log(err);
    toast.error(err?.response?.data?.message);
    // console.log(err?.response?.data?.message);
  }
};

export const resetpassword = (data) => async (dispatch) => {
  // console.log(data.token);
  try {
    const response = await axios.post(`${baseURL}/api/reset-password`, data, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    });
    // console.log(response);
    if (response?.data?.message) {
      toast.success(response?.data?.message);
      dispatch({
        type: RESET_PASSWORD,
        payload: response?.data,
      });
    } else {
      toast.error(response.data);
    }
  } catch (err) {
    toast.error("Unauthenticated");
    // console.log(err);
  }
};

export const searchByCustomerName =
  (search, token, setLoading) => async (dispatch) => {
    // console.log(search,token);
    try {
      setLoading(true);
      const response = await axios.post(
        `${baseURL}/api/getFilterByName`,
        { email: search },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data);
      if (response?.data?.success) {
        setLoading(false);
        toast.success(response?.data?.message);
        dispatch({
          type: SEARCH_BY_CUSTOMER_NAME,
          payload: response?.data,
        });
      }
      // else{
      //   toast.error("========================")
      // }
    } catch (err) {
      setLoading(false);
      toast.error(err?.message);
      // console.log(err);
    }
  };

export const getSubscription = (data, token) => async (dispatch) => {
  // console.log(data, token);
  try {
    const response = await axios.post(`${baseURL}/api/addSubscription`, data, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    if (response?.data?.success) {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }
  } catch (error) {
    toast.error(error?.message);
    // console.log(error);
    // toast.error(err?.response?.data);
  }
};

export const getCustomerInvoice = (data, token) => async (dispatch) => {
  // console.log(data,token);
  try {
    const response = await axios.post(
      `${baseURL}/api/getCustomerInvoice`,
      data,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    if (response?.data) {
      // toast.success(response?.data?.message);
      dispatch({
        type: GET_CUSTOMER_INDIVIDUAL_INVOICE,
        payload: response?.data,
      });
    }
    // else{
    //   toast.error("========================")
    // }
  } catch (err) {
    // console.log(err);
    toast.error(err?.message);
  }
};

export const getSubscriptionData = (token, page) => async (dispatch) => {
  // console.log(token);
  try {
    const response = await axios.get(
      `${baseURL}/api/getAllSubscribeCustomer?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response?.data?.data?.total);
    if (response.data) {
      // toast.success(response?.data?.message);
      dispatch({
        type: GET_PRODUCT_SUBSCRIPTION_DATA,
        payload: response?.data,
        count: response?.data?.data?.total,
      });
    }
  } catch (err) {
    toast.error(err?.message);
    // console.log(err?.message);
  }
};

export const filterSubscriberByNameEmail =
  (data, token, reset) => async (dispatch) => {
    // console.log(data, token);
    try {
      const response = await axios.post(
        `${baseURL}/api/filterSubscriberByNameEmail`,
        { email: data?.email },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data);
      if (response?.data) {
        reset();
        dispatch({
          type: FILTER_SUBSCRIBER_BY_NAME_EMAIL,
          payload: response?.data,
        });
      }
      // else{
      //   toast.error("========================")
      // }
    } catch (err) {
      toast.error(err?.message);
      // console.log(err);
    }
  };

export const rejectSubscriber = async (data, token) => {
  try {
    const response = await axios.post(
      `${baseURL}/api/rejectSubscriber`,
      { id: data?.id },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.data?.success) {
      toast.success("Request Rejected");
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export const approveSubsciber = async (data, token) => {
  try {
    const response = await axios.post(
      `${baseURL}/api/approveSubscriber`,
      { id: data?.id },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);
    if (response?.data?.success) {
      toast.success("Request Accepted");
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};
