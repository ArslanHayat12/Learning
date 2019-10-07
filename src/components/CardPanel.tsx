import React from "react";
import Card from "./Card";
import { List } from "antd";
import { useAppContext } from "../AppContext";

const CardPanel = () => {
  const { state } = useAppContext();
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
      dataSource={state && state.departments}
      renderItem={department => (
        <List.Item>
          <Card data={department}></Card>
        </List.Item>
      )}
    />
  );
};
export default CardPanel;
