import { connect } from 'react-redux';
import React, { Component } from 'react';

import TodoList from './TodoList';

class TodoPanel extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.todos.map((todo, index) => <TodoList key={index} id={index} todo={todo} />)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps(state) {
    return {
        todos: state.todoReducer.get('todos')
    }
}

export default connect(mapStateToProps, null)(TodoPanel);