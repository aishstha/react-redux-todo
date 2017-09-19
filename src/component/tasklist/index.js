import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../task';

class Tasklist extends Component {
    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.todos.map((task, index) => <Task key={index} id={index} task={task} />)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps(state) {

    return {
        todos: state.taskReducer.get('tasks')
    }
}

export default connect(mapStateToProps, null)(Tasklist);