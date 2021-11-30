import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/login.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
    session: loginReducer,
    // user: userReducer,
    // darmode: darmodeReducer,
})



export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)