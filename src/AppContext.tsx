import React, { useContext, createContext, useReducer } from "react";
import { departmentReducer, employeeReducer } from "./reducers";
import { useCombinedReducers } from "./hooks/useCombineReducer";
import { AppProps } from "./pages/types";
import { employees, departments } from "./data";
import { sortByKey } from "./utils";

interface AppContextProps {
  state: AppProps;
  dispatch?: any;
}

const AppContext = createContext<Partial<AppContextProps>>({});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props: any) => {
  const sortedData: any = sortByKey(employees, "imageUrl") || employees;
  const [state, dispatch] = useCombinedReducers({
    departments: useReducer(departmentReducer, departments),
    employees: useReducer(employeeReducer, sortedData)
  });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};
