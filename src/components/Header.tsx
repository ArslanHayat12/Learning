import React, { useState, useCallback } from "react";
import { Icon, Menu, Dropdown } from "antd";
import { HeaderStyle } from "../styles";
import { ButtonStyles } from "./styles";
import { Modal } from "./Modal";
import AddDepartment from "../pages/Department/AddDepartment";
const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState("");

  const handleMenuClick = useCallback(event => {
    setState(event.key);
    setVisible(true);
  }, []);

  const handleCancel = useCallback((event: any) => {
    setState("");
    setVisible(false);
  }, []);

  const handleOk = useCallback((event: any) => {
    setState("");
    setVisible(false);
  }, []);

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="department">Add Department</Menu.Item>
      <Menu.Item key="employee">Add Employee</Menu.Item>
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
      <Modal
        visible={visible}
        title={state}
        handleCancel={handleCancel}
        handleOk={handleOk}>
        {state === "department" ? <AddDepartment /> : state}
      </Modal>
    </HeaderStyle>
  );
};

export default Header;
