import React from "react";
import "./CustomarDashboard.css";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const CustomarDashboard = () => {
  return (
    <div className="dashboard d-flex text-center">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>

          <SubMenu title="My Appointments" icon={"s"}>
            <MenuItem>My Appointments</MenuItem>
            <MenuItem>My Appointments2</MenuItem>
          </SubMenu>
          <MenuItem title="All Ambulances" icon={"s"}>
            AllCustomerCarts
          </MenuItem>
          <MenuItem title="All Blood Donar" icon={"s"}>
            AllCustomerCarts
          </MenuItem>
        </Menu>
      </ProSidebar>
      <div className="container text-center">
        
      </div>
    </div>
  );
};

export default CustomarDashboard;
