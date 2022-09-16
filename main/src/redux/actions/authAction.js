import { postAPI, getAPI } from '../../utils/FetchData';
import { GLOBALTYPES } from './globalTypes';


export const login = (data) => async(dispatch) => {
    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { loading: true }
        });
        
        const res = await postAPI('login', data)
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: res.data.data,
        })
        sessionStorage.setItem('token', res.data.data.token)
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.message
            }
        });
    } catch (err) {
        console.log(err)
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.message,
            },
        })
    }
}

export const getMe = (token) => async (dispatch) => {
    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { loading: true }
        })
        
        const res = await getAPI('me', token)
        
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                user: res.data.data
            }
        })
        
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.message
            }
        })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.message
            }
        })
    }
}

export const forgotPassword = (data) => async (dispatch) => {
   try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { loading: true }
        })
        
        const res = await postAPI('forgot-password', data)
        
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.message
            }
        })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.message
            }
        })
    }
}

export const resetPassword = (data) => async (dispatch) => {
    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                loading: true
            }
        })
        
        const res = await postAPI('reset-password', data)
        
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.message
            }
        })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            error: err.response.data.message
        })
    }
}