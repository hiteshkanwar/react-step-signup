import  {STEP_2} from  './types';
import {authError} from './error';
import AppRouter, { history } from '../routers/AppRouter';
import axios from 'axios';
import config from 'config';


 
export function step2(values) {
  return function (dispatch) {
    const mother_name = values.mother_name
    const father_name = values.father_name
    // Submit email/password to the server
     axios.post(`${config.apiUrl}/steps/step2`, {
        dataType: "JSON",
        headers: JSON.parse(localStorage.getItem('user')),
        data: values
      })
      .then(response => {
        //update state
        dispatch({
          type: STEP_2
        });

        localStorage.setItem('step',response.data.step)
        history.push('/');
      })
       .catch(error=> {
         
          dispatch(authError(error.response.data.errors.full_messages))      
       });
  };
}