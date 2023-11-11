import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useApartments = (refresh) => {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/apartment")
      .then((res) => {
        let apartmentList = res.data.data;
        apartmentList = apartmentList.map((apartment) => {
          apartment.Image = require("../assets/images/apartment1.jpg");
          return apartment;
        });
        setApartments(apartmentList);
      })
      .catch((err) => {
        setError(err);
      });
  }, [refresh]);

  return { apartments, error };
};

export default useApartments;
