import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_DATA, CLEAR_ERROR, STEP_1, STEP_2} from '../actions/types.js';

const authReducer =  (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      return { ...state, error: '', authenticated: true };
    case 'UNAUTH_USER':
      return { ...state, authenticated: false };
    case 'AUTH_ERROR':
     console.log(333,action.payload)
      return { ...state, error: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, error: '' };
    case 'FETCH_DATA':
      return { ...state, data: action.payload };
    case 'STEP_1':
      return { ...state, error: '' };
    case 'STEP_2':
      return { ...state, error: '' };
  }

  return state;
}

export default authReducer;