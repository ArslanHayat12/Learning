import React from "react";
import { CardStyles, ProgressStyles } from "./styles";
import { Icon, Tag, Popconfirm } from "antd";
import { CardProps } from "antd/lib/card";
import { TAGS_COLORS } from "../constants";
import Avatar from "./Avatar";

export interface CardDataProps extends CardProps {
  data?: any;
  confirmDeletion?: any;
}
const Card = (props: CardDataProps) => {
  const { data, confirmDeletion } = props;
  if (data) {
    const {
      title,
      employees,
      categories,
      total_projects,
      running_projects,
      progress,
      id
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
            <Popconfirm
              title={`Are you sure delete this ${title} department?`}
              onConfirm={() => confirmDeletion({ title, id })}
              okText="Yes"
              cancelText="No">
              <Icon type="close-circle" theme="twoTone" twoToneColor="red" />
            </Popconfirm>
          </div>
        </div>
        <div className="sub-categories">
          {categories && categories.length ? (
            categories.map((category: string, index: number) => (
              <Tag color={TAGS_COLORS[index] || "red"}>{category}</Tag>
            ))
          ) : (
            <Tag color={TAGS_COLORS[0] || "red"}>{""}</Tag>
          )}
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
            <Icon type="usergroup-add" /> {employees.length}
          </div>
        </div>
      </CardStyles>
    );
  } else {
    return null;
  }
};
export default Card;
