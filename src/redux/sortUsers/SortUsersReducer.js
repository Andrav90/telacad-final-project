import { SORT_USERS } from './SortUserConstants';

const initialState = {
    sortBy: ''
}

export function sortUsersReducer(state = initialState, action) {
    switch (action.type) {
        case SORT_USERS:
            return {
                ...state,
                sortBy: action.payload.sortBy
            }
        default:
            return state;
    }
}
