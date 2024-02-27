import { Box, useMediaQuery } from "@chakra-ui/react";

const description = {
  email: "ldc325@gmail.com",
  location: "Basundhara, Kathmandu, Nepal",
};

const Header = () => {
  const [isSmallerThan425] = useMediaQuery("(max-width: 425px)");

  return (
    <Box bg="primary.1">
      <Box
        display="flex"
        flexDirection={isSmallerThan425 ? "column" : "row"}
        justifyContent="space-between"
        maxW="1200px"
        margin="0 auto"
        textAlign={isSmallerThan425 ? "center" : "justify"}
        color="primary.2"
        p="10px 20px 10px 20px"
      >
        <Box>{description.email}</Box>
        <Box>{description.location}</Box>
      </Box>
    </Box>
  );
};

export default Header;
