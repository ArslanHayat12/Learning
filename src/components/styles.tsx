import styled from "styled-components";
import { Card, Button, Avatar, Progress, List } from "antd";
export const ProgressStyles = styled(Progress)`
  .ant-progress-bg {
    background-color: ${(props: { color: string }) => {
      return props.color;
    }};
  }
`;

export const CardStyles = styled(Card)`
  &.ant-card {
    background: #fff;
    box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.07);
    border-radius: 5px;
    border-left: 5px solid rgb(186, 104, 200);
    margin: 0 10px;
    .ant-card-body {
      padding: 10px 10px;
      zoom: 1;
    }
    .title-conatiner {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .title {
        font-weight: bold;
        font-size: 20px;
      }
      .actions {
        font-weight: bold;
        color: grey;
        font-size: 20px;
      }
    }
    .sub-categories {
      margin-bottom: 10px;
    }
    .employee-project-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .employee-avatar {
        font-weight: bold;
      }
      .project {
        padding: 6px 15px;
        background: rgba(241, 241, 241, 1);
        border-radius: 4px;
        font-weight: bold;
        .project-count {
          padding: 0 40%;
        }
        .running-projects {
          font-size: 8px;
        }
      }
    }
    .descriptive-container {
      display: flex;
      justify-content: space-between;
      color: grey;
      font-size: 15px;
      margin-bottom: 10px;
    }
    .progress-container {
      margin-bottom: 10px;
    }
  }
`;
export const AvatarStyles = styled(Avatar)<any>`
  &.ant-avatar {
    margin-left: -5px;
    background-color: ${(props: { color: string }) => props.color};
  }
`;
export const ButtonStyles = styled(Button)`
  &.ant-btn {
    color: #fff;
    padding: 0px 15px;
    font-size: 12px;
    background: rgba(153, 194, 72, 1);
    box-shadow: none;
    font-weight: 500;
    border-radius: 4px;
    text-transform: capitalize;
  }
`;

export const ListStyles = styled(List)`
  &.ant-list {
    width: 100%;
  }
`;
