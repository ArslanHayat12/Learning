export type AppProps = {
  departments?: DepartmentalDataProps;
};
export type EmployeeProps = { name?: string; url?: string };
export type DepartmentProps = {
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

export type Action = {
  type?: "UPDATE_DEPARTMENT";
  data?: DepartmentalDataProps;
};
