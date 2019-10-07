import React, { useEffect } from "react";
import CardPanel from "../../components/CardPanel";
import { useAppContext } from "../../AppContext";
import { DepartmentalDataProps } from "../types";

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
  const { dispatch } = useAppContext();
  useEffect(() => {
    dispatch({ type: "UPDATE_DEPARTMENT", data });
  }, []);
  return <CardPanel />;
};
export default Department;
