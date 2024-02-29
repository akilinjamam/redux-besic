const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const { thunk } = require("redux-thunk")


const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"

const URL = "https://jsonplaceholder.typicode.com/todos"

const initialTodosSTate = {
    todos: [],
    isLoading: false,
    error: null
}

const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}


const todosReducer = (state = initialTodosSTate, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }

        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}


const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(URL).then(res => {
            const title = res?.data?.map((todo) => todo.title)
            console.log(title)
            dispatch(getTodosSuccess(title))
        }).catch(err => {
            const errorMessage = err.message;
            dispatch(getTodosFailed(errorMessage))
            // console.log(err.message)
        })
    }
}

const store = createStore(todosReducer, applyMiddleware(thunk));


store.subscribe(() => {
    console.log(store.getState())
});


store.dispatch(fetchData())


