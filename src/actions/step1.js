import  {STEP_1} from  './types';
import {authError} from './error';
import AppRouter, { history } from '../routers/AppRouter';
import axios from 'axios';
import config from 'config';


export function step1(values) {
  return function (dispatch) {
    const first_name = values.first_name
    const last_name = values.last_name
    // Submit email/password to the server
    axios.post(`${config.apiUrl}/steps/step1`, {
        data: values,
        headers: JSON.parse(localStorage.getItem('user')),
      })
      .then(response => {
        //update state
        dispatch({
          type: STEP_1
        });
         console.log(response)
        localStorage.setItem('step',response.data.step)

        console.log(response);

        //redirect navigation on step2
        history.push('/step2');
      })
       .catch(error=> {
          dispatch(authError(error.response.data.errors.full_messages))    
       });
  };
}