import { DepartmentalDataProps, Action } from "../pages/types";
const UPDATE_DEPARTMENT = "UPDATE_DEPARTMENT";
export const departmentReducer = (
  departments: DepartmentalDataProps,
  action: Action
): DepartmentalDataProps => {
  switch (action.type) {
    case UPDATE_DEPARTMENT:
      return [...departments, ...(action.data || [])];
    default:
      return departments;
  }
};
