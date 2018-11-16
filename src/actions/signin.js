import  {AUTH_USER} from  './types';
import {authError} from './error';
import AppRouter, { history } from '../routers/AppRouter';
import axios from 'axios';
import config from 'config';



export function signIn(email, password) {

  return function (dispatch) {

    // Submit email/password to the server
    axios.post(`${config.apiUrl}/auth/sign_in`, { email, password })
      .then((response) => {
        //update state
        dispatch({
          type: AUTH_USER
        });
        console.log(111, response.headers)
        localStorage.setItem('user',
           JSON.stringify({
           'access-token': response.headers['access-token'],
            client: response.headers['client'],
            uid: response.headers.uid,
            expiry: response.headers.expiry,
            'token-type': response.headers['token-type']
            })
        );
        localStorage.setItem('step',response.data.data.step)
        console.log('res',response.data.data.step)
        //redirect navigation on signin
        if (response.data.data.step === '0')
        {
          history.push('/step1');
        }
        else if (response.data.data.step === '1'){
          history.push('/step2');
        }
        else
        {
          history.push('/');
        }
      })
      .catch(error => { 
        console.log(error.response.data.errors)
        dispatch(authError(error.response.data.errors)) 
      });
  };
}
