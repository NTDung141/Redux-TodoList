import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class TaskSortControl extends Component {
    onSort(sortBy, sortValue) {
        var sort = {
            by: sortBy,
            value: sortValue
        };
        this.props.onSort(sort);
    }

    render() {
        var { sort } = this.props;
        console.log(sort);
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sort
            <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li
                            className="dropdown-item"
                            onClick={() => this.onSort("name", 1)}
                        >
                            <a role="button">
                                <span className="fa fa-sort-alpha-asc pr-5">Name A-Z</span>
                            </a>
                        </li>
                        <li
                            className="dropdown-item"
                            onClick={() => this.onSort("name", 0)}
                        >
                            <a role="button">
                                <span className="fa fa-sort-alpha-desc pr-5">Name Z-A</span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li
                            className="dropdown-item"
                            onClick={() => this.onSort("status", 1)}
                        >
                            <a role="button">Status Active</a>
                        </li>
                        <li
                            className="dropdown-item"
                            onClick={() => this.onSort("status", 0)}
                        >
                            <a role="button">Status Hide</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sort: state.sort
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSortControl);
