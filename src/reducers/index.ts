import {
  DepartmentalDataProps,
  EmployeeDataProps,
  Action,
  EmployeeAction
} from "../pages/types";
const UPDATE_DEPARTMENT = "UPDATE_DEPARTMENT";
const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const departmentReducer = (
  departments: DepartmentalDataProps,
  action: Action
): DepartmentalDataProps => {
  switch (action.type) {
    case UPDATE_DEPARTMENT:
      return [...(action.data || [])];
    default:
      return departments;
  }
};

export const employeeReducer = (
  employees: EmployeeDataProps,
  action: EmployeeAction
): EmployeeDataProps => {
  switch (action.type) {
    case UPDATE_EMPLOYEE:
      return employees;
    default:
      return employees;
  }
};
