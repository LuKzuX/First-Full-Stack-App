import axios from "axios";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const useHandleSubmit = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(true);
  return {
    get: (route) => {
      axios
        .get(route)
        .then((res) => {
          setIsPending(false);
          setData(res.data);
        })
        .catch((err) => {
          setError(err);
          setIsPending(false);
        });
      return { data, error, isPending };
    },
    submit: (route, data, redirect) => {
      axios
        .post(route, data)
        .then((res) => {
          console.log(res);
          navigate(redirect);
        })
        .catch((err) => {
          setError(Object.values(err.response.data))
        });
    },
    updateItem: (route, data, redirect) => {
      axios
        .patch(route, data)
        .then((res) => {
          navigate(redirect);
        })
        .catch((err) => {
          setError(err);
        });
      return { error };
    },
    deleteItem: (route, redirect) => {
      axios
        .delete(route)
        .then((res) => {
          navigate(redirect);
        })
        .catch((err) => {
          setError(err);
        });
    },
    error,
    isPending,
  };
};

export default useHandleSubmit;
