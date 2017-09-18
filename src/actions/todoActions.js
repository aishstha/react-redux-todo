
export function saveTodos(todo) {
    return {
        type: 'SAVE_TODOS',
        payload: todo
    }
}
export function postTodo(todo) {
    return {
        type: 'POST_TODO',
        payload: todo
    }
}
export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        payload: id

    }
}

export function updateTodo(id) {
    return {
        type: 'UPDATE_TODO',
        payload: id
    }
}