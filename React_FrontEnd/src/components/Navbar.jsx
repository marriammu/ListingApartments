import { Flex, Image, Link, Text, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";

const NavBar = () => {
  return (
    <Flex
      p="4"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="md"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Image
        src="https://www.nawy.com/assets/icons/common/nawy.svg"
        boxSize="60px"
        alt="Nawy Logo"
        ml="4"
      />
      <Flex alignItems="center">
        <NavLink to="/" as={Link} color="#245282" fontWeight="bold" textDecoration="none" mr="4" display="flex" alignItems="center">
          <Icon as={AiOutlineHome} color="#245282" boxSize="6" ml="3" />
          <Text mr="1"fontWeight="bold" color="#245282" >Home</Text>
        </NavLink>
        <NavLink  to="/apartments/create" as={Link} color="#245282" fontWeight="bold" textDecoration="none" display="flex" alignItems="center">
          <Icon   as={AiOutlinePlus} color="#245282" boxSize="6" ml="3" />
          <Text ml="3" fontWeight="bold"  color="#245282">Add</Text>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default NavBar;
