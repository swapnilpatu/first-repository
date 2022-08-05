
export const addToDo = (data) => ({
    type: 'todos/addTodo',
    data
});

export const completeToDo = (index) => ({
    type: 'todos/completeTodo',
    data: index
})


export const updateToDo = (valueObj) => ({
    type: 'todos/updateToDo',
    data: valueObj
})

export const fetchToDo = () => ({
    type: 'todos/fetchToDo'
})
