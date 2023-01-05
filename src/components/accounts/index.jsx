import axios from "axios";
import React, { useEffect, useState } from "react";

const Accounts = () => {
  const [users, setUsers] = useState(null);
  const URL = "https://panorbit.in/api/users.json";

  useEffect(() => {
    getUsers(URL);
  }, []);

  const getUsers = (url) => {
    return axios(url).then((data) => setUsers());
  };

  return (
    <>
      <h1>Accounts</h1>
    </>
  );
};

export default Accounts;
