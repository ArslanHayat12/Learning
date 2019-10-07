import React from "react";
import Card from "../../components/Card";
import { List } from "antd";
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
const data: DepartmentalDataProps = [
  {
    title: "Engineering",
    categories: ["Backend", "Frontend", "Designer"],
    employees: [
      { name: "ABC", url: "https://img.icons8.com/clouds/100/000000/user.png" },
      { name: "CDE", url: "https://img.icons8.com/clouds/100/000000/user.png" },
      { name: "FGH" },
      {
        name: "IGK",
        url: "https://img.icons8.com/dusk/64/000000/change-user-male.png"
      },
      { name: "LMN" },
      { name: "OPQ", url: "https://img.icons8.com/clouds/100/000000/user.png" }
    ],
    total_projects: 12,
    total_employees: 13,
    running_projects: 14,
    progress: {
      ratio: 100,
      color: "green"
    }
  },
  {
    title: "Networking",
    categories: ["Backend", "Frontend", "Designer"],
    employees: [
      { name: "ABC" },
      { name: "CDE", url: "" },
      { name: "FGH" },
      {
        name: "IGK",
        url: "https://img.icons8.com/dusk/64/000000/change-user-male.png"
      },
      { name: "LMN" },
      { name: "OPQ", url: "https://img.icons8.com/clouds/100/000000/user.png" }
    ],
    total_projects: 12,
    total_employees: 13,
    running_projects: 14,
    progress: {
      ratio: 20
    }
  },
  {
    title: "Engineering",
    categories: ["Backend", "Frontend", "Designer"],
    employees: [
      { name: "ABC" },
      { name: "CDE", url: "" },
      { name: "FGH" },
      {
        name: "IGK",
        url: "https://img.icons8.com/dusk/64/000000/change-user-male.png"
      },
      { name: "LMN" },
      { name: "OPQ", url: "https://img.icons8.com/clouds/100/000000/user.png" }
    ],
    total_projects: 12,
    total_employees: 13,
    running_projects: 14,
    progress: {
      ratio: 100
    }
  },
  {
    title: "Engineering",
    categories: ["Backend", "Frontend", "Designer"],
    employees: [
      { name: "ABC" },
      { name: "CDE", url: "https://img.icons8.com/clouds/100/000000/user.png" },
      { name: "FGH" },
      {
        name: "IGK",
        url: "https://img.icons8.com/dusk/64/000000/change-user-male.png"
      },
      { name: "LMN" },
      { name: "OPQ", url: "https://img.icons8.com/clouds/100/000000/user.png" }
    ],
    total_projects: 12,
    total_employees: 13,
    running_projects: 14,
    progress: {
      ratio: 90
    }
  },
  {
    title: "Engineering",
    categories: ["Backend", "Frontend", "Designer"],
    employees: [
      { name: "ABC" },
      { name: "CDE", url: "" },
      { name: "FGH" },
      { name: "IGK", url: "" },
      { name: "LMN" },
      { name: "OPQ", url: "" }
    ],
    total_projects: 12,
    total_employees: 13,
    running_projects: 14,
    progress: {
      ratio: 79
    }
  }
];

const Department = () => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3
      }}
      dataSource={data}
      renderItem={department => (
        <List.Item>
          <Card data={department}></Card>
        </List.Item>
      )}
    />
  );
};
export default Department;
