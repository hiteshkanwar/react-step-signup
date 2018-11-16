import axios from 'axios';
import config from 'config';

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'

export const API = 'http://reduxblog.herokuapp.com/api'
// ${config.apiUrl}
// by thunk return function with dispatch
export function fetchPosts(){
	const request = axios.get(`${API}/posts`)
	return(dispatch) => {
		request.then(({data}) =>{
          dispatch({
          	type: FETCH_POSTS,
          	payload: data
          })
		})
	};
}

export function fetchPost(id){
	const request = axios.get(`${API}/posts/${id}`)
	return(dispatch) => {
		request.then(({data}) =>{
          dispatch({
          	type: FETCH_POST,
          	payload: data
          })
		})
	};
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

// by redux promie it return plain object

// export function fetchPosts() {
// 	const request = axios.get('http://reduxblog.herokuapp.com/api/posts')
//     return {
//             type: FETCH_POSTS,
//           	payload: request
//           };
// }