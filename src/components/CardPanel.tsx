import React, { useCallback } from "react";
import Card from "./Card";
import { List, message } from "antd";
import { useAppContext } from "../AppContext";
import { ListStyles } from "./styles";
import { mergeWith } from "../utils";

const CardPanel = () => {
  const { state, dispatch } = useAppContext();
  const confirmDeletion = useCallback(data => {
    dispatch && dispatch({ type: "DELETE_DEPARTMENT", key: data.id });
    message.success(`Department ${data.title} deleted successfuly`);
  }, []);
  const result = mergeWith(
    state && state.departments,
    state && state.employees,
    "employees",
    "employeeId",
    "employees"
  );
  return (
    <ListStyles
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
        xxl: 4
      }}
      dataSource={result}
      renderItem={department => (
        <List.Item>
          <Card data={department} confirmDeletion={confirmDeletion}></Card>
        </List.Item>
      )}
    />
  );
};
export default CardPanel;
