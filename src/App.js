import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';


import './App.css';
import { todoActions } from './actions';
import TodoPanel from './component/todoPanel';
import * as httputils from './utils/httputils';
import TodoBar from './component/todoBar/index';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  async componentDidMount() {
    try {
      let response = await httputils.get('http://localhost:3012/api/todos');
      this.props.actions.saveTodos(response.data.data);
    } catch (e) {
      console.log('error', e);
    }
  }

  render() {

    return (
      <div className="wrapper">
        <TodoBar />
        <TodoPanel />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  
  return {
    actions: bindActionCreators(Object.assign({}, todoActions), dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
