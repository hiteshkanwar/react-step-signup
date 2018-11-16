import { FETCH_POSTS, FETCH_POST } from '../actions/posts'

const postsReducerDefaultState = {};

 const postsReducer = (state= postsReducerDefaultState, action) => {
  switch (action.type) {
  	case 'FETCH_POSTS':
  	
  	  return action.payload
  	  // return _.mapKeys(action.payload, 'id')
  	case 'FETCH_POST':
  	  return {...state, [action.payload.id]: action.payload};
    default:
      return state;
 
  }
}

export default postsReducer;