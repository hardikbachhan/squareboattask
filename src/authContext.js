import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const INITIAL_STATE = {
  token: "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGGEDIN":
        console.log(state);
      return { token: state };
    default:
      return "";
  }
};

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
