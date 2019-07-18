import { CREATE_BID, CREATE_BID_SUCCESS, ACCEPT_BID,ACCEPT_BID_SUCCESS, GET_BIDS, GET_BIDS_SUCCESS  } from "../actions/bidActions";

const initialState = {
    login: null,
    createBid: false,
  loginError: null,
  bids: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BIDS:
        return { ...state }
    case GET_BIDS_SUCCESS:
        return {
            ...state,
            bids: action.payload.bids
        }
    case CREATE_BID:
        return { ...state }
    case CREATE_BID_SUCCESS:
        return { ...state }
    case ACCEPT_BID:
        return {
            ...state
        }
    case ACCEPT_BID_SUCCESS:
        const newbids = state.bids.slice()
        const bidIndex = newbids.findIndex(bid => {
            if(bid._id === action.payload.bid._id) {
                return true
            }
        })
        newbids.splice(bidIndex, 1, action.payload.bid)
    
        return {
            ...state,
            bids: newbids
        }
        
    default:
      return {...state};
  }
};
