import React from "react";
import "./AdminDashboard.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard d-flex text-center">
      {/* <div className="row">
        <div className="col-md-2">
          <div className="dashboard"></div>
        </div>
        <div className="col-md-10"></div>
      </div> */}
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>

          <SubMenu title="All Appointments" icon={"s"}>
            <MenuItem>Appointments list</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
         
          <SubMenu title="Manage Doctors" icon={"g"}>
            <MenuItem>All Doctors</MenuItem>
            <MenuItem>Make a Doctor</MenuItem>
            <MenuItem>Monitoring Doctors</MenuItem>
          </SubMenu>
          <SubMenu title="Manage Customer" icon={"g"}>
            <MenuItem>All Customer</MenuItem>
            <MenuItem>Customer Carts</MenuItem>
            <MenuItem>Monitoring Customer</MenuItem>
            <MenuItem>Customer Payment History</MenuItem>
          </SubMenu>
          <SubMenu title="Ambulance  Service" icon={"g"}>
            <MenuItem>Ambulance Driver Info</MenuItem>
            <MenuItem></MenuItem>
            <MenuItem>Monitoring Driver</MenuItem>
            <MenuItem>Customer Payment History</MenuItem>
          </SubMenu>
          
          <MenuItem icon={"g"}>Create Admin</MenuItem>
         
          <MenuItem icon={"g"}>Blood Donar list</MenuItem>
        </Menu>
      </ProSidebar>
      <div className="container text-center"></div>
    </div>
  );
};

export default AdminDashboard;
