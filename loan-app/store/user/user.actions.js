import {USER_ACTION_TYPES} from './user.constants'
export function auth() {
  console.log("Called");
  return function (dispatch) {
    return dispatch({
      type: USER_ACTION_TYPES.AUTH,
      payload: { details: { name: "auth action" } },
    });
  };
}
