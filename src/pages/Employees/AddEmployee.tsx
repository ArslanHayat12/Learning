import React from "react";
import { Form, Input } from "antd";
const AddEmployee = (props: any) => {
  const { form } = props;
  const { getFieldDecorator } = form;
  return (
    <Form layout="vertical">
      <Form.Item label="Name">
        {getFieldDecorator("fullName", {
          rules: [
            {
              required: true,
              message: `Please enter name of the employee`
            }
          ]
        })(<Input />)}
      </Form.Item>

      <Form.Item label="Image URL">
        {getFieldDecorator("imageUrl")(<Input />)}
      </Form.Item>
    </Form>
  );
};

export default AddEmployee;
