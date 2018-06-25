import TouchID from 'react-native-touch-id';

export const RATING_SET_ANSWER_STAY_QUESTION =
  'property-rating/rate/set-answer-stay-question';

export const LOGIN_SUCCESS: 'ukb/auth/LOGIN_SUCCESS' = 'ukb/auth/LOGIN_SUCCESS';
export const LOGIN_FAILED: 'ukb/auth/LOGIN_FAILED' = 'ukb/auth/LOGIN_FAILED';

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



    case RATING_SET_ANSWER_STAY_QUESTION:
      path = action.payload.path;
      answer = action.payload.payload.answer;

      return {
        ...state,
        Model: {
          ...state.Model,
          [path]: answer
        }
      };

    default:
      return state;
  }
}


export function loginSuccesfull() {
  return {
    type: LOGIN_SUCCESS
  };
}

export function loginFailed() {
  return {
    type: LOGIN_FAILED
  };
}

export function setAnswerStayQuestion(answer) {
  return {
    type: RATING_SET_ANSWER_STAY_QUESTION,
    payload: answer
  };
}

export function signIn(touchIdOnError) {

  return function (dispatch) {
    return TouchID.authenticate('Zum einloggen Finger auflegen.').then(
      success => dispatch(loginSuccesfull()),
      error => dispatch(loginFailed())
    );
  };

  // return function (dispatch) {

  //   TouchID.authenticate('Zum einloggen Finger auflegen.')
  //     .then(success => {
  //       // AlertIOS.alert('Authenticated Successfully');
  //       dispatch(login_succesfull())

  //     })
  //     .then(error => {
  //       // AlertIOS.alert('Authentication Failed');
  //     });

  // }

  // return {
  //   type: LOGIN_SUCCESS
  // }
}

// export function isLoggedIn(globalState: StoreState): boolean {
//   return globalState.auth && AUTH_SIGNED_IN === globalState.auth.current;
// }
export function isLoggedIn() {

}
