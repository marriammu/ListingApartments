import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, Text, Flex, Icon } from '@chakra-ui/react';
import { FaRegMoneyBillAlt, FaChair } from 'react-icons/fa';
import { MdOutlineBedroomChild } from 'react-icons/md';
import { BiBed, BiArea, BiMoney } from 'react-icons/bi'; // Import icons from react-icons
import useApartment from '../hooks/useApartment';

const ApartmentDetailPage = () => {
  const { id } = useParams();
  const { apartment, error } = useApartment(id);
  const [hoveredImage, setHoveredImage] = useState(0);

  const staticImages = [
    'https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/201231/Screenshot_1.png',
    'https://www.nawy.com/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fprod.images.cooingestate.com%2Fadmin%2Fproperty_image%2Fimage%2F6946%2Fmedium_tkmHhFGKDlZQlMeXpg0AibPNClNJwf1.jpg&w=1080&q=75',
    'https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/201222/Screenshot_3.png',
  ];

  if (error) return null;

  return (
    <Box p={8} bg="gray.200" borderRadius="lg" boxShadow="md" position="relative">
      <Flex>
        {staticImages.length > 0 && (
          <Box position="relative">
            <Image
              src={staticImages[hoveredImage]}
              alt="Apartment Image"
              style={{ width: '500px', height: '300px', borderRadius: '5px', cursor: 'pointer' }}
              onClick={() => setHoveredImage((prev) => (prev + 1) % staticImages.length)}
            />
          </Box>
        )}
        {staticImages.length > 1 && (
          <Flex mt={4} ml={4}>
            {staticImages.map((image, index) => (
              <Box key={index} position="relative" mr="4px">
                <Image
                  src={image}
                  alt={`Apartment Image ${index}`}
                  style={{width: '250px',height: '250px',borderRadius: '3px',cursor: 'pointer',}}
                  _hover={{
                    transform: 'scale(1.03)',
                    transition: 'transform .15s ease-in',
                  }}
                  onClick={() => setHoveredImage(index)}
                />
              </Box>
            ))}
          </Flex>
        )}
      </Flex>
      <Box mt={4}>
        <Heading color="#245282" mb={4}>
          {apartment.Compound} - {apartment.Area}
        </Heading>
        <Flex align="center" fontSize="lg" mb={2}>
          <Icon as={MdOutlineBedroomChild} mr={2} />
          <Text fontWeight="bold" mr={1}>
            Room Count:
          </Text>{' '}
          {apartment.RoomCount}
        </Flex>
        <Flex align="center" fontSize="lg" mb={2}>
          <Icon as={BiBed} mr={2} />
          <Text fontWeight="bold" mr={1}>
            Bed Count:
          </Text>{' '}
          {apartment.BedCount}
        </Flex>
        <Flex align="center" fontSize="lg" mb={2}>
          <Icon as={BiArea} mr={2} />
          <Text fontWeight="bold" mr={1}>
            Area:
          </Text>{' '}
          {apartment.Space}
        </Flex>
        <Flex align="center" fontSize="lg" mb={2}>
          <Icon as={BiMoney} mr={2} />
          <Text fontWeight="bold" mr={1}>
            Price Range:
          </Text>{' '}
          {apartment.PriceRange}
        </Flex>
        <Flex align="center" fontSize="lg" mb={2}>
          <Icon as={FaChair} mr={2} />
          <Text fontWeight="bold" mr={1}>
            IsFurnished:
          </Text>{' '}
          {apartment.IsFurnished}
        </Flex>
        <Flex align="center" fontSize="lg">
          <Icon as={FaRegMoneyBillAlt} mr={2} />
          <Text fontWeight="bold" mr={1}>
            Payment Plan:
          </Text>{' '}
          {apartment.PaymentPlan}
        </Flex>
      </Box>
    </Box>
  );
};

export default ApartmentDetailPage;
