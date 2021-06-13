import React from 'react';
import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions/types";

const INITIAL_STATE = {
    registered: false,
    errors: []
}

export const registerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {registered: true, errors:[]});
        case REGISTER_FAILURE:
            return Object.assign({}, state, {registered: false, errors: action.errors});
        default:
            return state;
    }
}