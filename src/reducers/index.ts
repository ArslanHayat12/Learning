import {
  DepartmentalDataProps,
  EmployeeDataProps,
  Action,
  EmployeeAction
} from "../pages/types";
import { mergeWith, remove } from "../utils";
const UPDATE_DEPARTMENT = "UPDATE_DEPARTMENT";
const SAVE_DEPARTMENT = "SAVE_DEPARTMENT";
const DELETE_DEPARTMENT = "DELETE_DEPARTMENT";
const SAVE_EMPLOYEE = "SAVE_EMPLOYEE";
const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const departmentReducer = (
  departments: DepartmentalDataProps,
  action: Action
): DepartmentalDataProps => {
  switch (action.type) {
    case SAVE_DEPARTMENT:
      return [...departments, action.data];
    case DELETE_DEPARTMENT:
      const departmentsAfterRemoval = remove("id", action.key, departments);
      return departmentsAfterRemoval;
    case UPDATE_DEPARTMENT:
      const result = mergeWith(
        departments,
        action.data,
        "employees",
        "employeeId",
        "employees"
      );
      return result;
    default:
      return departments;
  }
};

export const employeeReducer = (
  employees: EmployeeDataProps,
  action: EmployeeAction
): EmployeeDataProps => {
  switch (action.type) {
    case SAVE_EMPLOYEE:
      return [action.data, ...employees];
    case DELETE_EMPLOYEE:
      const departmentsAfterRemoval = remove(
        "employeeId",
        action.key,
        employees
      );
      return departmentsAfterRemoval;
    default:
      return employees;
  }
};
