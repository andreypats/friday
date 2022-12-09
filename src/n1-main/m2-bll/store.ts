import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { mainReducer } from './mainReducer'
import thunk from "redux-thunk";

const reducers = combineReducers({
    main: mainReducer
})

const store = legacy_createStore(reducers, applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev