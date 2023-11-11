import apiClient from "./api-client";

const apartmentCreate = (apartInfo) => {
  apiClient.post("/apartment", apartInfo);
};

export default apartmentCreate;
