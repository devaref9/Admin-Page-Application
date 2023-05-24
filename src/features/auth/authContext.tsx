import { ReactElement, createContext, useCallback, useReducer } from "react";
import AuthReducer from "./authReducer";

export type StateType = {
  currentUser: any | null;
};

const INITIAL_STATE: StateType = {
  currentUser: null,
};

export const enum REDUCER_ACTION_TYPE {
  LOGIN,
  LOGOUT,
}

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: any;
};

const useAuthContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(AuthReducer, initState);

  const login = useCallback(
    (user: any | null) =>
      dispatch({ type: REDUCER_ACTION_TYPE.LOGIN, payload: user }),
    []
  );
  const logout = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.LOGOUT }),
    []
  );

  return { state, login, logout };
};

type UseAuthContextType = ReturnType<typeof useAuthContext>;

const initContextState: UseAuthContextType = {
  state: INITIAL_STATE,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<UseAuthContextType>(initContextState);

type AuthChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const AuthProvider = ({ children }: AuthChildrenType) => {
  return (
    <AuthContext.Provider value={useAuthContext(INITIAL_STATE)}>
      {children}
    </AuthContext.Provider>
  );
};
