import React, { useContext, createContext, useReducer } from "react";
import { departmentReducer, employeeReducer } from "./reducers";
import { useCombinedReducers } from "./hooks/useCombineReducer";
import { AppProps } from "./pages/types";

interface AppContextProps {
  state: AppProps;
  dispatch?: any;
}

const AppContext = createContext<Partial<AppContextProps>>({});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props: any) => {
  const [state, dispatch] = useCombinedReducers({
    departments: useReducer(departmentReducer, []),
    employees: useReducer(employeeReducer, [])
  });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};
