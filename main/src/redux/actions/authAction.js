import { postAPI } from '../../utils/FetchData';
import { GLOBALTYPES } from './globalTypes';


export const login = (data) => async(dispatch) => {
    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { loading: true }
        })
        
        const res = await postAPI('login', data)
        
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

export const forgotPassword = ({data, token}) => async (dispatch) => {
   try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { loading: true }
        })
        
        const res = await postAPI('forgot-password', data, token)
        
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

export const resetPassword = ({data, token}) => async (dispatch) => {
    try {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                loading: true
            }
        })
        
        const res = await postAPI('reset-password', data, token)
        
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