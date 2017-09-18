import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { taskActions } from '../../actions';

class Task extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(event) {
        this.props.action.deleteTask(this.props.task, this.props.id);
    }
    render() {

        return (
            <div>
                <tr>
                    <td>

                        {this.props.task}
                    </td>
                    <td className='todo__item'>
                        <button onClick={() => this.props.actions.deleteTask(this.props.task)}>Delete</button>
                    </td>
                </tr>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, taskActions), dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Task); 
