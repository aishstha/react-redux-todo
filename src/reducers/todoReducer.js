import Immutable from 'immutable';

 let initialState = Immutable.Map({todos : []})

 export default function todoReducer(state= initialState , action){
     
     switch(action.type)
        {
            case 'SAVE_TODOS':
                let newTodo = [].concat(action.payload);
                return state.set('todos',newTodo);
            

            case 'POST_TODO':
                let postTodo = state.get('todos').concat(action.payload);
                return state.set('todos',postTodo);


            case 'DELETE_TODO':
                let todoId = action.payload;
                let newArray = state.get('todos').filter(function(todo){
                    return todo.id !== todoId
                });
                return state.set('todos', newArray);


            case 'UPDATE_TODO':
                let newList = state.get('todos').concat(action.payload);
                return state.set('todos',newList);  
                 
                
            default:
            return state;
        }

    }
