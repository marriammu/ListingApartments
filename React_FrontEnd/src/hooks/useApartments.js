import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
const useApartments = () => {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/apartment", { signal: controller.signal })
      .then((res) => {
        setApartments(res.data.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
      });
    return () => controller.abort();
  }, []);

  return { apartments, error };
};

export default useApartments;
