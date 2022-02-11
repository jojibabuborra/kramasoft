import { HYDRATE } from "next-redux-wrapper";
import {USER_ACTION_TYPES} from './user/user.constants'

const DefaultReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload };
    case USER_ACTION_TYPES.AUTH:
      return { ...state, details: payload.details };
    default:
      return { ...state };
  }
};

export default DefaultReducer;
