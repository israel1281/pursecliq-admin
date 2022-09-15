import { USERS_TYPES } from "../actions/usersAction"

const initialState = {
    data: [],
    total: 0
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case USERS_TYPES.GET_USERS:
            return {
                ...state,
                data: action.payload.data,
                total: action.payload.total
            };
        default:
            return state;
    }
}

export default usersReducer;