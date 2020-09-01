import { FILTER_USERS } from './FilterUsersConstants';

export function filterUsers(payload) {
    return {
        type: FILTER_USERS,
        payload
    }
}
