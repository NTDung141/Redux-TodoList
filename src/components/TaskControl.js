import React, { Component } from "react";
import TaskSearchControl from "./TaskSearch";
import TaskSortControl from "./TaskSort";

class TaskControl extends Component {
    render() {
        return (
            <div className="row mt-15">
                <TaskSearchControl />
                <TaskSortControl />
            </div>
        );
    }
}

export default TaskControl;
