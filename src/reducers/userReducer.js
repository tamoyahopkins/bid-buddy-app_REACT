import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS } from "../actions";

const initialState = {
    getUserError: null,
    user: null,
    getUserLoading: false,
  }

export default (state = initialState, action) => {
    switch (action.type) {
      case REGISTER:
        return {
          ...state,
          loginLoading: true,
          loginError: null
        };
      case REGISTER_SUCCESS:
        return { ...state, login: action.payload, loginLoading: false };
      case REGISTER_FAIL:
        return { ...state, loginError: action.payload, loginLoading: false };
      case LOGOUT_SUCCESS:
        return { ...initialState };
    
  
      default:
        return state;
    }
  };
  