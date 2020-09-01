import { SORT_USERS } from './SortUserConstants';

export function sortUsers(payload) {
    return {
        type: SORT_USERS,
        payload
    }
}