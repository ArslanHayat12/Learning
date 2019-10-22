import React, { useState, useCallback } from "react";
import { Icon, Menu, Dropdown } from "antd";
import { HeaderStyle } from "../styles";
import { ButtonStyles } from "./styles";
import { Modal } from "./Modal";
import AddDepartment from "../pages/Department/AddDepartment";
import { useAppContext } from "../AppContext";
import { generateId } from "../utils";
import AddEmployee from "../pages/Employees/AddEmployee";
const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState("");
  const { dispatch } = useAppContext();
  const handleMenuClick = useCallback(event => {
    setState(event.key);
    setVisible(true);
  }, []);

  const handleCancel = useCallback((event: any) => {
    setState("");
    setVisible(false);
  }, []);

  const handleOk = useCallback((form: any) => {
    form.validateFields((err: any, data: any) => {
      if (err) {
        return;
      }
      if (state === "department") {
        const { employees, total_projects, running_projects } = data;
        const employeesData = employees || [];
        data.employees = employeesData.map((x: any) => parseInt(x));
        data.progress = {
          ratio: Math.round(running_projects / total_projects) * 100
        };
        data.id = generateId();
        dispatch && dispatch({ type: "SAVE_DEPARTMENT", data });
      } else {
        data.employeeId = generateId();
        dispatch && dispatch({ type: "SAVE_EMPLOYEE", data });
      }

      setState("");
      setVisible(false);
    });
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
        {state === "department" ? (
          <AddDepartment type={"department"} />
        ) : (
          <AddEmployee />
        )}
      </Modal>
    </HeaderStyle>
  );
};

export default Header;
