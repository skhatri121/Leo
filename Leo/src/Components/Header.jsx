import { EmailIcon } from "@chakra-ui/icons";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { AiFillEnvironment } from "react-icons/ai";

const description = {
  email: "ldc325m@gmail.com",
  location: "Basundhara - Kathmandu, Nepal",
};

const Header = () => {
  const [isSmallerThan474] = useMediaQuery("(max-width: 474px)");

  return (
    <Box bg="primary.1">
      <Box
        display="flex"
        flexDirection={isSmallerThan474 ? "column" : "row"}
        justifyContent="space-between"
        maxW="1200px"
        margin="0 auto"
        alignItems={isSmallerThan474 ? "center" : "justify"}
        color="primary.2"
        p="10px 20px 10px 20px"
      >
        <Box display="flex" alignItems="center" gap="8px">
          <EmailIcon /> {description.email}
        </Box>
        <Box display="flex" gap="8px" alignItems="center">
          <AiFillEnvironment />
          {description.location}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
