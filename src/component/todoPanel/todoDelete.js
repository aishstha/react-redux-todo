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

class TodoDelete extends Component {
    constructor() {
        super();
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(id) {
        httputils.remove('http://localhost:3012/api/todos', id).then(response => {
            this.props.actions.deleteTodo(id)
        })
    }

    render() {
        return (<
            input className="floatr"
            type="button"
            value="Delete"
            onClick={
                () => this.deleteTodo(this.props.id)
            }
        />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, todoActions), dispatch)
    }
}
export default connect(null, mapDispatchToProps)(TodoDelete);