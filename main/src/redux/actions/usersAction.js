import { getAPI } from '../../utils/FetchData';
import { GLOBALTYPES } from './globalTypes';

export const USERS_TYPES = {
    GET_USERS: "GET_USERS"
}

export const getUsers = (page, searchString) => async (dispatch) => {
    try{
        let count = 10;
        let search = '';
        let pagination = '';
        
        if (page) {
            pagination = `?page=${page}`
        }
        
        if(searchString) {
            let joinString = '?';
            if (pagination) {
                joinString = '&';
            }
            search = `${joinString}search=${searchString}`;
        }
        
        const token = sessionStorage.getItem("token")
        
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                loading: true
            }
        })
        
        const res = await getAPI(`admin/users/${count}` + pagination + search, token);
        
        dispatch({
            type: USERS_TYPES.GET_USERS,
            payload: res.data.data
        })
        
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                loading: false
            }
        })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err
            }
        })
    }
}