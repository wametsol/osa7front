import { createStore, combineReducers, applyMiddleware } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    notifications: notificationReducer
})
//console.log(anecdoteReducer);
//console.log(notificationReducer);


const store = createStore(
    reducer,
applyMiddleware(thunk))


//console.log(store.getState());


export default store