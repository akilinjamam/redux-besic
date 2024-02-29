const { createStore } = require('redux');
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"

// state
const initialCounterState = {
    count: 0
}


const initialUserState = {
    users: [
        { name: 'zamal' }
    ]
}

// action -Object- type, payload

const incrementCouter = () => {
    return {
        type: INCREMENT
    };
}
const decrementCouter = () => {
    return {
        type: DECREMENT
    };
}

// create reducer for counter

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        // 
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        // 
        default:
            state;
    }
}


// create store:
const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(incrementCouter());
store.dispatch(incrementCouter());
store.dispatch(incrementCouter());
store.dispatch(decrementCouter());

// 1. state
// 2. dispatch action
// 3. reducer
// 4. store - getSTate(), dispatch(), subscribe()