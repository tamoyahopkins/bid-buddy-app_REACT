import {domain, handleJsonResponse, jsonHeaders }  from "./constants"
import { loginThenGoToUserProfile } from "./auth";
export const GET_BIDS = "GET_BIDS"
export const GET_BIDS_SUCCESS = "GET_BIDS_SUCCESS"
export const CREATE_BID = "CREATE_BID"
export const CREATE_BID_SUCCESS = "CREATE_BID_SUCCESS"

const url = domain + "/bids"

export const getBids = () => (dispatch, getState) => {
    dispatch({type: GET_BIDS});
const token = getState().auth.login.token
    return fetch(url, {
        headers: {Authorization: "Bearer " + token}
        })
        .then(handleJsonResponse)
        .then(result => {
            return dispatch({ type: GET_BIDS_SUCCESS, payload: result 
          })
        })
}

export const ACCEPT_BID = "ACCEPT_BID"
export const ACCEPT_BID_SUCCESS = "ACCEPT_BID_SUCCESS"

export const acceptBid = (bid, acceptedObj) => (dispatch, getState) => {
    const token = getState().auth.login.token
    dispatch({type: ACCEPT_BID})
    return fetch(url + `/${bid}`, {
        method: "PATCH",
        headers: {
            ...jsonHeaders,
            Authorization: "Bearer " + token
        },
        body: acceptedObj
    }).then(handleJsonResponse).then(result => {
        return dispatch({ type: ACCEPT_BID_SUCCESS, payload: result })
    })
}

export const createBid = (bidObj) => (dispatch, getState) => {
    dispatch({type: CREATE_BID})
    const token = getState().auth.login.token

    return fetch(url, 
        {
            method: "POST",
            headers: {
                ...jsonHeaders,
                Authorization: "Bearer " + token
            },
            body: JSON.stringify(bidObj)
        }).then(handleJsonResponse).then(result => {
        return dispatch({ type: CREATE_BID_SUCCESS, payload: result }) 
    }) 
}

