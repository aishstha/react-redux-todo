import React, { Component } from 'react';

import TodoDelete from './todoDelete';
import TodoEdit from './todoEdit';


class TodoList extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.todo.title}
                </td>
                <td>
                    <TodoDelete id={this.props.todo.id} />
                    <TodoEdit id={this.props.todo.id} title={this.props.todo.title} />
                </td>
            </tr>
        )
    }
}


export default TodoList;