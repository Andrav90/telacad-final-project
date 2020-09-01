import React from 'react';
import { filterUsers } from '../../redux/filterUsers/FilterUsersActions';
import { connect } from 'react-redux';
import { sortUsers } from '../../redux/sortUsers/SortUsersActions';
import './ListSidebar.css';

function ListSidebar(props) {
    return (
        <div className="list-sidebar">
            <h5>Sort by:</h5>
            <div>
                <label>
                    <input
                        className="sidebar-inputs"
                        type="radio"
                        name="sortBy"
                        checked={ props.sortBy === "lastName" }
                        onChange={() => props.sortUsers({ sortBy: "lastName"}) }
                    />
                    Name
                </label>
            </div>
            <div>
                <label>
                    <input
                        className="sidebar-inputs"
                        type="radio"
                        name="sortBy"
                        checked={ props.sortBy === "salary" }
                        onChange={ () => props.sortUsers({sortBy: "salary"}) }
                    />
                    Salary
                </label>
            </div>
            <br/>

            <h5>Filter by salary:</h5>
            <div>
                <label>
                <input
                    className="sidebar-inputs"
                    type="checkbox"
                    name="filterOption1"
                    checked={props.filters.some((e) => e.filterName === "filterOption1")}
                    onChange={() => props.filterUsers({
                        filterName: "filterOption1",
                        min: 0,
                        max: 2500
                    })}
                />
                {'< 2500'}
                </label>
            </div>
            <div>
                <label>
                <input
                    className="sidebar-inputs"
                    type="checkbox"
                    name="filterOption2"
                    checked={props.filters.some((e) => e.filterName === "filterOption2")}
                    onChange={() => props.filterUsers({
                        filterName: "filterOption2",
                        min: 2500,
                        max: 4000
                    })}
                />
                {'2500 - 4000'}
                </label>
            </div>
            <div>
                <label>
                <input
                    className="sidebar-inputs"
                    type="checkbox"
                    name="filterOption3"
                    checked={props.filters.some((e) => e.filterName === "filterOption3")}
                    onChange={() => props.filterUsers({
                        filterName: "filterOption3",
                        min: 4000,
                        max: Infinity
                    })}
                />
                {'> 4000'}
                </label>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        sortBy: state.sort.sortBy,
        filters: state.filter.filters
    };
};

function mapDispatchToProps(dispatch) {
    return {
        filterUsers: (payload) => dispatch(filterUsers(payload)),
        sortUsers: (payload) => dispatch(sortUsers(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSidebar);