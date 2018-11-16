import { combineReducers } from 'redux';
import postsReducer from './posts';
import authReducer from './auth';
import { reducer as formReducer } from "redux-form";
import _ from 'lodash';

const rootReducer = combineReducers({
  form: formReducer,
  posts: postsReducer,
  auth: authReducer
});

export default rootReducer;
