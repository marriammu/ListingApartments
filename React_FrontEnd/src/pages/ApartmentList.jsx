
import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import useApartments from "../hooks/useApartments";
import ApartmentCardContainer from "../components/ApartmentCardContainer";
import { Link } from "react-router-dom";

const ApartmentList = () => {
  const { apartments, error } = useApartments();

  return (
    <Box bg="gray.200" borderRadius="lg" boxShadow="md" p="6">
      <Heading as="h2" fontSize="xl" mb="4"  color="#245282">
      Apartments
      </Heading>
      {error && <Text color="red.500">{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {apartments.map((apartment) => (
          <Link key={apartment.ID} to={`/apartments/${apartment.ID}`} textDecoration="none">

              <ApartmentCardContainer apartment={apartment} />
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};


export default ApartmentList;
