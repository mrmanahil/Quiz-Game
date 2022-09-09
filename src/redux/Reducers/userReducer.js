import { UPDATE_PROFILE ,LOG_OUT} from "../const/customer.const";

const InitialState = {
  credential: {},
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      console.log(action.payload);
      return {
        ...state,
        credential: action.payload,
      };

    case UPDATE_PROFILE:
      // console.log(action.payload);
      return {
        ...state,
        credential: {
          ...state.credential,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          phone: action.payload.phone,
          profile_image: action.payload.profile_image,
        },
      };

    case LOG_OUT: 
    return {
      credential: {},
    }

    default:
      return state;
  }
};

export default userReducer;
