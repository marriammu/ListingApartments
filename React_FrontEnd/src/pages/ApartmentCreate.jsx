import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import apartmentCreate from "../services/apartment-create";

const ApartmentCreate = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apartmentInfo, setApartmentInfo] = useState({
    space: "",
    area: "",
    priceRange: "",
    paymentPlan: "",
    isFurnished: "",
    roomCount: "",
    bedCount: "",
    compound: "",
    deliveryDate: "",
  });
  const handleChange = (event, key) => {
    setApartmentInfo({ ...apartmentInfo, [key]: event.target.value });
  };
  const handleRadio = (event, key) => {
    setApartmentInfo({ ...apartmentInfo, [key]: event });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    const isValid = Object.values(apartmentInfo).every((value) => value !== "");

    if (isValid) {
      apartmentCreate(apartmentInfo);
      setApartmentInfo({
        space: "",
        area: "",
        priceRange: "",
        paymentPlan: "",
        isFurnished: "",
        roomCount: "",
        bedCount: "",
        compound: "",
        deliveryDate: "",
      });
      setIsSubmitting(false);
      navigate("/");
    }
  };

  return (
    <FormControl
      backgroundColor="rgb(228, 235, 242)"
      padding={10}
      borderRadius={6}
    >
      <Stack spacing={5}>
        <Input
          value={apartmentInfo.compound}
          onChange={(event) => handleChange(event, "compound")}
          borderRadius={15}
          placeholder="Compound name"
          backgroundColor="white"
          isInvalid={isSubmitting && !apartmentInfo.compound}
        />
        <Input
          value={apartmentInfo.area}
          onChange={(event) => handleChange(event, "area")}
          borderRadius={15}
          placeholder="Area"
          backgroundColor="white"
          isInvalid={isSubmitting && !apartmentInfo.area}
        />
        <Input
          value={apartmentInfo.space}
          onChange={(event) => handleChange(event, "space")}
          borderRadius={15}
          placeholder="Space"
          backgroundColor="white"
          type="number"
          isInvalid={isSubmitting && !apartmentInfo.space}
        />
        <Input
          value={apartmentInfo.priceRange}
          onChange={(event) => handleChange(event, "priceRange")}
          borderRadius={15}
          placeholder="Price range [1M - 4M]"
          backgroundColor="white"
          isInvalid={isSubmitting && !apartmentInfo.priceRange}
        />
        <Input
          value={apartmentInfo.paymentPlan}
          onChange={(event) => handleChange(event, "paymentPlan")}
          borderRadius={15}
          placeholder="Payment plan [20K per month - 6Years]"
          backgroundColor="white"
          isInvalid={isSubmitting && !apartmentInfo.paymentPlan}
        />
        <Input
          value={apartmentInfo.roomCount}
          onChange={(event) => handleChange(event, "roomCount")}
          borderRadius={15}
          placeholder="Room count"
          backgroundColor="white"
          type="number"
          isInvalid={isSubmitting && !apartmentInfo.roomCount}
        />
        <Input
          value={apartmentInfo.bedCount}
          onChange={(event) => handleChange(event, "bedCount")}
          borderRadius={15}
          placeholder="Bed count"
          backgroundColor="white"
          type="number"
          isInvalid={isSubmitting && !apartmentInfo.bedCount}
        />
        <Input
          value={apartmentInfo.deliveryDate}
          placeholder="Delivery date [YYYY]"
          keyboardType="numeric"
          onChange={(event) => handleChange(event, "deliveryDate")}
          borderRadius={15}
          backgroundColor="white"
          type="number"
          isInvalid={isSubmitting && !apartmentInfo.deliveryDate}
        />
        <RadioGroup
          value={apartmentInfo.isFurnished}
          onChange={(event) => handleRadio(event, "isFurnished")}
        >
          <HStack spacing="24px">
            <Radio value="Yes">Furnished</Radio>
            <Radio value="No">Not Furnished</Radio>
          </HStack>
        </RadioGroup>
      </Stack>
      <center>
        <Button type="submit" mt="4" colorScheme="blue" onClick={handleSubmit}>
          Create
        </Button>
      </center>
    </FormControl>
  );
};

export default ApartmentCreate;
