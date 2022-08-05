export const fetchToDoMiddleware = (stateApi) => (next) => (action) => {
    if(action.type === 'todos/fetchToDo') {
        setTimeout(() => {
            Promise.resolve(true).then(() => {
                stateApi.dispatch({
                    type: 'todos/loadTodo',
                    data: [{
                            title: 'todo 1',
                            completed: false
                        },
                        {
                            title: 'todo 2',
                            completed: true
                        },
                        {
                            title: 'todo 3',
                            completed: false
                        }]
                })
            })
        }, 2000);
    }
    next(action);
}
