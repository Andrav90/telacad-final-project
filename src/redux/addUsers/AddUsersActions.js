import { ADD_USER } from './AddUsersConstants';

export function addUser(payload) {
    return {
        type: ADD_USER,
        payload
    }
}