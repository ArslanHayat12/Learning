export type AppProps = {
  departments?: DepartmentalDataProps;
};

export type EmployeeProps = {
  name?: string;
  imageUrl?: string;
  fullName?: "";
  departmentId?: number | string;
  employeeId?: number | string;
};
export type DepartmentProps = {
  id?: string | number;
  title?: string;
  categories?: string[];
  employees?: EmployeeProps[];
  total_projects?: number;
  total_employees?: number;
  running_projects?: number;
  progress?: {
    ratio: number;
    color?: string;
  };
};
export type DepartmentalDataProps = DepartmentProps[];
export type EmployeeDataProps = EmployeeProps[];

export type Action = {
  type?: "UPDATE_DEPARTMENT";
  data?: DepartmentalDataProps;
};

export type EmployeeAction = {
  type?: "UPDATE_EMPLOYEE";
  data?: EmployeeDataProps;
};
