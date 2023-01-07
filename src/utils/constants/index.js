import { useState, useEffect } from "react";
import axios from "axios";

export const UseFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setLoading(false);
          setError(null);
          console.log("useFetch");
          return setDatas(res.data.users);
        })
        .catch((err) => {
          console.log("Error", err);
          setError(err.message);
          setDatas(null);
          setLoading(false);
        });
    }, 100);
  }, [url]);
  return { datas, loading, error };
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
          setLoading(false);
          setError(null);
          const getUserById = res.data.users?.filter(
            (user) => user.id === Number(id)
          )[0];
          console.log("useFetchById");
          return setUser(getUserById);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setUser(null);
          setLoading(false);
        });
    }, 100);
  }, [url, id]);
  return { user, loading, error };
};
