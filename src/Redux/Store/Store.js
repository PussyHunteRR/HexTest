import {createStore, combineReducers} from "redux"
import pizzaReducer from './../Reducers/pizzaReduces'
import sandwichReducer from './../Reducers/sandwichReducer'
import soupReducer from './../Reducers/soupReducer'

let reducers = combineReducers({
    pizzaData: pizzaReducer,
    sandwichData: sandwichReducer,
    soupData: soupReducer
})

let store = createStore(reducers)



export default store