import React from "react";
import { Image, Box, useMediaQuery, Heading } from "@chakra-ui/react";

const LeoSection = () => {
  const [isSmallerThan730] = useMediaQuery("(max-width: 730px)");
  const [isSmallerThan474] = useMediaQuery("(max-width: 474px)");

  const sections = [
    { imageSrc: "./Leo/One.png", heading: "Leadership", bg: "primary.3" },
    { imageSrc: "./Leo/Two.png", heading: "Experience", bg: "primary.4" },
    { imageSrc: "./Leo/Three.png", heading: "Opportunity", bg: "primary.5" },
  ];

  return (
    <Box p="20px 20px">
      <Box
        display={isSmallerThan730 ? "grid" : "flex"}
        maxW="1200px"
        margin="0 auto"
        gap="15px"
        px="15px"
        gridTemplateColumns={isSmallerThan474 ? "auto" : "auto auto"}
      >
        {sections.map((section, index) => (
          <Box key={index} pos="relative" pb="5px">
            <Image src={section.imageSrc} w="100%" />
            <Box
              pos="absolute"
              bottom="20px"
              left="50%"
              transform="translateX(-50%)"
              borderRadius="9px"
              color="primary.2"
              bg={section.bg}
            >
              <Heading p="10px 10px">{section.heading}</Heading>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LeoSection;
