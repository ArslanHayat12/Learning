import React from "react";
import { Form, Input, Select } from "antd";
const { Option } = Select;
const AddDepartment = Form.create<any>({ name: "form_in_modal" })(
  (props: any) => {
    const { type, form } = props;
    const { TextArea } = Input;
    const { getFieldDecorator } = form;

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
        <Form.Item label="Description">
          {getFieldDecorator("description", {
            rules: [
              {
                required: true,
                message: `Please enter description of the ${type}`
              }
            ]
          })(<TextArea />)}
        </Form.Item>
        <Form.Item label="Select[multiple]">
          {getFieldDecorator("select-multiple", {
            rules: [
              {
                required: true,
                message: "Please select your favourite colors!",
                type: "array"
              }
            ]
          })(
            <Select
              mode="multiple"
              placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Board">
          {getFieldDecorator("boardId", {
            rules: [
              {
                required: true,
                message: "Please select board name"
              }
            ]
          })(<Select placeholder="Select board name"></Select>)}
        </Form.Item>
      </Form>
    );
  }
);

export default AddDepartment;
