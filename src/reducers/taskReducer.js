import Immutable from 'immutable';
let initialState = Immutable.Map({ tasks: [] })

export default function taskReducer(state = initialState, action) {

    switch (action.type) {

        case 'ADD_TASK':
            let newTasks = [].concat(state.get('tasks'));
            newTasks.push(action.payload);

            return state.set('tasks', newTasks);

        case 'DELETE_TASK':
            const taskData = action.payload;

            let newArray = state.get('tasks').filter(function (task) {
                
                return task !== taskData
            });

            return state.set('tasks', newArray);

        default:
            return state;

    }

}
