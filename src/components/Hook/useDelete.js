import { useState } from "react";
const useDelete = () => {
  const [AppointmentDelete, setAppointmentDelete] = useState(false);
  const handleDeleteAppointment = (url, id) => {
    fetch(`http://localhost:5000/${url}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAppointmentDelete("hello deleted hoise", !AppointmentDelete);
        } else {
          setAppointmentDelete(AppointmentDelete);
        }
      });
  };

  return { handleDeleteAppointment, AppointmentDelete };
};
export default useDelete;
