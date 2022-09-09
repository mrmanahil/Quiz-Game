import {
  GET_CUSTOMER,
  GET_INVOICE,
  UPDATE_CUSTOMER,
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  GET_TOTAL_INVESTMENT,
  SHOWINVESTMENTS,
  SEARCH_BY_DATE,
  GET_INVOICE_BY_EMAIL,
  NO_OF_USERS,
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_BY_TYPE,
  SEND_INVOICE,
  GET_INVOICE_BY_NAME,
  DELETE_INVOICE,
  GET_CUSTOMER_NAME,
  SEARCH_BY_CUSTOMER_NAME,
  GET_CUSTOMER_INDIVIDUAL_INVOICE,
  FILTER_USER_BY_EMAIL_NAME,
  GET_PRODUCT_SUBSCRIPTION_DATA,
  FILTER_SUBSCRIBER_BY_NAME_EMAIL,
} from "../const/customer.const";

const InitialData = {
  count: {},
  total: "",
  data: [],
  userInvestment: [],
  noOfUsers: [],
  products: [],
  productDetails: [],
  productByType: [],
  getInvoiceData: [],
  getCustomer: [],
  getCustomerByName: [],
  getIndividualCustomerInvoice: [],
  getAllSubscriptionReq: [],
};
const customerReducer = (state = InitialData, action) => {
  // console.log(action.payload);
  let arr = [...state.data];
  switch (action.type) {
    case GET_CUSTOMER:
      // console.log(action.count);
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        // total: action.count,
      };
    case CREATE_CUSTOMER:
      // console.log(action.payload);
      return {
        ...state,
        data: [...state.data, { ...action.payload.data }],
      };
    case UPDATE_CUSTOMER:
      // console.log(action.payload.data);
      return {
        ...state,
        data: [],
        // data: arr,
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        data: arr,
      };
    case GET_TOTAL_INVESTMENT:
      // console.log(action.payload);
      return {
        ...state,
        count: action.payload,
      };
    case GET_INVOICE:
      // console.log(action.payload.data);
      // console.log(action.count);
      return {
        ...state,
        getCustomer: [...action.payload.data],
        total: action.count,
      };
    case SHOWINVESTMENTS:
      // console.log(action.payload, "XXxXXxXxXXxxxxXXXxXXXXXxxxXX");
      return {
        ...state,
        userInvestment: action.payload,
      };
    case SEARCH_BY_DATE:
      // console.log(action.payload);
      return {
        ...state,
        getInvoiceData: action.payload,
      };
    case GET_INVOICE_BY_EMAIL:
      // console.log(
      //   action.payload.data,
      //   // "SEARCH++++++++++++++++++++++++++++++++++++"
      // );
      return {
        ...state,
        getCustomer: [...action.payload.data],
      };
    case NO_OF_USERS:
      // console.log(
      //   action.payload.data,
      //   "NOOFUSERS++++++++++++++++++++++++++++++++++++"
      // );
      return {
        ...state,
        noOfUsers: action.payload.data,
      };
    case GET_PRODUCTS:
      // console.log(action.payload.data);
      return {
        ...state,
        products: action?.payload?.data,
      };
    case GET_PRODUCT_DETAILS:
      // console.log(action.payload.data);
      return {
        ...state,
        productDetails: action?.payload?.data,
      };
    case GET_PRODUCT_BY_TYPE:
      // console.log(action.count);
      return {
        ...state,
        productByType: action?.payload?.data?.data,
        total: action?.count,
      };
    case SEND_INVOICE:
      // console.log(action?.payload);
      return {
        ...state,
        getCustomer: [action.payload],
        // invoiceData: [...state.invoiceData, {...action?.payload?.data}],
        // invoiceData: state.invoiceData.push({...action?.payload?.data}),
      };
    case GET_INVOICE_BY_NAME:
      console.log(action.payload.data);
      return {
        ...state,
        getInvoiceData: action.payload.data,
      };
    case GET_CUSTOMER_NAME:
      // console.log(action.payload);
      return {
        ...state,
        getInvoiceData: action.payload,
      };
    case SEARCH_BY_CUSTOMER_NAME:
      // console.log(action.payload);
      if (action.payload?.data?.data?.length > 0) {
        return {
          ...state,
          data: [...action.payload?.data?.data],
        };
      } else {
        return {
          ...state,
          data: [],
        };
      }
    case GET_CUSTOMER_INDIVIDUAL_INVOICE:
      // console.log(action.payload.data)
      return {
        ...state,
        getIndividualCustomerInvoice: action?.payload?.data,
      };
    case FILTER_USER_BY_EMAIL_NAME:
      // console.log(action.payload);
      return {
        ...state,
        productByType: [...action?.payload?.data?.data],
      };
    case GET_PRODUCT_SUBSCRIPTION_DATA:
      // console.log(action.count);
      // console.log(action?.payload?.data.total);
      return {
        ...state,
        getAllSubscriptionReq: action?.payload?.data?.data,
        total: action?.count,
      };
    case FILTER_SUBSCRIBER_BY_NAME_EMAIL:
      // console.log(action.payload.data);
      return {
        ...state,
        getAllSubscriptionReq: [...action?.payload?.data?.data],
      };
    default:
      return { ...state };
  }
};
export default customerReducer;
