import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            status: false
        };
    }

    componentWillMount() {
        if (this.props.itemEditting && this.props.itemEditting.id !== null) {
            this.setState({
                id: this.props.itemEditting.id,
                name: this.props.itemEditting.name,
                status: this.props.itemEditting.status
            });
        } else this.onClear();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            this.setState({
                id: nextProps.itemEditting.id,
                name: nextProps.itemEditting.name,
                status: nextProps.itemEditting.status
            });
        } else if (!nextProps.itemEditting) {
            this.setState({
                id: "",
                name: "",
                status: false
            });
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === "status") {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value
        });
    };

    onSave = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.onCloseForm();
    };

    onCloseForm = () => {
        this.setState({
            id: "",
            name: "",
            status: false
        });
        this.props.onCloseForm();
    };

    onClear = () => {
        this.setState({
            id: "",
            name: "",
            status: false
        });
    };

    render() {
        var id = this.state.id;
        if (this.props.isDisplayForm === false) return "";
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id ? "Update task" : "Add task"}
                    </h3>
                    <span className="fa fa-times-circle text-right"></span>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <label>Status :</label>
                        <select
                            className="form-control"
                            required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Active</option>
                            <option value={false}>Hide</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                OK
              </button>
              &nbsp;
              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.onClear}
                            >
                                Reset
              </button>
              &nbsp;
              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.onCloseForm}
                            >
                                Cancel
              </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditting: state.itemEditting
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
