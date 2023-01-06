import { useState, useEffect } from "react";
import axios from "axios";

const UseFetch = (url) => {
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
          console.log(res.data.users);
          return setDatas(res.data.users);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setDatas(null);
          setLoading(false);
        });
    }, 100);
  }, []);
  return { datas, loading, error };
};

export default UseFetch;
