import React from "react";
import { AvatarStyles } from "./styles";
import { AvatarProps } from "antd/lib/avatar";
import { CUSTOM_COLORS, SHOW_AVATARS_COUNT } from "../constants";
import { getFirstLetter } from "../utils";
import { EmployeeProps, EmployeeDataProps } from "../pages/types";

interface AvatarDataProps extends AvatarProps {
  employees?: EmployeeDataProps;
}
const Avatar = ({ employees }: AvatarDataProps) => {
  const employeesData =
    (employees &&
      (employees.length >= SHOW_AVATARS_COUNT
        ? employees.slice(0, SHOW_AVATARS_COUNT)
        : employees)) ||
    [];
  return (
    <div className="employee-avatar">
      {employeesData.map((employee: EmployeeProps, index: number) => {
        if (employee.imageUrl)
          return (
            <AvatarStyles
              color={CUSTOM_COLORS[index]}
              src={employee.imageUrl}
            />
          );
        if (employee.name) {
          return (
            <AvatarStyles color={CUSTOM_COLORS[index]}>
              {getFirstLetter(employee.name)}
            </AvatarStyles>
          );
        }
        return <AvatarStyles color={CUSTOM_COLORS[index]} icon={"user"} />;
      })}
      {employees && employees.length > SHOW_AVATARS_COUNT ? (
        <AvatarStyles color={CUSTOM_COLORS[0]}>
          + {employees && employees.length - SHOW_AVATARS_COUNT}
        </AvatarStyles>
      ) : null}
    </div>
  );
};
export default Avatar;
