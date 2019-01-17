import types  from '../actions/types'

const DEFAULT_STATE = {
  quote: ''
};

export default ( state = DEFAULT_STATE, action ) => {
  switch(action.type){
    case types.get_movie_quote:
      return { ...state, quote: action.quote }
    default:
      return state;
  }
};