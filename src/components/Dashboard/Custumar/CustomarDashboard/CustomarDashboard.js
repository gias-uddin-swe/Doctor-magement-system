import React, { useState } from "react";
import "./CustomarDashboard.css";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import CustomerCarts from "../CustomerCarts/CustomerCarts";
import AmbulanceService from "./../../../AmbulanceService/AmbulanceService";
import BloodDoner from "./../../../Doner/BloodDoner";
import MakeBloodDonar from "./../../../Doner/MakeBloodDonar";
import CustomerDone from "./../CustomerDone/CustomerDone";
import CustomerPending from "./../CustomerPending/CustomerPending";

const CustomarDashboard = () => {
  const [control, setControl] = useState("pending");
  return (
    <div className="dashboard d-flex text-center">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>

          <SubMenu title="My Appointments" icon={"s"}>
            <MenuItem onClick={() => setControl("myCart")}>
              My All Appointments
            </MenuItem>
            <MenuItem onClick={() => setControl("pending")}>
              Pending Appointments
            </MenuItem>
            <MenuItem onClick={() => setControl("done")}>
              Done Appointments
            </MenuItem>
          </SubMenu>
          <SubMenu title="Get Ambulances" icon={"s"}>
            <MenuItem onClick={() => setControl("ambulance")}>
              Emergency Ambulance
            </MenuItem>
            <MenuItem onClick={() => setControl("ambulance")}>
              All Ambulance Service
            </MenuItem>
          </SubMenu>

          <MenuItem
            onClick={() => setControl("donateBlood")}
            title="All Blood Donar"
            icon={"s"}
          >
            Donets Blood
          </MenuItem>
          <MenuItem
            onClick={() => setControl("getBlood")}
            title="All Blood Donar"
            icon={"s"}
          >
            Get Blood
          </MenuItem>
        </Menu>
      </ProSidebar>
      <div className="container text-center">
        {control === "myCart" && <CustomerCarts></CustomerCarts>}

        {control === "ambulance" && <AmbulanceService></AmbulanceService>}

        {control === "getBlood" && <BloodDoner></BloodDoner>}
        {control === "donateBlood" && <MakeBloodDonar></MakeBloodDonar>}

        {control === "done" && <CustomerDone></CustomerDone>}
        {control === "pending" && <CustomerPending></CustomerPending>}
      </div>
    </div>
  );
};

export default CustomarDashboard;
