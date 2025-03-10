import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { connect } from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "name",
      sortValue: 1
    };
  }

  onToggleForm = () => {
    var { itemEditting } = this.props;
    if (itemEditting && itemEditting.id !== "") {
      this.props.onOpenForm();
      this.props.onClearTask({
        id: "",
        name: "",
        status: false
      });
    } else {
      this.props.onToggleForm();
      this.props.onClearTask({
        id: "",
        name: "",
        status: false
      });
    }
  };

  render() {
    var { sortBy, sortValue } = this.state;
    var { isDisplayForm } = this.props;

    return (
      <div className="container">
        <div className="text-center">
          <h1>Task Management</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm === true
                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                : ""
            }
          >
            <TaskForm />
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              {/* <span className="fa fa-plus mr-5"></span>Thêm Công Việc */}
              Add task
            </button>
            <div className="mt-3">
              <TaskControl />
            </div>

            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList />
              </div>
            </div>
          </div>
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
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
