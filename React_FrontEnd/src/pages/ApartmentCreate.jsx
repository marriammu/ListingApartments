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
      
    });
  };

  return (
    <FormControl isRequired
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
        />
        <Input
          value={apartmentInfo.area}
          onChange={(event) => handleChange(event, "area")}
          borderRadius={15}
          placeholder="Area"
          backgroundColor="white"
        />
        <Input
          value={apartmentInfo.space}
          onChange={(event) => handleChange(event, "space")}
          borderRadius={15}
          placeholder="Space"
          backgroundColor="white"
          type="number"
        />
        <Input
          value={apartmentInfo.priceRange}
          onChange={(event) => handleChange(event, "priceRange")}
          borderRadius={15}
          placeholder="Price range [1M - 4M]"
          backgroundColor="white"
        />
        <Input
          value={apartmentInfo.paymentPlan}
          onChange={(event) => handleChange(event, "paymentPlan")}
          borderRadius={15}
          placeholder="Payment plan [20K per month - 6Years]"
          backgroundColor="white"
        />
        <Input
          value={apartmentInfo.roomCount}
          onChange={(event) => handleChange(event, "roomCount")}
          borderRadius={15}
          placeholder="Room count"
          backgroundColor="white"
          type="number"
        />
        <Input
          value={apartmentInfo.bedCount}
          onChange={(event) => handleChange(event, "bedCount")}
          borderRadius={15}
          placeholder="Bed count"
          backgroundColor="white"
          type="number"
        />
        <Input
          value={apartmentInfo.deliveryDate}
          placeholder="Delivery date [YYYY-MM-DD]"
          keyboardType="numeric"
          onChange={(event) => handleChange(event, "deliveryDate")}
          borderRadius={15}
          backgroundColor="white"
          type="number"
          
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

