import axios from 'axios';
import React from 'react';
import { extractApiErrors } from './index';
import { LOGIN_SUCCESS, LOGIN_FAILURE, USER_NAME_SESSION_ATTRIBUTE_NAME } from "./types";

const API_URL = 'http://localhost:8085/v1/user'

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
  setupAxiosInterceptors(createBasicAuthToken(userData.username, userData.password));
}

function setupAxiosInterceptors(token) {
  axios.interceptors.request.use(
      (config) => {
          if (isUserLoggedIn()) {
              config.headers.authorization = token
          }
          return config
      }
  )
}

function logout() {
  sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
}

export const isUserLoggedIn = () => {
  let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
  if (user === null) return false
  return true
}

function getLoggedInUserName() {
  let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
  if (user === null) return ''
  return user
}

export const login = (userData) => {

  const url = API_URL+'/name/'+userData.username;
  return dispatch => {
    return axios.get(url,
    { headers: { authorization: createBasicAuthToken(userData.username, userData.password) } })
      .then(resp => {
        registerSuccessfulLogin(resp.data);
        dispatch(loginSuccess(resp.data));
      })
      .catch(({response}) => {
        dispatch(loginFailure(response.data.errors));
      })
  }

}



