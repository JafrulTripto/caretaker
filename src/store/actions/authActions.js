import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILED
} from './types';
import { returnErrors } from './errorActions';


//Check token and load user
export const loadUser = () => {
    console.log("load User")
    return async (dispatch, getState) => {
        dispatch({ type: USER_LOADING });
        await axios.post('http://household.test/api/auth/me', null, tokenConfig(getState)).then(response => {
            dispatch({ type: USER_LOADED, payload: response.data })
        }).catch(err => {
            console.log(err.response)
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR });
        })

    }
}

//Register User
export const register = (userData) => {

    return async (dispatch) => {
        await axios.post('http://household.test/api/auth/register', userData).then(response => {
            dispatch({ type: REGISTER_SUCCESS, payload: response.data })
            console.log(response.data)
        }).catch(err => {
            dispatch(returnErrors(err.response.data.message, err.response.status, 'REGISTER_FAIL'));
            dispatch({ type: AUTH_ERROR });
        })

    }
}

//Login user

export const login = (userData) => {
    return async (dispatch) => {
        await axios.post('http://household.test/api/auth/login', userData).then(response => {
            dispatch({ type: LOGIN_SUCCESS, payload: response.data })
            console.log(response.data)
        }).catch(err => {
            dispatch(returnErrors(err.response.data.error, err.response.status, 'LOGIN_FAILED'));
            dispatch({ type: LOGIN_FAILED });
        })

    }
}

//Logout user

export const logout = () => {
    return async (dispatch, getState) => {
        await axios.post('http://household.test/api/auth/logout', null, tokenConfig(getState)).then(response => {
            dispatch({ type: LOGOUT_SUCCESS })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR });
        })

    }
}

//setup config

export const tokenConfig = (getState) => {

    const token = getState().auth.access_token;
    const config = {
        headers: {
            "content-type": "application/json"
        }
    }
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}