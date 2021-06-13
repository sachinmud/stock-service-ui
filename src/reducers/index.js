import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {authReducer} from './authReducer';
import {registerReducer} from './registerReducer';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

export const init = () => {
    const reducer = combineReducers({
        auth: authReducer,
        register: registerReducer,
        form: formReducer
    });
    const store = createStore(reducer, applyMiddleware(thunk));
    return store;
}