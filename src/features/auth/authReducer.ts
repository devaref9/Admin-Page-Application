import { StateType, REDUCER_ACTION_TYPE, ReducerAction } from "./authContext";

const AuthReducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.LOGIN: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case REDUCER_ACTION_TYPE.LOGOUT: {
      return {
        ...state,
        currentUser: null,
      };
    }
    default:
      throw new Error();
  }
};

export default AuthReducer;
