import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useApartment = (id) => {
  const [apartment, setApartment] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("/apartment/" + id)
      .then((res) => {
        const apartment = res.data.data;
        apartment.Image = require("../assets/images/apartment1.jpg");
        setApartment(apartment);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [id]);

  return { apartment, error, isLoading };
};

export default useApartment;
