import { handleActions } from "redux-actions"

function handleAddToDo(state, action) {
    return {
        ...state,
        todoList: [...state.todoList, {
            title: action.data.title,
            description: action.data.description,
            completed: false
        }]
    }
}

function handleCompleteToDo(state, action) {
    let todoList = state.todoList.map((val, index) => {
        if (index === action.data) {
            return {
                ...val,
                completed: true
            }
        } 
        return val
    })
    return {
        ...state,
        todoList
    }
}

function handleUpdateToDo(state, action) {
    let todoList = state.todoList.map((val, index) => {
        if (index === action.data.index) {
            return {
                ...val,
                title: action.data.title,
                description: action.data.description,
            }
        } 
        return val
    })
    return {
        ...state,
        todoList
    }
}

function handleLoadTodo(state, action) {
    let todoList = action.data;
    return {
        ...state,
        todoList
    }
}

export const getPendingTodosSelector = (state) => {
    return state.todoList.filter((val)=> {
        return !val.completed;
    }).length;
}

const handlers = {
    'todos/addTodo': handleAddToDo,
    'todos/completeTodo': handleCompleteToDo,
    'todos/updateToDo': handleUpdateToDo,
    'todos/loadTodo': handleLoadTodo
}

export default handleActions(handlers, {
    todoList: []
});
