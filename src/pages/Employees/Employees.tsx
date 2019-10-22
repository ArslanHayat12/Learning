import React, { useCallback, Fragment } from "react";
import { List, Avatar, Button, Popconfirm } from "antd";
import { useAppContext } from "../../AppContext";
import { ListStyles } from "./style";
import { clone } from "ramda";
import { link, getFirstLetter } from "../../utils";

const Employees = () => {
  const { state, dispatch } = useAppContext();
  const employeesList: any = clone((state && state.employees) || []);
  const linkedEmployees = link(
    employeesList,
    state && state.departments,
    "employeeId",
    "employees",
    "title"
  );

  const deleteEmployee = useCallback((id: number | string) => {
    dispatch && dispatch({ type: "DELETE_EMPLOYEE", key: id });
  }, []);

  return (
    <ListStyles
      itemLayout="horizontal"
      dataSource={linkedEmployees}
      pagination={{ pageSize: 10 }}
      renderItem={(item: any) => (
        <List.Item
          actions={[
            <Popconfirm
              title={`Are you sure delete ${item.fullName} from employees?`}
              onConfirm={() => deleteEmployee(item.employeeId)}
              okText="Yes"
              cancelText="No">
              <Button key="list-delete">Delete</Button>
            </Popconfirm>
          ]}>
          <List.Item.Meta
            avatar={
              <Fragment>
                {item.imageUrl ? (
                  <Avatar src={item.imageUrl} />
                ) : (
                  <Avatar>{getFirstLetter(item.fullName || "test")}</Avatar>
                )}
              </Fragment>
            }
            title={<h1>{item.fullName}</h1>}
          />
          <ul>
            {item.linkedResults.map((linked: string) => (
              <li>{linked}</li>
            ))}
          </ul>
        </List.Item>
      )}
    />
  );
};
export default Employees;
