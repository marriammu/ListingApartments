import apiClient from "./api-client";

const apartmentCreate = (apartInfo) => {
  return apiClient.post("/apartment", apartInfo);
};

export default apartmentCreate;
