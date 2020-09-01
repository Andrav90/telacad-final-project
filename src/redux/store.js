import { createStore, combineReducers } from 'redux';
import { addUsersReducer } from './addUsers/AddUsersReducer';
import { filterUsersReducer } from './filterUsers/FilterUsersReducer';
import { sortUsersReducer } from './sortUsers/SortUsersReducer';

const rootReducer = combineReducers({
    users: addUsersReducer,
    filter: filterUsersReducer,
    sort: sortUsersReducer,
});

const store = createStore(rootReducer);

export default store;