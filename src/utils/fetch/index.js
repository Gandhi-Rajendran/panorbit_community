import { useState, useEffect } from "react";
import axios from "axios";

export const UseFetchAll = (url) => {
  const [users, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setError(null);
          setLoading(false);
          return setDatas(res.data.users);
        })
        .catch((err) => {
          setError(err.message);
          setDatas(null);
          setLoading(false);
        });
    }, 500);
  }, [url]);
  return { users, loading, error };
};

// To get the individual user with the help of id. type of url "string" and id "number"
export const UseFetchById = (url, id) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          const getUserById = res.data.users?.filter(
            (user) => user.id === Number(id)
          )[0];
          setError(null);
          setLoading(false);
          return setUser(getUserById);
        })
        .catch((err) => {
          setError(err.message);
          setUser(null);
          setLoading(false);
        });
    }, 500);
  }, [url, id]);
  return { user, loading, error };
};
