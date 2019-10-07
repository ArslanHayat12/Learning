import React from "react";
import { Menu } from "antd";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "../components/Button";
import Department from "../pages/Department/Department";
const Routes: React.FC = () => {
  return (
    <Router>
      <div className="tabs">
        <Menu mode="horizontal">
          <Menu.Item key="mail">
            <Link to="/departments">Departments</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="/employees">Employees</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/departments" component={Department} />
          <Route exact path="/employees" component={Button} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
