import {Button,FormControl,HStack,Input,Radio,RadioGroup,Stack,} from "@chakra-ui/react";
import { useState } from "react";
import apartmentCreate from "../services/apartment-create";

const ApartmentCreate = () => {
  const [apartmentInfo, setApartmentInfo] = useState({
    id: "",
    space: "",
    area: "",
    priceRange: "",
    paymentPlan: "",
    isFurnished: "",
    roomCount: "",
    bedCount: "",
    compound: "",
    deliveryDate: "",
    image:
      "https://www.nawy.com/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fprod.images.cooingestate.com%2Fadmin%2Fproperty_image%2Fimage%2F6946%2Fmedium_tkmHhFGKDlZQlMeXpg0AibPNClNJwf1.jpg&w=1080&q=75",
  });
  const handleChange = (event, key) => {
    console.log(event);
    console.log(key);
    setApartmentInfo({ ...apartmentInfo, [key]: event.target.value });
  };
  const handleRadio = (event, key) => {
    console.log(event);
    console.log(key);
    setApartmentInfo({ ...apartmentInfo, [key]: event });
  };

  const handleSubmit = () => {
    apartmentCreate(apartmentInfo);
    setApartmentInfo({
      id: "",
      space: "",
      area: "",
      priceRange: "",
      paymentPlan: "",
      isFurnished: "",
      roomCount: "",
      bedCount: "",
      compound: "",
      deliveryDate: "",
      image:
        "https://www.nawy.com/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fprod.images.cooingestate.com%2Fadmin%2Fproperty_image%2Fimage%2F6946%2Fmedium_tkmHhFGKDlZQlMeXpg0AibPNClNJwf1.jpg&w=1080&q=75",
    });
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
          placeholder="compound name"
          backgroundColor="white"
        />
        <Input
          value={apartmentInfo.area}
          onChange={(event) => handleChange(event, "area")}
          borderRadius={15}
          placeholder="area"
          backgroundColor="white"
        />
        <Input
          value={apartmentInfo.space}
          onChange={(event) => handleChange(event, "space")}
          borderRadius={15}
          placeholder="space"
          backgroundColor="white"
        />
        <Input
          value={apartmentInfo.priceRange}
          onChange={(event) => handleChange(event, "priceRange")}
          borderRadius={15}
          placeholder="priceRange"
          backgroundColor="white"
        />
        <Input
          value={apartmentInfo.paymentPlan}
          onChange={(event) => handleChange(event, "paymentPlan")}
          borderRadius={15}
          placeholder="paymentPlan"
          backgroundColor="white"
        />
        <Input
          value={apartmentInfo.roomCount}
          onChange={(event) => handleChange(event, "roomCount")}
          borderRadius={15}
          placeholder="roomCount"
          backgroundColor="white"
        />
        <Input
          value={apartmentInfo.bedCount}
          onChange={(event) => handleChange(event, "bedCount")}
          borderRadius={15}
          placeholder="bedCount"
          backgroundColor="white"
          type="number"
        />
        <Input
          value={apartmentInfo.deliveryDate}
          onChange={(event) => handleChange(event, "deliveryDate")}
          borderRadius={15}
          backgroundColor="white"
          type="date"
        />
        <RadioGroup  value={apartmentInfo.isFurnished}  onChange={(event) => handleRadio(event, "isFurnished")} >
          
          <HStack spacing="24px">
            <Radio value="Yes">Furnished</Radio>
            <Radio value="No">Not Furnished</Radio>
          </HStack>
        </RadioGroup>
      </Stack>
      <center>
      <Button type="submit" mt = "4" colorScheme="blue" onClick={handleSubmit}>
        Create
      </Button>
      </center>
    </FormControl>
  );
};

export default ApartmentCreate;
