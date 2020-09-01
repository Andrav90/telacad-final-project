import { FILTER_USERS } from './FilterUsersConstants';

const initialState = {
    filters: []
}

export function filterUsersReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_USERS:
            let applyFilters = state.filters.filter((f) => {
                return f.filterName !== action.payload.filterName
            });

            if (applyFilters.length === state.filters.length) {
                applyFilters.push(action.payload);
            }

            const newState = {
                ...state,
                filters: applyFilters
            }
            return newState;
        default:
            return state;
    }
}