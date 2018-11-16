import  { UNAUTH_USER} from  './types';
import  { history } from '../routers/AppRouter';
import axios from 'axios';
import config from 'config';


export  function logout(){
  // this clears the localstorage token !important
  return function (dispatch) {
   // console.log(JSON.parse(localStorage.user))
    // Submit email/password to the server
    axios.delete(`${config.apiUrl}/auth/sign_out`,{data: JSON.parse(localStorage.user)} )
      .then((response) => {
         localStorage.removeItem('user');
        localStorage.removeItem('step');
        return {
          type: UNAUTH_USER
        };
      });
  }

}