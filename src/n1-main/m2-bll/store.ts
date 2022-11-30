import {combineReducers, legacy_createStore} from 'redux'
import { mainReducer } from './mainReducer'

const reducers = combineReducers({
    main: mainReducer
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev