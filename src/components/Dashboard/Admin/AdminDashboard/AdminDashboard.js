import React, { useState } from "react";
import "./AdminDashboard.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import AppointmentsList from "../../AppointmentsList/AppointmentsList";
import ApporvedAppointments from "../../Doctor/ApporvedAppointments/ApporvedAppointments";
import DoneAppointments from "../../DoneAppointments/DoneAppointments";
import DoctorRegister from "../../Doctor/DoctorRegister/DoctorRegister";
import AllDoctors from "../AllDoctors/AllDoctors";
import ManageCategory from "../ManageCategory/ManageCategory";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AllCustomer from "./../../Custumar/AllCustomer/AllCustomer";
import MakeBloodDonar from "./../../../Doner/MakeBloodDonar";
import BloodDoner from "../../../Doner/BloodDoner";
import AmbulanceRegister from "./../../../AmbulanceService/AmbulanceRegister";
import AmbulanceService from "./../../../AmbulanceService/AmbulanceService";

const AdminDashboard = () => {
  const [control, setControl] = useState("pending");

  return (
    <div className="dashboard d-flex text-center">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Admin Dashboard</MenuItem>

          <SubMenu title="All Appointments" icon={"s"}>
            <MenuItem onClick={() => setControl("pending")}>
              Pending Appointments
            </MenuItem>
            <MenuItem onClick={() => setControl("done")}>
              Done Appointments
            </MenuItem>
            <MenuItem onClick={() => setControl("approved")}>
              Approved Appointments
            </MenuItem>
          </SubMenu>

          <SubMenu title="Manage Doctors" icon={"g"}>
            <MenuItem onClick={() => setControl("doctors")}>
              All Doctors
            </MenuItem>
            <MenuItem onClick={() => setControl("makeDoctor")}>
              Make a Doctor
            </MenuItem>
            <MenuItem>Monitoring Doctors</MenuItem>
            <MenuItem>Manage Doctors Info</MenuItem>
          </SubMenu>
          <SubMenu title="Manage Customer" icon={"g"}>
            <MenuItem onClick={() => setControl("allCustomers")}>
              All Customer
            </MenuItem>
            <MenuItem>Customer Carts</MenuItem>
            <MenuItem>Monitoring Customer</MenuItem>
            <MenuItem>Customer Payment History</MenuItem>
          </SubMenu>
          <SubMenu title="Ambulance  Service" icon={"g"}>
            <MenuItem onClick={() => setControl("AmbulanceRegister")}>
              Ambulance Register
            </MenuItem>

            <MenuItem onClick={() => setControl("AmbulanceList")}>
              Ambulance List
            </MenuItem>
            <MenuItem>Customer Payment History</MenuItem>
          </SubMenu>

          <MenuItem onClick={() => setControl("makeAdmin")} icon={"g"}>
            Create Admin
          </MenuItem>
          <MenuItem onClick={() => setControl("setCategory")} icon={"g"}>
            Manage Category
          </MenuItem>
          <MenuItem onClick={() => setControl("makeBloodDonar")} icon={"g"}>
            Make Blood Donar
          </MenuItem>

          <MenuItem onClick={() => setControl("bloodDonarList")} icon={"g"}>
            Blood Donar list
          </MenuItem>
        </Menu>
      </ProSidebar>
      <div className="container text-center mt-2">
        {control === "pending" && <AppointmentsList></AppointmentsList>}
        {control === "approved" && (
          <ApporvedAppointments></ApporvedAppointments>
        )}
        {control === "done" && <DoneAppointments></DoneAppointments>}
        {control === "makeDoctor" && <DoctorRegister></DoctorRegister>}
        {control === "doctors" && <AllDoctors></AllDoctors>}
        {control === "setCategory" && <ManageCategory></ManageCategory>}
        {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
        {control === "allCustomers" && <AllCustomer></AllCustomer>}
        {control === "makeBloodDonar" && <MakeBloodDonar></MakeBloodDonar>}
        {control === "bloodDonarList" && <BloodDoner></BloodDoner>}
        {control === "AmbulanceRegister" && (
          <AmbulanceRegister></AmbulanceRegister>
        )}
        {control === "AmbulanceList" && <AmbulanceService></AmbulanceService>}
      </div>
    </div>
  );
};

export default AdminDashboard;
