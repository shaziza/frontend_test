import { combineReducers } from 'redux'
import databaseReducer from './databaseReducer';

const rootReducer = combineReducers({
    database: databaseReducer,
})

export default rootReducer;