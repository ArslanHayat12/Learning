import React from "react";
import { Icon, Menu, Dropdown } from "antd";
import { HeaderStyle } from "../styles";
import { ButtonStyles } from "./styles";
const Header: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/">
          Add Department
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/">
          Add Employee
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderStyle>
      <div>
        <Dropdown overlay={menu} placement="bottomLeft">
          <ButtonStyles>
            <Icon type="plus-circle" style={{ fontSize: 20 }} />
            Add New
          </ButtonStyles>
        </Dropdown>
      </div>
    </HeaderStyle>
  );
};

export default Header;
