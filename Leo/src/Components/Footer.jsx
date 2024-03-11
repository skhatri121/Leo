import { Box, Text, useMediaQuery } from "@chakra-ui/react";
const Footer = () => {
  const [isSmallerThan640] = useMediaQuery("(max-width: 640px)");

  return (
    <>
      <Box bg="primary.1">
        <Box maxW="1200px" m="0 auto" color="primary.2" p="20px 10px 30px 10px">
          <Box
            display="flex"
            flexDirection={isSmallerThan640 ? "column" : "row"}
            gap="20px"
            justifyContent="space-between"
            textAlign="center"
          >
            <Text>
              An official website of Leo District Council 325 M Nepal.
            </Text>
            <Text>
              <Text as="b">Developed By:</Text>
              <Text>Subash Khatri</Text>
              <Text>Ashwin Khatiwada</Text>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
