import { useEffect, useState } from "react";

const useUser = () => {
  const [donar, setDoner] = useState([]);

  const allDoner = (doner) => {
    console.log(doner);

    fetch(`http://localhost:5000/allDonar`)
      .then((res) => res.json())
      .then((result) => setDoner(result));
  };

  return { donar, allDoner };
};
export default useUser;
