export type AppProps = {
  departments?: DepartmentalDataProps;
  employees?: EmployeeProps;
};

export type EmployeeProps = {
  name?: string;
  imageUrl?: string;
  fullName?: string;
  departmentId?: number | string;
  employeeId?: number | string;
};
export type DepartmentProps = {
  id?: string | number;
  title?: string;
  categories?: string[];
  employees?: number[];
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

export type Action =
  | {
      type?: "SAVE_DEPARTMENT";
      data?: any;
    }
  | {
      type?: "UPDATE_DEPARTMENT";
      data?: DepartmentalDataProps;
    }
  | {
      type: "DELETE_DEPARTMENT";
      key: number | string;
    };

export type EmployeeAction =
  | {
      type?: "UPDATE_EMPLOYEE";
      data?: EmployeeDataProps;
    }
  | {
      type?: "SAVE_EMPLOYEE";
      data?: any;
    }
  | {
      type?: "DELETE_EMPLOYEE";
      key: number | string;
    };
