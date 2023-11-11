import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5} marginTop={-5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
