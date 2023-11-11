import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
const useApartment = (id) => {
  const [apartment, setApartment] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/apartment/" + id, { signal: controller.signal })
      .then((res) => setApartment(res.data.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err);
      });
    return () => controller.abort();
  }, [id]);

  return { apartment, error };
};

export default useApartment;
