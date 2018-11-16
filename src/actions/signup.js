import  {AUTH_USER} from  './types';
import {authError} from './error';
import AppRouter, { history } from '../routers/AppRouter';
import axios from 'axios';
import config from 'config';


 
export function signUp(email, password) {
  return function (dispatch) {
     console.log(email)
    // Submit email/password to the server
    axios.post(`${config.apiUrl}/auth`, { email, password })
      .then(response => {
        //update state
        dispatch({
          type: AUTH_USER
        });

        //save jwt token to local storage
        localStorage.setItem('user',
           JSON.stringify({
           'access-token': response.headers['access-token'],
            client: response.headers['client'],
            uid: response.headers.uid
            })
        );
        localStorage.setItem('step',response.data.data.step)
        //redirect navigation on signin
         //redirect navigation on signin
        if (response.data.data.step === 0)
        {
          history.push('/step1');
        }
        else if (response.data.data.step === 1){
          history.push('/step2');
        }
        else
        {
          history.push('/');
        }
      })
       .catch(error=> {
         dispatch(authError(error.response.data.errors.full_messages))      
       });
  };
}