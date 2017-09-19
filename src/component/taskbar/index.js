

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { taskActions } from '../../actions';

class Taskbar extends Component {
    constructor() {
        super();

        this.state = {
            data: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ data: event.target.value })
    }

    render() {

        return (
            <div>
                <input type="text" ref="task" placeholder="add task here" value={this.state.data} onChange={this.handleChange} />
                <button name="AddTask" onClick={() => this.props.actions.addTask(this.state.data)}>Add Task</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    
    return {
        actions: bindActionCreators(Object.assign({}, taskActions), dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Taskbar);