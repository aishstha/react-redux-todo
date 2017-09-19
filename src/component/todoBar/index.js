import React, {
    Component
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { todoActions } from '../../actions';

import * as httputils from '../../utils/httputils';


class TodoBar extends Component {
    constructor() {
        super();

        this.state = {
            mytodo: '',
            title: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    handleChange(event) {
        this.setState({
            mytodo: event.target.value
        });
    }

    handleChangeTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleChangeDescription(event) {
        this.setState({
            description: event.target.value
        })
    }

    async handleSubmit(event) {
        try {
            let mytodo = {
                title: this.state.title,
                description: "i am dummy data",
                iscomplete: "false"
            }
            let response = await httputils.post('http://localhost:3012/api/todos', mytodo)
            this.props.actions.postTodo(response.data.data)
        }
        catch (e) {
            console.log("err", e);
        }
    }

    render() {

        return (
            <div className="header">
                <table className="todo__item"><th>Todo App</th></table>
                <input type="text" placeholder="Todo Title!" value={this.state.title} onChange={this.handleChangeTitle} />
                <input type="button" className="floatr" value="Save" onClick={this.handleSubmit} />
                <hr />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    
    return {
        actions: bindActionCreators(Object.assign({}, todoActions), dispatch)
    }
}

export default connect(null, mapDispatchToProps)(TodoBar);