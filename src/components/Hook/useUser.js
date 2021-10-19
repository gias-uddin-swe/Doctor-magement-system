import { useEffect, useState } from "react";

const useUser = () => {
  const [donar, setDoner] = useState([]);

  const allDoner = (doner) => {
    console.log(doner);

    fetch(`https://radiant-falls-78336.herokuapp.com/allDonar`)
      .then((res) => res.json())
      .then((result) => setDoner(result));
  };

  return { donar, allDoner };
};
export default useUser;
