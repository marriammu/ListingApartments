import {Card,CardBody,HStack,Heading,Icon,Image,Text,Box} from "@chakra-ui/react";
import { MdOutlineBedroomChild } from "react-icons/md";
import { BiArea } from "react-icons/bi";

const ApartmentCard = ({ apartment }) => {
  return (
    <Box
    borderRadius={10}
    overflow="hidden"
    _hover={{
      transform: "scale(1.03)",
      transition: "transform .15s ease-in",
    }}
  >
    <Card>
      <Image src="https://www.nawy.com/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fprod.images.cooingestate.com%2Fadmin%2Fproperty_image%2Fimage%2F6946%2Fmedium_tkmHhFGKDlZQlMeXpg0AibPNClNJwf1.jpg&w=1080&q=75" />
      <CardBody>
        <Heading color="#245282" fontSize="xl">{apartment.Compound}</Heading>
        <Text color="#245282" fontSize="sm">{apartment.Area}</Text>
        <HStack>
          <Icon  color="#245282" as={MdOutlineBedroomChild} />
          <Text color="#245282">{apartment.RoomCount}</Text>
          <Icon  color="#245282" as={BiArea} />
          <Text  color="#245282" fontSize="medium">{apartment.Space} m2</Text>
        </HStack>

      </CardBody>
    </Card>
    </Box>
  );
};

export default ApartmentCard;
