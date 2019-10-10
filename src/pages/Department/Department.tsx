import React, { useEffect } from "react";
import CardPanel from "../../components/CardPanel";
import { useAppContext } from "../../AppContext";
import { DepartmentalDataProps } from "../types";

const data: DepartmentalDataProps = [
  {
    id:1,
    title: "Engineering",
    categories: ["Backend", "Frontend", "Designer"],
    employees: [],
    total_projects: 12,
    total_employees: 13,
    running_projects: 14,
    progress: {
      ratio: 100,
      color: "green"
    }
  },
  {
    id:0,
    title: "Networking",
    categories: [],
    employees: [],
    total_projects: 12,
    total_employees: 13,
    running_projects: 14,
    progress: {
      ratio: 20
    }
  },
  {
    id:2,
    title: "Creative Services",
    categories: [],
    employees: [],
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
    employees: [],
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
    employees: [],
    total_projects: 12,
    total_employees: 13,
    running_projects: 14,
    progress: {
      ratio: 79
    }
  }
];
const Department = () => {
  const { dispatch } = useAppContext();
  useEffect(() => {
    dispatch({ type: "UPDATE_DEPARTMENT", data });
  }, [data]);
  return <CardPanel />;
};
export default Department;
