import { applyMiddleware, combineReducers, createStore } from "redux";
import mainPageReducer from "./mainpage_reducer";
import thunk from 'redux-thunk';
import searchPageReducer from "./searchpage_reducer";

let reducers = combineReducers({
    main: mainPageReducer,
    search:searchPageReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;