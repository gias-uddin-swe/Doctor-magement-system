import { useState } from "react";
const useDelete = () => {
  const [AppointmentDelete, setAppointmentDelete] = useState(false);
  const handleDeleteAppointment = (url, id) => {
    fetch(`https://radiant-falls-78336.herokuapp.com/${url}/${id}`, {
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
