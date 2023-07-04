import { applyMiddleware, combineReducers, createStore } from "redux";
import mainPageReducer from "./mainpage_reducer";
import thunk from 'redux-thunk';
import searchPageReducer from "./searchpage_reducer";
import aboutGameReducer from "./aboutgame_reducer";
import authReducer from "./auth_reducer";
import userReducer from "./user_reducer";
import releasesReducer from "./releases_reducer";

let reducers = combineReducers({
    main: mainPageReducer,
    search: searchPageReducer,
    about: aboutGameReducer,
    auth: authReducer,
    user: userReducer,
    releases:releasesReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;