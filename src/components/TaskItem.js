import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    };

    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
    };

    onEditTask = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    };

    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <button
                        className={
                            task.status === true ? "btn btn-danger" : "btn btn-success"
                        }
                        onClick={this.onUpdateStatus}
                    >
                        {task.status === true ? "Active" : "Hide"}
                    </button>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onEditTask}
                    >
                        <span className="fa fa-pencil mr-5"></span>Update
          </button>
          &nbsp;
          <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <span className="fa fa-trash mr-5"></span>Delete
          </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
