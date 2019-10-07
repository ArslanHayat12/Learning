import React from "react";
import { ButtonStyles } from "./styles";
import { Icon } from "antd";

const Button = () => {
  return (
    <ButtonStyles>
      <Icon type="plus-circle" style={{ fontSize: 20 }} />
      Add New
    </ButtonStyles>
  );
};
export default Button;
