import { ADD_USER } from './AddUsersConstants';

const initialState = {
    users: []
}

export function addUsersReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }
        default:
            return state;
    }
}