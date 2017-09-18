import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import todoReducer from './todoReducer';

const reducers = combineReducers({
    taskReducer,
    todoReducer
})

export default reducers;