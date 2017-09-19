import {
    connect
} from 'react-redux';
import React, {
    Component
} from 'react';
import {
    bindActionCreators
} from 'redux';

import * as httputils from '../../utils/httputils';
import {
    todoActions
} from '../../actions';

class TodoEdit extends Component {
    constructor() {
        super();
        this.state = {
            isEditing: false,
            title: '',
            isSave: false

        }
        this.editTodo = this.editTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancle = this.cancle.bind(this);
    }

    editTodo() {
        this.setState({ isEditing: true })
    }

    handleChange(event) {
        this.setState({ title: event.target.value })

    }

    cancle() {
        this.setState({ isEditing: false })
    }

    async handleSubmit(event) {
        this.setState({ isEditing: false })
        let updatedTodo = { title: this.state.title };

        try {
            let response = await httputils.put('http://localhost:3012/api/todos', this.props.id, updatedTodo)
            this.props.actions.updateTodo(response.data.data)

        } catch (e) {
            console.log("err", e);
        }
    }

    render() {

        return (
            <div>
                {this.state.isEditing ?
                    <div>
                        <input type="text" placeholder={this.props.title} value={this.state.title} onChange={this.handleChange} />
                        <input className="floatr"
                            type="button"
                            value="save"
                            onClick={() => this.handleSubmit(this.props.id)} />

                        <input className="floatr"
                            type="button"
                            value="Cancle"
                            onClick={this.cancle} />
                    </div>

                    :

                    <input className="floatr"
                        type="button"
                        value="Edit"
                        onClick={this.editTodo} />
                }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(Object.assign({}, todoActions), dispatch)
    }
}
export default connect(null, mapDispatchToProps)(TodoEdit);