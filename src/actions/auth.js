import axios from 'axios';
import React from 'react';
import { extractApiErrors } from './index';
import { LOGIN_SUCCESS, LOGIN_FAILURE, USER_NAME_SESSION_ATTRIBUTE_NAME } from "./types";

const API_URL = 'http://localhost:8080'

const loginSuccess = (userData) => {
  return {
      type: LOGIN_SUCCESS,
      userData: userData
  }
}

const loginFailure = (errors) => {
  return {
      type: LOGIN_FAILURE,
      errors: errors
  }
}

function createBasicAuthToken(username, password) {
  return 'Basic ' + window.btoa(username + ":" + password)
}

function registerSuccessfulLogin(userData) {
  sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, userData.username);
  this.setupAxiosInterceptors(this.createBasicAuthToken(userData.username, userData.password));
}

function setupAxiosInterceptors(token) {
  axios.interceptors.request.use(
      (config) => {
          if (this.isUserLoggedIn()) {
              config.headers.authorization = token
          }
          return config
      }
  )
}

export const userAuthenticated = (decodedToken) => {
  return {
    type: 'USER_AUTHENTICATED',
    username: decodedToken.username || ''
  }
}

export const login = (userData) => {
  return dispatch => {
    return axios.post('${API_URL}/basicauth',
    { headers: { authorization: this.createBasicAuthToken(userData.username, userData.password) } })
      .then(userData => {
        registerSuccessfulLogin(userData);
        dispatch(loginSuccess(userData));
      })
      .catch(({response}) => {
        dispatch(loginFailure(response.data.errors));
      })
  }
}



