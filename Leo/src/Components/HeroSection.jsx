import { Box, Heading } from "@chakra-ui/react";
import { useMemo } from "react";
import ImageSlide from "./ImageSlide";

const HeroSection = () => {
  const images = useMemo(() => [
    "./SliderImages/img1.png",
    "./SliderImages/Four.png",
    "./SliderImages/Two.png",
  ]);

  return (
    <Box pos="relative">
      <ImageSlide images={images} auto={2000} />
      <Box
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Heading
          fontFamily="Oswald"
          fontWeight="800"
          pb="10px"
          textAlign="center"
          fontSize="50px"
          color="primary.2"
        >
          "Making Difference Together"
        </Heading>
        {/* <Button>Join Us</Button> */}
      </Box>
    </Box>
  );
};

export default HeroSection;
