import types  from '../actions/types'

const DEFAULT_STATE = {
  auth: false,
  signInError: ""
};

export default ( state = DEFAULT_STATE, action ) => {
  switch(action.type){
    case types.sign_in:
    case types.sign_up:
      return {...state, auth: true }
    case types.sign_in_error:
      return { ...state, auth: false, signInError: action.error}
    case types.sign_out:
      return { ...state, auth: false }
    default:
      return state;
  }
};