import TouchID from 'react-native-touch-id';

export const LOGIN_SUCCESS: 'ukb/auth/LOGIN_SUCCESS' = 'ukb/auth/LOGIN_SUCCESS';
export const LOGIN_FAILED: 'ukb/auth/LOGIN_FAILED' = 'ukb/auth/LOGIN_FAILED';
export const LOG_OUT: 'ukb/auth/LOG_OUT' = 'ukb/auth/LOG_OUT';

const initialState = {
  loggedIn: 'signed-out',
  error: false
}

export default function authReducer(state = initialState, action) {

  switch (action.type) {
    case LOGIN_SUCCESS:
      {
        return {
          ...state,
          loggedIn: 'signed-in-ready'
        }
      }
    case LOGIN_FAILED:
      {
        return {
          ...state,
          error: true
        }
      }
    case LOG_OUT:
      {
        return {
          ...state,
          loggedIn: 'signed-out'
        }
      }
    default:
      return state;
  }
}


export function loginSuccesfull() {
  return {
    type: LOGIN_SUCCESS
  };
}

export function signOut() {
  return {
    type: LOG_OUT
  };
}

export function loginFailed() {
  return {
    type: LOGIN_FAILED
  };
}

export function signIn(touchIdOnError) {
  // ACTIVATE TOUCH ID HERE
  return function (dispatch) {
    return TouchID.authenticate('Zum einloggen Finger auflegen.').then(
      success => dispatch(loginSuccesfull()),
      error => dispatch(loginFailed())
    );
  };
  // return {
  //   type: LOGIN_SUCCESS
  // }
}

// export const signOut = () => dispatch(signOutAction());



// export function signOut() {
//   return function (dispatch) {
//     return dispatch(signOutAction())
//   }
// }

// export function isLoggedIn(globalState: StoreState): boolean {
//   return globalState.auth && AUTH_SIGNED_IN === globalState.auth.current;
// }
export function isLoggedIn() {

}
