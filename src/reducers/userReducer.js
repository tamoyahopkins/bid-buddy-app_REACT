import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS } from "../actions/auth";

const initialState = {
    getUserError: null,
    user: null,
    getUserLoading: false,
    register: null,
    registerLoading: false,
    registerError: null
  }

export default (state = initialState, action) => {
    switch (action.type) {
      case REGISTER:
        return {
          ...state,
          registerLoading: true,
          registerError: null
        };
      case REGISTER_SUCCESS:
        return { ...state, register: action.payload, registerLoading: false };
      case REGISTER_FAIL:
        return { ...state, registerError: action.payload, registerLoading: false };
      case LOGOUT_SUCCESS:
        return { ...initialState };
    
  
      default:
        return state;
    }
  };
  