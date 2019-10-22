import React from "react";
import { Form, Input, Select, InputNumber } from "antd";
import { useAppContext } from "../../AppContext";
import { EmployeeProps } from "../types";
const { Option } = Select;
const AddDepartment = (props: any) => {
  const { type, form } = props;
  const { getFieldDecorator } = form;
  const { state } = useAppContext();
  const children: any = (state && state.employees) || [];
  const options = children.map((x: EmployeeProps) => (
    <Option key={x.employeeId}>{x.fullName}</Option>
  ));

  const compareToTotalProjects = (rule: any, value: any, callback: any) => {
    if (value && value > form.getFieldValue("total_projects")) {
      callback("Running projects should be equal or less than total projects!");
    } else {
      callback();
    }
  };

  return (
    <Form layout="vertical">
      <Form.Item label="Title">
        {getFieldDecorator("title", {
          rules: [
            {
              required: true,
              message: `Please enter title of the ${type}`
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item label="Categories">
        {getFieldDecorator("categories", {
          rules: [
            {
              required: true,
              message: "Please select your categories",
              type: "array"
            }
          ]
        })(<Select mode="tags" tokenSeparators={[","]}></Select>)}
      </Form.Item>
      <Form.Item label="Employees">
        {getFieldDecorator("employees")(
          <Select mode="multiple">{options}</Select>
        )}
      </Form.Item>
      <Form.Item label="Total Projects">
        {getFieldDecorator("total_projects", {
          rules: [
            {
              required: true,
              message: "Please enter total projects"
            }
          ]
        })(<InputNumber min={1} max={30} />)}
      </Form.Item>
      <Form.Item label="Running Projects">
        {getFieldDecorator("running_projects", {
          rules: [
            {
              required: true,
              message: "Please enter running projects"
            },
            {
              validator: compareToTotalProjects
            }
          ]
        })(<InputNumber min={1} max={30} />)}
      </Form.Item>
    </Form>
  );
};

export default AddDepartment;
