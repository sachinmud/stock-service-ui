import axios from 'axios';
import React from 'react';
import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./types";

export const register = (userData) => {
    return dispatch => {
        let config={
            //headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            headers: {'Content-Type' : 'application/json'}
            
          };
          return axios
            .post('http://localhost:8085/v1/user/register', userData, config)
            .then(res => res.data)
            .then(res => dispatch(registerUserSuccess(res)))
            .catch((error) => dispatch(registerUserFail(error)));
    }
    
  }
  
  const registerUserSuccess = (res) => {
    return {
      type: REGISTER_SUCCESS,
      res
    }
  }

  const registerUserFail = (res) => {
    return {
      type: REGISTER_FAILURE,
      res
    }
  }