import React from "react";
import { CardStyles, ProgressStyles } from "./styles";
import { Icon, Tag } from "antd";
import { CardProps } from "antd/lib/card";
import { TAGS_COLORS } from "../constants";
import Avatar from "./Avatar";
import { DepartmentProps } from "../pages/types";

interface CardDataProps extends CardProps {
  data?: DepartmentProps;
}
const Card = ({ data }: CardDataProps) => {
  if (data) {
    const {
      title,
      employees,
      categories,
      total_projects,
      running_projects,
      total_employees,
      progress
    } = data;
    const percentage = (progress && progress.ratio) || 0;
    const color =
      (progress && progress.color) || percentage <= 30
        ? "#f5222d"
        : percentage >= 30 && percentage <= 80
        ? "#1890ff"
        : "#52c41a";

    return (
      <CardStyles>
        <div className="title-conatiner">
          <div className="title">{title}</div>
          <div className="actions">
            <Icon type="more" />
          </div>
        </div>
        <div className="sub-categories">
          {categories &&
            categories.map((category: string, index: number) => (
              <Tag color={TAGS_COLORS[index] || "red"}>{category}</Tag>
            ))}
        </div>
        <div className="employee-project-container">
          <Avatar employees={employees} />
          <div className="project">
            <div className="project-count">{running_projects}</div>{" "}
            <div className="running-projects">Running Projects</div>
          </div>
        </div>
        <div className="progress-container">
          <ProgressStyles size="small" percent={percentage} color={color} />
        </div>
        <div className="descriptive-container">
          <div className="project">
            <Icon type="project" /> {total_projects}
          </div>
          <div className="employees">
            <Icon type="usergroup-add" /> {total_employees}
          </div>
        </div>
      </CardStyles>
    );
  } else {
    return null;
  }
};
export default Card;
