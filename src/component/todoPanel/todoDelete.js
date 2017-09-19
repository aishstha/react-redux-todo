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

    async deleteTodo(id) {
        try{
            let response = await httputils.remove('http://localhost:3012/api/todos', id)
                this.props.actions.deleteTodo(id)
        }
        catch(e)
        {
            console.log("err",e);
        }
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