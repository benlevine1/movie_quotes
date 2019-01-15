import types from './types'

export function signIn(){
  return {
    type: types.sign_in
  }
}

export function signOut(){
  return{
    type: types.sign_out
  }
}
