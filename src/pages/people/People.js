import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserList from '../../components/userList/UserList';
import Layout from '../../components/layout/Layout';
import ListSidebar from '../../components/listSidebar/ListSidebar';
import './People.css';

function People(props) {
    return (
        <Layout>
            <div className="people-page-container">
                <ListSidebar />
                <hr className="sidebar-hr"/>
                <div className="users-container">
                    {
                        props.filteredUsers.length
                            ? props.filteredUsers.map((user, id) => {
                                return <UserList
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    job={user.job}
                                    salary={user.salary}
                                    employmentDate={user.employmentDate}
                                    key={id}
                                />
                            })
                            : <h5 className="no-users">Please register users</h5>
                    }
                    <Link to='/'>
                        <button className="btn btn-dark apply-shadow">Back to Home Page</button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

function applyFilters(user, filters) {
    if (filters.length === 0) {
        return true;
    }
    for (const filter of filters) {
        if (user.salary >= filter.min && user.salary <= filter.max) {
            return true;
        }
    }
    return false;
};

function mapStateToProps(state) {
    const filters = state.filter.filters;
    const users = state.users.users;
    const filteredUsers = users.filter(user => applyFilters(user, filters));
    if (state.sort.sortBy === '') {
        return { filteredUsers }
    }
    const filteredAndSortedUsers = filteredUsers.sort((user1, user2) => {
        if (state.sort.sortBy === 'lastName') {
            return user1.lastName - user2.lastName;
        }
        
        if (state.sort.sortBy === "salary") {
            return user1.salary - user2.salary;
        }
    })
    return {
        filteredUsers: filteredAndSortedUsers
    }
};

export default connect(mapStateToProps)(People);