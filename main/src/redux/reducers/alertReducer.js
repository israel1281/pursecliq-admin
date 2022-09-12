import { GLOBALTYPES } from '../actions/globalTypes'

const alertReducer = (state = {}, action) => {
    switch (action.type) {
        case GLOBALTYPES.ALERT:
            return action.payload;
        default:
            return state
    }
}

export default alertReducer;