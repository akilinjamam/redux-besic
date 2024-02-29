// product constants:

const { createStore, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")

const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCTS = "ADD_PRODUCTS"



const initialProductSTate = {
    products: ["suger", "salt"],
    nuberofProducts: 2
}

const getProudcts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const AddProudcts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}


const productReducer = (state = initialProductSTate, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }

        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                numofProduct: [...state.products, action.payload].length
            }

        default:
            return state
    }
}

const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProudcts())
store.dispatch(AddProudcts("rice"))




