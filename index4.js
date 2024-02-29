// product constants:

const { createStore, combineReducers } = require("redux")

const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCTS = "ADD_PRODUCTS"

const GET_CART = "GET_CART"
const ADD_CART = "ADD_CART"

const initialProductSTate = {
    products: ["suger", "salt"],
    nuberofProducts: 2
}

const initialCartSTate = {
    cart: ["cart1", "cart2"],
    nuberofCart: 2
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


const getCart = () => {
    return {
        type: GET_CART
    }
}
const AddCart = (product) => {
    return {
        type: ADD_CART,
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


const cartReducer = (state = initialCartSTate, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state
            }

        case ADD_CART:
            return {
                cart: [...state.cart, action.payload],
                numofProduct: [...state.cart, action.payload].length
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    productReducer,
    cartReducer
})


const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(getProudcts())
// store.dispatch(AddProudcts("rice"))

store.dispatch(getCart())
store.dispatch(AddCart("cart3"))


