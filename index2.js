const { createStore } = require('redux');
// state - count:0
// action - increment, decrement, reset
// reducer
// store

// CONSTANTS:
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const ADD_COUNTER_VALUE = 'ADD_COUNTER_VALUE'

const initialState = {
    count: 0
}

const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT
    }
}
const resettAction = () => {
    return {
        type: RESET
    }
}
const addCounterByValue = (value) => {
    return {
        type: ADD_COUNTER_VALUE,
        payload: value
    }
}

// CREATING REDUCER
const counterREducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case ADD_COUNTER_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            state
    }
}

const store = createStore(counterREducer);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(decrementAction());
store.dispatch(resettAction());
store.dispatch(addCounterByValue(10));
store.dispatch(addCounterByValue(20));

