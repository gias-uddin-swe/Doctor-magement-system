import React from "react";
import "./DoctorDashboard.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const DoctorDashboard = () => {
  return (
    <div className="dashboard d-flex text-center">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>

          <SubMenu title="My Appointments" icon={"s"}>
            <MenuItem>Pending Appointments</MenuItem>
            <MenuItem>Done Appointments</MenuItem>
          </SubMenu>
          <MenuItem title="All Ambulances" icon={"s"}>
            Make  Schedules
          </MenuItem>
          <MenuItem title="All Blood Donar" icon={"s"}>
            My Earning History
          </MenuItem>
        </Menu>
      </ProSidebar>
      <div className="container text-center"></div>
    </div>
  );
};

export default DoctorDashboard;
