import React from 'react';
import './UserList.css';

function UserList(props) {
    const { firstName, lastName, job, salary, employmentDate } = props;
    return (
        <div className="user-list-container">
            <h4 className="new-user-title">New user</h4>
            <p><strong>First Name: </strong>{firstName} </p>
            <p><strong>Last Name: </strong>{lastName} </p>
            <p><strong>Job: </strong>{job} </p>
            <p><strong>Salary: </strong>{salary} </p>
            <p><strong>Employment Date: </strong>{employmentDate} </p>
            <hr className="users-hrs" />
        </div>
    );
};

export default UserList;