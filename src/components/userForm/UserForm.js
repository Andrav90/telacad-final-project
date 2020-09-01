import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../../redux/addUsers/AddUsersActions';
import './UserForm.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            job: '',
            salary: '',
            employmentDate: ''
        }
    }

    updateFirstName(event) {
        this.setState({ firstName: event.target.value });
    }

    updateLastName(event) {
        this.setState({ lastName: event.target.value });
    }

    updateJob(event) {
        this.setState({ job: event.target.value });
    }

    updateSalary(event) {
        this.setState({ salary: event.target.value });
    }

    updateEmploymentDate(event) {
        this.setState({ employmentDate: event.target.value });
    }

    render() {
        const { firstName, lastName, job, salary, employmentDate } = this.state;

        return (
            <form
                className="user-form"
                onSubmit={(e) => {
                    e.preventDefault();
                        this.props.addUser({
                            firstName,
                        lastName,
                        job,
                        salary,
                        employmentDate
                    });
                    this.setState({
                        firstName: '',
                        lastName: '',
                        job: '',
                        salary: '',
                        employmentDate: ''
                    });
                }}
            >
                <div>
                    <h3>Add user:</h3>
                    <div className="field-container">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={(e) => this.updateFirstName(e)} placeholder="First Name"/>
                    </div>
                    <div className="field-container">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={(e) => this.updateLastName(e)} placeholder="Last Name" />
                    </div>
                    <div className="field-container">
                        <label htmlFor="job">Job</label>
                        <input type="text" name="job" value={this.state.job} onChange={(e) => this.updateJob(e)} placeholder="Job" />
                    </div>
                    <div className="field-container">
                        <label htmlFor="salary">Salary</label>
                        <input type="number" name="salary" value={this.state.salary} onChange={(e) => this.updateSalary(e)} placeholder="Salary" />
                    </div>
                    <div className="field-container">
                        <label htmlFor="date">Employment Date</label>
                        <input type="date" name="date" value={this.state.employmentDate} onChange={(e) => this.updateEmploymentDate(e)} placeholder="Employment Date" />
                    </div>
                    <div className="buttons-container">
                        <button type="submit" className="btn btn-primary apply-shadow">Submit</button>
                        <Link to="/people"><button type="button" className="btn btn-info apply-shadow">Display users</button></Link>
                    </div>
                </div>
            </form>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return {
        addUser: (payload) => dispatch(addUser(payload))
    };
};

export default connect(null, mapDispatchToProps)(Home);