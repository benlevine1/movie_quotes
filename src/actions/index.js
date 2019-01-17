import types from './types'
import axios from 'axios';
import { userInfo } from 'os';

export const getMovieQuote = () => async dispatch => {

  const axiosConfig = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  }
  const response = await axios.get('http://api.reactprototypes.com/', axiosConfig);

  dispatch({
    type: types.get_movie_quote,
    quote: response.data.message
  });
}

export const signIn = userValues => async dispatch => {

  try{
    const response = await axios.post('http://api.reactprototypes.com/signin', userValues);

    localStorage.setItem('token', response.data.token);
    
    dispatch({
        type: types.sign_in
      });
    } catch(err){
      dispatch({
        type: types.sign_in_error,
        error: "Invalid email and/or password"
      })
  }
}

export function signOut(){
  localStorage.removeItem('token')
  return{
    type: types.sign_out
  }
}

export function signUp(userInfo){
  return async function(dispatch){
    const response = await axios.post('http://api.reactprototypes.com/signup', userInfo);

    localStorage.setItem('token', response.data.token);

    dispatch({
      type: types.sign_up
    })
  }
}
